import { HeroPreviewCluster } from "./HeroPreviewCluster";
import { ButtonLink, Tag } from "./ui";

const capabilities = ["UI Design", "UX Strategy", "Health Tech", "AI-assisted Workflow", "Design System", "Frontend Handoff"];

export function HeroSection() {
  return (
    <section id="top" data-section="top" className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--text)] sm:text-6xl lg:text-7xl">
          Designing clear, usable and scalable product experiences.
        </h1>
        <p className="mt-7 text-lg leading-8 text-[var(--muted)]">
          我是一名具备产品思维、UX 叙事能力、AI 工作流和前端落地意识的 UI/UX 设计师，专注于智能健康、AI 工具、Web 产品和移动端体验设计。
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          I design product experiences across health tech, AI tools, web products and mobile interfaces - from problem framing and information architecture to visual systems and frontend-ready delivery.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {capabilities.map((capability) => (
            <Tag key={capability}>{capability}</Tag>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="#work">View Selected Work</ButtonLink>
          <ButtonLink href="#method" variant="secondary">
            How I Work
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            Contact Me
          </ButtonLink>
        </div>
      </div>
      <HeroPreviewCluster />
    </section>
  );
}
