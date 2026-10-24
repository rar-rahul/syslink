import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Eye, Heart, Target } from "lucide-react";

import CredentialsCarousel from "@/components/CredentialsCarousel";

import { brand, services } from "@/lib/data";
import { credentials } from "@/lib/credentials";
import PageHero from "@/components/pageHero";
import HexPulseNetwork from "@/components/HexPulseNetwork";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SYSLINK is a new generation IT services and solutions company delivering customized, reliable and cost-effective solutions.",
};

const eyebrow = "text-sm font-semibold uppercase tracking-[0.25em] text-brand-pink";
const darkBg = "bg-gradient-to-br from-[#07131f] via-navy to-[#0d3b45]";

const highlights = ["Full-service IT company", "Customized solutions", "Value for money"];

const philosophy = [
  { I: Target, t: "Mission", d: "Quality services for full lifecycle support." },
  { I: Eye, t: "Vision", d: "Leading through excellence in customer service." },
  { I: Heart, t: "Values", d: "Excellence, integrity, respect, value and customer-centric care." },
];

const strengths = [
  { t: "Loyalty", d: "Loyalty in service interaction" },
  { t: "Efficiency", d: "Streamlining your operations with precision" },
  { t: "Reliability", d: "Consistency you can always trust" },
  { t: "Commit", d: "Dedicated to your success every step" },
];

const why = [
  "End-to-end solutions: planning, design, implementation and ongoing support",
  "Customized solutions built around your business goals",
  "Reliable and cost-effective, with value for money",
  "Highly skilled and experienced IT professionals",
  "Scalable solutions that grow with your business",
  "Dedicated, expert support when you need it",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`About ${brand.name}`}
        text="A new generation IT services and solutions company."
        background={<HexPulseNetwork className="pointer-events-none absolute inset-0 -z-10" />}
      />

      {/* INTRO */}
      <section className="container-x grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className={eyebrow}>Who we are</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Technology that fits your business</h2>
          <span className="mt-4 block h-0.5 w-14 bg-brand-pink" />

          <p className="mt-6 leading-relaxed">
            <strong className="font-semibold text-brand-pink">SYSLINK Global Technology Pvt Ltd</strong> is a new
            generation IT services and solutions company. A fast-growing technology portfolio creates unique and
            critical challenges for organizations of all sizes, and we are a full-service technology company that
            provides innovative, cutting-edge solutions for your business.
          </p>
          <p className="mt-4 leading-relaxed">
            Our endeavor is to keep our services closely aligned with your operations, strategies and goals. We are a
            team of highly skilled and experienced IT professionals who understand the needs of businesses.
          </p>
          <p className="mt-4 leading-relaxed">
            We work closely with our clients to design and implement customized IT solutions that meet their specific
            requirements. We are reliable and cost-effective, and we always aim to deliver value for money.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {highlights.map((h) => (
              <li key={h} className="rounded-full border border-brand-pink/40 bg-mist px-4 py-1.5 text-xs font-semibold text-brand-pink">
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-brand-pink/15" aria-hidden="true" />
          <div className="relative aspect-[8/7] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about.svg"
              alt="A team connected through technology"
              fill
              priority
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-x pb-16 lg:pb-24">
        <p className={eyebrow}>What we do</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Our services</h2>
        <span className="mt-4 block h-0.5 w-14 bg-brand-pink" />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 font-medium text-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist text-brand-pink">
                  <Check size={18} />
                </span>
                {s.title}
              </Link>
            </li>
          ))}
        </ul>

        <blockquote className="mt-10 rounded-2xl border border-line border-l-4 border-l-brand-pink bg-white p-6 text-lg leading-relaxed shadow-sm sm:p-8 sm:text-xl">
          Whether we are deploying a network, upgrading a data centre, integrating software or supporting your desktops
          and printers, our focus stays the same: reliable, scalable and cost-effective solutions that match your
          business goals.
        </blockquote>
      </section>

      {/* PHILOSOPHY + STRENGTHS (dark) */}
      <section className={`${darkBg} py-16 text-white/75 lg:py-24`}>
        <div className="container-x">
          <p className={eyebrow}>Our philosophy</p>
          <h2 className="mt-2 text-3xl font-semibold !text-white sm:text-4xl">Mission, vision and values</h2>
          <span className="mt-4 block h-0.5 w-14 bg-brand-pink" />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {philosophy.map(({ I, t, d }) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-pink/15 text-brand-pink">
                  <I size={22} />
                </span>
                <h3 className="mt-4 text-xl font-semibold !text-white">{t}</h3>
                <p className="mt-2">{d}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-2xl font-semibold !text-white">Our strengths</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s, n) => (
              <div key={s.t} className="rounded-2xl border border-brand-pink/30 bg-navy/60 p-6">
                <p className="text-sm font-semibold tracking-widest text-brand-pink">{String(n + 1).padStart(2, "0")}</p>
                <h4 className="mt-2 text-lg font-semibold !text-white">{s.t}</h4>
                <p className="mt-1 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-x py-16 lg:py-24">
        <p className={eyebrow}>Why {brand.name}</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Why businesses choose us</h2>
        <span className="mt-4 block h-0.5 w-14 bg-brand-pink" />

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {why.map((w) => (
            <li
              key={w}
              className="flex items-center gap-4 rounded-2xl border border-line border-l-4 border-l-brand-pink bg-white p-5 font-medium text-navy shadow-sm"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-brand-pink">
                <Check size={16} />
              </span>
              {w}
            </li>
          ))}
        </ul>
      </section>

      {/* CREDENTIALS (hidden when lib/credentials.ts is empty) */}
    

      {/* COMMITMENT + CTA */}
      <section className="container-x py-16 lg:py-24">
        <div className={`${darkBg} rounded-3xl p-8 shadow-2xl sm:p-12`}>
          <p className={eyebrow}>Promise</p>
          <h2 className="mt-2 text-3xl font-semibold !text-white sm:text-4xl">Our Commitment</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
            At SYSLINK, we believe technology is about enabling business success. We are dedicated to your success
            every step of the way, delivering quality services across the full lifecycle with reliable, cost-effective
            solutions that give you value for money.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-pink">Contact us</Link>
            <a href={`mailto:${brand.supportEmail}`} className="btn border border-white/40 text-white hover:bg-white/10">
              {brand.supportEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
