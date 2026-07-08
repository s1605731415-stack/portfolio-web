"use client";

import { archiveItems } from "../data/archive";
import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { SectionShell, Tag } from "./ui";

export function PastCommercialWorkSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <SectionShell id="archive" title={copy.archiveTitle} description={copy.archiveDescription}>
      <div className="grid gap-4 md:grid-cols-2">
        {archiveItems.map((item) => (
          <article className="relative overflow-hidden bg-[var(--color-paper)] p-6 text-[var(--color-ink)]" key={item.title}>
            <span aria-hidden="true" className="paper-texture pointer-events-none absolute inset-0" />
            <div className="relative">
            <p className="poster-micro text-[var(--color-muted)]">{item.year} / {item.category}</p>
            <h3 className="poster-display mt-3 text-[34px] uppercase leading-[0.98]">{item.title}</h3>
            <p className="mt-3 max-w-[620px] text-[15px] font-normal leading-[1.65] text-[var(--color-muted)]">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
