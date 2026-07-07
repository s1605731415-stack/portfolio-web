"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { MagneticButton } from "./motion/MagneticButton";
import { GlassPanel } from "./visual/GlassPanel";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[#020202] px-5 py-20 text-white sm:px-8">
      <div className="absolute inset-0 cinematic-vignette opacity-70" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative mx-auto max-w-[1280px]">
        <GlassPanel className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-medium uppercase text-white/44">
              <span className="h-px w-10 bg-[var(--accent)]" />
              {language === "zh" ? "下一步" : "next step"}
            </p>
            <h2 className="max-w-3xl text-[34px] font-medium uppercase leading-[1.05] sm:text-[48px] lg:text-[56px]">
              {language === "zh" ? "一起构建有判断力的数字产品。" : "Let’s build thoughtful digital products."}
            </h2>
            <p className="mt-5 max-w-[720px] text-[15px] font-normal leading-[1.75] text-white/58 sm:text-[16px]">
              {language === "zh"
                ? "如果你正在寻找一位能够连接产品逻辑、用户体验、视觉系统和 AI 工作流的设计师，可以联系我。"
                : "If you need a designer who connects product logic, user experience, visual systems, and AI workflows, let’s talk."}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <MagneticButton>
              <a className="inline-flex min-h-12 items-center gap-3 bg-white px-5 text-[13px] font-semibold text-black transition hover:bg-[var(--accent)]" href="mailto:hello@sunwang.design">
                {language === "zh" ? "联系我" : "Contact"}
                <ArrowUpRight size={16} />
              </a>
            </MagneticButton>
            <a className="inline-flex min-h-12 items-center border border-white/14 px-5 text-[13px] font-medium text-white/64 transition hover:-translate-y-0.5 hover:border-white/32 hover:text-white" href="#work">
              {language === "zh" ? "回看作品" : "Review Work"}
            </a>
          </div>
        </GlassPanel>

        <div className="mt-6 flex flex-col justify-between gap-3 text-[12px] text-white/38 sm:flex-row">
          <p>Sun Wang - Product-oriented UI/UX Designer</p>
          <p>Editorial Portfolio / Creative Frontend / AI Product Designer Case Study</p>
        </div>
      </div>
    </footer>
  );
}
