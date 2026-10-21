"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { leaders } from "@/lib/data";

export default function Leadership() {
  const dlg = useRef<HTMLDialogElement>(null);
  const [sel, setSel] = useState(0);
  return (
    <>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-5">
        {leaders.map((l, n) => (
          <li key={l.name}>
            <button className="group w-full text-left" onClick={() => { setSel(n); dlg.current?.showModal(); }}>
              <span className="relative block aspect-[4/5] overflow-hidden rounded-2xl ring-2 ring-transparent transition group-hover:ring-brand-pink">
                <Image src={`/images/${l.img}.svg`} alt={l.name} fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </span>
              <span className="mt-4 block font-semibold text-navy">{l.name}</span>
              <span className="block text-sm text-slate-500">{l.role}</span>
            </button>
          </li>
        ))}
      </ul>
      <dialog ref={dlg} onClick={(e) => e.target === dlg.current && dlg.current?.close()} className="m-auto w-[min(34rem,calc(100%-2.5rem))] rounded-2xl p-0 backdrop:bg-navy/70 backdrop:backdrop-blur-sm">
        <div className="relative grid sm:grid-cols-[10rem_1fr]">
          <div className="relative hidden min-h-48 sm:block"><Image src={`/images/${leaders[sel].img}.svg`} alt="" fill sizes="160px" className="object-cover" /></div>
          <div className="p-8">
            <button aria-label="Close" onClick={() => dlg.current?.close()} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full hover:bg-mist"><X size={18} /></button>
            <h3 className="text-xl font-semibold">{leaders[sel].name}</h3>
            <p className="mb-3 text-brand-pink">{leaders[sel].role}</p>
            <p className="text-sm leading-relaxed">{leaders[sel].bio}</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
