import Link from "next/link";
import { projects } from "../data/projects";
import { PlaceholderImage, SectionShell, Tag } from "./ui";

export function SelectedWorkSection() {
  return (
    <SectionShell
      id="work"
      title="Selected Work"
      description="精选项目不是为了展示数量，而是为了证明我如何处理复杂产品、AI 工具、品牌官网、B 端平台和真实商业项目。"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <Link
            className="group rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            href={`/work/${project.slug}`}
            key={project.slug}
          >
            <PlaceholderImage accent={project.accent} label={project.imageLabel} />
            <div className="mt-5 flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-medium text-[var(--accent)]">{project.year} / {project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">{project.title}</h3>
              </div>
              <span className="shrink-0 rounded-lg border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)] transition group-hover:border-[var(--text)] group-hover:text-[var(--text)]">
                View Case Study
              </span>
            </div>
            <p className="mt-4 leading-7 text-[var(--muted)]">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
