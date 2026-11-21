"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import TiltSurface from "../components/TiltSurface";

const username = "ferdykp";
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, index) => String(currentYear - index));
const colors = ["#252a30", "#0e4429", "#006d32", "#26a641", "#39d353"];

function makeWeeks(days) {
  if (!days?.length) return [];

  const weeks = [];
  let week = Array((new Date(`${days[0].date}T00:00:00Z`).getUTCDay() + 7) % 7).fill(null);

  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length) weeks.push(week);
  return weeks;
}

function monthLabels(weeks) {
  let previousMonth = -1;
  return weeks.map((week) => {
    const day = week.find(Boolean);
    if (!day) return "";
    const month = new Date(`${day.date}T00:00:00Z`).getUTCMonth();
    if (month === previousMonth) return "";
    previousMonth = month;
    return new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" }).format(
      new Date(`${day.date}T00:00:00Z`),
    );
  });
}

function CalendarSkeleton() {
  return (
    <div className="overflow-x-auto scrollbar-none pb-1" aria-hidden="true">
      <div className="min-w-[700px]">
        <div className="flex gap-4 mb-2 pl-10">
          {Array.from({ length: 12 }, (_, index) => <span key={index} className="skeleton h-2.5 w-7 rounded-sm" />)}
        </div>
        <div className="grid grid-cols-[30px_1fr] gap-x-2">
          <div className="grid grid-rows-7 gap-[3px] py-0.5">
            {Array.from({ length: 7 }, (_, index) => <span key={index} className={`skeleton h-2.5 rounded-sm ${index % 2 ? "w-5" : "w-3"}`} />)}
          </div>
          <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-[3px]">
            {Array.from({ length: 53 }, (_, week) => (
              <div key={week} className="grid grid-rows-7 gap-[3px]">
                {Array.from({ length: 7 }, (_, day) => <span key={day} className="skeleton aspect-square w-full rounded-[2px]" />)}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex justify-between">
          <span className="skeleton h-2.5 w-40 rounded-sm" />
          <span className="skeleton h-2.5 w-24 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export default function GitHubActivity() {
  const [selectedYear, setSelectedYear] = useState("last");
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setFailed(false);
    setActivity(null);

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${selectedYear}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not load contributions");
        return response.json();
      })
      .then((data) => setActivity(data))
      .catch((error) => {
        if (error.name !== "AbortError") setFailed(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [selectedYear]);

  const weeks = useMemo(() => makeWeeks(activity?.contributions), [activity]);
  const months = useMemo(() => monthLabels(weeks), [weeks]);
  const total = activity?.total?.[selectedYear === "last" ? "lastYear" : selectedYear] ?? 0;
  const period = selectedYear === "last" ? "in the last year" : `in ${selectedYear}`;

  return (
    <section id="github-activity" className="py-24 md:py-32 border-b border-[var(--border)]">
      <SectionLabel title="GitHub activity" />

      <Reveal>
        <TiltSurface className="depth-panel rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden" maxTilt={1.25} lift={2}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_150px]">
            <div className="min-w-0 p-5 sm:p-7 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                <div>
                  {loading ? (
                    <span className="skeleton block h-8 w-64 max-w-full rounded-md" aria-label="Loading contributions" />
                  ) : (
                    <p className="font-display text-2xl sm:text-3xl tracking-[-.045em]">
                      {`${total.toLocaleString()} contributions ${period}`}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-[var(--text-muted)]">A year of building in public</p>
                </div>
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-link items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                >
                  <Github size={15} /> @{username} <ArrowUpRight size={14} />
                </a>
              </div>

              {failed ? (
                <div className="flex min-h-36 flex-col items-center justify-center gap-2 text-center">
                  <p className="text-sm text-[var(--text-muted)]">Contribution history is temporarily unavailable.</p>
                  <a className="text-sm text-[var(--accent)] hover:underline" href={`https://github.com/${username}?tab=overview`} target="_blank" rel="noreferrer">
                    View activity on GitHub
                  </a>
                </div>
              ) : loading ? (
                <CalendarSkeleton />
              ) : (
                <div className="overflow-x-auto scrollbar-none pb-1" aria-busy={loading}>
                  <div className={`min-w-[700px] transition-opacity ${loading ? "opacity-45" : "opacity-100"}`}>
                    <div className="grid grid-cols-[30px_repeat(var(--week-count),minmax(0,1fr))] gap-x-[3px] mb-2" style={{ "--week-count": Math.max(weeks.length, 1) }}>
                      <span />
                      {months.map((month, index) => <span key={`${month}-${index}`} className="text-[10px] text-[var(--text-muted)]">{month}</span>)}
                    </div>
                    <div className="grid grid-cols-[30px_1fr] gap-x-2">
                      <div className="grid grid-rows-7 gap-[3px] text-[9px] text-[var(--text-muted)]">
                        <span /> <span>Mon</span> <span /> <span>Wed</span> <span /> <span>Fri</span> <span />
                      </div>
                      <div className="flex gap-[3px]">
                        {weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="grid flex-1 grid-rows-7 gap-[3px]">
                            {Array.from({ length: 7 }, (_, dayIndex) => {
                              const day = week[dayIndex];
                              const level = day?.level ?? 0;
                              return (
                                <span
                                  key={day?.date ?? `empty-${dayIndex}`}
                                  title={day ? `${day.count} contributions on ${day.date}` : undefined}
                                  aria-label={day ? `${day.count} contributions on ${day.date}` : undefined}
                                  className="aspect-square w-full rounded-[2px]"
                                  style={{ backgroundColor: day ? colors[level] : "transparent" }}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-4 text-[10px] text-[var(--text-muted)]">
                      <a className="hover:text-[var(--text)] transition-colors" href={`https://github.com/${username}?tab=overview`} target="_blank" rel="noreferrer">How GitHub counts contributions</a>
                      <div className="flex items-center gap-1.5 shrink-0" aria-label="Contribution activity scale">
                        <span>Less</span>
                        {colors.map((color) => <span key={color} className="size-2.5 rounded-[2px]" style={{ backgroundColor: color }} />)}
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <nav aria-label="Select contribution year" className="flex lg:flex-col overflow-x-auto lg:overflow-visible border-t lg:border-t-0 lg:border-l border-[var(--border)] p-3 gap-1">
              <button
                type="button"
                onClick={() => setSelectedYear("last")}
                aria-pressed={selectedYear === "last"}
                className={`depth-control shrink-0 rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${selectedYear === "last" ? "bg-[var(--text)] text-[var(--bg)]" : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"}`}
              >Last year</button>
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  aria-pressed={selectedYear === year}
                  className={`depth-control shrink-0 rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${selectedYear === year ? "bg-[var(--text)] text-[var(--bg)]" : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"}`}
                >{year}</button>
              ))}
            </nav>
          </div>
        </TiltSurface>
      </Reveal>
    </section>
  );
}
