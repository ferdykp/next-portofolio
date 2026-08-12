export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-8">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Ferdy Kurnia Panggabean. Built with
          Next.js.
        </p>
        <p className="font-mono text-xs text-[var(--text-muted)]">
          Jakarta, Indonesia
        </p>
      </div>
    </footer>
  );
}
