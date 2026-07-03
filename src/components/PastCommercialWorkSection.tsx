import { archiveItems } from "../data/archive";
import { SectionShell, Tag } from "./ui";

export function PastCommercialWorkSection() {
  return (
    <SectionShell id="archive" title="Past Commercial Work" description="2025 work is treated as commercial proof, not the main story. It supports credibility across real business contexts and multi-scenario design.">
      <div className="grid gap-4 md:grid-cols-2">
        {archiveItems.map((item) => (
          <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-soft" key={item.title}>
            <p className="text-sm font-medium text-[var(--accent)]">{item.year} / {item.category}</p>
            <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">{item.description}</p>
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
