import type { ReactNode } from "react";
import HexRipple from "./HexRipple";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  background?: ReactNode; // any background component; defaults to HexRipple
};

export default function PageHero({ eyebrow, title, text, background }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#07131f] via-navy to-[#0d3b45] pb-32 pt-24 sm:pb-40 sm:pt-32">
      {background ?? <HexRipple className="pointer-events-none absolute inset-0 -z-10" />}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-navy/80 via-navy/30 to-transparent" />

      <div className="container-x">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-pink">{eyebrow}</p>
        )}
        <h1 className="mt-3 animate-rise text-4xl font-semibold !text-white sm:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-xl text-lg text-white/80">{text}</p>}
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
  );
}