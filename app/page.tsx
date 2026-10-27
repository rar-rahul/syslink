import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Code2, Globe, Cloud, CloudCog, Server, Layers,
  Network, ShieldCheck, Wrench, Printer, Truck, PackageCheck, type LucideIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import FootprintTabs from "@/components/FootprintTabs";
import Counter from "@/components/Counter";
import CircuitBackground from "@/components/CircuitBackground";
import { model, partners, services, stats, values } from "@/lib/data";

const darkBg = "bg-gradient-to-br from-[#07131f] via-navy to-[#0d3b45]";

/* ---------- helpers ---------- */
function Title({ small, big, light, left }: { small?: string; big: string; light?: boolean; left?: boolean }) {
  return (
    <div className={`mb-12 max-w-3xl ${left ? "" : "mx-auto text-center"}`}>
      {small && <p className={`mb-2 text-sm font-medium text-brand-pink sm:text-base`}>{small}</p>}
      <h2 className={`text-3xl font-semibold sm:text-4xl lg:text-5xl ${light ? "!text-white" : ""}`}>{big}</h2>
    </div>
  );
}

const serviceIcons: Record<string, LucideIcon> = {
  "software-integration-services": Code2,
  "web-app-development": Globe,
  "cloud-integration-management": CloudCog,
  "cloud-solutions": Cloud,
  "infrastructure-management-services": Server,
  "server-desktop-virtualization": Layers,
  "network-design-implementation": Network,
  "security-solutions": ShieldCheck,
  "amc-services": Wrench,
  "managed-print-services": Printer,
  "field-services": Truck,
  "warranty-logistics-management": PackageCheck,
};

// TODO: replace with the industries Syslink actually serves
const industries = ["Government", "Education", "Manufacturing", "Healthcare", "Enterprise", "Banking", "Retail", "Power & Utilities"];

const aboutPoints = ["Audit, gap analysis and roadmap", "Migration with minimal disruption", "24x7 monitoring, security first"];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ABOUT: text + highlight panel */}
      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <div>
          <Title left small="About SYSLINK" big="Empowering businesses with reliable technology" />
          <p className="-mt-6 mb-4 text-lg leading-relaxed">
            For 25 years SYSLINK has helped organizations plan, migrate, implement, manage and scale
            secure, future-ready IT infrastructure with one trusted partner.
          </p>
          <ul className="mb-8 space-y-3">
            {aboutPoints.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-brand-green" size={20} /> {p}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn btn-outline inline-flex items-center gap-2">
            Learn about us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-pink/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-green/20 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-6">
            {stats.slice(0, 4).map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-bold text-white sm:text-4xl"><Counter value={s.v} suffix={s.s} /></p>
                <p className="mt-1 text-sm text-white/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES MARQUEE */}
      <section className="overflow-hidden border-y border-line bg-mist py-14">
        <Title small="Our clients" big="Trusted across industries" />
        <div className="flex w-max animate-marquee gap-4">
          {[...industries, ...industries].map((x, n) => (
            <span key={n} aria-hidden={n >= industries.length}
              className="rounded-full border border-line bg-white px-6 py-2.5 font-medium shadow-sm">
              {x}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES: card grid */}
      <section id="services" className="container-x py-24">
        <Title small="What we deliver" big="Our services" />
        <p className="-mt-8 mb-12 text-center">
          End-to-end technology services to plan, migrate, implement, manage and scale your IT infrastructure.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Ico = serviceIcons[s.slug] ?? Server;
            return (
              <article key={s.slug}
                className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand-pink/40 hover:shadow-xl">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-pink/10 text-brand-pink transition group-hover:bg-brand-pink group-hover:text-white">
                  <Ico size={24} />
                </span>
                <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed">{s.text}</p>
                <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-pink">
                  View details <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* FEATURED: dark panel with checklist (network-ie "Featured product" layout) */}
      <section className="relative isolate overflow-hidden bg-navy py-24">
        <CircuitBackground
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_top,black_30%,transparent)]"
          color="45, 212, 191" accent="251, 146, 60" density={30000} speed={130}
        />
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium text-brand-green">Featured</p>
            <h2 className="text-3xl font-semibold !text-white sm:text-5xl">Managed IT delivery, nationwide</h2>
            <p className="mt-5 max-w-lg text-lg text-white/75">
              A flexible delivery model backed by 4,000+ experts, so your capital and people stay focused on productivity.
            </p>
            <Link href="/contact" className="btn btn-pink mt-8">Talk to an expert</Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {model.map((m, n) => (
              <li key={m.t} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-white ${n % 2 ? "bg-brand-green" : "bg-brand-pink"}`}>
                  <Icon name={m.icon} size={20} />
                </span>
                <span className="text-sm font-medium text-white">{m.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-x py-24">
        <Title small="Why SYSLINK" big="Why choose us" />
        <div className="grid gap-px overflow-hidden rounded-3xl bg-line md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.a} className="bg-white p-8 transition-colors hover:bg-mist">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-green/10 text-brand-green">
                <Icon name={v.icon} size={24} />
              </span>
              <h3 className="text-xl font-semibold">{v.a} <span className="text-brand-pink">{v.b}</span></h3>
              <p className="mt-2 text-sm leading-relaxed">{v.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTPRINT (kept: header nav links to #footprint) */}
      <section id="footprint" className="bg-mist py-24">
        <div className="container-x">
          <Title small="A team of 4,000+ experts reaching you across the country" big="The delivery footprint" />
          <FootprintTabs />
        </div>
      </section>

      {/* TECHNOLOGY PARTNERS: grid of chips */}
      <section id="partners" className="container-x py-24">
        <Title small="OEM alliances" big="Technology partners" />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 ">
          {partners.map((p) => (
            <li key={p}
              className="grid h-20 place-items-center rounded-2xl border border-line bg-white text-lg font-bold text-slate-400 transition hover:border-brand-pink/40 hover:text-brand-pink hover:shadow-md ">
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* NUMBERS THAT MATTER */}
      <section className="bg-navy py-24">
        <div className="container-x">
          <Title light small="By the numbers" big="Numbers that matter" />
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border-t-4 border-brand-green bg-white/5 p-6 text-center ring-1 ring-white/10">
                <dd className="text-3xl font-bold text-white sm:text-4xl"><Counter value={s.v} suffix={s.s} /></dd>
                <dt className="mt-2 text-sm text-white/70">{s.l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="rounded-3xl bg-gradient-to-r from-brand-pink to-brand-pink/80 px-8 py-16 text-center sm:px-16">
          <p className="mb-2 text-sm font-medium text-white/80">Get started</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold !text-white sm:text-5xl">Ready to modernize your IT infrastructure?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">Let's discuss how SYSLINK can plan, migrate and manage it for you.</p>
          <Link href="/contact" className="btn btn-white mt-8">Schedule meeting</Link>
        </div>
      </section>
    </>
  );
}