"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import { getProjectCopy, uiCopy } from "../data/translations";
import { registerGSAP, gsap } from "../lib/gsap";
import { motionTokens } from "../lib/motionTokens";
import { useLanguage } from "./LanguageProvider";
import { TiltCard } from "./motion/TiltCard";
import { ArchiveMeta } from "./visual/ArchiveMeta";
import { BarcodeMark } from "./visual/BarcodeMark";
import { ImageMask } from "./visual/ImageMask";
import { StarGlyph } from "./visual/StarGlyph";

const projectFilters = [
  { id: "all", zh: "全部", en: "All" },
  { id: "ai", zh: "AI 工作流", en: "AI Workflow" },
  { id: "health", zh: "健康 App", en: "Health App" },
  { id: "frontend", zh: "Web / 前端", en: "Web / Frontend" },
  { id: "system", zh: "产品系统", en: "Product System" },
] as const;

type ProjectFilter = (typeof projectFilters)[number]["id"];

export function SelectedWorkSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const displayedProjects = projects.filter((project) => matchFilter(project, activeFilter));

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) {
      return;
    }

    registerGSAP();
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as { desktop: boolean; reduceMotion: boolean };
        if (!desktop || reduceMotion) {
          return;
        }

        setActiveIndex(0);
        gsap.set(track, { x: 0 });
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96);
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance() + window.innerHeight * 0.65}`,
            scrub: 0.8,
            pin,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setActiveIndex(Math.round(self.progress * (displayedProjects.length - 1)));
            },
          },
        });

        return () => tween.kill();
      },
    );

    return () => mm.revert();
  }, [displayedProjects.length]);

  return (
    <section id="work" data-section="work" className="relative overflow-hidden border-t border-white/10 bg-[var(--color-black)] text-white" ref={sectionRef}>
      <div className="pointer-events-none absolute inset-0 cinematic-vignette" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <div className="relative mx-auto max-w-[1280px] px-5 pt-24 sm:px-8 lg:pt-0" ref={pinRef}>
        <div className="grid gap-8 py-10 lg:h-screen lg:grid-rows-[auto_1fr] lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="poster-micro mb-4 flex items-center gap-3 text-white/48">
                <span className="h-px w-12 bg-white/36" />
                {language === "zh" ? "作品展览 / 影像档案" : "featured exhibition / motion archive"}
              </p>
              <h2 className="poster-display max-w-2xl text-[46px] uppercase leading-[0.94] text-white sm:text-[68px] lg:text-[84px]">
                {copy.selectedWorkTitle}
              </h2>
            </div>
            <p className="max-w-[680px] text-[15px] font-normal leading-[1.7] text-white/62 sm:text-[16px]">{copy.selectedWorkDescription}</p>
          </div>

          <div className="flex flex-col gap-3 bg-[var(--color-paper)] p-4 text-[var(--color-ink)] shadow-[0_22px_70px_rgba(0,0,0,.35)] lg:flex-row lg:items-center lg:justify-between">
            <p className="poster-micro text-[var(--color-muted)]">
              {language === "zh" ? "你想先看哪类能力？" : "What do you want to explore first?"}
            </p>
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  className={`poster-micro border px-3 py-2 transition ${
                    activeFilter === filter.id
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]"
                      : "border-[var(--color-ink)]/14 bg-transparent text-[var(--color-muted)] hover:border-[var(--color-ink)]/45 hover:text-[var(--color-ink)]"
                  }`}
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  type="button"
                >
                  {language === "zh" ? filter.zh : filter.en}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden items-center overflow-visible lg:flex">
            <div className="flex gap-8 will-change-transform" ref={trackRef}>
              {displayedProjects.map((project, index) => (
                <ProjectExhibitionCard
                  active={activeIndex === index}
                  index={index}
                  key={project.slug}
                  language={language}
                  project={project}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:hidden">
            {displayedProjects.map((project, index) => (
              <ProjectMobileCard index={index} key={project.slug} language={language} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectExhibitionCard({
  active,
  index,
  language,
  project,
}: {
  active: boolean;
  index: number;
  language: "zh" | "en";
  project: Project;
}) {
  const projectCopy = getProjectCopy(project, language);

  return (
    <Link className="group block shrink-0" href={`/work/${project.slug}`}>
      <TiltCard
        className={`relative w-[74vw] max-w-[880px] overflow-hidden bg-[var(--color-paper)] p-5 text-[var(--color-ink)] shadow-[0_34px_100px_rgba(0,0,0,.5)] transition duration-500 [transform-style:preserve-3d] ${
          active ? "scale-100 opacity-100" : "scale-[0.94] opacity-58"
        }`}
        maxTilt={motionTokens.tilt.card}
      >
        <span aria-hidden="true" className="paper-texture pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-6 top-5 z-20 flex items-center justify-between text-[var(--color-ink)]">
          <BarcodeMark />
          <StarGlyph />
          <BarcodeMark />
        </div>
        <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 rotate-90 poster-micro text-[var(--color-muted)] lg:block">
          SUN WANG / CASE STUDY / {project.year}
        </div>

        <div className="relative z-10 grid min-h-[560px] gap-5 pt-9 lg:grid-cols-[78px_1fr_160px]">
          <div className="poster-micro hidden border-r border-[var(--color-ink)]/10 pr-4 text-[var(--color-muted)] lg:grid">
            {["01", "02", "03", "04", "05", "06", "07", "08", "09"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="grid gap-4">
            <ImageMask variant={index % 2 === 0 ? "ticket" : "arch"} className="min-h-[290px] border border-[var(--color-ink)]/10 lg:min-h-[350px]">
              <img className="h-full min-h-[290px] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.045] group-hover:grayscale-0 lg:min-h-[350px]" src={project.media.hero} alt={project.media.alt} />
            </ImageMask>
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="poster-micro text-[var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")} / {project.year} / {projectCopy.type}
                </p>
                <h3 className="poster-display mt-2 max-w-[680px] text-[42px] uppercase leading-[0.95] text-[var(--color-ink)] sm:text-[58px] lg:text-[68px]">
                  {projectCopy.title}
                </h3>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center border border-[var(--color-ink)] text-[var(--color-ink)] transition group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight size={22} />
              </span>
            </div>
          </div>

          <div className="hidden content-between gap-5 lg:grid">
            <ArchiveMeta label="TYPE" value={projectCopy.type} />
            <div className="poster-micro text-[var(--color-muted)]">
              <p>{projectCopy.summary}</p>
              <div className="mt-5 grid gap-2">
                {projectCopy.tags.slice(0, 3).map((tag) => (
                  <span className="border-t border-[var(--color-ink)]/12 pt-2" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="poster-micro translate-y-2 text-[var(--color-ink)] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {language === "zh" ? "查看案例" : "View Case Study"}
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-5 left-0 right-0 hidden justify-center poster-micro text-[var(--color-muted)] lg:flex">
          <span className="max-w-[420px] rotate-[-4deg] text-center">{language === "zh" ? "项目像一张暂停的影像票据" : "Project as a paused cinematic ticket"}</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 lg:hidden">
          {projectCopy.tags.slice(0, 3).map((tag) => (
            <span className="poster-micro border border-[var(--color-ink)]/14 px-3 py-2 text-[var(--color-muted)]" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-[15px] leading-[1.65] text-[var(--color-muted)] lg:hidden">{projectCopy.summary}</p>
      </TiltCard>
    </Link>
  );
}

function ProjectMobileCard({
  index,
  language,
  project,
}: {
  index: number;
  language: "zh" | "en";
  project: Project;
}) {
  const projectCopy = getProjectCopy(project, language);

  return (
    <Link className="group block bg-[var(--color-paper)] p-4 text-[var(--color-ink)] shadow-[0_24px_80px_rgba(0,0,0,.45)]" href={`/work/${project.slug}`}>
      <div className="mb-4 flex items-center justify-between">
        <BarcodeMark />
        <StarGlyph />
      </div>
      <ImageMask className="border border-[var(--color-ink)]/10" variant={index % 2 === 0 ? "ticket" : "arch"}>
        <img className="aspect-[16/10] w-full object-cover grayscale transition group-active:scale-[0.985]" src={project.media.hero} alt={project.media.alt} />
      </ImageMask>
      <div className="pt-5">
        <p className="poster-micro text-[var(--color-muted)]">
          {String(index + 1).padStart(2, "0")} / {project.year}
        </p>
        <h3 className="poster-display mt-3 text-[34px] uppercase leading-[0.98] text-[var(--color-ink)]">{projectCopy.title}</h3>
        <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[var(--color-muted)]">{projectCopy.summary}</p>
      </div>
    </Link>
  );
}

function matchFilter(project: Project, filter: ProjectFilter) {
  if (filter === "all") {
    return true;
  }

  const haystack = `${project.title} ${project.type} ${project.summary} ${project.tags.join(" ")}`.toLowerCase();
  if (filter === "ai") {
    return haystack.includes("ai") || haystack.includes("prompt") || haystack.includes("workflow");
  }
  if (filter === "health") {
    return haystack.includes("health") || haystack.includes("awak");
  }
  if (filter === "frontend") {
    return haystack.includes("web") || haystack.includes("frontend") || haystack.includes("website");
  }
  if (filter === "system") {
    return haystack.includes("system") || haystack.includes("platform") || haystack.includes("product");
  }
  return true;
}
