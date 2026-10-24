"use client";

import { useRef } from "react";
import { useCanvasBackground } from "../components/background/useCanvasBackground";

type Props = {
  className?: string;
  color?: string;        // "r, g, b"
  density?: number;      // higher = fewer particles
  linkDistance?: number; // max distance for a connecting line
  speed?: number;        // movement speed
};

type Particle = { x: number; y: number; vx: number; vy: number; r: number; phase: number };

export default function NetworkBackground({
  className = "",
  color = "120, 180, 255",
  density = 7000,
  linkDistance = 140,
  speed = 0.6,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useCanvasBackground(
    ref,
    () => {
      let particles: Particle[] = [];
      let w = 0;
      let h = 0;

      return {
        resize(nw, nh) {
          w = nw;
          h = nh;
          const count = Math.min(Math.floor((w * h) / density), 180);
          particles = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            r: Math.random() * 1.8 + 0.5,
            phase: Math.random() * Math.PI * 2,
          }));
        },
        frame(ctx, t, pointer) {
          for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${0.5 + 0.4 * Math.sin(t / 600 + p.phase)})`;
            ctx.fill();
          }
          ctx.lineWidth = 1;
          for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
              const b = particles[j];
              const d = Math.hypot(a.x - b.x, a.y - b.y);
              if (d < linkDistance) {
                ctx.strokeStyle = `rgba(${color}, ${0.35 * (1 - d / linkDistance)})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
              }
            }
            const m = Math.hypot(a.x - pointer.x, a.y - pointer.y);
            if (m < linkDistance * 1.5) {
              ctx.strokeStyle = `rgba(${color}, ${0.5 * (1 - m / (linkDistance * 1.5))})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(pointer.x, pointer.y);
              ctx.stroke();
            }
          }
        },
      };
    },
    [color, density, linkDistance, speed],
  );

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}