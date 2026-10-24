"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HexBackground from "./HexBackground";
import NetworkBackground from "./NetworkBackground";
import { slides } from "@/lib/data";

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative isolate overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Layer 0: slide images */}
      {slides.map((s, n) => (
        <div
          key={s.img}
          aria-hidden={n !== i}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${n === i ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={`/images/${s.img}.svg`}
            alt=""
            fill
            priority={n === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Layer 10: dark gradient for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/90 via-navy/55 to-transparent" />

      {/* <HexBackground
  className="pointer-events-none absolute inset-0 z-[15]"
  color="120, 200, 255"
  size={36}
/> */}
      {/* Layer 20: animated particles + network */}
      <NetworkBackground
        className="pointer-events-none absolute inset-0 z-20"
        color="120, 200, 255"
        density={7000}
        linkDistance={140}
        speed={0.6}
      />

      {/* Layer 30: content */}
      <div className="container-x relative z-30 flex min-h-[calc(100svh-5rem)] items-center py-20">
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

      {/* Layer 30: controls */}
      <div className="container-x absolute inset-x-0 bottom-6 z-30 flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((_, n) => (
            <button
              key={n}
              aria-label={`Go to slide ${n + 1}`}
              onClick={() => setI(n)}
              className={`h-2 rounded-full transition-all ${n === i ? "w-9 bg-brand-pink" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            aria-label="Previous slide"
            onClick={() => go(i - 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white hover:bg-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => go(i + 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white hover:bg-white/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}