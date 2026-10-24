"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  color?: string;   // "r, g, b"
  size?: number;    // hexagon radius in px
  spark?: number;   // chance per frame that a cell lights up
};

type Hex = { x: number; y: number; glow: number };

export default function HexBackground({
  className = "",
  color = "120, 200, 255",
  size = 36,
  spark = 0.004,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const mouse = { x: -9999, y: -9999 };
    let hexes: Hex[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;

    const hexPath = (cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let k = 0; k < 6; k++) {
        const a = (Math.PI / 3) * k - Math.PI / 6;
        const px = cx + r * Math.cos(a);
        const py = cy + r * Math.sin(a);
        if (k === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const w = Math.sqrt(3) * size;
      const rowH = 1.5 * size;
      const cols = Math.ceil(width / w) + 2;
      const rows = Math.ceil(height / rowH) + 2;
      hexes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          hexes.push({
            x: c * w + (r % 2 ? w / 2 : 0),
            y: r * rowH,
            glow: 0,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      for (const h of hexes) {
        if (Math.random() < spark) h.glow = 1;

        const d = Math.hypot(h.x - mouse.x, h.y - mouse.y);
        if (d < 140) h.glow = Math.max(h.glow, 1 - d / 140);

        h.glow *= 0.96;

        hexPath(h.x, h.y, size - 1.5);
        ctx.strokeStyle = `rgba(${color}, ${0.07 + h.glow * 0.55})`;
        ctx.stroke();

        if (h.glow > 0.03) {
          ctx.fillStyle = `rgba(${color}, ${h.glow * 0.22})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    init();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(init);
    ro.observe(parent);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [color, size, spark]);

  return (
    <canvas
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{
        // fade the grid out toward the right side so text stays readable
        WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%)",
        maskImage: "linear-gradient(to left, black 40%, transparent 100%)",
      }}
    />
  );
}