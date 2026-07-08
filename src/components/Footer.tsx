"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { MagneticButton } from "./motion/MagneticButton";
import { BarcodeMark } from "./visual/BarcodeMark";
import { PosterPanel } from "./visual/PosterPanel";
import { StarGlyph } from "./visual/StarGlyph";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--color-black)] px-5 py-20 text-white sm:px-8">
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative mx-auto max-w-[1280px]">
        <PosterPanel className="px-6 pb-9 pt-16 sm:p-9">
          <div className="flex items-center justify-between text-[var(--color-ink)]">
            <BarcodeMark />
            <StarGlyph />
            <BarcodeMark />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="poster-micro mb-5 text-[var(--color-muted)]">{language === "zh" ? "下一步 / 联系入口" : "next step / contact gate"}</p>
              <h2 className="poster-display max-w-4xl text-[44px] uppercase leading-[0.95] text-[var(--color-ink)] sm:text-[68px] lg:text-[86px]">
                {language === "zh" ? "一起构建有判断力的数字产品。" : "Let’s build thoughtful digital products."}
              </h2>
              <p className="mt-5 max-w-[720px] text-[15px] font-normal leading-[1.75] text-[var(--color-muted)] sm:text-[16px]">
                {language === "zh"
                  ? "如果你正在寻找一位能够连接产品逻辑、用户体验、视觉系统和 AI 工作流的设计师，可以联系我。"
                  : "If you need a designer who connects product logic, user experience, visual systems, and AI workflows, let’s talk."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <MagneticButton>
                <a className="poster-micro inline-flex min-h-12 items-center gap-3 bg-[var(--color-ink)] px-5 text-[var(--color-paper)] transition hover:-translate-y-0.5" href="mailto:hello@sunwang.design">
                  {language === "zh" ? "联系我" : "Contact"}
                  <ArrowUpRight size={16} />
                </a>
              </MagneticButton>
              <a className="poster-micro inline-flex min-h-12 items-center border border-[var(--color-ink)]/18 px-5 text-[var(--color-muted)] transition hover:-translate-y-0.5 hover:border-[var(--color-ink)]/44 hover:text-[var(--color-ink)]" href="#work">
                {language === "zh" ? "回看作品" : "Review Work"}
              </a>
            </div>
          </div>
        </PosterPanel>

        <div className="mt-6 flex flex-col justify-between gap-3 poster-micro text-white/38 sm:flex-row">
          <p>Sun Wang - Product-oriented UI/UX Designer</p>
          <p>Editorial Portfolio / Creative Frontend / AI Product Designer Case Study</p>
        </div>
      </div>
    </footer>
  );
}
