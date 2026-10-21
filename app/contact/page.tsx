import Image from "next/image";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { brand } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Us", description: "Your technology infrastructure partner is just a click away." };

export default function ContactPage() {
  const cards = [
    { I: MapPin, t: "Find us", v: [brand.address] },
    { I: Phone, t: "Call us", v: brand.phones },
    { I: Mail, t: "Mail us", v: [brand.email] },
  ];
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
        <Image src="/images/hero-1.svg" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 to-navy/30" />
        <div className="container-x">
          <h1 className="text-4xl font-semibold !text-white sm:text-6xl">Contact us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">Your technology infrastructure partner is just a click away.</p>
        </div>
      </section>

      <section className="container-x -mt-10 grid gap-4 md:grid-cols-3">
        {cards.map(({ I, t, v }) => (
          <div key={t} className="flex gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-line">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-pink/10 text-brand-pink"><I size={20} /></span>
            <div><h2 className="text-base font-semibold">{t}</h2>{v.map((x) => <p key={x} className="text-sm">{x}</p>)}</div>
          </div>
        ))}
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-2 text-3xl font-semibold">Send us a message</h2>
          <p className="mb-8">Tell us about your environment and what you need. We reply within one business day.</p>
          <ContactForm />
        </div>
        <div className="min-h-[360px] overflow-hidden rounded-3xl ring-1 ring-line lg:min-h-full">
          <iframe title="Office location map" loading="lazy" className="h-full min-h-[360px] w-full border-0"
            src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`} />
        </div>
      </section>
    </>
  );
}
