export default function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="rev-label">
        REV.0{index} — {title}
      </span>
      <span className="flex-1 h-px bg-[var(--border)]" />
    </div>
  );
}
