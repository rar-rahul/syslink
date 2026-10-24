"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { brand, services } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setDd(false); } };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);
  const close = () => { setOpen(false); setDd(false); };

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" onClick={close} className="text-2xl font-bold text-navy">{brand.name}<span className="text-brand-pink">.</span></Link>

        <nav aria-label="Main" className="hidden items-center gap-9 text-sm font-medium text-navy lg:flex">
          <div className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button aria-expanded={dd} aria-haspopup="true" onClick={() => setDd((v) => !v)} className="flex items-center gap-1 py-7 hover:text-brand-pink">
              Services <ChevronDown size={14} className={`transition-transform ${dd ? "rotate-180" : ""}`} />
            </button>
            {dd && (
              <ul className="absolute left-0 top-full w-80 rounded-b-xl border-t-2 border-brand-pink bg-white py-2 shadow-xl">
                {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} onClick={close} className="block px-5 py-2.5 hover:bg-mist hover:text-brand-pink">{s.title}</Link></li>)}
              </ul>
            )}
          </div>
           <Link href="/about" className="hover:text-brand-pink">About Us</Link>
          <Link href="/#footprint" className="hover:text-brand-pink">Footprint</Link>
          {/* <Link href="/#leadership" className="hover:text-brand-pink">Leadership</Link> */}
          <Link href="/#partners" className="hover:text-brand-pink">Partners</Link>
          <Link href="/contact" className="btn btn-pink !py-2.5">Contact Us</Link>
        </nav>

        <button aria-label="Open menu" className="grid h-10 w-10 place-items-center text-navy lg:hidden" onClick={() => setOpen(true)}><Menu /></button>
      </div>

      <div aria-hidden={!open} className={`fixed inset-0 z-50 overflow-y-auto bg-navy text-white transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "pointer-events-none translate-x-full"}`}>
        <div className="container-x flex h-20 items-center justify-between">
          <span className="text-2xl font-bold">{brand.name}<span className="text-brand-pink">.</span></span>
          <button aria-label="Close menu" className="grid h-10 w-10 place-items-center" onClick={close}><X /></button>
        </div>
        <div className="container-x space-y-6 pb-12 pt-2">
          <ul className="space-y-1">
            {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} onClick={close} className="block rounded-lg px-2 py-3 text-lg">{s.title}</Link></li>)}
          </ul>
          <ul className="space-y-1 border-t border-white/15 pt-5 text-white/80">
            {[["Footprint", "/#footprint"], ["Leadership", "/#leadership"], ["Partners", "/#partners"]].map(([l, h]) => <li key={l}><Link href={h} onClick={close} className="block px-2 py-2.5">{l}</Link></li>)}
          </ul>
          <Link href="/contact" onClick={close} className="btn btn-pink w-full">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
