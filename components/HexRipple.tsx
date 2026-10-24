"use client";

import { useRef } from "react";
import { useCanvasBackground } from "../components/background/useCanvasBackground";

type Props = {
  className?: string;
  color?: string;    // "r, g, b"
  size?: number;     // hexagon radius in px
  interval?: number; // ms between automatic ripples
  speed?: number;    // ripple speed in px per second
};

type Ripple = { x: number; y: number; born: number };

const RAD = Math.PI / 180;

function hexPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  for (let k = 0; k < 6; k++) {
    const a = (60 * k - 30) * RAD;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    if (k === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
}

export default function HexRipple({
  className = "",
  color = "45, 212, 191",
  size = 34,
  interval = 2200,
  speed = 240,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useCanvasBackground(
    ref,
    () => {
      let cells: { x: number; y: number }[] = [];
      let ripples: Ripple[] = [];
      let w = 0;
      let h = 0;
      let lastAuto = -Infinity;
      const band = size * 2.2;  // thickness of the glowing ring
      const reach = size * 4;   // mouse glow radius

      return {
        resize(nw, nh) {
          w = nw;
          h = nh;
          const cw = Math.sqrt(3) * size;
          const rh = 1.5 * size;
          cells = [];
          for (let r = -1; r * rh < h + size; r++) {
            for (let c = -1; c * cw < w + cw; c++) {
              cells.push({ x: c * cw + (Math.abs(r) % 2 ? cw / 2 : 0), y: r * rh });
            }
          }
        },
        click(x, y) {
          ripples.push({ x, y, born: performance.now() });
          if (ripples.length > 6) ripples.shift();
        },
        frame(ctx, t, pointer) {
          const life = (Math.hypot(w, h) / speed) * 1000;
          if (t - lastAuto > interval) {
            ripples.push({ x: Math.random() * w, y: Math.random() * h, born: t });
            lastAuto = t;
          }
          ripples = ripples.filter((r) => t - r.born < life);

          // faint grid, drawn in one pass
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (const c of cells) hexPath(ctx, c.x, c.y, size - 1.5);
          ctx.strokeStyle = `rgba(${color}, 0.07)`;
          ctx.stroke();

          // lit cells
          for (const c of cells) {
            let b = 0;
            for (const r of ripples) {
              const age = t - r.born;
              const radius = (age / 1000) * speed;
              const delta = Math.abs(Math.hypot(c.x - r.x, c.y - r.y) - radius);
              if (delta < band) b = Math.max(b, (1 - delta / band) * (1 - age / life));
            }
            const pd = Math.hypot(c.x - pointer.x, c.y - pointer.y);
            if (pd < reach) b = Math.max(b, (1 - pd / reach) * 0.85);

            if (b > 0.02) {
              ctx.beginPath();
              hexPath(ctx, c.x, c.y, size - 1.5);
              ctx.fillStyle = `rgba(${color}, ${b * 0.28})`;
              ctx.fill();
              ctx.strokeStyle = `rgba(${color}, ${0.07 + b * 0.75})`;
              ctx.stroke();
            }
          }
        },
      };
    },
    [color, size, interval, speed],
  );

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}