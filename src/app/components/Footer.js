export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 py-7 md:py-9 grid grid-cols-1 sm:grid-cols-3 gap-5 items-center">
        <p className="font-display text-xl font-semibold tracking-[-.055em]">
          FKP<span className="text-[var(--accent)]">.</span>
        </p>
        <p className="sm:text-center text-[9px] font-mono uppercase tracking-[.12em] text-[var(--text-muted)]">
          © {new Date().getFullYear()} Ferdy Kurnia Panggabean
        </p>
        <a
          href="/#home"
          className="sm:justify-self-end editorial-link text-[10px] font-mono uppercase tracking-[.12em] text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
