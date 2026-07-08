"use client";

import { ArrowLeft, ArrowUpRight, BarChart3, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "../data/projects";
import { getProjectCopy, uiCopy } from "../data/translations";
import { registerGSAP, gsap, ScrollTrigger } from "../lib/gsap";
import { CaseStudyProgress } from "./CaseStudyProgress";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useLanguage } from "./LanguageProvider";
import { BeforeAfterSlider } from "./motion/BeforeAfterSlider";
import { ArchiveMeta } from "./visual/ArchiveMeta";
import { BarcodeMark } from "./visual/BarcodeMark";
import { ImageMask } from "./visual/ImageMask";
import { StarGlyph } from "./visual/StarGlyph";

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
      <main className="bg-[var(--color-black)] px-3 pb-8 pt-24 text-[var(--color-ink)] sm:px-6 sm:pt-28">
        <article className="relative mx-auto max-w-[1280px] overflow-hidden bg-[var(--color-paper)] px-5 pb-24 pt-7 shadow-[0_34px_100px_rgba(0,0,0,.5)] sm:px-8 lg:px-12">
          <span aria-hidden="true" className="paper-texture pointer-events-none absolute inset-0" />
          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4">
              <Link className="poster-micro inline-flex items-center gap-2 text-[var(--color-muted)] transition hover:text-[var(--color-ink)]" href="/#work">
                <ArrowLeft size={15} />
                {copy.back}
              </Link>
              <div className="hidden items-center gap-6 text-[var(--color-ink)] sm:flex">
                <BarcodeMark />
                <StarGlyph />
                <BarcodeMark />
              </div>
              <Link
                className="grid h-11 w-11 place-items-center bg-[var(--color-ink)] text-[var(--color-paper)] transition hover:scale-105"
                href="/#work"
                aria-label={copy.back}
              >
                <X size={19} />
              </Link>
            </div>

            <section className="mt-12 grid items-end gap-10 lg:grid-cols-[0.76fr_1fr]">
              <div>
                <div className="mb-8 grid grid-cols-3 gap-4 border-y border-[var(--color-ink)]/12 py-4">
                  <ArchiveMeta label="YEAR" value={project.year} />
                  <ArchiveMeta label="TYPE" value={projectCopy.type} align="center" />
                  <ArchiveMeta label="ENTRY" value={project.slug.toUpperCase().slice(0, 12)} align="right" />
                </div>
                <p className="poster-script text-[38px] leading-none text-[var(--color-ink-soft)] sm:text-[52px]">
                  Case Study
                </p>
                <h1 className="poster-display mt-3 max-w-[760px] text-[48px] uppercase leading-[0.92] text-[var(--color-ink)] sm:text-[78px] lg:text-[96px]">
                  {projectCopy.title}
                </h1>
                <p className="mt-6 max-w-[720px] text-[16px] font-normal leading-[1.75] text-[var(--color-muted)]">{projectCopy.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {projectCopy.tags.map((tag) => (
                    <span className="poster-micro border border-[var(--color-ink)]/16 px-3 py-2 text-[var(--color-muted)]" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative" data-case-media>
                <ImageMask variant="arch" className="border border-[var(--color-ink)]/10">
                  <img className="aspect-[4/5] w-full object-cover grayscale" src={project.media.hero} alt={project.media.alt} />
                </ImageMask>
                <div className="absolute -bottom-7 left-5 right-5 grid gap-2 bg-[var(--color-ink)] p-4 text-[var(--color-paper)] shadow-[0_20px_60px_rgba(0,0,0,.3)] sm:left-auto sm:w-72">
                  <p className="poster-micro text-white/54">{language === "zh" ? "阅读方式" : "Reading Mode"}</p>
                  <a className="poster-micro inline-flex items-center justify-between text-white" href="#overview">
                    {language === "zh" ? "向下进入案例档案" : "Enter project archive"}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-28 grid gap-10 lg:grid-cols-[240px_1fr]">
              <aside className="hidden lg:block">
                <nav className="sticky top-28 grid gap-2 border-l border-[var(--color-ink)]/12 pl-4 poster-micro" aria-label={copy.toc}>
                  <p className="mb-4 text-[var(--color-faint)]">{copy.toc}</p>
                  {sectionCopy.map((section, index) => (
                    <a
                      className={`transition ${activeSection === section.title ? "translate-x-1 text-[var(--color-ink)]" : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"}`}
                      href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`}
                      key={section.title}
                    >
                      {String(index + 1).padStart(2, "0")} / {section.displayTitle}
                    </a>
                  ))}
                </nav>
              </aside>

              <div className="grid gap-7">
                {sectionCopy.map((section, index) => {
                  const isOutcome = section.title === "Outcome" || section.title === "Design Decisions";
                  return (
                    <section
                      className={`max-w-[780px] scroll-mt-32 border p-6 sm:p-7 ${
                        isOutcome ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]" : "border-[var(--color-ink)]/12 bg-[var(--color-paper-light)] text-[var(--color-ink)]"
                      }`}
                      data-case-section={section.title}
                      id={section.title.toLowerCase().replaceAll(" ", "-")}
                      key={section.title}
                    >
                      <p className={`poster-micro flex items-center gap-3 ${isOutcome ? "text-white/52" : "text-[var(--color-muted)]"}`}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span className="h-px w-10 bg-current opacity-40" />
                        {section.displayTitle}
                      </p>
                      <p className={`mt-5 text-[16px] font-normal leading-[1.8] ${isOutcome ? "text-white/76" : "text-[var(--color-muted)]"}`}>{section.body}</p>
                    </section>
                  );
                })}

                <div className="max-w-[1200px] bg-[var(--color-ink)] p-4 text-[var(--color-paper)]" data-case-media>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <BarChart3 size={18} />
                      <h2 className="poster-display text-[34px] uppercase leading-[0.98]">{language === "zh" ? "视觉证据" : "Visual Evidence"}</h2>
                    </div>
                    <BarcodeMark className="hidden opacity-70 sm:inline-block" />
                  </div>
                  <ImageMask variant="ticket" className="border border-white/10">
                    <img className="aspect-[16/8] w-full object-cover" src={project.media.hero} alt={project.media.alt} />
                  </ImageMask>
                </div>

                {project.media.beforeAfter ? (
                  <div className="max-w-[1200px] bg-[var(--color-ink)] p-4 text-[var(--color-paper)]" data-case-media>
                    <h2 className="poster-display mb-4 text-[34px] uppercase leading-[0.98]">
                      {language === "zh" ? "改版前后对比" : "Before / After"}
                    </h2>
                    <BeforeAfterSlider
                      after={project.media.beforeAfter.after}
                      afterAlt={project.media.beforeAfter.afterAlt}
                      before={project.media.beforeAfter.before}
                      beforeAlt={project.media.beforeAfter.beforeAlt}
                      afterLabel={language === "zh" ? "改版后" : "After"}
                      beforeLabel={language === "zh" ? "改版前" : "Before"}
                    />
                  </div>
                ) : null}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
