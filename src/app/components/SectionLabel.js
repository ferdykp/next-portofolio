export default function SectionLabel({ title }) {
  return (
    <div className="flex items-center gap-4 mb-10 md:mb-16">
      <span className="rev-label text-[var(--text)] shrink-0">{title}</span>
      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}
