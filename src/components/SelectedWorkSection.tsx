"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Pause } from "lucide-react";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { getProjectCopy, uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";

export function SelectedWorkSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const sectionRef = useRef<HTMLElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-reel-item]",
        { autoAlpha: 0, y: 86, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-reel-media]").forEach((item) => {
        gsap.fromTo(
          item,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  const handlePointerMove = (event: MouseEvent<HTMLAnchorElement>) => {
    setPointer({ x: event.clientX + 18, y: event.clientY + 18 });
  };

  return (
    <section
      id="work"
      data-section="work"
      className="relative overflow-hidden border-t border-white/10 bg-[#020202] px-5 py-20 text-white sm:px-8 lg:py-28"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0 cinematic-vignette" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_46rem)]" />

      {cursorVisible ? (
        <div
          className="pointer-events-none fixed z-50 hidden items-center gap-2 border border-white/18 bg-black/78 px-3 py-2 text-xs font-black uppercase text-white shadow-[0_22px_60px_rgba(0,0,0,.45)] backdrop-blur-md lg:inline-flex"
          style={{ left: pointer.x, top: pointer.y }}
        >
          <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
          {copy.caseStudyCta}
        </div>
      ) : null}

      <div className="relative mx-auto max-w-[1800px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase text-white/48">
              <span className="h-px w-12 bg-[var(--accent)]" />
              {language === "zh" ? "影像化项目片段" : "motion reel fragments"}
            </p>
            <h2 className="text-6xl font-black uppercase leading-none tracking-normal text-white sm:text-7xl lg:text-8xl">
              {copy.selectedWorkTitle}
            </h2>
          </div>
          <p className="max-w-2xl text-base font-bold leading-7 text-white/55 sm:text-lg">{copy.selectedWorkDescription}</p>
        </div>

        <div className="grid gap-16 sm:gap-20 lg:gap-24" onMouseLeave={() => setCursorVisible(false)}>
          {projects.map((project, index) => {
            const projectCopy = getProjectCopy(project, language);
            const isOdd = index % 2 === 1;
            const ghostTitle = project.title.replace(/&/g, "/").toUpperCase();
            return (
              <Link
                className={`group relative block ${isOdd ? "lg:ml-auto lg:w-[82%]" : "lg:w-[86%]"}`}
                data-reel-item
                href={`/work/${project.slug}`}
                key={project.slug}
                onMouseEnter={() => setCursorVisible(true)}
                onMouseMove={handlePointerMove}
              >
                <div className={`pointer-events-none absolute -top-9 hidden max-w-[48rem] select-none text-7xl font-black uppercase leading-none tracking-normal text-white/[0.035] lg:block ${isOdd ? "right-6 text-right" : "left-6"}`}>
                  {ghostTitle}
                </div>

                <div className="relative overflow-hidden rounded-sm border border-white/14 bg-black shadow-[0_34px_120px_rgba(0,0,0,.5)] transition duration-500 group-hover:border-white/34">
                  <div className="absolute left-0 top-0 z-20 flex w-full items-center justify-between border-b border-white/10 bg-black/24 px-4 py-3 backdrop-blur-sm sm:px-5">
                    <div className="flex items-center gap-3 text-xs font-black uppercase text-white/62">
                      <span className="grid h-8 w-8 place-items-center border border-white/18 text-white/84">
                        <Pause size={12} fill="currentColor" />
                      </span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span className="h-px w-8 bg-white/22" />
                      <span>{project.year}</span>
                    </div>
                    <ArrowUpRight className="text-white/48 transition group-hover:text-[var(--accent)]" size={19} />
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/8]">
                    <img
                      alt={project.media.alt}
                      className="h-[116%] w-full object-cover opacity-72 grayscale transition duration-700 ease-out group-hover:scale-[1.04] group-hover:rotate-[0.8deg] group-hover:opacity-100 group-hover:grayscale-0"
                      data-reel-media
                      src={project.media.hero}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.12)_48%,rgba(0,0,0,.62))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_30%,rgba(255,255,255,.14),transparent_26rem)] opacity-70" />

                    <div className="absolute bottom-0 left-0 right-0 z-20 grid gap-5 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-end lg:p-9">
                      <div>
                        <p className="mb-4 max-w-xl text-xs font-black uppercase leading-5 text-white/52">
                          {projectCopy.type}
                        </p>
                        <h3 className="max-w-4xl translate-y-3 text-4xl font-black uppercase leading-[1.02] tracking-normal text-white transition duration-500 group-hover:translate-y-0 sm:text-5xl lg:text-6xl">
                          {projectCopy.title}
                        </h3>
                        <p className="mt-4 max-w-2xl translate-y-3 text-sm font-bold leading-6 text-white/0 transition duration-500 group-hover:translate-y-0 group-hover:text-white/68 sm:text-base">
                          {projectCopy.summary}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 opacity-75 transition group-hover:opacity-100 lg:max-w-sm lg:justify-end">
                        {projectCopy.tags.slice(0, 4).map((tag) => (
                          <span className="border border-white/16 bg-black/38 px-3 py-2 text-[10px] font-black uppercase text-white/66 backdrop-blur-sm" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
