"use client";

import { X } from "lucide-react";
import { useState } from "react";
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
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-xl bg-[#1f1f1f] p-2 text-[#fafafa] shadow-[0_24px_80px_rgba(0,0,0,.25)]">
      <div className="flex items-center justify-between gap-3">
        <div className="hidden px-5 text-2xl font-black tracking-[-0.08em] sm:block">W.</div>
        <div className="flex flex-1 items-center gap-1 overflow-x-auto">
          {Object.values(copy.dock)
            .slice(0, 4)
            .map((item) => (
              <a className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold text-white/70 transition hover:bg-white/10 hover:text-white" href="#work" key={item}>
                {item}
              </a>
            ))}
          <div className="ml-1 flex rounded-lg bg-white/8 p-1">
            {(["en", "zh"] as const).map((item) => (
              <button
                className={`rounded-md px-3 py-2 text-xs font-black ${language === item ? "bg-[#fff06a] text-[#1f1f1f]" : "text-white/65"}`}
                key={item}
                onClick={() => setLanguage(item)}
                type="button"
              >
                {item === "en" ? "EN" : "中"}
              </button>
            ))}
          </div>
          <a className="shrink-0 rounded-lg bg-[#fff06a] px-5 py-3 text-xs font-black text-[#1f1f1f]" href="#work">
            {copy.dock.visit}
          </a>
        </div>
        <button
          aria-label="Close dock"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white"
          onClick={() => setVisible(false)}
          type="button"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
