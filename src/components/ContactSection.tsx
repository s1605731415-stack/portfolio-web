"use client";

import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { ButtonLink, SectionShell } from "./ui";

export function ContactSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <SectionShell id="contact" title={copy.contactTitle} description={copy.contactDescription}>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="mailto:hello@sunwang.design">{copy.emailMe}</ButtonLink>
        <ButtonLink href="#work" variant="secondary">{copy.reviewWork}</ButtonLink>
      </div>
    </SectionShell>
  );
}
