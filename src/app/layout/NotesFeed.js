"use client";

import { useState } from "react";

const visibleCount = 4;

function formatDate(date) {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "";

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

export default function NotesFeed({ notes, unavailable }) {
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const visibleNotes = showAll ? notes : notes.slice(0, visibleCount);

  return (
    <section className="notes-section section-shell motion-section" id="notes" aria-labelledby="notes-title">
      <div className="section-rail">
        <p className="section-number">04</p>
        <p className="rail-label">Notes</p>
      </div>
      <div className="notes-content">
        <h2 id="notes-title">Field notes.</h2>

      {unavailable ? (
        <p className="notes-state">Notes are temporarily unavailable.</p>
      ) : notes.length === 0 ? (
        <p className="notes-state">No notes published yet.</p>
      ) : (
        <>
          <div className="notes-list">
            {visibleNotes.map((note) => {
              const isOpen = expandedId === note.id;
              const contentId = `note-content-${note.id}`;
              const summary = note.content.length > 190
                ? `${note.content.slice(0, 190).trimEnd()}…`
                : note.content;

              return (
                <article className="note-row" key={note.id}>
                  <h3>{note.title}</h3>
                  <time dateTime={note.date || undefined}>{formatDate(note.date)}</time>
                  <p className="note-summary">{summary}</p>
                  <button
                    className="note-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setExpandedId(isOpen ? null : note.id)}
                  >
                    {isOpen ? "Close note" : "Read note"}
                  </button>
                  <div className="note-content" id={contentId} hidden={!isOpen}>
                    {note.content || "This note has no body text."}
                  </div>
                </article>
              );
            })}
          </div>

          {notes.length > visibleCount && (
            <button
              className="note-toggle"
              type="button"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Show fewer notes" : `Show all ${notes.length} notes`}
            </button>
          )}
        </>
      )}
      </div>
    </section>
  );
}
