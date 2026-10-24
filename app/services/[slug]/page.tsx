import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import NetworkBackground from "@/components/NetworkBackground";
import HexRipple from "@/components/HexRipple";
import HexPulseNetwork from "@/components/HexPulseNetwork";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.text } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <section className="relative isolate min-h-[340px] overflow-hidden bg-gradient-to-br from-[#07131f] via-navy to-[#0d3b45] py-24 sm:py-32">
        {/* Particles + network */}
        {/* <NetworkBackground
          className="pointer-events-none absolute inset-0 z-0"
          color="120, 200, 255"
          density={9000}
          linkDistance={130}
          speed={0.5}
        /> */}
        <HexPulseNetwork className="pointer-events-none absolute inset-0 z-0" />
        {/* Soft fade on the left so the title stays readable */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-navy/70 via-navy/20 to-transparent" />

        <div className="container-x relative z-20 max-w-4xl">
          <h1 className="animate-rise text-4xl font-semibold !text-white sm:text-6xl">{s.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{s.text}</p>
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-xl">
          <Image src={`/images/${s.img}.svg`} alt={s.title} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">What you get</h2>
          <p className="mt-3">{s.intro}</p>
          <ul className="mt-7 space-y-3">
            {s.includes.map((i) => (
              <li key={i} className="flex items-center gap-4 rounded-xl border border-line p-4 font-medium text-navy">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-brand-pink"><Check size={16} /></span>{i}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-pink mt-8">Talk to our team</Link>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-x">
          <h2 className="mb-8 text-3xl font-semibold">Related services</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden"><Image src={`/images/${o.img}.svg`} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                <div className="p-5"><h3 className="text-lg font-semibold">{o.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}