"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/lib/data";

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <section aria-roledescription="carousel" aria-label="Highlights" className="relative isolate overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, n) => (
        <div key={s.img} aria-hidden={n !== i} className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${n === i ? "opacity-100" : "opacity-0"}`}>
          <Image src={`/images/${s.img}.svg`} alt="" fill priority={n === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/55 to-transparent" />

      <div className="container-x flex min-h-[calc(100svh-5rem)] items-center py-20">
        <div key={i} aria-live="polite" className="max-w-2xl animate-rise">
          <p className="text-lg font-light text-brand-green sm:text-2xl">{slides[i].a}</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight !text-white sm:text-6xl">{slides[i].b}</h1>
          <p className="mt-6 text-lg text-white/80">{slides[i].c}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-pink">Partner with us</Link>
            <Link href="#services" className="btn border border-white/40 text-white hover:bg-white/10">Our services</Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 container-x flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((_, n) => <button key={n} aria-label={`Go to slide ${n + 1}`} onClick={() => setI(n)} className={`h-2 rounded-full transition-all ${n === i ? "w-9 bg-brand-pink" : "w-2 bg-white/50"}`} />)}
        </div>
        <div className="hidden gap-2 sm:flex">
          <button aria-label="Previous slide" onClick={() => go(i - 1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white hover:bg-white/10"><ChevronLeft size={18} /></button>
          <button aria-label="Next slide" onClick={() => go(i + 1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white hover:bg-white/10"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
