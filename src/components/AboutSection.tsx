import { SectionShell } from "./ui";

export function AboutSection() {
  return (
    <SectionShell id="about" title="About Me" description="I focus on turning complex ideas into clear product experiences across health tech, AI tools, web products, and mobile interfaces.">
      <div className="max-w-4xl rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-soft">
        <p className="text-lg leading-8 text-[var(--muted)]">
          My work sits between UX strategy, interface systems, AI-assisted design workflows, and frontend-ready delivery. I care about why a product should be structured a certain way, how users move through it, and how design decisions can be communicated clearly enough to build.
        </p>
      </div>
    </SectionShell>
  );
}
