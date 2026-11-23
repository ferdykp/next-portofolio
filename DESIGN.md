# Portfolio design direction

## Design read

The reference frames pair dense, oversized editorial typography with real project screens, compact metadata, and a restrained red marker. The work index feels like a publication contents page; project details read like short case studies. The video is a source for rhythm and transition quality, not a page template.

## Identity

Ferdy Kurnia Panggabean is a software engineer working across full-stack products, DevOps, connected systems, and infrastructure, with a Telecommunication Engineering background. The FERDY wordmark and Relay Trace mark carry the personal identity. Real project screens and the existing portrait keep the work grounded in the person and the systems he builds.

## Dials

- **ENERGY 4:** assertive scale and contrast, with quiet copy and no constant decoration.
- **RHYTHM 5:** shift between a sparse hero, dense project index, open About statement, factual experience list, and dark contact close.
- **MOTION 3:** a clipped hero entrance, short section-specific ScrollTrigger reveals, masked case-study images, and restrained project-preview changes. Mobile navigation and supported page changes transition briefly. Loading indicators run once. No scroll hijacking or ambient loops.

## Visual language

- **Palette:** warm off-white and near-black form the editorial canvas. Vermilion marks the key focal points. The optional dark theme swaps the canvas roles while retaining the same contrast.
- **Typography:** Space Grotesk gives the title its compressed geometric silhouette. Inter keeps project descriptions and forms readable. IBM Plex Mono labels only dates, project numbers, and technical metadata.
- **Composition:** the hero places a staggered headline across a twelve-column field with a real portrait offset into its right edge. Work becomes a full-width image index. About combines one editorial statement with the existing education detail. Experience remains a compact list. Notes stay available from the live notes endpoint. Contact ends in a typographic panel with a working form.
- **Project media:** use existing screenshots in their original proportions. Nuctech has no project screenshot in the supplied assets, so its detail page uses a typography-only cover. No mock product interfaces are introduced.
- **Motion:** GSAP and ScrollTrigger bring the hero, work rows, experience, notes, contact, and case-study images into view in short sequences. `prefers-reduced-motion` removes scripted reveals and compresses CSS transitions. Native browser scrolling stays in place.

## Design reasons

- The orange-red square and the small relay trace repeat as a personal signal without adding an unrelated illustration system.
- The asymmetrical hero gives the headline first claim on the page while the portrait anchors it to Ferdy.
- The large work image updates as a visitor moves through the complete project index. Each row leads to a real route so technical detail does not crowd the homepage.
- The dark About and Contact fields create two clear pauses in the reading rhythm and make the warm canvas feel intentional.
- Motion reveals content in the direction of reading. It does not move content automatically or replace a working static experience.
- The loading screen uses honest geometry rather than pretending to be finished project content. A single relay marker gives the wait state a clear beginning and end.
