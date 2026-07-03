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
          <article className="rounded-lg border-2 border-[var(--text)] bg-[var(--surface)] p-5 shadow-soft" key={item.title}>
            <p className="text-sm font-black uppercase text-[var(--muted)]">{item.year} / {item.category}</p>
            <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.06em]">{item.title}</h3>
            <p className="mt-3 font-bold leading-7 text-[var(--muted)]">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
