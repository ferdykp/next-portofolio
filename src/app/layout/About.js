"use client";

import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

const capabilities = [
  {
    title: "Web products",
    text: "Laravel, Next.js, Vue.js, APIs",
  },
  {
    title: "Systems",
    text: "MySQL, integrations, automation",
  },
  {
    title: "Infrastructure",
    text: "Linux, Nginx, Docker, Cloudflare",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-[var(--border)]">
      <SectionLabel title="About" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <Reveal className="lg:col-span-8">
          <h2 className="font-display text-[clamp(2.8rem,6.4vw,7rem)] font-medium tracking-[-.065em] leading-[.9] text-balance">
            Simple on the surface.
            <span className="block text-[var(--text-muted)]">Dependable underneath.</span>
          </h2>
        </Reveal>

        <Reveal direction="down" delay={0.08} className="lg:col-span-4 lg:self-end">
          <p className="text-base md:text-lg leading-relaxed text-[var(--text-muted)] max-w-lg">
            I&apos;m a software engineer with a Telecommunication Engineering background, focused on building practical products and production systems.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 border-t border-[var(--border)] md:mt-24">
        {capabilities.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.06}
            direction="up"
          >
            <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 border-b border-[var(--border)] py-6 md:grid-cols-12 md:gap-6 md:py-8">
              <span className="rev-label md:col-span-1">0{index + 1}</span>
              <h3 className="font-display text-xl tracking-[-.04em] md:col-span-4 md:text-2xl">{item.title}</h3>
              <p className="col-start-2 text-sm text-[var(--text-muted)] md:col-start-7 md:col-span-6 md:text-base">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 md:mt-14 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span className="rev-label">Background</span>
        <p className="text-sm md:text-base text-[var(--text-muted)]">
          Telecommunication Engineering · Politeknik Elektronika Negeri Surabaya · 2024
        </p>
      </Reveal>
    </section>
  );
}
