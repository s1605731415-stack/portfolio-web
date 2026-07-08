"use client";

import { useState } from "react";
import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";
import { SectionShell } from "./ui";

const tools = [
  {
    name: "Figma",
    zh: "用于界面系统、组件状态和设计交付。",
    en: "Interface systems, component states, and design handoff.",
  },
  {
    name: "Codex",
    zh: "把视觉策略拆成可验证的前端实现任务。",
    en: "Turns visual strategy into verifiable frontend implementation tasks.",
  },
  {
    name: "Cursor",
    zh: "快速探索组件结构、交互细节和代码重构。",
    en: "Fast exploration for component structure, interaction detail, and refactors.",
  },
  {
    name: "ChatGPT",
    zh: "辅助研究整理、文案推敲和 UX 假设对比。",
    en: "Research synthesis, UX copy, and assumption comparison.",
  },
  {
    name: "GSAP",
    zh: "用于滚动叙事、悬停反馈和克制的 motion 系统。",
    en: "Scroll narrative, hover feedback, and restrained motion systems.",
  },
  {
    name: "React",
    zh: "把设计拆成可维护、可交互、可交付的组件。",
    en: "Buildable components for maintainable and interactive delivery.",
  },
  {
    name: "Rive",
    zh: "适合产品动效原型和状态说明。",
    en: "Product motion prototypes and state explanation.",
  },
  {
    name: "Framer",
    zh: "用于早期交互原型和视觉节奏验证。",
    en: "Early interaction prototypes and rhythm validation.",
  },
];

export function AboutSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const [activeTool, setActiveTool] = useState(tools[0]);

  return (
    <SectionShell id="about" title={copy.aboutTitle} description={copy.aboutDescription}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[var(--color-paper)] p-6 text-[var(--color-ink)] sm:p-8">
          <p className="max-w-[720px] text-[16px] font-normal leading-[1.75] text-[var(--color-muted)]">{copy.aboutBody}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              language === "zh" ? "产品逻辑" : "Product logic",
              language === "zh" ? "界面系统" : "Interface system",
              language === "zh" ? "前端协作" : "Frontend collaboration",
            ].map((item) => (
              <div className="poster-micro border border-[var(--color-ink)]/12 p-4 text-[var(--color-muted)]" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden bg-[var(--color-ink)] p-5 text-[var(--color-paper)] sm:p-6">
          <div className="pointer-events-none absolute inset-0 noise-overlay opacity-70" />
          <div className="relative grid gap-5">
            <div>
              <p className="poster-micro text-white/48">
                {language === "zh" ? "工具不是清单，是工作流" : "Tools as workflow, not a checklist"}
              </p>
              <h3 className="poster-display mt-3 text-[44px] uppercase leading-[0.98] text-white">{activeTool.name}</h3>
              <p className="mt-3 max-w-[620px] text-[15px] font-normal leading-[1.65] text-white/62">
                {language === "zh" ? activeTool.zh : activeTool.en}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {tools.map((tool, index) => (
                <button
                  className={`poster-micro min-h-16 border p-3 text-left transition ${
                    activeTool.name === tool.name
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-black/28 text-white/58 hover:-translate-y-1 hover:border-white/28 hover:text-white"
                  }`}
                  key={tool.name}
                  onFocus={() => setActiveTool(tool)}
                  onMouseEnter={() => setActiveTool(tool)}
                  style={{ transform: `translateY(${index % 2 === 0 ? "0" : "10px"})` }}
                  type="button"
                >
                  {tool.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
