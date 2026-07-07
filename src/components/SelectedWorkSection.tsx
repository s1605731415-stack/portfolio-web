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
    <section id="work" data-section="work" className="relative overflow-hidden border-t border-white/10 bg-[#020202] text-white" ref={sectionRef}>
      <div className="pointer-events-none absolute inset-0 cinematic-vignette" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <div className="relative mx-auto max-w-[1280px] px-5 pt-24 sm:px-8 lg:pt-0" ref={pinRef}>
        <div className="grid gap-8 py-10 lg:h-screen lg:grid-rows-[auto_1fr] lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 flex items-center gap-3 text-[12px] font-medium uppercase text-white/48">
                <span className="h-px w-12 bg-[var(--accent)]" />
                {language === "zh" ? "作品展览" : "featured exhibition"}
              </p>
              <h2 className="max-w-2xl text-[32px] font-medium uppercase leading-[1.05] text-white sm:text-[48px] lg:text-[56px]">
                {copy.selectedWorkTitle}
              </h2>
            </div>
            <p className="max-w-[680px] text-[15px] font-normal leading-[1.7] text-white/58 sm:text-[16px]">{copy.selectedWorkDescription}</p>
          </div>
          <div className="flex flex-col gap-3 border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[13px] font-normal text-white/52">
              {language === "zh" ? "你想先看哪类能力？" : "What do you want to explore first?"}
            </p>
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  className={`border px-3 py-2 text-[12px] font-medium uppercase transition ${
                    activeFilter === filter.id
                      ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                      : "border-white/12 bg-black/28 text-white/58 hover:border-white/30 hover:text-white"
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
        className={`relative w-[72vw] max-w-[820px] overflow-hidden border bg-black transition duration-500 [transform-style:preserve-3d] ${
          active ? "scale-100 border-white/30 opacity-100" : "scale-[0.94] border-white/10 opacity-55"
        }`}
        maxTilt={motionTokens.tilt.card}
      >
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_var(--tilt-x)_var(--tilt-y),rgba(142,217,190,.16),transparent_18rem)] opacity-0 transition group-hover:opacity-100" />
        <div className="relative aspect-[16/9] overflow-hidden">
          <img className="h-full w-full object-cover opacity-84 grayscale transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0" src={project.media.hero} alt={project.media.alt} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.62),transparent_52%,rgba(0,0,0,.58))]" />
          <div className="absolute left-5 top-5 flex items-center gap-3 text-[12px] font-medium uppercase text-white/72">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-9 bg-white/28" />
            <span>{project.year}</span>
          </div>
          <ArrowUpRight className="absolute right-5 top-5 text-white/52 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]" size={21} />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="mb-3 max-w-[560px] text-[12px] font-medium uppercase leading-[1.55] text-white/56">{projectCopy.type}</p>
            <h3 className="max-w-[680px] text-[24px] font-medium uppercase leading-[1.08] text-white sm:text-[28px]">
              {projectCopy.title}
            </h3>
            <p className="mt-4 max-w-[640px] text-[15px] font-normal leading-[1.65] text-white/0 transition group-hover:text-white/66">{projectCopy.summary}</p>
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {projectCopy.tags.slice(0, 3).map((tag) => (
                  <span className="border border-white/14 bg-black/36 px-3 py-2 text-[11px] font-medium uppercase text-white/62" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="translate-y-2 text-[12px] font-medium uppercase text-[var(--accent)] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {language === "zh" ? "查看案例" : "View Case Study"}
              </span>
            </div>
          </div>
        </div>
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
    <Link className="group block border border-white/12 bg-black" href={`/work/${project.slug}`}>
      <img className="aspect-[16/10] w-full object-cover opacity-88 grayscale transition group-active:scale-[0.985]" src={project.media.hero} alt={project.media.alt} />
      <div className="p-5">
        <p className="text-[12px] font-medium uppercase text-white/50">
          {String(index + 1).padStart(2, "0")} / {project.year}
        </p>
        <h3 className="mt-3 text-[24px] font-medium uppercase leading-[1.15] text-white">{projectCopy.title}</h3>
        <p className="mt-3 text-[15px] font-normal leading-[1.65] text-white/62">{projectCopy.summary}</p>
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
