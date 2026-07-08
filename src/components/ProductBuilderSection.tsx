"use client";

import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { SectionShell } from "./ui";

export function ProductBuilderSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <SectionShell id="builder" title={copy.builderTitle} description={copy.builderDescription}>
      <div className="grid gap-5 lg:grid-cols-3">
        {["Problem judgment", "Interface logic", "Delivery awareness"].map((title) => (
          <div className="relative overflow-hidden bg-[var(--color-paper)] p-6 text-[var(--color-ink)]" key={title}>
            <span aria-hidden="true" className="paper-texture pointer-events-none absolute inset-0" />
            <div className="relative">
            <h3 className="poster-display text-[34px] uppercase leading-[0.98]">{title}</h3>
            <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[var(--color-muted)]">
              {title === "Problem judgment"
                ? "Define what needs to be solved before choosing the interface pattern."
                : title === "Interface logic"
                  ? "Design flows, states, and components that can survive real usage."
                  : "Prepare structure and handoff notes so implementation risk is lower."}
            </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
