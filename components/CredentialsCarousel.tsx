"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Credential } from "@/lib/credentials";

const GAP = 16; // matches gap-4

export default function CredentialsCarousel({ items }: { items: Credential[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);

  const stepOf = useCallback(() => {
    const first = ref.current?.firstElementChild as HTMLElement | null | undefined;
    return first ? first.offsetWidth + GAP : 0;
  }, []);

  const measure = useCallback(() => {
    const el = ref.current;
    const step = stepOf();
    if (!el || !step) return;
    const total = Math.max(1, Math.round((el.scrollWidth - el.clientWidth) / step) + 1);
    setPages(total);
    setActive(Math.min(total - 1, Math.round(el.scrollLeft / step)));
  }, [stepOf]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure, items.length]);

  const scrollToPage = (i: number) => ref.current?.scrollTo({ left: i * stepOf(), behavior: "smooth" });
  const prev = () => scrollToPage(Math.max(0, active - 1));
  const next = () => scrollToPage(Math.min(pages - 1, active + 1));

  return (
    <div>
      <ul
        ref={ref}
        onScroll={measure}
        aria-label="Certifications"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((c, n) => (
          <li
            key={`${c.name}-${n}`}
            className="shrink-0 basis-[78%] snap-start sm:basis-[calc((100%_-_1rem)/2)] lg:basis-[calc((100%_-_4rem)/5)]"
          >
            <div className="rounded-2xl bg-white p-3 shadow-lg">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-brand-green/10">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(min-width:1024px) 20vw, (min-width:640px) 45vw, 78vw"
                  className="object-contain p-3"
                />
              </div>
              <p className="px-1 pb-1 pt-3 text-center text-sm font-medium text-navy">{c.name}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to certifications ${i + 1}`}
              aria-current={i === active}
              onClick={() => scrollToPage(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-9 bg-brand-green" : "w-2 bg-white/40"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous certifications"
            onClick={prev}
            disabled={active === 0}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white transition hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next certifications"
            onClick={next}
            disabled={active >= pages - 1}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white transition hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
