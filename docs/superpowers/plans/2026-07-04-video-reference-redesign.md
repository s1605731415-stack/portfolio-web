# Video Reference Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Chinese-first motion-portfolio redesign based on the supplied recording while keeping the portfolio's existing content logic.

**Architecture:** Keep the current Next.js App Router project. Add project media metadata and a small set of focused visual components for stage cards, project index rows, media frames, and case-study media. Use GSAP only for interactive enhancement, with reduced-motion fallbacks.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, GSAP, lucide-react, generated raster assets in `public/images/projects`.

---

### Task 1: Project Media Assets

**Files:**
- Create: `public/images/projects/*.png`
- Modify: `src/data/projects.ts`

- [ ] Generate five 16:9 project visuals matching the spec.
- [ ] Copy final images into `public/images/projects/`.
- [ ] Add `media` metadata to each project with `hero`, `thumb`, and `alt`.
- [ ] Run `npm test` to ensure content tests still pass.

### Task 2: Chinese-First Locale

**Files:**
- Modify: `src/components/LanguageProvider.tsx`
- Modify: `src/data/translations.ts`
- Modify: `src/components/__tests__/navigation.test.tsx`

- [ ] Set default language to `zh`.
- [ ] Ensure header, dock, hero, section headings, project titles, and case pages render Chinese first.
- [ ] Update tests to expect Chinese default navigation.
- [ ] Run `npm test`.

### Task 3: Stage Homepage

**Files:**
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/FloatingDock.tsx`
- Modify: `src/app/globals.css`

- [ ] Build the dark stage first viewport with subtle grid/noise, compact top controls, large Chinese heading, project-card cluster, and bottom reel.
- [ ] Add GSAP entry and pointer-parallax behavior with reduced-motion guard.
- [ ] Implement a white menu drawer with large Chinese nav items and staggered open animation.
- [ ] Verify no mobile horizontal overflow.

### Task 4: Work Index and Supporting Sections

**Files:**
- Modify: `src/components/SelectedWorkSection.tsx`
- Modify: `src/components/ui.tsx`
- Modify: supporting section components as needed.

- [ ] Replace placeholder work cards with large Chinese project index rows.
- [ ] Add desktop hover preview for project rows.
- [ ] Reuse real project images in every media frame.
- [ ] Keep supporting sections in the same visual system without overbuilding new content.

### Task 5: Media-First Case Pages

**Files:**
- Modify: `src/components/CaseStudyLayout.tsx`
- Modify: `src/components/CaseStudyProgress.tsx`
- Modify: `src/app/work/[slug]/page.tsx` if routing props need adjustment.

- [ ] Redesign case hero around one large project media composition.
- [ ] Add bottom thumbnail/media dock.
- [ ] Preserve localized case-study sections.
- [ ] Verify direct case page navigation and language switching.

### Task 6: Verification and Deployment

**Files:**
- Modify tests only when assertions follow intentional UI changes.

- [ ] Run `npm test`.
- [ ] Run `npm run lint`.
- [ ] Run `rm -rf .next && npm run build`.
- [ ] Start local dev server and inspect desktop/mobile screenshots.
- [ ] Use `view_image` on concept and latest render screenshots.
- [ ] Commit and push.
- [ ] Deploy production with Vercel.
- [ ] Smoke-test production homepage, language switch, work navigation, and one case page.
