import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import SubscribeForm from "./SubscribeForm";

import { brand, services } from "@/lib/data";
import CircuitBackground from "./CircuitBackground";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white/75">
      {/* Circuit traces behind everything, fading out toward the top */}
      <CircuitBackground
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_top,black_30%,transparent)]"
        color="45, 212, 191"
        accent="251, 146, 60"
        density={30000}
        speed={130}
      />

      {/* contact strip (Techigent-style: Find us / Call us / Mail us) */}
      <div className="border-b border-white/10">
        <div className="container-x grid gap-8 py-12 md:grid-cols-3">
          {[
            { I: MapPin, t: "Find us", v: [brand.address] },
            { I: Phone, t: "Call us", v: brand.phones },
            { I: Mail, t: "Mail us", v: brand.email },
          ].map(({ I, t, v }) => (
            <div key={t} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-brand-pink"><I size={20} /></span>
              <div><h4 className="font-semibold text-white">{t}</h4>{v.map((x) => <p key={x} className="text-sm">{x}</p>)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main grid: services get a wider column and flow into 2 columns (6 rows each)
          so the footer stays short and every column starts at the same top line. */}
      <div className="container-x grid items-start gap-x-10 gap-y-12 py-14 md:grid-cols-2 lg:grid-cols-[1.1fr_2.2fr_0.8fr_1.2fr]">
        <div>
          <p className="text-2xl font-bold text-white">{brand.name}<span className="text-brand-pink">.</span></p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{brand.tagline}</p>
        </div>

        <nav aria-label="Services" className="md:col-span-2 lg:col-span-1">
          <h4 className="mb-4 font-semibold text-white">Services</h4>
          <ul className="grid gap-x-8 gap-y-2.5 text-sm leading-snug sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-6">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="inline-block transition-colors hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/#footprint" className="hover:text-white">Footprint</Link></li>
            <li><Link href="/#leadership" className="hover:text-white">Leadership</Link></li>
            <li><Link href="/#partners" className="hover:text-white">Partners</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </nav>

        <div>
          <h4 className="mb-4 font-semibold text-white">Subscribe</h4>
          <p className="mb-4 text-sm">Get news and updates from our team.</p>
          <SubscribeForm />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
    </footer>
  );
}