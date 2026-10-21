"use client";
import { useState } from "react";
import Counter from "./Counter";
import { footprint } from "@/lib/data";

const tabs = [["numbers", "Footprint"], ["management", "Service Management"], ["governance", "Service Governance"]] as const;

export default function FootprintTabs() {
  const [tab, setTab] = useState<(typeof tabs)[number][0]>("numbers");
  return (
    <div>
      <div role="tablist" className="mb-10 flex flex-wrap justify-center gap-3">
        {tabs.map(([id, label]) => (
          <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${tab === id ? "bg-brand-pink text-white" : "bg-white text-navy hover:bg-slate-100"}`}>{label}</button>
        ))}
      </div>
      {tab === "numbers" ? (
        <dl className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {footprint.numbers.map((n) => (
            <div key={n.l} className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <dd className="text-4xl font-bold text-brand-pink"><Counter value={n.v} suffix={n.s} /></dd>
              <dt className="mt-2 text-sm font-medium text-navy">{n.l}</dt>
            </div>
          ))}
        </dl>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {footprint[tab].map((x) => <li key={x} className="rounded-2xl border-l-4 border-brand-green bg-white p-6 font-medium text-navy shadow-sm">{x}</li>)}
        </ul>
      )}
    </div>
  );
}
