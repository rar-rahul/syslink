"use client";

import { useRef } from "react";
import { useCanvasBackground } from "../components/background/useCanvasBackground";

type Props = {
  className?: string;
  color?: string;   // "r, g, b" for traces
  accent?: string;  // "r, g, b" for every other pulse
  grid?: number;    // snap size in px
  density?: number; // px² per trace (higher = fewer traces)
  speed?: number;   // pulse speed in px per second
};

type Pt = { x: number; y: number };
type Trace = { pts: Pt[]; cum: number[]; total: number; d: number; accent: boolean };

const TAU = Math.PI * 2;
const TAIL = 90;
const DIRS: [number, number][] = [
  [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1],
];

function at(tr: Trace, d: number): Pt {
  const dd = Math.max(0, Math.min(tr.total, d));
  let i = 0;
  while (i < tr.pts.length - 2 && dd > tr.cum[i + 1]) i++;
  const span = tr.cum[i + 1] - tr.cum[i] || 1;
  const k = (dd - tr.cum[i]) / span;
  const a = tr.pts[i];
  const b = tr.pts[i + 1];
  return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
}

export default function CircuitBackground({
  className = "",
  color = "45, 212, 191",
  accent = "251, 146, 60",
  grid = 36,
  density = 26000,
  speed = 150,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useCanvasBackground(
    ref,
    () => {
      let traces: Trace[] = [];
      let last = 0;

      const makeTrace = (w: number, h: number, n: number): Trace | null => {
        let gx = Math.floor(Math.random() * (w / grid));
        let gy = Math.floor(Math.random() * (h / grid));
        let dir = Math.floor(Math.random() * 8);
        const pts: Pt[] = [{ x: gx * grid, y: gy * grid }];
        const segs = 4 + Math.floor(Math.random() * 5);
        for (let s = 0; s < segs; s++) {
          const k = 2 + Math.floor(Math.random() * 4);
          const nx = gx + DIRS[dir][0] * k;
          const ny = gy + DIRS[dir][1] * k;
          if (nx * grid < -grid || nx * grid > w + grid || ny * grid < -grid || ny * grid > h + grid) break;
          gx = nx;
          gy = ny;
          pts.push({ x: gx * grid, y: gy * grid });
          dir = (dir + (Math.random() < 0.5 ? 1 : 7)) % 8; // turn 45° left or right
        }
        if (pts.length < 2) return null;
        const cum = [0];
        for (let i = 1; i < pts.length; i++) {
          cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
        }
        return { pts, cum, total: cum[cum.length - 1], d: -Math.random() * 600, accent: n % 2 === 1 };
      };

      return {
        resize(w, h) {
          const count = Math.max(6, Math.min(Math.floor((w * h) / density), 45));
          traces = [];
          for (let n = 0; n < count; n++) {
            const tr = makeTrace(w, h, n);
            if (tr) traces.push(tr);
          }
        },

        click(x, y) {
          for (const tr of traces) {
            if (tr.pts.some((p) => Math.hypot(p.x - x, p.y - y) < 240)) tr.d = 0;
          }
        },

        frame(ctx, t) {
          const dt = Math.min(0.05, (t - last) / 1000);
          last = t;

          // traces
          ctx.lineWidth = 1.5;
          ctx.lineJoin = "round";
          ctx.lineCap = "round";
          ctx.strokeStyle = `rgba(${color}, 0.16)`;
          ctx.beginPath();
          for (const tr of traces) {
            tr.pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
          }
          ctx.stroke();

          // end pads
          ctx.strokeStyle = `rgba(${color}, 0.4)`;
          ctx.beginPath();
          for (const tr of traces) {
            for (const idx of [0, tr.pts.length - 1]) {
              const p = tr.pts[idx];
              ctx.moveTo(p.x + 4, p.y);
              ctx.arc(p.x, p.y, 4, 0, TAU);
            }
          }
          ctx.stroke();

          // joints
          ctx.fillStyle = `rgba(${color}, 0.3)`;
          ctx.beginPath();
          for (const tr of traces) {
            for (let i = 1; i < tr.pts.length - 1; i++) {
              const p = tr.pts[i];
              ctx.moveTo(p.x + 2, p.y);
              ctx.arc(p.x, p.y, 2, 0, TAU);
            }
          }
          ctx.fill();

          // pulses
          for (const tr of traces) {
            tr.d += speed * dt;
            if (tr.d > tr.total + TAIL) tr.d = -(60 + Math.random() * 500);
            if (tr.d < 0) continue;

            const col = tr.accent ? accent : color;
            ctx.lineWidth = 2.5;
            let prev = at(tr, tr.d);
            for (let s = 1; s <= 10; s++) {
              const dd = tr.d - (TAIL * s) / 10;
              if (dd < 0) break;
              const p = at(tr, dd);
              ctx.strokeStyle = `rgba(${col}, ${(1 - s / 10) * 0.85})`;
              ctx.beginPath();
              ctx.moveTo(prev.x, prev.y);
              ctx.lineTo(p.x, p.y);
              ctx.stroke();
              prev = p;
            }
            if (tr.d <= tr.total) {
              const hp = at(tr, tr.d);
              ctx.fillStyle = `rgba(${col}, 0.2)`;
              ctx.beginPath();
              ctx.arc(hp.x, hp.y, 8, 0, TAU);
              ctx.fill();
              ctx.fillStyle = `rgba(${col}, 1)`;
              ctx.beginPath();
              ctx.arc(hp.x, hp.y, 2.8, 0, TAU);
              ctx.fill();
            }
          }
        },
      };
    },
    [color, accent, grid, density, speed],
  );

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}