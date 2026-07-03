"use client";

import Link from "next/link";
import type { Project } from "../data/projects";
import { getProjectCopy, uiCopy } from "../data/translations";
import { CaseStudyProgress } from "./CaseStudyProgress";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useLanguage } from "./LanguageProvider";
import { PlaceholderImage, Tag } from "./ui";

export function CaseStudyLayout({ project }: { project: Project }) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const projectCopy = getProjectCopy(project, language);

  return (
    <>
      <CaseStudyProgress />
      <Header />
      <main className="mx-auto w-full max-w-[1800px] px-6 pb-28 pt-32 sm:px-10">
        <Link className="text-sm font-black text-[var(--muted)] underline underline-offset-4 transition hover:text-[var(--text)]" href="/#work">
          {copy.back}
        </Link>
        <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <p className="text-sm font-black uppercase text-[var(--muted)]">{project.year} / {projectCopy.type}</p>
            <h1 className="mt-4 text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">{projectCopy.title}</h1>
            <p className="mt-6 max-w-4xl text-xl font-bold leading-8 text-[var(--muted)]">{projectCopy.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {projectCopy.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <PlaceholderImage accent={project.accent} label={projectCopy.imageLabel} />
        </section>

        <div className="mt-20 grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 rounded-lg border-2 border-[var(--text)] bg-[var(--surface)] p-4 shadow-soft" aria-label={copy.toc}>
              {projectCopy.caseStudy.map((section) => (
                <a className="block rounded-lg px-3 py-2 text-sm font-black text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--text)]" href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`} key={section.title}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
          <div className="space-y-6">
            {projectCopy.caseStudy.map((section) => (
              <section className="rounded-lg border-2 border-[var(--text)] bg-[var(--surface)] p-6 shadow-soft sm:p-8" id={section.title.toLowerCase().replaceAll(" ", "-")} key={section.title}>
                <p className="text-sm font-black uppercase text-[var(--muted)]">{section.title}</p>
                <h2 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.07em]">{section.title === "Overview" ? projectCopy.title : section.title}</h2>
                <p className="mt-5 text-lg font-bold leading-8 text-[var(--muted)]">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
