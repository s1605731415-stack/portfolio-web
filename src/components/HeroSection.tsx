import { ButtonLink, Tag } from "./ui";

const capabilities = ["UI Design", "UX Strategy", "Health Tech", "AI-assisted Workflow", "Design System", "Frontend Handoff"];

export function HeroSection() {
  return (
    <section id="top" className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
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
      <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-soft">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(66,103,255,0.12),transparent_34%,rgba(29,143,114,0.10))]" />
        <div className="relative grid h-full gap-4">
          <div className="ml-auto w-56 rounded-[1.8rem] border border-[var(--line)] bg-[var(--bg-strong)] p-3 shadow-card">
            <div className="h-80 rounded-[1.35rem] bg-[var(--soft)] p-4">
              <div className="h-3 w-20 rounded-full bg-[var(--accent-2)]" />
              <div className="mt-5 h-8 w-28 rounded-lg bg-[var(--text)]" />
              <div className="mt-4 space-y-2">
                <div className="h-16 rounded-lg bg-white/80" />
                <div className="h-16 rounded-lg bg-white/80" />
                <div className="h-16 rounded-lg bg-white/80" />
              </div>
            </div>
          </div>
          <div className="-mt-28 w-[82%] rounded-lg border border-[var(--line)] bg-[var(--bg-strong)] p-4 shadow-card">
            <div className="flex items-center justify-between">
              <div className="h-3 w-24 rounded-full bg-[var(--text)]" />
              <div className="h-8 w-24 rounded-lg bg-[var(--soft)]" />
            </div>
            <div className="mt-5 grid grid-cols-[0.8fr_1.2fr] gap-4">
              <div className="h-32 rounded-lg bg-[var(--soft)]" />
              <div className="space-y-3">
                <div className="h-4 w-4/5 rounded-full bg-[var(--text)]" />
                <div className="h-4 w-3/5 rounded-full bg-[var(--line)]" />
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <div className="h-16 rounded-lg border border-[var(--line)]" />
                  <div className="h-16 rounded-lg border border-[var(--line)]" />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-10 grid w-[78%] grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--line)] bg-[var(--bg-strong)] p-4 shadow-soft">
              <p className="text-xs font-medium text-[var(--muted)]">Design Tokens</p>
              <div className="mt-4 space-y-2">
                <div className="h-3 rounded-full bg-[var(--accent)]" />
                <div className="h-3 w-3/4 rounded-full bg-[var(--accent-2)]" />
                <div className="h-3 w-1/2 rounded-full bg-[var(--line)]" />
              </div>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-[var(--text)] p-4 text-[var(--bg-strong)] shadow-soft">
              <p className="text-xs font-medium opacity-70">AI Workflow</p>
              <div className="mt-4 grid gap-2">
                {["Research", "Prompt", "Handoff"].map((label) => (
                  <div className="rounded-md bg-white/12 px-3 py-2 text-xs" key={label}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
