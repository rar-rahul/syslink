import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import FootprintTabs from "@/components/FootprintTabs";
import Leadership from "@/components/Leadership";
import Counter from "@/components/Counter";
import { model, partners, scale, services, stats, values } from "@/lib/data";
import CircuitBackground from "@/components/CircuitBackground";

function Title({ small, big, light }: { small?: string; big: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {small && <p className={`mb-2 text-base sm:text-lg ${light ? "text-white/70" : "text-slate-500"}`}>{small}</p>}
      <h2 className={`text-3xl font-semibold sm:text-4xl lg:text-5xl ${light ? "!text-white" : ""}`}>{big}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* 360 value */}
      <section className="container-x py-24">
        <Title small="Technology partner" big="Your technology navigator, end to end" />
        <div className="grid gap-px overflow-hidden rounded-3xl bg-line md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.a} className="bg-white p-8 transition-colors hover:bg-mist">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-pink/10 text-brand-pink"><Icon name={v.icon} size={24} /></span>
              <h3 className="text-2xl font-semibold">{v.a}</h3>
              <p className="mb-3 text-lg text-brand-pink">{v.b}</p>
              <p className="text-sm leading-relaxed">{v.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* services */}
      <section id="services" className="bg-mist py-24">
        <div className="container-x">
          <Title small="We help you to plan, migrate, implement, manage and scale IT infrastructure" big="Our Services" />
          <div className="space-y-6">
            {services.map((s, n) => (
              <article key={s.slug} className="grid overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2">
                <div className={`relative aspect-[3/2] md:aspect-auto md:min-h-[320px] ${n % 2 ? "md:order-2" : ""}`}>
                  <Image src={`/images/${s.img}.svg`} alt={s.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <h3 className="mb-3 text-2xl font-semibold">{s.title}</h3>
                  <p className="mb-7 leading-relaxed">{s.text}</p>
                  <Link href={`/services/${s.slug}`} className="btn btn-outline w-fit">View details</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* scale */}
      <section className="container-x py-24">
        <Title small="For us, every problem is an opportunity to find an intelligent solution" big="Scale with us" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {scale.map((s) => (
            <div key={s.t} className="rounded-2xl border-t-4 border-brand-green bg-white p-6 shadow-md ring-1 ring-line">
              <h3 className="mb-2 text-lg font-semibold">{s.t}</h3><p className="text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* model */}
      <section className="bg-navy py-24 relative isolate overflow-hidden">
        {/* Circuit traces behind everything, fading out toward the top */}
              <CircuitBackground
                className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_top,black_30%,transparent)]"
                color="45, 212, 191"
                accent="251, 146, 60"
                density={30000}
                speed={130}
              />
        <div className="container-x">
          <Title light small="Flexibility to deploy your resources" big="The delivery model" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {model.map((m, n) => (
              <div key={m.t} className="flex items-center gap-5 rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/10">
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-white ${n % 2 ? "bg-brand-green" : "bg-brand-pink"}`}><Icon name={m.icon} size={24} /></span>
                <span className="font-medium text-white">{m.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footprint */}
      <section id="footprint" className="bg-mist py-24">
        <div className="container-x">
          <Title small="A team of 4,000+ experts reaching you across the country" big="The delivery footprint" />
          <FootprintTabs />
        </div>
      </section>

      {/* stats */}
      <section className="container-x py-24">
        <Title big="25 years of service excellence" />
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <dd className="text-3xl font-bold text-brand-pink sm:text-4xl"><Counter value={s.v} suffix={s.s} /></dd>
              <dt className="mt-1 text-sm">{s.l}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* leadership */}
      {/* <section id="leadership" className="bg-mist py-24">
        <div className="container-x">
          <Title small="Working together across the nation to make a difference" big="Leadership" />
          <Leadership />
        </div>
      </section> */}

      {/* partners */}
      <section id="partners" className="overflow-hidden py-20">
        <Title big="Our Partners" />
        <div className="flex w-max animate-marquee gap-16 text-3xl font-bold text-slate-300">
          {[...partners, ...partners].map((p, n) => <span key={n} aria-hidden={n >= partners.length}>{p}</span>)}
        </div>
      </section>

      {/* join us */}
      <section className="relative isolate overflow-hidden py-24 text-center">
        <Image src="/images/join-us.svg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="container-x">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold !text-white sm:text-5xl">Join us and become a part of the world of emerging tech!</h2>
          <Link href="/contact" className="btn btn-white mt-9">Join us</Link>
        </div>
      </section>
    </>
  );
}
