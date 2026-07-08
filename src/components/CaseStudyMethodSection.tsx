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
          <div className="relative overflow-hidden bg-[var(--color-paper)] p-5 text-[var(--color-ink)]" key={title}>
            <span aria-hidden="true" className="paper-texture pointer-events-none absolute inset-0" />
            <div className="relative">
              <span className="poster-micro text-[var(--color-muted)]">0{index + 1}</span>
              <h3 className="poster-display mt-5 text-[30px] uppercase leading-[0.98]">{title}</h3>
              <p className="mt-3 text-[14px] font-normal leading-[1.6] text-[var(--color-muted)]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
