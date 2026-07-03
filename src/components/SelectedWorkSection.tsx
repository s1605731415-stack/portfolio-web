"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "../data/projects";
import { getProjectCopy, uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { SectionShell, Tag } from "./ui";

export function SelectedWorkSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const activeProject = projects.find((project) => project.slug === activeSlug) ?? projects[0];

  return (
    <SectionShell
      id="work"
      title={copy.selectedWorkTitle}
      description={copy.selectedWorkDescription}
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      <div className="pointer-events-none absolute inset-0 stage-grid" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      {activeProject && previewVisible ? (
        <div
          className="pointer-events-none fixed z-40 hidden w-[min(34vw,520px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.4rem] border border-white/12 bg-black/70 shadow-[0_32px_90px_rgba(0,0,0,.55)] lg:block"
          style={{ left: pointer.x, top: pointer.y }}
        >
          <img className="aspect-[16/9] w-full object-cover" src={activeProject.media.hero} alt="" />
        </div>
      ) : null}

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-0" onMouseLeave={() => setPreviewVisible(false)}>
          {projects.map((project, index) => {
            const projectCopy = getProjectCopy(project, language);
            const isActive = activeSlug === project.slug;
            return (
              <Link
                className="group border-t border-white/10 py-7 last:border-b sm:py-9"
                href={`/work/${project.slug}`}
                key={project.slug}
                onMouseEnter={() => {
                  setActiveSlug(project.slug);
                  setPreviewVisible(true);
                }}
                onMouseMove={(event) => setPointer({ x: event.clientX + 180, y: event.clientY })}
              >
                <div className="grid items-center gap-5 lg:grid-cols-[80px_1fr_auto]">
                  <span className={`text-xl font-black tracking-[-0.06em] transition ${isActive ? "text-[#38ff9c]" : "text-white/28"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={`text-[clamp(2.8rem,8vw,7.6rem)] font-black uppercase leading-[0.86] tracking-[-0.085em] transition ${isActive ? "text-white" : "text-white/44 group-hover:text-white"}`}>
                      {projectCopy.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm font-bold leading-6 text-white/48 sm:text-base">{projectCopy.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {projectCopy.tags.slice(0, 4).map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-white/14 px-4 py-3 text-xs font-black text-white/62 transition group-hover:border-[#38ff9c] group-hover:bg-[#38ff9c] group-hover:text-black">
                    {project.year} / {copy.caseStudyCta}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
