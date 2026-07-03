import { SectionShell } from "./ui";
import { WorkflowStepper } from "./WorkflowStepper";

export function AIWorkflowSection() {
  return (
    <SectionShell id="ai-workflow" title="AI-assisted UX Workflow" description="AI is part of the workflow, not the headline. I use it to make research, prompting, prototyping, testing, and handoff more explicit and reviewable.">
      <WorkflowStepper />
    </SectionShell>
  );
}
