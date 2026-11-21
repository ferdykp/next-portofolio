"use client";

import { useState } from "react";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

const visibleCount = 6;

function formatDate(date) {
  if (!date) return "Field note";
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "Field note";

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsedDate);
}

function NoteCard({ note, index, expanded, onToggle, featured = false }) {
  const detailId = `note-${note.id}`;
  const summary = note.content.length > 220 ? `${note.content.slice(0, 220).trimEnd()}…` : note.content;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--bg-elevated)] transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_42%,var(--border))] hover:shadow-[0_18px_52px_color-mix(in_srgb,var(--accent)_9%,transparent)] ${
        featured ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-7"
      }`}
    >
      {featured && (
        <span className="pointer-events-none absolute -right-2 -top-12 select-none font-display text-[clamp(10rem,24vw,20rem)] font-semibold leading-none tracking-[-.12em] text-[color-mix(in_srgb,var(--accent)_7%,transparent)]" aria-hidden="true">
          01
        </span>
      )}

      <div className="relative flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[.14em] text-[var(--accent)]">
          <span className="size-1.5 rounded-full bg-[var(--accent)]" />
          {featured ? "Latest note" : `Note ${String(index + 1).padStart(2, "0")}`}
        </span>
        <time className="text-[10px] font-mono uppercase tracking-[.1em] text-[var(--text-muted)]">
          {formatDate(note.date)}
        </time>
      </div>

      <h3 className={`relative mt-7 max-w-3xl font-display font-medium tracking-[-.055em] text-balance transition-colors group-hover:text-[var(--accent)] ${featured ? "text-3xl sm:text-4xl lg:text-5xl leading-[.98]" : "text-2xl sm:text-[1.75rem] leading-[1.04]"}`}>
        {note.title}
      </h3>

      <p className={`relative mt-4 leading-relaxed text-[var(--text-muted)] ${featured ? "max-w-2xl text-base sm:text-lg line-clamp-3" : "text-sm line-clamp-3"}`}>
        {summary || "A short note from the work in progress."}
      </p>

      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={detailId}
        onClick={onToggle}
        className="relative mt-7 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-[var(--border)] px-4 text-[10px] font-mono uppercase tracking-[.12em] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--accent)]"
      >
        {expanded ? "Close note" : "Read note"}
        <ArrowDownRight size={14} className={`transition-transform duration-300 ${expanded ? "rotate-[-90deg]" : "group-hover:translate-x-0.5 group-hover:translate-y-0.5"}`} aria-hidden="true" />
      </button>

      <div id={detailId} hidden={!expanded} className="relative mt-7 border-t border-[var(--border)] pt-6">
          <div className="max-w-3xl whitespace-pre-wrap text-sm leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
            {note.content || "This note does not have any body text."}
          </div>
      </div>
    </article>
  );
}

export default function NotesFeed({ notes, unavailable }) {
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const visibleNotes = showAll ? notes : notes.slice(0, visibleCount);

  const toggleNote = (id) => setExpandedId((current) => (current === id ? null : id));

  return (
    <section id="notes" className="scroll-mt-28 border-b border-[var(--border)] py-24 md:py-36">
      <SectionLabel title="Notes" />

      <Reveal>
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <p className="mb-4 text-[9px] font-mono uppercase tracking-[.16em] text-[var(--text-muted)]">Ideas, lessons &amp; field notes</p>
            <h2 className="font-display text-[clamp(3rem,7.3vw,8.4rem)] font-medium leading-[.84] tracking-[-.075em] text-balance">
              Written along
              <span className="block text-[var(--accent)]">the way.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[var(--text-muted)] md:text-lg lg:col-span-4 lg:justify-self-end">
            Practical notes on software, systems, and the small decisions behind building things that work.
          </p>
        </div>
      </Reveal>

      {unavailable ? (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-10 text-center">
          <p className="font-display text-xl tracking-[-.04em]">Notes are taking a short break.</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Please check back in a little while.</p>
        </div>
      ) : notes.length === 0 ? (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-10 text-center">
          <p className="font-display text-xl tracking-[-.04em]">The first note is on its way.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {visibleNotes.map((note, index) => (
              <Reveal key={note.id} delay={Math.min(index * 0.04, 0.24)} distance={20} className={index === 0 ? "lg:col-span-2" : ""}>
                <NoteCard
                  note={note}
                  index={index}
                  featured={index === 0}
                  expanded={expandedId === note.id}
                  onToggle={() => toggleNote(note.id)}
                />
              </Reveal>
            ))}
          </div>

          {notes.length > visibleCount && (
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="mx-auto mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border)] px-5 text-[10px] font-mono uppercase tracking-[.12em] transition-colors hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--accent)]"
            >
              {showAll ? "Show fewer notes" : `Show all ${notes.length} notes`}
              <ChevronDown size={14} className={`transition-transform ${showAll ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          )}
        </>
      )}
    </section>
  );
}
