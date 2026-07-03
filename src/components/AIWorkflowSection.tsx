import { workflowSteps } from "../data/projects";
import { SectionShell } from "./ui";

export function AIWorkflowSection() {
  return (
    <SectionShell id="ai-workflow" title="AI-assisted UX Workflow" description="AI is part of the workflow, not the headline. I use it to make research, prompting, prototyping, testing, and handoff more explicit and reviewable.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          {workflowSteps.map((step, index) => (
            <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-soft" key={step.title}>
              <p className="text-sm font-semibold text-[var(--accent)]">0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="sticky top-24 h-fit rounded-lg border border-[var(--line)] bg-[var(--text)] p-5 text-[var(--bg-strong)] shadow-card">
          <div className="rounded-lg border border-white/10 bg-white/8 p-5">
            <p className="text-sm text-white/60">Workflow Board</p>
            <div className="mt-6 grid gap-3">
              {workflowSteps.map((step, index) => (
                <div className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3" key={step.title}>
                  <span className="text-sm">{step.title}</span>
                  <span className="text-xs text-white/50">Step {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
