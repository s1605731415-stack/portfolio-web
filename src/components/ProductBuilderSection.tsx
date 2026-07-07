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
          <div className="rounded-sm border border-[var(--line)] bg-[var(--surface)] p-6" key={title}>
            <h3 className="text-[22px] font-medium">{title}</h3>
            <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[var(--muted)]">
              {title === "Problem judgment"
                ? "Define what needs to be solved before choosing the interface pattern."
                : title === "Interface logic"
                  ? "Design flows, states, and components that can survive real usage."
                  : "Prepare structure and handoff notes so implementation risk is lower."}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
