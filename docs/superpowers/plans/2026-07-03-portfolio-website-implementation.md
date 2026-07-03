# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and preview a high-end, light, professional product-oriented UI/UX portfolio website for Sun Wang, then prepare it for GitHub and deployment.

**Architecture:** Create a Next.js App Router project with focused data files, small presentational components, and isolated client-side motion components. Keep all portfolio content in data arrays and use GSAP only for scroll rhythm, active sections, Hero polish, AI workflow stepping, and case-study progress.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, GSAP, lucide-react, Vitest, Testing Library, Playwright or Browser/IAB for rendered QA.

---

## File Structure

- `package.json`: scripts and dependencies.
- `next.config.mjs`: Next.js config.
- `tsconfig.json`: TypeScript config.
- `tailwind.config.ts`: Tailwind content and theme extension.
- `postcss.config.mjs`: Tailwind/PostCSS config.
- `vitest.config.ts`: unit/component test config.
- `src/app/layout.tsx`: app shell metadata and global providers.
- `src/app/page.tsx`: homepage composition.
- `src/app/work/[slug]/page.tsx`: case-study route.
- `src/app/globals.css`: global tokens, base styles, theme variables, utility classes.
- `src/components/*`: small sections and UI primitives.
- `src/data/projects.ts`: selected work and case-study content.
- `src/data/archive.ts`: past commercial archive data.
- `src/data/navigation.ts`: homepage navigation.
- `src/lib/section-observer.ts`: section observer helper.
- `src/lib/content.test.ts`: content integrity tests.
- `src/components/__tests__/navigation.test.tsx`: navigation behavior tests.

## Task 1: Scaffold Project Foundation

**Files:**
- Create: `package.json`
- Create: `next.config.mjs`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `vitest.config.ts`
- Create: `src/app/globals.css`

- [ ] **Step 1: Write a failing content test**

Create `src/lib/content.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { projects } from "../data/projects";

describe("portfolio content", () => {
  it("prioritizes 2026 AI and product work before archived commercial work", () => {
    expect(projects.slice(0, 4).every((project) => project.year === "2026")).toBe(true);
    expect(projects[0].slug).toBe("awak-health-app");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/lib/content.test.ts`

Expected: command fails because the project and test runner are not configured yet.

- [ ] **Step 3: Add project config and dependencies**

Create the config files with Next.js, Tailwind, Vitest, Testing Library, GSAP, and lucide-react.

- [ ] **Step 4: Run install**

Run: `npm install`

Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 5: Commit**

Run:

```bash
git add package.json package-lock.json next.config.mjs tsconfig.json tailwind.config.ts postcss.config.mjs vitest.config.ts src/app/globals.css src/lib/content.test.ts
git commit -m "chore: scaffold portfolio app"
```

## Task 2: Add Data Model And Content

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/archive.ts`
- Create: `src/data/navigation.ts`
- Modify: `src/lib/content.test.ts`

- [ ] **Step 1: Expand the failing content tests**

Update `src/lib/content.test.ts` to verify required nav labels, project ordering, case-study sections, and archive separation.

- [ ] **Step 2: Run tests to verify failure**

Run: `npm test -- src/lib/content.test.ts`

Expected: tests fail because data files do not exist.

- [ ] **Step 3: Add data files**

Add typed arrays for homepage navigation, six selected projects, archive items, workflow steps, design-system handoff items, and case-study sections.

- [ ] **Step 4: Run tests to verify pass**

Run: `npm test -- src/lib/content.test.ts`

Expected: all content tests pass.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/data src/lib/content.test.ts
git commit -m "feat: add portfolio content data"
```

