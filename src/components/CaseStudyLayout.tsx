import Link from "next/link";
import type { Project } from "../data/projects";
import { CaseStudyProgress } from "./CaseStudyProgress";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PlaceholderImage, Tag } from "./ui";

export function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <>
      <CaseStudyProgress />
      <Header />
      <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
        <Link className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]" href="/#work">
          Back to selected work
        </Link>
        <section className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-[var(--accent)]">{project.year} / {project.type}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <PlaceholderImage accent={project.accent} label={project.imageLabel} />
        </section>

        <div className="mt-20 grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 shadow-soft" aria-label="Case study sections">
              {project.caseStudy.map((section) => (
                <a className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--text)]" href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`} key={section.title}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
          <div className="space-y-6">
            {project.caseStudy.map((section) => (
              <section className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-soft sm:p-8" id={section.title.toLowerCase().replaceAll(" ", "-")} key={section.title}>
                <p className="text-sm font-semibold text-[var(--accent)]">{section.title}</p>
                <h2 className="mt-3 text-3xl font-semibold">{section.title === "Overview" ? project.title : section.title}</h2>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
