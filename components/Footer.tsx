import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import SubscribeForm from "./SubscribeForm";

import { brand, services,solutions } from "@/lib/data";
import CircuitBackground from "./CircuitBackground";

// Highlighted column heading (accent underline). Same box size on every heading keeps all columns aligned.
const headingCls =
  "mb-4 inline-block border-b-2 border-brand-pink pb-1.5 text-base font-semibold uppercase tracking-wide !text-white text-brand-pink";

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
     

      {/* Main grid: brand | Services | Solutions | Quick Links | Subscribe.
          All columns start on the same top line. */}
      <div className="container-x grid items-start gap-x-10 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.5fr_1.5fr_0.8fr_1.3fr]">
        <div>
          <p className="text-2xl font-bold text-white">{brand.name}<span className="text-brand-pink">.</span></p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{brand.tagline}</p>
        </div>

        <nav aria-label="Services">
          <h5 className={headingCls}>Services</h5>
          <ul className="space-y-2.5 text-sm leading-snug">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="inline-block transition-colors hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Solutions">
          <h5 className={headingCls}>Solutions</h5>
          <ul className="space-y-2.5 text-sm leading-snug">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="inline-block transition-colors hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <h5 className={headingCls}>Company</h5>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/#footprint" className="hover:text-white">Footprint</Link></li>
            <li><Link href="/#leadership" className="hover:text-white">Leadership</Link></li>
            <li><Link href="/#partners" className="hover:text-white">Partners</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </nav>

        <div>
          {/* same size as the other headings (transparent underline) so it stays aligned, but not highlighted */}
          <h5 className={headingCls}>Subscribe</h5>
          <p className="mb-4 text-sm">Get news and updates from our team.</p>
          <SubscribeForm />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
    </footer>
  );
}