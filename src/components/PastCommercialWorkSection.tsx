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
          <article className="rounded-sm border border-[var(--line)] bg-[var(--surface)] p-6" key={item.title}>
            <p className="text-[12px] font-medium uppercase text-[var(--muted)]">{item.year} / {item.category}</p>
            <h3 className="mt-3 text-[24px] font-medium uppercase leading-[1.15]">{item.title}</h3>
            <p className="mt-3 max-w-[620px] text-[15px] font-normal leading-[1.65] text-[var(--muted)]">{item.description}</p>
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
