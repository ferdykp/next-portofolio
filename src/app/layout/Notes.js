import NotesFeed from "./NotesFeed";

const notesEndpoint = "https://selfnote.fdevsite.cloud/api/portfolio-notes";

function htmlToText(html = "") {
  return html
    .replace(/<\s*br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h[1-6]|li|pre|blockquote|section|article)\s*>/gi, "\n\n")
    .replace(/<li\b[^>]*>/gi, "• ")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&hellip;/gi, "…")
    .replace(/&mdash;/gi, "—")
    .replace(/&ndash;/gi, "–")
    .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)))
    .replace(/&#x([\da-f]+);/gi, (_, value) => String.fromCodePoint(parseInt(value, 16)))
    .replace(/```(?:[\w+-]+)?\s*([\s\S]*?)```/g, (_, code) => `\n${code.trim()}\n`)
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(^|\s)\*([^*\n]+)\*(?=\s|$)/g, "$1$2")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\[([^\]]+)\]\((?:https?:\/\/[^)]+)\)/g, "$1")
    .replace(/[\t ]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function getNotes() {
  try {
    const response = await fetch(notesEndpoint, { cache: "no-store" });
    if (!response.ok) return { notes: [], unavailable: true };

    const payload = await response.json();
    const posts = Array.isArray(payload) ? payload : payload?.data;
    if (!Array.isArray(posts)) return { notes: [], unavailable: true };

    return {
      notes: posts
        .filter((post) => post?.id && post?.title)
        .map((post) => ({
          id: String(post.id),
          title: htmlToText(post.title),
          date: post.created_at,
          content: htmlToText(post.content),
        })),
      unavailable: false,
    };
  } catch {
    return { notes: [], unavailable: true };
  }
}

export default async function Notes() {
  const { notes, unavailable } = await getNotes();
  return <NotesFeed notes={notes} unavailable={unavailable} />;
}
