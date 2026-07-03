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
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-soft">
          <h3 className="text-xl font-semibold">Token Panel</h3>
          <div className="mt-6 grid gap-3">
            {["Color / semantic states", "Type scale / hierarchy", "Spacing / density", "Components / variants"].map((item) => (
              <div className="flex items-center justify-between rounded-lg border border-[var(--line)] bg-[var(--bg-strong)] px-4 py-3" key={item}>
                <span className="text-sm font-medium">{item}</span>
                <span className="h-3 w-16 rounded-full bg-[var(--accent)]" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-soft">
          <h3 className="text-xl font-semibold">Handoff Notes</h3>
          <div className="mt-6 space-y-4">
            {["States are named before visual polish.", "Responsive rules are defined with component behavior.", "AI workflow outputs are reviewed before they become design decisions."].map((item) => (
              <p className="rounded-lg bg-[var(--soft)] p-4 text-sm leading-6 text-[var(--muted)]" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
