"use client";

import { ArrowLeft, BarChart3, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "../data/projects";
import { getProjectCopy, uiCopy } from "../data/translations";
import { registerGSAP, gsap, ScrollTrigger } from "../lib/gsap";
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
  const [activeSection, setActiveSection] = useState("Overview");
  const projectCopy = getProjectCopy(project, language);
  const sectionCopy = projectCopy.caseStudy.map((section) => ({
    ...section,
    displayTitle: sectionLabels[section.title]?.[language] ?? section.title,
  }));

  useEffect(() => {
    registerGSAP();

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-case-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const target = visible?.target as HTMLElement | undefined;
        if (target?.dataset.caseSection) {
          setActiveSection(target.dataset.caseSection);
        }
      },
      { rootMargin: "-30% 0px -52% 0px", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(
        "[data-case-media]",
        { autoAlpha: 0, y: 32, scale: 0.985 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: "[data-case-media]",
            start: "top 82%",
          },
        },
      );
    }

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === "[data-case-media]") {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <>
      <CaseStudyProgress />
      <Header />
      <main className="bg-[#050505] px-3 pb-8 pt-24 text-black sm:px-6 sm:pt-28">
        <article className="light-grid relative mx-auto min-h-screen max-w-[1280px] overflow-hidden rounded-[1rem] bg-[#f4f4ef] px-5 pb-24 pt-7 shadow-[0_28px_90px_rgba(0,0,0,.42)] sm:px-8 lg:px-12">
          <Link className="inline-flex items-center gap-2 text-[13px] font-medium text-black/64 transition hover:text-black" href="/#work">
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
              <p className="mb-6 flex items-center gap-3 text-[13px] font-medium text-black/58">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                {project.year} / {projectCopy.type}
              </p>
              <h1 className="max-w-[720px] text-[38px] font-medium uppercase leading-[1.02] sm:text-[52px] lg:text-[64px]">
                {projectCopy.title}
              </h1>
              <p className="mt-6 max-w-[720px] text-[16px] font-normal leading-[1.75] text-black/58">{projectCopy.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {projectCopy.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[0.8rem] bg-black/8 p-3 shadow-[0_18px_55px_rgba(0,0,0,.12)]" data-case-media>
                <img className="aspect-[16/10] w-full rounded-[0.55rem] object-cover" src={project.media.hero} alt={project.media.alt} />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-48 overflow-hidden rounded-2xl border border-black/10 bg-white/75 p-2 shadow-[0_18px_50px_rgba(0,0,0,.18)] backdrop-blur lg:block">
                <img className="aspect-[4/3] w-full rounded-xl object-cover" src="/images/projects/case-study-method.png" alt="" />
              </div>
              <div className="absolute -right-4 -top-5 hidden rounded-2xl bg-black px-4 py-3 text-sm font-black text-[var(--accent)] shadow-[0_18px_50px_rgba(0,0,0,.28)] sm:block">
                {language === "zh" ? "继续向下" : "keep scrolling"}
              </div>
            </div>
          </section>

          <section className="mt-24 grid gap-10 lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <nav className="sticky top-28 grid gap-2 border-l border-black/10 pl-4 text-[13px]" aria-label={copy.toc}>
                <p className="mb-3 font-medium uppercase text-black/38">{copy.toc}</p>
                {sectionCopy.map((section, index) => (
                  <a
                    className={`transition ${activeSection === section.title ? "translate-x-1 text-black" : "text-black/42 hover:text-black"}`}
                    href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`}
                    key={section.title}
                  >
                    {String(index + 1).padStart(2, "0")} / {section.displayTitle}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="grid gap-8">
              {sectionCopy.map((section, index) => {
                const isOutcome = section.title === "Outcome" || section.title === "Design Decisions";
                return (
                  <section
                    className={`max-w-[720px] scroll-mt-32 rounded-[0.8rem] border p-6 sm:p-7 ${
                      isOutcome ? "border-black bg-black text-white" : "border-black/10 bg-white/58 text-black backdrop-blur"
                    }`}
                    data-case-section={section.title}
                    id={section.title.toLowerCase().replaceAll(" ", "-")}
                    key={section.title}
                  >
                    <p className={`flex items-center gap-3 text-[13px] font-medium ${isOutcome ? "text-white/48" : "text-black/42"}`}>
                      <span className="text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                      {section.displayTitle}
                    </p>
                    <p className={`mt-5 text-[16px] font-normal leading-[1.75] ${isOutcome ? "text-white/68" : "text-black/62"}`}>{section.body}</p>
                  </section>
                );
              })}

              <div className="max-w-[1200px] rounded-[0.8rem] bg-black p-4 text-white" data-case-media>
                <div className="mb-4 flex items-center gap-3">
                  <BarChart3 size={18} className="text-[var(--accent)]" />
                  <h2 className="text-[28px] font-medium uppercase leading-[1.15]">{language === "zh" ? "视觉证据" : "Visual Evidence"}</h2>
                </div>
                <img className="aspect-[16/8] w-full rounded-[0.55rem] object-cover" src={project.media.hero} alt={project.media.alt} />
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
