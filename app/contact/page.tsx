import Image from "next/image";
import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { brand } from "@/lib/data";
import HexRipple from "@/components/HexRipple";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Your technology infrastructure partner is just a click away.",
};

type Row = { I: LucideIcon; t: string; v: { label: string; href?: string }[] };

const tel = (s: string) => `tel:${s.replace(/[^+\d]/g, "")}`;
const eyebrow = "text-sm font-semibold uppercase tracking-[0.25em] text-brand-pink";

export default function ContactPage() {
  const whatsapp = `https://wa.me/${brand.whatsappNumber[0].replace(/\D/g, "")}`;

  const rows: Row[] = [
    { I: Phone, t: "Call", v: brand.phones.map((p) => ({ label: p, href: tel(p) })) },
    { I: Mail, t: "Email", v: brand.email.map((e) => ({ label: e, href: `mailto:${e}` })) },
    { I: MapPin, t: "Visit", v: [{ label: brand.address }] },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#07131f] via-navy to-[#0d3b45] pb-32 pt-24 sm:pb-40 sm:pt-32">
        <HexRipple className="pointer-events-none absolute inset-0 -z-10" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-navy/80 via-navy/30 to-transparent" />
        <div className="container-x">
          <p className={eyebrow}>Let’s talk</p>
          <h1 className="mt-3 animate-rise text-4xl font-semibold !text-white sm:text-6xl">Contact Us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Reach out for sales, support, or a free consultation. We are here to help.
          </p>
        </div>
        {/* wave edge (text-white = your page background colour) */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full text-white sm:h-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 40C240 80 480 0 720 30C960 60 1200 70 1440 30V80H0Z" fill="currentColor" />
          <path
            d="M0 40C240 80 480 0 720 30C960 60 1200 70 1440 30"
            fill="none"
            className="stroke-brand-green"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </section>

      {/* REACH US */}
      <section className="container-x grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-brand-green/15" aria-hidden="true" />
          <div className="relative aspect-[8/7] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/contact.svg"
              alt="Support headset with chat bubbles"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className={eyebrow}>Reach us</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Get in touch</h2>
          <span className="mt-4 block h-0.5 w-14 bg-brand-green" />
          <p className="mt-6 max-w-lg">
            Call, email, or visit our office. Our team responds quickly to sales and support enquiries.
          </p>

          <ul className="mt-8 space-y-6">
            {rows.map(({ I, t, v }) => (
              <li key={t} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-green/10 text-brand-pink">
                  <I size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{t}</h3>
                  {v.map((x) =>
                    x.href ? (
                      <a key={x.label} href={x.href} className="block font-medium text-brand-pink hover:underline">
                        {x.label}
                      </a>
                    ) : (
                      <p key={x.label} className="max-w-sm text-sm leading-relaxed">{x.label}</p>
                    ),
                  )}
                </div>
              </li>
            ))}
          </ul>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg transition hover:brightness-95"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* MAP */}
      <section className="container-x pb-16 lg:pb-24">
        <p className={eyebrow}>Location</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Find Us</h2>
        <span className="mt-4 block h-0.5 w-14 bg-brand-green" />
        <div className="mt-8 overflow-hidden rounded-3xl shadow-lg ring-1 ring-line">
          <iframe
            title="Office location map"
            loading="lazy"
            className="h-[380px] w-full border-0"
            src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
          />
        </div>
      </section>

      {/* DARK CARD + FORM */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="rounded-3xl bg-navy p-6 shadow-2xl sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className={eyebrow}>Send a message</p>
              <h2 className="mt-2 text-3xl font-semibold !text-white sm:text-4xl">Tell us what you need</h2>
              <p className="mt-4 max-w-md text-white/70">
                Tell us about your environment and what you need. We reply within one business day.
              </p>

              <dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
                <div className="py-4">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-white/50">Sales</dt>
                  {/* {brand.phones.map((p) => (
                    <dd key={p}>
                      <a href={tel(p)} className="text-lg font-semibold text-brand-green hover:underline">{p}</a>
                    </dd>
                  ))} */}
                   <dd>
                      <a href={tel(brand.salesNumber)} className="text-lg font-semibold text-brand-pink hover:underline">
                        {brand.salesNumber}
                      </a>
                    </dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-white/50">Email</dt>
                  <dd>
                    <a href={`mailto:${brand.supportEmail}`} className="text-lg font-semibold text-brand-pink hover:underline">
                      {brand.supportEmail}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}