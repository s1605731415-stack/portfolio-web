"use client";

import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { SectionShell } from "./ui";

export function AboutSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <SectionShell id="about" title={copy.aboutTitle} description={copy.aboutDescription}>
      <div className="max-w-4xl rounded-lg border-2 border-[var(--text)] bg-[var(--surface)] p-6 shadow-soft">
        <p className="text-lg leading-8 text-[var(--muted)]">
          {copy.aboutBody}
        </p>
      </div>
    </SectionShell>
  );
}
