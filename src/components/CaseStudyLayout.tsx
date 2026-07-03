"use client";

import { ArrowLeft, BarChart3, Pause, Play, Volume2, X } from "lucide-react";
import Link from "next/link";
import type { Project } from "../data/projects";
import { getProjectCopy, uiCopy } from "../data/translations";
import { CaseStudyProgress } from "./CaseStudyProgress";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useLanguage } from "./LanguageProvider";
import { Tag } from "./ui";

const sectionLabels: Record<string, { zh: string; en: string }> = {
  Overview: { zh: "背景", en: "Overview" },
  Problem: { zh: "问题", en: "Problem" },
  Role: { zh: "角色", en: "Role" },
  Process: { zh: "过程", en: "Process" },
  "Design Decisions": { zh: "设计策略", en: "Design Decisions" },
  Outcome: { zh: "结果", en: "Outcome" },
};

export function CaseStudyLayout({ project }: { project: Project }) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const projectCopy = getProjectCopy(project, language);
  const sectionCopy = projectCopy.caseStudy.map((section) => ({
    ...section,
    displayTitle: sectionLabels[section.title]?.[language] ?? section.title,
  }));

  return (
    <>
      <CaseStudyProgress />
      <Header />
      <main className="bg-[#050505] px-3 pb-8 pt-24 text-black sm:px-6 sm:pt-28">
        <article className="light-grid relative mx-auto min-h-screen max-w-[1800px] overflow-hidden rounded-[1.8rem] bg-[#f4f4ef] px-5 pb-28 pt-7 shadow-[0_35px_120px_rgba(0,0,0,.55)] sm:px-10 lg:px-16">
          <Link className="inline-flex items-center gap-2 text-sm font-black text-black/70 transition hover:text-black" href="/#work">
            <ArrowLeft size={17} />
            {copy.back}
          </Link>
          <Link
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-black text-white transition hover:scale-105 sm:right-8 sm:top-7"
            href="/#work"
            aria-label={copy.back}
          >
            <X size={20} />
          </Link>

          <section className="mt-12 grid items-center gap-10 lg:grid-cols-[0.62fr_1fr]">
            <div>
              <p className="mb-6 flex items-center gap-3 text-sm font-black text-black/58">
                <span className="h-2.5 w-2.5 rounded-full bg-[#25e98a]" />
                {project.year} / {projectCopy.type}
              </p>
              <h1 className="text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">
                {projectCopy.title}
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-bold leading-9 text-black/54">{projectCopy.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {projectCopy.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[1.4rem] bg-black/8 p-4 shadow-[0_24px_80px_rgba(0,0,0,.15)]">
                <img className="aspect-[16/10] w-full rounded-[1rem] object-cover" src={project.media.hero} alt={project.media.alt} />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-48 overflow-hidden rounded-2xl border border-black/10 bg-white/75 p-2 shadow-[0_18px_50px_rgba(0,0,0,.18)] backdrop-blur lg:block">
                <img className="aspect-[4/3] w-full rounded-xl object-cover" src="/images/projects/case-study-method.png" alt="" />
              </div>
              <div className="absolute -right-4 -top-5 hidden rounded-2xl bg-black px-4 py-3 text-sm font-black text-[#38ff9c] shadow-[0_18px_50px_rgba(0,0,0,.28)] sm:block">
                {language === "zh" ? "继续向下" : "keep scrolling"}
              </div>
            </div>
          </section>

          <section className="mt-24 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {sectionCopy.slice(0, 4).map((section, index) => (
                <section className="rounded-[1.2rem] border border-black/10 bg-white/58 p-6 shadow-[0_18px_55px_rgba(0,0,0,.08)] backdrop-blur" id={section.title.toLowerCase().replaceAll(" ", "-")} key={section.title}>
                  <p className="flex items-center gap-3 text-sm font-black text-black/42">
                    <span className="text-[#12b86d]">{String(index + 1).padStart(2, "0")}</span>
                    {section.displayTitle}
                  </p>
                  <p className="mt-5 text-base font-bold leading-8 text-black/62">{section.body}</p>
                </section>
              ))}
            </div>
            <div className="rounded-[1.2rem] bg-black p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,.22)]">
              <div className="flex items-center gap-3">
                <BarChart3 size={20} className="text-[#38ff9c]" />
                <h2 className="text-3xl font-black tracking-[-0.07em]">{language === "zh" ? "结果与交付" : "Outcome & Handoff"}</h2>
              </div>
              <div className="mt-7 grid gap-4">
                {sectionCopy.slice(4).map((section) => (
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-5" key={section.title}>
                    <p className="text-sm font-black text-[#38ff9c]">{section.displayTitle}</p>
                    <p className="mt-3 text-sm font-bold leading-7 text-white/62">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 rounded-[1.4rem] bg-white/82 p-3 text-black shadow-[0_24px_80px_rgba(0,0,0,.22)] backdrop-blur-xl md:flex">
            <button className="grid h-12 w-12 place-items-center rounded-full bg-black text-white" type="button" aria-label="Play">
              <Play size={18} fill="currentColor" />
            </button>
            <button className="grid h-12 w-12 place-items-center rounded-full bg-black text-white" type="button" aria-label="Sound">
              <Volume2 size={18} />
            </button>
            {[
              { label: language === "zh" ? "研究" : "Research", src: project.media.thumb },
              { label: language === "zh" ? "流程" : "Flow", src: "/images/projects/case-study-method.png" },
              { label: language === "zh" ? "界面" : "UI", src: "/images/projects/design-system.png" },
              { label: language === "zh" ? "系统" : "System", src: "/images/projects/ai-workflow.png" },
            ].map((item, index) => (
              <a className={`block w-28 overflow-hidden rounded-xl border bg-black/5 ${index === 0 ? "border-[#25e98a]" : "border-black/8"}`} href={`#${sectionCopy[Math.min(index, sectionCopy.length - 1)].title.toLowerCase().replaceAll(" ", "-")}`} key={item.label}>
                <img className="h-12 w-full object-cover" src={item.src} alt="" />
                <span className="block px-2 py-1 text-center text-xs font-black">{item.label}</span>
              </a>
            ))}
            <button className="grid h-12 w-12 place-items-center rounded-full bg-black/8 text-black/70" type="button" aria-label="Pause">
              <Pause size={18} />
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
