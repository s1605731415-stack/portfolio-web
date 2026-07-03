"use client";

import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { SectionShell } from "./ui";
import { WorkflowStepper } from "./WorkflowStepper";

export function AIWorkflowSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <SectionShell id="ai-workflow" title={copy.aiWorkflowTitle} description={copy.aiWorkflowDescription}>
      <WorkflowStepper />
    </SectionShell>
  );
}
