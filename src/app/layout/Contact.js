import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-28">
      <SectionLabel index={4} title="Contact" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-5">
            Let&apos;s build something that ships.
          </h2>
          <p className="text-[var(--text-muted)] leading-relaxed mb-8 max-w-md">
            Have a project, freelance opportunity, or a system that needs a
            second pair of engineering eyes? Send a message and I&apos;ll get
            back within a day or two.
          </p>
          <div className="space-y-3 font-mono text-sm text-[var(--text-muted)]">
            <div className="flex justify-between max-w-xs border-b border-[var(--border)] pb-3">
              <span>EMAIL</span>
              <a
                href="mailto:kpferdy@gmail.com"
                className="text-[var(--text)] hover:text-[var(--accent)]"
              >
                kpferdy@gmail.com
              </a>
            </div>
            <div className="flex justify-between max-w-xs border-b border-[var(--border)] pb-3">
              <span>LOCATION</span>
              <span className="text-[var(--text)]">Jakarta, Indonesia</span>
            </div>
            <div className="flex justify-between max-w-xs pb-3">
              <span>STATUS</span>
              <span className="text-[var(--accent-2)]">Open to freelance</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            action="https://formspree.io/f/yourformid"
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wide">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wide">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  className="w-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me briefly about your project goals..."
                rows="5"
                required
                className="w-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-[var(--bg)] rounded-lg py-3.5 text-sm font-mono font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity mt-2"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
