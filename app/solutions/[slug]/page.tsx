import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Activity, Boxes, Check, Cloud, Code, Database, FileCheck, Globe, HardDrive, Headphones, Layers, Lock,
  Monitor, Network, Package, Plug, Printer, RefreshCw, Server, Settings, ShieldCheck, Smartphone, Truck,
  Wifi, Wrench, type LucideIcon,
} from "lucide-react";
import HexPulseNetwork from "@/components/HexPulseNetwork";
import { brand,solutions } from "@/lib/data";
import { defaultDelivery, serviceDetails } from "@/lib/service-details";
import PageHero from "@/components/pageHero";

type Props = { params: Promise<{ slug: string }> };

/** icon names used in lib/service-details.ts */
const ICONS: Record<string, LucideIcon> = {
  activity: Activity, boxes: Boxes, cloud: Cloud, code: Code, database: Database, "file-check": FileCheck,
  globe: Globe, "hard-drive": HardDrive, headphones: Headphones, layers: Layers, lock: Lock, monitor: Monitor,
  network: Network, package: Package, plug: Plug, printer: Printer, refresh: RefreshCw, server: Server,
  settings: Settings, shield: ShieldCheck, smartphone: Smartphone, truck: Truck, wifi: Wifi, wrench: Wrench,
};

const eyebrow = "text-xs font-semibold uppercase tracking-[0.25em] text-brand-green";
const darkBg = "bg-gradient-to-br from-[#07131f] via-navy to-[#0d3b45]";
const rule = <span className="mt-4 block h-0.5 w-14 bg-brand-green" />;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.text } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();

  const idx = solutions.indexOf(s);
  const others = [1, 2, 3].map((k) => solutions[(idx + k) % solutions.length]);
  const d = serviceDetails[s.slug];

  const hero = (
    <PageHero
      eyebrow="Services"
      title={s.title}
      text={s.text}
      background={<HexPulseNetwork className="pointer-events-none absolute inset-0 -z-10" />}
    />
  );

  /* Fallback for a service that has no entry in lib/service-details.ts */
  if (!d) {
    return (
      <>
        {hero}
        <section className="container-x py-16 lg:py-24">
          <h2 className="text-3xl font-semibold">What you get</h2>
          <p className="mt-3 max-w-2xl">{s.intro}</p>
          <ul className="mt-7 grid gap-3 md:grid-cols-2">
            {s.includes.map((i) => (
              <li key={i} className="flex items-center gap-4 rounded-xl border border-line p-4 font-medium text-navy">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-green/15 text-brand-green"><Check size={16} /></span>
                {i}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-pink mt-8">Talk to our team</Link>
        </section>
      </>
    );
  }

  const delivery = d.delivery ?? defaultDelivery;

  return (
    <>
      {hero}

      {/* INTRO + OUR APPROACH */}
      <section className="container-x grid items-start gap-12 py-16 lg:grid-cols-[1.25fr_1fr] lg:py-24">
        <div className="space-y-5 leading-relaxed">
          {d.overview.map((p) => <p key={p}>{p}</p>)}
          <p className="font-semibold text-navy">{d.highlight}</p>
          <Link href="/contact" className="btn btn-pink">Talk to our team</Link>
        </div>

        <aside className={`${darkBg} rounded-3xl p-8 text-white/75 shadow-2xl`}>
          <p className={eyebrow}>Our approach</p>
          <dl className="mt-6 grid grid-cols-2 gap-6">
            {d.approach.map(([v, l]) => (
              <div key={v}>
                <dt className="text-2xl font-semibold text-white">{v}</dt>
                <dd className="mt-1 text-sm">{l}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed">{d.approachNote}</p>
        </aside>
      </section>

      {/* OFFERINGS */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-x">
          <p className={eyebrow}>Services</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{d.offeringsTitle}</h2>
          {rule}
          <p className="mt-5 max-w-2xl">{d.offeringsText}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {d.offerings.map((o, n) => {
              const Icon = ICONS[o.icon] ?? Settings;
              return (
                <article
                  key={o.title}
                  className={`flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-line ${n % 2 ? "sm:flex-row-reverse" : "sm:flex-row"}`}
                >
                  <div className={`relative grid min-h-[160px] place-items-center overflow-hidden ${darkBg} sm:w-2/5`}>
                    <span className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-green/10" aria-hidden="true" />
                    <span className="relative grid h-20 w-20 place-items-center rounded-2xl border border-brand-green/40 bg-brand-green/10 text-brand-green">
                      <Icon size={36} />
                    </span>
                  </div>
                  <div className="p-6 sm:w-3/5">
                    <p className={eyebrow}>{o.tag}</p>
                    <h3 className="mt-1 text-xl font-semibold">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{o.text}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-navy">Includes</p>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {o.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY MODELS */}
      <section className="container-x py-16 lg:py-24">
        <h2 className="text-3xl font-semibold sm:text-4xl">Service Delivery Models</h2>
        {rule}
        <p className="mt-5 max-w-2xl">Choose the support model that best fits your business requirements.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {delivery.map((m) => (
            <li key={m} className="rounded-xl border border-line border-l-4 border-l-brand-green bg-white p-5 font-semibold text-navy shadow-sm">
              {m}
            </li>
          ))}
        </ul>
      </section>

      {/* TECHNOLOGIES (hidden when a service has none) */}
      {d.technologies && (
        <section className="bg-mist py-16 lg:py-24">
          <div className="container-x">
            <h2 className="text-3xl font-semibold sm:text-4xl">Technologies and Equipment We Support</h2>
            {rule}
            <p className="mt-5 max-w-2xl">Our engineers support multi-vendor environments across these areas.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {d.technologies.map((t) => (
                <div key={t.t} className="rounded-2xl border border-line border-t-4 border-t-brand-green bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-navy">{t.t}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {t.items.map((i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green/15 text-brand-green"><Check size={12} /></span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      <section className="container-x py-16 lg:py-24">
        <h2 className="text-3xl font-semibold sm:text-4xl">Business Benefits</h2>
        {rule}
        <p className="mt-5 max-w-2xl">What you can expect when you work with us on {s.title.toLowerCase()}.</p>
        <ul className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {d.benefits.map((b) => (
            <li key={b} className="flex items-center gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-green/15 text-brand-green"><Check size={14} /></span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* GET STARTED */}
      <section className="container-x pb-16 lg:pb-24">
        <div className={`${darkBg} rounded-3xl p-8 text-center shadow-2xl sm:p-14`}>
          <p className={eyebrow}>Get started</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold !text-white sm:text-4xl">{d.closing.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">{d.closing.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-pink">Contact our team</Link>
            <a href={`mailto:${brand.supportEmail}`} className="btn border border-white/40 text-white hover:bg-white/10">
              {brand.supportEmail}
            </a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-mist py-16 lg:py-20">
        <div className="container-x">
          <h2 className="mb-8 text-3xl font-semibold">Related services</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={`/images/${o.img}.svg`} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5"><h3 className="text-lg font-semibold">{o.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
