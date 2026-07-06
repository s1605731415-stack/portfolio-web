"use client";

import gsap from "gsap";
import { ArrowDown, MoveDownRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { LowPolyCore } from "./LowPolyCore";

export function HeroSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      return;
    }
    const items = root.querySelectorAll("[data-hero-copy]");
    const timeline = gsap.timeline({ defaults: { ease: "expo.out" } });
    timeline
      .fromTo(items, { autoAlpha: 0, y: 42 }, { autoAlpha: 1, y: 0, duration: 1.05, stagger: 0.08 })
      .fromTo(root.querySelectorAll("[data-hero-mark]"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2, stagger: 0.06 }, "-=0.7");
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
      <div className="absolute inset-0 stage-grid opacity-50" />
      <div className="absolute inset-0 scanline-overlay" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute right-[8%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-[var(--accent)]/[0.055] blur-3xl" />

      <span className="corner-mark left-6 top-28 sm:left-10" data-hero-mark />
      <span className="corner-mark right-6 top-28 rotate-90 sm:right-10" data-hero-mark />
      <span className="corner-mark bottom-8 left-6 -rotate-90 sm:left-10" data-hero-mark />
      <span className="corner-mark bottom-8 right-6 rotate-180 sm:right-10" data-hero-mark />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1800px] items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="z-10 pb-8 lg:pb-0">
          <p className="mb-8 flex items-center gap-3 text-sm font-black text-white/66" data-hero-copy>
            <span className="h-px w-10 bg-[var(--accent)]" />
            {language === "zh" ? "孙旺 · AI 产品体验设计师" : "Sun Wang · AI Product Experience Designer"}
          </p>
          <h1 className="max-w-[44rem] text-7xl font-black uppercase leading-[0.86] tracking-normal text-[#f4f4ef] sm:text-8xl lg:text-[9.4rem] xl:text-[10.8rem]" data-hero-copy>
            <span className="block">SUN</span>
            <span className="block">WANG</span>
          </h1>
          <p className="mt-6 max-w-[48rem] text-4xl font-black uppercase leading-none tracking-normal text-white/88 sm:text-5xl lg:text-6xl" data-hero-copy>
            AI PRODUCT DESIGNER
          </p>
          <p className="mt-5 max-w-[44rem] text-base font-bold leading-7 text-white/58 sm:text-lg" data-hero-copy>
            {language === "zh"
              ? "界面 / 系统 / 动效 / 前端协作。用产品思维和 AI 工作流，把复杂体验转译成可理解、可交付的数字系统。"
              : "Interface / System / Motion / Front-end Collaboration. Product thinking and AI workflows translated into buildable digital systems."}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3" data-hero-copy>
            <a className="inline-flex min-h-12 items-center gap-3 border border-white/22 bg-white px-5 text-sm font-black text-black transition hover:bg-[var(--accent)]" href="#work">
              {copy.dock.visit}
              <ArrowDown size={16} />
            </a>
            <a className="inline-flex min-h-12 items-center gap-3 border border-white/14 bg-white/[0.035] px-5 text-sm font-black text-white/74 transition hover:border-white/50 hover:text-white" href="#method">
              {copy.nav.Method}
              <MoveDownRight size={16} />
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-56 top-32 w-[34rem] opacity-35 sm:-right-36 sm:w-[42rem] lg:pointer-events-auto lg:relative lg:right-auto lg:top-auto lg:w-auto lg:opacity-100" data-hero-copy>
          <LowPolyCore />
        </div>
      </div>

      <div className="relative mx-auto -mt-8 flex max-w-[1800px] items-end justify-between pb-2 text-xs font-black uppercase text-white/38">
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
