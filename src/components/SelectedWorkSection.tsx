"use client";

import Link from "next/link";
import { projects } from "../data/projects";
import { getProjectCopy, uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { PlaceholderImage, SectionShell, Tag } from "./ui";

export function SelectedWorkSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <SectionShell
      id="work"
      title={copy.selectedWorkTitle}
      description={copy.selectedWorkDescription}
    >
      <div className="grid gap-4">
        {projects.map((project, index) => {
          const projectCopy = getProjectCopy(project, language);
          return (
          <Link
            className="group grid gap-5 rounded-lg border-2 border-[var(--text)] bg-[var(--surface)] p-4 transition hover:-translate-y-1 hover:bg-[var(--bg-strong)] lg:grid-cols-[240px_1fr_auto]"
            href={`/work/${project.slug}`}
            key={project.slug}
          >
            <PlaceholderImage accent={project.accent} label={projectCopy.imageLabel} />
            <div className="flex items-start gap-5">
              <span className="text-4xl font-black tracking-[-0.08em] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-sm font-black uppercase text-[var(--muted)]">{project.year} / {projectCopy.type}</p>
                <h3 className="mt-2 text-[clamp(2rem,5vw,4.6rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-[var(--text)]">
                  {projectCopy.title}
                </h3>
                <p className="mt-4 max-w-3xl text-lg font-bold leading-7 text-[var(--muted)]">{projectCopy.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {projectCopy.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
            <span className="self-start rounded-lg border-2 border-[var(--text)] px-4 py-3 text-sm font-black text-[var(--text)] transition group-hover:bg-[var(--text)] group-hover:text-[var(--bg)]">
              {copy.caseStudyCta}
            </span>
          </Link>
          );
        })}
      </div>
    </SectionShell>
  );
}
