"use client";

import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { SectionShell } from "./ui";

export function DesignSystemSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <SectionShell id="system" title={copy.systemTitle} description={copy.systemDescription}>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[var(--color-paper)] p-6 text-[var(--color-ink)]">
          <h3 className="poster-display text-[34px] uppercase leading-[0.98]">Token Panel</h3>
          <div className="mt-6 grid gap-3">
            {["Color / semantic states", "Type scale / hierarchy", "Spacing / density", "Components / variants"].map((item) => (
              <div className="flex items-center justify-between border border-[var(--color-ink)]/12 px-4 py-3" key={item}>
                <span className="poster-micro text-[var(--color-muted)]">{item}</span>
                <span className="h-5 w-20 barcode-mark text-[var(--color-ink)]" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[var(--color-ink)] p-6 text-[var(--color-paper)]">
          <h3 className="poster-display text-[34px] uppercase leading-[0.98]">Handoff Notes</h3>
          <div className="mt-6 space-y-4">
            {["States are named before visual polish.", "Responsive rules are defined with component behavior.", "AI workflow outputs are reviewed before they become design decisions."].map((item) => (
              <p className="border border-white/12 p-4 text-[14px] font-normal leading-[1.6] text-white/68" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