## Task 3: Build Static Homepage Structure

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/components/Header.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/SelectedWorkSection.tsx`
- Create: `src/components/CaseStudyMethodSection.tsx`
- Create: `src/components/AIWorkflowSection.tsx`
- Create: `src/components/ProductBuilderSection.tsx`
- Create: `src/components/DesignSystemSection.tsx`
- Create: `src/components/PastCommercialWorkSection.tsx`
- Create: `src/components/AboutSection.tsx`
- Create: `src/components/ContactSection.tsx`
- Create: `src/components/ui.tsx`

- [ ] **Step 1: Write component smoke tests**

Create `src/components/__tests__/navigation.test.tsx` to render the header and verify all navigation labels and the theme/menu controls exist.

- [ ] **Step 2: Run tests to verify failure**

Run: `npm test -- src/components/__tests__/navigation.test.tsx`

Expected: tests fail because components do not exist.

- [ ] **Step 3: Implement static components**

Build the homepage sections using the approved content and visual concept. Keep cards, tags, buttons, and placeholder UI previews code-native.

- [ ] **Step 4: Run tests**

Run: `npm test`

Expected: all tests pass.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/app src/components
git commit -m "feat: build portfolio homepage structure"
```

## Task 4: Add Motion And Interactions

**Files:**
- Create: `src/components/MotionProvider.tsx`
- Create: `src/components/GsapReveal.tsx`
- Create: `src/components/WorkflowStepper.tsx`
- Create: `src/components/ThemeToggle.tsx`
- Create: `src/lib/section-observer.ts`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/components/AIWorkflowSection.tsx`
- Modify: `src/components/SelectedWorkSection.tsx`

- [ ] **Step 1: Write behavior tests for theme and navigation**

Extend `src/components/__tests__/navigation.test.tsx` to verify theme toggle changes `document.documentElement.dataset.theme` and mobile menu opens/closes.

- [ ] **Step 2: Run tests to verify failure**

Run: `npm test -- src/components/__tests__/navigation.test.tsx`

Expected: tests fail because the interactions are not implemented.

- [ ] **Step 3: Implement interactions**

Use GSAP for reveal sequences, Hero preview polish, and workflow stepper. Use IntersectionObserver for active section state. Respect reduced-motion behavior.

- [ ] **Step 4: Run tests**

Run: `npm test`

Expected: all tests pass.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/components src/lib
git commit -m "feat: add portfolio interactions"
```

## Task 5: Build Case Study Pages

**Files:**
- Create: `src/app/work/[slug]/page.tsx`
- Create: `src/components/CaseStudyLayout.tsx`
- Create: `src/components/CaseStudyProgress.tsx`
- Modify: `src/data/projects.ts`
- Modify: `src/lib/content.test.ts`

- [ ] **Step 1: Add failing case-study content tests**

Update `src/lib/content.test.ts` to verify each selected project has the required case-study sections: Overview, Problem, Role, Process, Design Decisions, Outcome.

- [ ] **Step 2: Run tests to verify failure**

Run: `npm test -- src/lib/content.test.ts`

Expected: tests fail until all case-study data is complete.

- [ ] **Step 3: Implement case-study layout**

Add dynamic routes, static params, reading progress, desktop side table of contents, mobile progress treatment, and placeholder project imagery.

- [ ] **Step 4: Run tests and build**

Run:

```bash
npm test
npm run build
```

Expected: tests and production build pass.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/app/work src/components/CaseStudyLayout.tsx src/components/CaseStudyProgress.tsx src/data/projects.ts src/lib/content.test.ts
git commit -m "feat: add case study pages"
```

## Task 6: Rendered QA And Deployment Prep

**Files:**
- Modify as needed based on QA findings.

- [ ] **Step 1: Start local dev server**

Run: `npm run dev`

Expected: local app starts, usually at `http://localhost:3000`.

- [ ] **Step 2: Verify in browser**

Use Browser/IAB first if available; otherwise use Playwright. Verify desktop and mobile: app loads, no console errors, homepage scrolls, nav links work, theme toggle works, mobile menu works, workflow stepper updates, and case-study pages load.

- [ ] **Step 3: Fix QA issues**

Patch any layout, responsive, console, accessibility, or build issues found during rendered QA.

- [ ] **Step 4: Run final verification**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all pass.

- [ ] **Step 5: Commit, push, and prepare deployment**

Run:

```bash
git status --short
git push -u origin main
```

Expected: repository is pushed to `s1605731415-stack/portfolio-web`. Prepare Vercel deployment after push.
