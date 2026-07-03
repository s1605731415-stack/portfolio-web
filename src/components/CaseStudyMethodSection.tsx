"use client";

import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { SectionShell } from "./ui";

const methods = [
  ["Frame", "Clarify product goals, user scenarios, constraints, and success criteria before moving pixels."],
  ["Structure", "Turn messy requirements into information architecture, flows, and interface hierarchy."],
  ["Prototype", "Design screens and states that communicate behavior, not only static visual style."],
  ["Handoff", "Prepare tokens, edge cases, copy, and component notes for frontend-ready delivery."],
];

export function CaseStudyMethodSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <SectionShell id="method" title={copy.methodTitle} description={copy.methodDescription}>
      <div className="grid gap-4 md:grid-cols-4">
        {methods.map(([title, description], index) => (
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-soft" key={title}>
            <span className="text-sm font-semibold text-[var(--accent)]">0{index + 1}</span>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
