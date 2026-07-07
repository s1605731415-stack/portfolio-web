"use client";

import { ArrowDown, MoveDownRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { uiCopy } from "../data/translations";
import { projects } from "../data/projects";
import { registerGSAP, gsap } from "../lib/gsap";
import { motionTokens } from "../lib/motionTokens";
import { HeroProjectWall } from "./HeroProjectWall";
import { useLanguage } from "./LanguageProvider";
import { MagneticButton } from "./motion/MagneticButton";
import { HeroCanvas } from "./visual/HeroCanvas";

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
    const items = root.querySelectorAll("[data-hero-copy]");
    const timeline = gsap.timeline({ defaults: { ease: motionTokens.ease } });
    timeline
      .fromTo(items, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.68, stagger: 0.06 })
      .fromTo(root.querySelectorAll("[data-hero-media]"), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.75 }, 0.18)
      .fromTo(root.querySelectorAll("[data-hero-mark]"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.75, stagger: 0.05 }, 0.22);
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      id="top"
      data-section="top"
      className="relative min-h-screen overflow-hidden bg-[#020202] px-5 pb-8 pt-24 text-white sm:px-8 sm:pt-28"
      ref={ref}
    >
      <div className="absolute inset-0 cinematic-vignette" />
      <HeroCanvas />
      <div className="absolute inset-0 stage-grid opacity-50" />
      <div className="absolute inset-0 scanline-overlay" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute right-[8%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-[var(--accent)]/[0.055] blur-3xl" />

      <span className="corner-mark left-6 top-28 sm:left-10" data-hero-mark />
      <span className="corner-mark right-6 top-28 rotate-90 sm:right-10" data-hero-mark />
      <span className="corner-mark bottom-8 left-6 -rotate-90 sm:left-10" data-hero-mark />
      <span className="corner-mark bottom-8 right-6 rotate-180 sm:right-10" data-hero-mark />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1280px] items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="z-10 pb-8 lg:pb-0">
          <p className="mb-7 flex items-center gap-3 text-sm font-medium text-white/64" data-hero-copy>
            <span className="h-px w-10 bg-[var(--accent)]" />
            {language === "zh" ? "孙旺 · AI 产品体验设计师" : "Sun Wang · AI Product Experience Designer"}
          </p>
          <h1 className="max-w-[34rem] text-[46px] font-semibold uppercase leading-[0.98] tracking-normal text-[#f4f4ef] sm:text-[64px] lg:text-[72px]" data-hero-copy>
            <span className="block">SUN</span>
            <span className="block">WANG</span>
          </h1>
          <p className="mt-5 max-w-[36rem] text-[30px] font-medium uppercase leading-[1.05] tracking-normal text-white/86 sm:text-[42px] lg:text-[52px]" data-hero-copy>
            AI PRODUCT DESIGNER
          </p>
          <p className="mt-5 max-w-[640px] text-[15px] font-normal leading-[1.72] text-white/62 sm:text-[18px]" data-hero-copy>
            {language === "zh"
              ? "界面 / 系统 / 动效 / 前端协作。用产品思维和 AI 工作流，把复杂体验转译成可理解、可交付的数字系统。"
              : "Interface / System / Motion / Front-end Collaboration. Product thinking and AI workflows translated into buildable digital systems."}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-[12px] font-medium uppercase text-white/58" data-hero-copy>
            {["Interface", "System", "Motion", "AI Workflow"].map((tag) => (
              <span className="border border-white/12 bg-white/[0.035] px-3 py-2" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3" data-hero-copy>
            <MagneticButton>
              <a className="inline-flex min-h-12 items-center gap-3 border border-white/22 bg-white px-5 text-[13px] font-semibold text-black transition hover:bg-[var(--accent)]" href="#work">
                {copy.dock.visit}
                <ArrowDown size={16} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a className="inline-flex min-h-12 items-center gap-3 border border-white/14 bg-white/[0.035] px-5 text-[13px] font-medium text-white/74 transition hover:border-white/50 hover:text-white" href="#method">
                {copy.nav.Method}
                <MoveDownRight size={16} />
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="relative -mx-5 hidden sm:block" data-hero-media>
          <HeroProjectWall />
        </div>
      </div>

      <div className="relative mx-auto mt-2 block max-w-[1280px] sm:hidden" data-hero-media>
        <a className="block overflow-hidden border border-white/12 bg-black" href={`/work/${projects[0].slug}`}>
          <img className="aspect-[16/10] w-full object-cover opacity-80 grayscale" src={projects[0].media.hero} alt={projects[0].media.alt} />
        </a>
      </div>

      <div className="relative mx-auto -mt-8 flex max-w-[1280px] items-end justify-between pb-2 text-xs font-medium uppercase text-white/38">
        <a className="group inline-flex items-center gap-3" href="#work" data-hero-copy>
          <span className="grid h-12 w-5 place-items-center border border-white/16">
            <span className="h-2 w-px bg-[var(--accent)] transition group-hover:translate-y-2" />
          </span>
          {language === "zh" ? "向下浏览" : "scroll to explore"}
        </a>
        <span className="hidden items-center gap-3 sm:inline-flex" data-hero-copy>
          based in China
          <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
        </span>
      </div>
    </section>
  );
}
