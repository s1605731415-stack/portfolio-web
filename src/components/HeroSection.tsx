"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import { uiCopy } from "../data/translations";
import { registerGSAP, gsap } from "../lib/gsap";
import { motionTokens } from "../lib/motionTokens";
import { useLanguage } from "./LanguageProvider";
import { MagneticButton } from "./motion/MagneticButton";
import { ArchiveMeta } from "./visual/ArchiveMeta";
import { BarcodeMark } from "./visual/BarcodeMark";
import { ImageMask } from "./visual/ImageMask";
import { OrnamentalNav } from "./visual/OrnamentalNav";
import { PosterPanel } from "./visual/PosterPanel";
import { StarGlyph } from "./visual/StarGlyph";

const featured = projects.slice(0, 3);

export function HeroSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      return;
    }

    registerGSAP();
    const timeline = gsap.timeline({ defaults: { ease: motionTokens.ease } });
    timeline
      .fromTo(root.querySelector("[data-poster-panel]"), { y: 34, scale: 0.985 }, { y: 0, scale: 1, duration: 0.82 })
      .fromTo(root.querySelectorAll("[data-poster-micro]"), { y: 10 }, { y: 0, duration: 0.45, stagger: 0.035 }, "-=0.38")
      .fromTo(root.querySelector("[data-poster-image]"), { y: 22, scale: 0.985 }, { y: 0, scale: 1, duration: 0.72 }, "-=0.28")
      .fromTo(root.querySelectorAll("[data-poster-title]"), { y: 24 }, { y: 0, duration: 0.72, stagger: 0.05 }, "-=0.2");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section id="top" data-section="top" className="relative overflow-hidden bg-[var(--color-black)] px-4 py-24 text-white sm:px-8 lg:py-28" ref={ref}>
      <div className="absolute inset-0 noise-overlay opacity-70" />
      <div className="relative mx-auto max-w-[1280px]" data-poster-panel>
        <PosterPanel className="min-h-[760px] px-5 pb-7 pt-20 sm:px-8 sm:pt-8 lg:min-h-[820px] lg:px-10">
          <div data-poster-micro>
            <OrnamentalNav />
          </div>

          <div className="absolute inset-x-10 top-24 grid grid-cols-[78px_1fr_78px] gap-3 text-[var(--color-ink)] max-md:hidden" data-poster-micro>
            <div className="poster-micro grid gap-6">
              {["01", "02", "03", "04", "05", "06", "07", "08", "09"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <ArchiveMeta label="ROLE" value={language === "zh" ? "AI 产品体验" : "AI Product UX"} />
              <ArchiveMeta label="YEAR" value="2026" align="center" />
              <ArchiveMeta label="SYSTEM" value="ARCHIVE POSTER" align="right" />
            </div>
            <div className="poster-micro grid justify-items-end gap-6">
              {["09", "08", "07", "06", "05", "04", "03", "02", "01"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-16" data-poster-image>
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.35fr_0.78fr] lg:items-start">
              <div className="hidden lg:grid gap-5 poster-micro text-[var(--color-muted)]">
                <div className="ornament-ring">
                  <span>DESIGN ARCHIVE</span>
                </div>
                <p>{language === "zh" ? "AI 时代的产品体验设计师" : "Product experience designer for the AI era."}</p>
                <BarcodeMark className="text-[var(--color-ink)]" />
              </div>

              <ImageMask variant="ticket" className="min-h-[330px] border border-[var(--color-ink)]/10 lg:min-h-[420px]">
                <img className="h-full min-h-[330px] w-full object-cover lg:min-h-[420px]" src={featured[0].media.hero} alt={featured[0].media.alt} />
              </ImageMask>

              <div className="hidden gap-4 lg:grid">
                {featured.slice(1, 2).map((project, index) => (
                  <ImageMask className="border border-[var(--color-ink)]/10" key={project.slug} variant={index === 0 ? "arch" : "poster"}>
                    <img className="aspect-[4/5] w-full object-cover" src={project.media.hero} alt={project.media.alt} />
                  </ImageMask>
                ))}
              </div>
            </div>

            <StarGlyph className="absolute left-[11%] top-8 hidden text-[var(--color-ink)] md:inline-grid" />
            <StarGlyph className="absolute right-[13%] top-10 hidden text-[var(--color-ink)] md:inline-grid" />
          </div>

          <div className="relative mt-8 grid gap-6 lg:grid-cols-[180px_1fr_180px] lg:items-end">
            <div className="poster-micro hidden text-[var(--color-muted)] lg:block" data-poster-micro>
              <p>{language === "zh" ? "不是普通作品集" : "Not a template portfolio"}</p>
              <p className="mt-4">{language === "zh" ? "界面 / 系统 / 动效 / 前端协作" : "Interface / System / Motion / Handoff"}</p>
            </div>

            <div className="text-center">
              <p className="poster-script text-[38px] leading-none text-[var(--color-ink-soft)] sm:text-[52px]" data-poster-title>
                Selected Works
              </p>
              <h1 className="poster-display mt-2 text-[58px] uppercase leading-[0.92] text-[var(--color-ink)] sm:text-[86px] lg:text-[112px]" data-poster-title>
                Design Archive
              </h1>
              <p className="mx-auto mt-4 max-w-[680px] text-[15px] font-normal leading-[1.7] text-[var(--color-muted)] sm:text-[16px]" data-poster-title>
                {language === "zh"
                  ? "AI 产品体验设计师 / UIUX Designer。用产品逻辑、视觉系统、AI 工作流和前端协作，把复杂想法整理成可交付的体验。"
                  : "AI Product Experience Designer / UIUX Designer. Product logic, visual systems, AI workflows, and frontend collaboration shaped into buildable experiences."}
              </p>
            </div>

            <div className="poster-micro hidden justify-items-end text-right text-[var(--color-muted)] lg:grid" data-poster-micro>
              <BarcodeMark className="text-[var(--color-ink)]" />
              <p className="mt-4">SUN WANG / 2026</p>
              <p>CHINA / DIGITAL PRODUCT</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3" data-poster-title>
            <MagneticButton>
              <a className="inline-flex min-h-12 items-center gap-3 bg-[var(--color-ink)] px-5 text-[12px] font-semibold uppercase text-[var(--color-paper)]" href="#work">
                {copy.dock.visit}
                <ArrowDown size={15} />
              </a>
            </MagneticButton>
            <a className="inline-flex min-h-12 items-center gap-3 border border-[var(--color-ink)]/22 px-5 text-[12px] font-semibold uppercase text-[var(--color-ink)] transition hover:-translate-y-0.5" href="#ai-workflow">
              AI Workflow
              <ArrowUpRight size={15} />
            </a>
          </div>
        </PosterPanel>
      </div>
    </section>
  );
}
