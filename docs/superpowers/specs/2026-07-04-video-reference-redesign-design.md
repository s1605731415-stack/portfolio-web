# Video Reference Portfolio Redesign Design

## Goal

Rework Sun Wang's portfolio into a Chinese-first, visually rich portfolio experience inspired by the supplied Pacome Pertant recording, while preserving the existing portfolio logic: selected work, UX method, AI workflow, design system, commercial archive, about, contact, and bilingual access.

## Reference Takeaways

- The reference is a motion-led stage, not a conventional stacked landing page.
- The first real experience is a dark canvas with subtle grid/noise, a small avatar/brand mark, compact controls, and floating project media.
- Navigation uses a high-contrast white drawer with oversized typography.
- The project index can switch between a visual stage and a centered big-title list.
- Project pages use large media, subtle grid texture, compact close/back controls, and a bottom thumbnail controller.
- Images are core content, not decoration; blank placeholder blocks are not acceptable.

## Design Direction

The portfolio defaults to Chinese. English remains available as a secondary language toggle. The homepage becomes a dark editorial stage with pseudo-3D project cards, large Chinese headings, and a bottom reel. The work section includes a big-title Chinese project index with hover previews. Supporting sections keep the existing content logic but adopt a tighter monochrome motion-portfolio treatment.

Case pages become light-gray project canvases with one dominant product visual, supporting media cards, Chinese case-study summaries, a vertical reading indicator, and a compact bottom media dock.

## Motion Direction

Use GSAP for purposeful interactions:

- Entry timeline for hero copy, floating project cards, and reel.
- Pointer parallax for project cards.
- Scroll-triggered reveals for downstream sections.
- Menu drawer open/close with panel slide and large type stagger.
- Project list hover preview follows the cursor on desktop.
- Reduced motion users receive the same layout without transform-heavy motion.

## Asset Strategy

Use generated project-bound raster assets for the first pass instead of copyrighted Dribbble images. Each project gets a distinct 16:9 visual:

- AWAK intelligent health app: health dashboard and phone UI.
- AI design workflow: abstract AI-assisted design scene.
- Case study method: process/storytelling board.
- Design system handoff: dark component system interface.
- Commercial archive: creative commercial product/service composition.

Assets live under `public/images/projects/` and can later be replaced by final real portfolio images.

## Implementation Scope

- Keep the existing Next.js app and data structure.
- Add a reusable media asset field to project data.
- Replace placeholder image blocks with real image frames.
- Make Chinese the default language.
- Replace the current static hero with a video-reference stage hero.
- Replace the current work cards with a stage/list inspired project index.
- Redesign the menu/dock/header language behavior to match the new system.
- Redesign case pages around media-first Chinese storytelling.
- Verify desktop, mobile, language switching, project navigation, lint, tests, and production build.
