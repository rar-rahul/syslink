"use client";

import { useRef } from "react";
import { useCanvasBackground } from "../components/background/useCanvasBackground";

type Props = {
  className?: string;
  color?: string;   // "r, g, b" for lines and most packets
  accent?: string;  // "r, g, b" for about a third of the packets
  size?: number;    // hexagon radius in px
  density?: number; // px² per packet (higher = fewer packets)
  speed?: number;   // packet speed in px per second
};

type Vertex = { x: number; y: number; nbrs: number[]; glow: number };
type Packet = {
  from: number;
  to: number;
  p: number;
  v: number;
  hist: { x: number; y: number }[];
  accent: boolean;
  ttl: number;
};

const RAD = Math.PI / 180;
const TAU = Math.PI * 2;

export default function HexPulseNetwork({
  className = "",
  color = "45, 212, 191",
  accent = "251, 146, 60",
  size = 40,
  density = 30000,
  speed = 130,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useCanvasBackground(
    ref,
    () => {
      let nodes: Vertex[] = [];
      let packets: Packet[] = [];
      let last = 0;

      const spawn = (from: number): Packet => {
        const nbrs = nodes[from].nbrs;
        return {
          from,
          to: nbrs[Math.floor(Math.random() * nbrs.length)],
          p: Math.random(),
          v: speed * (0.7 + Math.random() * 0.8),
          hist: [],
          accent: Math.random() < 0.33,
          ttl: Infinity,
        };
      };

      return {
        resize(w, h) {
          const cw = Math.sqrt(3) * size;
          const rh = 1.5 * size;
          const map = new Map<string, number>();
          nodes = [];

          const idOf = (x: number, y: number) => {
            const key = `${Math.round(x * 10)},${Math.round(y * 10)}`;
            let i = map.get(key);
            if (i === undefined) {
              i = nodes.length;
              nodes.push({ x, y, nbrs: [], glow: 0 });
              map.set(key, i);
            }
            return i;
          };
          const link = (a: number, b: number) => {
            if (!nodes[a].nbrs.includes(b)) nodes[a].nbrs.push(b);
            if (!nodes[b].nbrs.includes(a)) nodes[b].nbrs.push(a);
          };

          for (let r = -1; r * rh < h + size; r++) {
            for (let c = -1; c * cw < w + cw; c++) {
              const cx = c * cw + (Math.abs(r) % 2 ? cw / 2 : 0);
              const cy = r * rh;
              const ids: number[] = [];
              for (let k = 0; k < 6; k++) {
                const a = (60 * k - 30) * RAD;
                ids.push(idOf(cx + size * Math.cos(a), cy + size * Math.sin(a)));
              }
              for (let k = 0; k < 6; k++) link(ids[k], ids[(k + 1) % 6]);
            }
          }

          const count = Math.max(4, Math.min(Math.floor((w * h) / density), 60));
          packets = Array.from({ length: count }, () =>
            spawn(Math.floor(Math.random() * nodes.length)),
          );
        },

        click(x, y) {
          let best = 0;
          let bestD = Infinity;
          nodes.forEach((n, i) => {
            const d = Math.hypot(n.x - x, n.y - y);
            if (d < bestD) {
              bestD = d;
              best = i;
            }
          });
          for (const to of nodes[best].nbrs) {
            packets.push({ from: best, to, p: 0, v: speed * 1.6, hist: [], accent: true, ttl: 5 });
          }
        },

        frame(ctx, t, pointer) {
          const dt = Math.min(0.05, (t - last) / 1000);
          last = t;

          // links
          ctx.lineWidth = 1;
          ctx.strokeStyle = `rgba(${color}, 0.12)`;
          ctx.beginPath();
          for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            for (const j of a.nbrs) {
              if (j > i) {
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
              }
            }
          }
          ctx.stroke();

          // node dots
          ctx.fillStyle = `rgba(${color}, 0.35)`;
          ctx.beginPath();
          for (const n of nodes) {
            ctx.moveTo(n.x + 2, n.y);
            ctx.arc(n.x, n.y, 2, 0, TAU);
          }
          ctx.fill();

          // packets
          ctx.lineCap = "round";
          for (let k = packets.length - 1; k >= 0; k--) {
            const pk = packets[k];
            pk.ttl -= dt;
            if (pk.ttl <= 0) {
              packets.splice(k, 1);
              continue;
            }
            const a0 = nodes[pk.from];
            const b0 = nodes[pk.to];
            pk.p += (pk.v * dt) / (Math.hypot(b0.x - a0.x, b0.y - a0.y) || 1);
            while (pk.p >= 1) {
              pk.p -= 1;
              nodes[pk.to].glow = 1;
              const opts = nodes[pk.to].nbrs.filter((n) => n !== pk.from);
              const next = opts.length ? opts[Math.floor(Math.random() * opts.length)] : pk.from;
              pk.from = pk.to;
              pk.to = next;
            }
            const A = nodes[pk.from];
            const B = nodes[pk.to];
            const x = A.x + (B.x - A.x) * pk.p;
            const y = A.y + (B.y - A.y) * pk.p;
            pk.hist.push({ x, y });
            if (pk.hist.length > 16) pk.hist.shift();

            const col = pk.accent ? accent : color;
            ctx.lineWidth = 2;
            for (let i = 1; i < pk.hist.length; i++) {
              ctx.strokeStyle = `rgba(${col}, ${(i / pk.hist.length) * 0.7})`;
              ctx.beginPath();
              ctx.moveTo(pk.hist[i - 1].x, pk.hist[i - 1].y);
              ctx.lineTo(pk.hist[i].x, pk.hist[i].y);
              ctx.stroke();
            }
            ctx.fillStyle = `rgba(${col}, 0.18)`;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, TAU);
            ctx.fill();
            ctx.fillStyle = `rgba(${col}, 1)`;
            ctx.beginPath();
            ctx.arc(x, y, 2.6, 0, TAU);
            ctx.fill();
          }

          // glowing nodes (packets passing, mouse nearby)
          const decay = Math.pow(0.05, dt);
          ctx.lineWidth = 1.5;
          for (const n of nodes) {
            const pd = Math.hypot(n.x - pointer.x, n.y - pointer.y);
            if (pd < 110) n.glow = Math.max(n.glow, (1 - pd / 110) * 0.8);
            if (n.glow > 0.02) {
              ctx.strokeStyle = `rgba(${color}, ${n.glow * 0.6})`;
              ctx.beginPath();
              ctx.arc(n.x, n.y, 3 + n.glow * 6, 0, TAU);
              ctx.stroke();
              n.glow *= decay;
            }
          }
        },
      };
    },
    [color, accent, size, density, speed],
  );

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}