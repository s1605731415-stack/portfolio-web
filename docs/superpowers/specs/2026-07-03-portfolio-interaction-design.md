# Portfolio Interaction Design

## Context

This portfolio is for Sun Wang, a product-oriented UI/UX designer. The site should feel advanced, light, professional, and structured around product thinking rather than visual decoration.

The approved direction is **Content-led Premium**:

- Prioritize information architecture, content hierarchy, project data, and case-study readability.
- Use motion to clarify structure, rhythm, and state.
- Avoid making the site feel like a generic animation showcase.
- Use complex motion only where it improves the visitor's understanding of Sun's product design process.

## Motion Strategy

The interaction system combines:

- GSAP for scroll-linked animation, timeline sequencing, active section state, section reveal rhythm, and case-study reading progress.
- React Bits-inspired components for selected high-quality UI accents, especially subtle background texture, refined hover interactions, and lightweight animated surfaces.
- CSS transitions for simple button, tag, card, and theme-state feedback.

Do not use heavy animation by default. Motion should remain legible, responsive, and respectful of `prefers-reduced-motion`.

## Global Interaction Rules

- Structure and content come before animation.
- Each major section should be readable and useful with JavaScript motion disabled.
- Animate transform and opacity rather than layout properties.
- Use staggered reveals sparingly to support reading flow.
- Support desktop and mobile. Mobile motion should be simpler and shorter.
- Honor `prefers-reduced-motion` by disabling scroll-linked movement and replacing it with immediate state changes or short fades.

## Homepage Interactions

### Header

- The header remains fixed or semi-fixed on desktop.
- After scrolling, the header gains subtle background blur and a thin border.
- Navigation links scroll smoothly to their target sections.
- The active section receives a restrained highlight.
- Mobile uses a compact menu button with a simple slide/fade menu.

### Hero

The hero should communicate identity within the first viewport:

- Primary heading, supporting English/Chinese copy, tags, and CTAs enter in a calm sequence.
- The right-side UI preview cluster receives the highest visual polish on the page.
- The preview cluster may use slight parallax, layered depth, and mouse-follow movement on desktop.
- React Bits-style subtle animated background treatment may be used here, but it must remain quiet.
- Avoid 3D spectacle, strong neon effects, or dark cropped stock-like visuals.

### Selected Work

- Project cards reveal in a measured stagger as they enter the viewport.
- Hover interaction should clarify hierarchy: image, project type, tags, and case-study CTA.
- Card hover may use small image translation, soft shadow, and CTA emphasis.
- Cards should not jump, resize unpredictably, or obscure text.

### Case Study Method

- Use compact scroll reveal for method steps.
- The section should feel like an explanation of process, not a timeline gimmick.
- Icons or numbered steps can help scanning.

### AI-assisted UX Workflow

This is the main complex interaction on the homepage.

Use a GSAP-powered scroll stepper:

1. Research
2. Prompt
3. Prototype
4. Test
5. Handoff

As the visitor scrolls:

- The current step becomes active.
- The supporting panel or visual updates to match the active step.
- Previous and next steps remain visible enough to preserve orientation.
- Desktop can use a pinned or semi-pinned layout if performance and readability remain good.
- Mobile should use a non-pinned vertical stepper.

This section should show that AI supports Sun's UX process without turning AI into a visual gimmick.

### Product Builder

- Use subtle reveal and small interaction details to show front-end awareness.
- Avoid implying that Sun is primarily a front-end engineer.
- Emphasize product logic, implementation thinking, and design-to-build communication.

### Design System & Frontend Handoff

- Use token-like UI visuals, component states, or handoff panels.
- Interaction can include tabs or segmented controls for tokens, components, and handoff notes.
- Keep the interface dense but calm.

### Past Commercial Work

- Use a quieter archive treatment.
- The archive should prove breadth and real project experience without competing with 2026 projects.
- Cards can use simple hover and filtering if it does not add maintenance cost.

### About and Contact

- Keep motion minimal.
- Contact CTAs should be clear, accessible, and stable.

## Case Study Page Interactions

Each case-study page should follow a consistent structure:

1. Overview
2. Problem
3. Role
4. Process
5. Design Decisions
6. Outcome

Interactions:

- A reading progress indicator shows the visitor's position.
- A side table of contents highlights the active section on desktop.
- Mobile uses a compact section selector or simple progress treatment.
- Large sections reveal gently as the reader reaches them.
- Project imagery uses placeholders initially and should still feel intentional.

## Technical Design

Recommended project stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- Optional selected React Bits-inspired components or extracted patterns

Implementation boundaries:

- Project content should live in data arrays.
- Motion setup should be isolated in reusable hooks or small client components.
- Server-rendered structure should remain stable and readable.
- Avoid coupling content data to animation logic.
- Keep animation components small enough to test visually.

Suggested motion utilities:

- `useReducedMotionPreference`
- `useSectionObserver`
- `GsapReveal`
- `ActiveSectionNav`
- `WorkflowStepper`
- `CaseStudyProgress`

## Accessibility And Performance

- All interactive controls must be keyboard reachable.
- Focus states must be visible.
- Theme toggle and menu buttons must have accessible labels.
- Motion must respect `prefers-reduced-motion`.
- Avoid animating width, height, top, left, or expensive filters in scroll loops.
- Use GSAP cleanup in React effects.
- Use lazy loading for heavy visual components where appropriate.

## Out Of Scope

- Video generation with Remotion is not part of the first website build.
- Full cinematic page transitions are not part of the first build.
- Real portfolio images are not required yet; placeholders are acceptable.
- Heavy 3D scenes are not part of the design direction.

## Success Criteria

- The visitor understands Sun's positioning within 10 seconds.
- The homepage clearly prioritizes 2026 projects and AI/product workflow.
- Motion improves navigation, comprehension, and polish.
- The site feels high-end and professional without high learning cost.
- The implementation can be previewed locally and deployed publicly.
