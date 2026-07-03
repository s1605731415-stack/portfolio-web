"use client";

import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { uiCopy } from "../data/translations";
import { HeroPreviewCluster } from "./HeroPreviewCluster";
import { useLanguage } from "./LanguageProvider";

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
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline.fromTo(items, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 });
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      id="top"
      data-section="top"
      className="relative min-h-screen overflow-hidden px-4 pb-10 pt-24 text-white sm:px-7 sm:pt-28"
      ref={ref}
    >
      <div className="absolute inset-0 stage-grid" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#38ff9c]/[0.055] blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1800px] items-center gap-8 lg:grid-cols-[0.64fr_1.1fr]">
        <div className="z-10 max-w-2xl">
          <p className="mb-10 flex items-center gap-3 text-sm font-black text-white/72" data-hero-copy>
            <span className="h-2.5 w-2.5 rounded-full bg-[#38ff9c]" />
            {language === "zh" ? "你好，我是孙望" : "Hey, I am Sun Wang"}
          </p>
          <h1 className="text-[clamp(4.4rem,11vw,11rem)] font-black leading-[0.82] tracking-[-0.08em]" data-hero-copy>
            {copy.heroTitle}
          </h1>
          <p className="mt-7 max-w-[34rem] text-xl font-black leading-8 tracking-[-0.04em] text-white/72 sm:text-2xl" data-hero-copy>
            {copy.heroSubtitle}
          </p>
          <p className="mt-5 max-w-[34rem] text-base font-bold leading-7 text-white/48" data-hero-copy>
            {copy.heroChinese}
          </p>
          <div className="mt-9 flex flex-wrap gap-3" data-hero-copy>
            <a className="inline-flex items-center gap-3 rounded-full bg-[#38ff9c] px-5 py-3 text-sm font-black text-black transition hover:scale-[1.03]" href="#work">
              {copy.dock.visit}
              <ArrowDown size={16} />
            </a>
            <a className="inline-flex items-center rounded-full border border-white/14 bg-white/5 px-5 py-3 text-sm font-black text-white/75 transition hover:bg-white hover:text-black" href="#method">
              {copy.nav.Method}
            </a>
          </div>
        </div>

        <div className="relative -mx-4 sm:mx-0" data-hero-copy>
          <HeroPreviewCluster />
        </div>
      </div>
    </section>
  );
}
