"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xgawpezg", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setStatus({ loading: false, success: true, error: false });
    } catch {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <SectionLabel title="Contact" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2 className="font-display text-[clamp(3.4rem,8vw,9rem)] font-medium tracking-[-.075em] leading-[.82] text-balance">
            Have something
            <span className="block text-[var(--accent)]">to build?</span>
          </h2>

          <a
            href="mailto:kpferdy@gmail.com"
            className="editorial-link mt-10 md:mt-14 text-lg md:text-2xl tracking-[-.025em]"
          >
            kpferdy@gmail.com
          </a>
        </Reveal>

        <Reveal direction="down" delay={0.08} className="lg:col-span-5 lg:pt-2">
          <form onSubmit={handleSubmit} className="border-t border-[var(--border)]">
            <label className="block py-5 border-b border-[var(--border)]">
              <span className="rev-label block mb-2">Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-transparent text-lg text-[var(--text)] placeholder:text-[var(--text-muted)]/55 focus:outline-none"
              />
            </label>

            <label className="block py-5 border-b border-[var(--border)]">
              <span className="rev-label block mb-2">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="name@company.com"
                className="w-full bg-transparent text-lg text-[var(--text)] placeholder:text-[var(--text-muted)]/55 focus:outline-none"
              />
            </label>

            <label className="block py-5 border-b border-[var(--border)]">
              <span className="rev-label block mb-2">Message</span>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell me about the project"
                className="w-full bg-transparent text-lg leading-relaxed text-[var(--text)] placeholder:text-[var(--text-muted)]/55 focus:outline-none resize-none"
              />
            </label>

            {status.success && <p className="mt-4 text-sm text-[var(--text-muted)]">Message sent. Thank you.</p>}
            {status.error && <p className="mt-4 text-sm text-[var(--accent)]">Could not send the message. Please try again.</p>}

            <button
              type="submit"
              disabled={status.loading}
              className="mt-7 rounded-full bg-[var(--text)] text-[var(--bg)] px-6 py-3 text-[10px] font-mono uppercase tracking-[.12em] hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 disabled:opacity-50"
            >
              {status.loading ? "Sending" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
