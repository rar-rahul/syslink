"use client";

import { useEffect, type RefObject } from "react";

export type Pointer = { x: number; y: number };

export type Scene = {
  /** Called on mount and whenever the parent resizes. Rebuild your state here. */
  resize: (w: number, h: number) => void;
  /** Called every frame. The canvas is already cleared. */
  frame: (ctx: CanvasRenderingContext2D, t: number, pointer: Pointer) => void;
  /** Optional: called when the parent is clicked or tapped. */
  click?: (x: number, y: number) => void;
};

export function useCanvasBackground(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  create: () => Scene,
  deps: ReadonlyArray<unknown>,
  respectReducedMotion = false, // set true to show a still frame when the OS asks for less motion
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const scene = create();
    const pointer: Pointer = { x: -9999, y: -9999 };
    const still =
      respectReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const loop = (t: number) => {
      raf = 0;
      ctx.clearRect(0, 0, w, h);
      scene.frame(ctx, t, pointer);
      if (!still && visible && !document.hidden) raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene.resize(w, h);
    };

    const rel = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onMove = (e: PointerEvent) => {
      const p = rel(e);
      pointer.x = p.x;
      pointer.y = p.y;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
    };
    const onDown = (e: PointerEvent) => {
      const p = rel(e);
      scene.click?.(p.x, p.y);
    };
    const onVisibility = () => {
      if (!document.hidden) start();
    };

    const ro = new ResizeObserver(resize);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });

    resize();
    start();
    ro.observe(parent);
    io.observe(canvas);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    parent.addEventListener("pointerdown", onDown);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      parent.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasRef, respectReducedMotion, ...deps]);
}