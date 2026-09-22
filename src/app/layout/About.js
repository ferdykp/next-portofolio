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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16 md:mt-24 border-t border-[var(--border)]">
        {capabilities.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.06}
            direction={index % 2 === 0 ? "up" : "down"}
            className={`py-7 md:py-9 ${index > 0 ? "md:border-l md:pl-8 lg:pl-10" : ""} border-b md:border-b-0 border-[var(--border)]`}
          >
            <h3 className="font-display text-xl md:text-2xl tracking-[-.04em]">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{item.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 md:mt-14 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span className="rev-label">Background</span>
        <p className="text-sm text-[var(--text-muted)]">
          Telecommunication Engineering · Politeknik Elektronika Negeri Surabaya · 2024
        </p>
      </Reveal>
    </section>
  );
}
