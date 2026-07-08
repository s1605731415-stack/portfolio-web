"use client";

import { Pause, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projects } from "../data/projects";
import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";

export function FloatingDock() {
  const [visible, setVisible] = useState(true);
  const { language, setLanguage } = useLanguage();
  const copy = uiCopy[language];

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-2 rounded-[1.35rem] border border-white/10 bg-black/48 p-2 text-white shadow-[0_24px_80px_rgba(0,0,0,.35)] backdrop-blur-xl md:flex">
      <a className="grid h-11 w-11 place-items-center rounded-full bg-white text-black" href="#top" aria-label="Show reel">
        <Pause size={16} fill="currentColor" />
      </a>
      <div className="flex items-end gap-1">
        {projects.slice(0, 5).map((project, index) => (
          <a
            className={`block overflow-hidden rounded-xl border transition hover:h-16 hover:w-16 ${index === 0 ? "h-14 w-14 border-[var(--accent)]" : "h-11 w-12 border-white/12"}`}
            href={`/work/${project.slug}`}
            key={project.slug}
          >
            <Image className="h-full w-full object-cover" src={project.media.thumb} alt="" width={80} height={80} sizes="64px" />
          </a>
        ))}
      </div>
      <a className="rounded-full bg-[var(--accent)] px-4 py-3 text-xs font-black text-black" href="#work">
        {copy.dock.visit}
      </a>
      <div className="flex rounded-full bg-white/8 p-1">
        {(["zh", "en"] as const).map((item) => (
          <button
            className={`rounded-full px-3 py-2 text-xs font-black ${language === item ? "bg-white text-black" : "text-white/58"}`}
            key={item}
            onClick={() => setLanguage(item)}
            type="button"
          >
            {item === "zh" ? "中" : "EN"}
          </button>
        ))}
      </div>
      <button
        aria-label="Close dock"
        className="grid h-10 w-10 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
        onClick={() => setVisible(false)}
        type="button"
      >
        <X size={18} />
      </button>
    </div>
  );
}
