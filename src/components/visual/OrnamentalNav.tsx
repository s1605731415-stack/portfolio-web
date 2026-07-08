"use client";

import { navigationItems } from "../../data/navigation";
import { uiCopy } from "../../data/translations";
import { useLanguage } from "../LanguageProvider";
import { BarcodeMark } from "./BarcodeMark";
import { StarGlyph } from "./StarGlyph";

export function OrnamentalNav({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const nav = navigationItems.filter((item) => ["Work", "AI Workflow", "About", "Contact"].includes(item.label));

  return (
    <div className={`grid gap-4 poster-micro md:grid-cols-[1fr_auto_1fr] md:items-center ${className}`}>
      <div className="hidden items-center gap-4 md:flex">
        <span>AI PRODUCT DESIGNER</span>
        <span>▼</span>
        <BarcodeMark className="opacity-70" />
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-4" aria-label="Poster navigation">
        <a className="poster-link" href="#top">
          {language === "zh" ? "首页" : "Home"}
        </a>
        {nav.map((item) => (
          <a className="poster-link" href={item.href} key={item.href}>
            {copy.nav[item.label]}
          </a>
        ))}
      </nav>
      <div className="hidden items-center justify-end gap-4 md:flex">
        <StarGlyph />
        <span>ARCHIVE / 2026</span>
        <span>▲</span>
      </div>
    </div>
  );
}
