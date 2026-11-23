# Audit 001 follow-up: Portfolio redesign

Status: implemented against the full redesign brief.  
Design direction: Swiss editorial portfolio with curated real work, a FERDY wordmark, a small Relay Trace mark, and purposeful motion. See `DESIGN.md` for the design reasons and dials.

## Findings addressed

1. **R-01, R-07: addressed.** Removed the colored glow, grid, and animated wallpaper. The page now uses warm off-white, near-black, and a restrained vermilion accent.
2. **R-19: addressed.** Motion is limited to the hero entrance, selected-project transition, and project-detail expansion. Each respects reduced-motion preferences.
3. **R-39: addressed.** Removed the 23 to 38 second ambient line animations and 26 to 32 second glow animations. No continuous decorative motion remains.
4. **R-05: addressed.** Curated the homepage to Ledger, Nuctech Warehouse & Spare Parts, and GrowPOS. Project selection updates one preview; details expand only when requested. Nuctech uses a typographic cover because no named screenshot is supplied.
5. **R-06: addressed.** Added typeface roles and visual rationale to `DESIGN.md`.

## Verification

- `npm run build`: PASS.
- `npm run lint`: PASS, no ESLint warnings or errors.
- `git diff --check`: PASS.
- Text contrast calculations for the chosen colors: light text 15.74:1, light muted text 4.97:1, light accent 4.57:1, dark text 16.31:1, dark muted text 8.50:1, dark accent 6.33:1.
- Code inspection confirms real anchor destinations, a keyboard-operable mobile menu with Escape handling, a persistent theme toggle, project selection and details controls, and note expansion controls.
- Browser click-through was not possible: `next start --hostname 127.0.0.1 --port 4173` failed with `listen EPERM` in the environment. Desktop/mobile rendering and runtime interactions therefore still need a browser check.
