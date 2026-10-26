"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/lib/data";

const links = [
  ["About Us", "/about"],
  ["Footprint", "/#footprint"],
  ["Partners", "/#partners"],
];

function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src="/images/syslink-logo.jpg"
      alt="SYSLINK Global Technology Pvt Ltd"
      width={2560}
      height={560}
      priority={priority}
      className="h-9 w-auto sm:h-10"
    />
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const [mobSvc, setMobSvc] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setDd(false); }
    };
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => { setOpen(false); setDd(false); setMobSvc(false); };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-brand-pink bg-white/95 shadow-sm backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link href="/" onClick={close} aria-label="SYSLINK home" className="shrink-0">
          <Logo priority />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-9 text-sm font-medium text-navy lg:flex">
          <div className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
            <button
              aria-expanded={dd}
              aria-haspopup="true"
              onClick={() => setDd((v) => !v)}
              className="flex items-center gap-1 py-7 hover:text-brand-orange-dark"
            >
              Services <ChevronDown size={14} className={`transition-transform ${dd ? "rotate-180" : ""}`} />
            </button>
            {dd && (
              <ul className="absolute left-0 top-full w-80 rounded-b-xl border-t-2 border-brand-green bg-white py-2 shadow-xl">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} onClick={close} className="block px-5 py-2.5 hover:bg-mist hover:text-brand-orange-dark">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {links.map(([l, h]) => (
            <Link key={l} href={h} className="hover:text-brand-orange-dark">{l}</Link>
          ))}
          <Link href="/contact" className="btn btn-pink !py-2.5">Contact Us</Link>
        </nav>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-lg text-navy hover:bg-mist lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        inert={!open}
        className={`fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy text-white transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b-2 border-brand-pink bg-white px-4 sm:px-6">
          <Link href="/" onClick={close}><Logo /></Link>
          <button aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-lg text-navy hover:bg-mist" onClick={close}>
            <X />
          </button>
        </div>

        <div className="container-x flex-1 space-y-2 pb-10 pt-4">
          {/* Services accordion */}
          <button
            aria-expanded={mobSvc}
            onClick={() => setMobSvc((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-lg font-medium"
          >
            Services <ChevronDown size={18} className={`transition-transform ${mobSvc ? "rotate-180" : ""}`} />
          </button>
          {mobSvc && (
            <ul className="ml-2 space-y-1 border-l-2 border-brand-green/60 pl-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} onClick={close} className="block py-2.5 text-base text-white/85 hover:text-brand-pink">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <ul className="space-y-1 border-t border-white/15 pt-3">
            {links.map(([l, h]) => (
              <li key={l}>
                <Link href={h} onClick={close} className="block rounded-lg px-2 py-3 text-lg hover:text-brand-pink">{l}</Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" onClick={close} className="btn btn-pink mt-4 w-full">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}