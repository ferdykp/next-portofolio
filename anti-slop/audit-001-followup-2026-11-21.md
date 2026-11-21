# Antislop audit 001 — follow-up

Date: 2026-11-21  
Related audit: [audit-001-2026-11-21.md](audit-001-2026-11-21.md)  
Mode: after  
Result: all 13 findings addressed.

## Resolution

1. **R-23, profile image:** replaced the generated portrait in the hero with the existing `public/assets/profile.jpeg` image.
2. **R-25, contrast:** darkened the light-theme accent to `#c52b1a` (4.97:1 against the page background); adjusted input placeholders so they remain legible.
3. **R-27, blog errors:** separated API failure states from the genuinely empty list state and added retry behavior.
4. **R-32, overlays:** added dialog semantics, Escape handling, focus containment, focus restoration, and accessible labels for the mobile menu and project detail dialog.
5. **R-39, motion:** removed ambient/orbital animation layers and reduced decorative motion; retained reduced-motion handling for short transitions.
6. **R-39, controls:** raised interactive target sizes and added pressed, pointer, active, disabled, and current-location states where appropriate.
7. **R-02, copy:** removed visible em dashes from site copy and normalized them in fetched post titles and text.
8. **R-37, direction:** added `DESIGN.md` with the existing color, typography, imagery, layout, and liveliness direction.
9. **Blog HTML safety:** replaced direct raw HTML insertion with escaped plain-text rendering of post content.
10. **R-01/R-07/R-10/R-13/R-31, effects:** removed the undocumented glow, grid, vignette, streams, reflection, and orbit stack and simplified surfaces and shadows.
11. **R-39, contact status:** added polite live status and alert roles to contact success and error messages.
12. **R-14, capabilities:** changed the repeated cards to editorial rows.
13. **Comment checklist:** removed comments that only labeled adjacent visible markup and removed stale commented-out sample code.

## Verification

- `npx eslint` on the affected application files: passed.
- `npm run build`: passed, including type/lint checks and static generation.
- `git diff --check`: passed.
- Production preview click-through: checked mobile menu open/close, project dialog open/close and Escape behavior, project category filters, show-all/show-less projects, GitHub year selection, experience expansion, theme toggle and restoration, blog index, and a blog detail page.
- Responsive preview at 390 px: `document.documentElement.scrollWidth` matched the 390 px viewport. Viewport restored after inspection.
- Contact form was not submitted because its action sends a real message to Formspree.

## Remaining notes

- Blog detail bodies are now rendered as safe plain text. Any source formatting (such as headings or code blocks) is flattened until a trusted markdown renderer is introduced.
- The original audit remains an unchanged snapshot of the state before fixes; this follow-up records the resolved state.
