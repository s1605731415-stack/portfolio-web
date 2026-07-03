"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navigationItems } from "../data/navigation";
import { uiCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const copy = uiCopy[language];
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer || typeof window.matchMedia !== "function" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const items = drawer.querySelectorAll("[data-drawer-item]");
    if (open) {
      gsap.fromTo(
        drawer,
        { xPercent: 106, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 0.65, ease: "expo.out" },
      );
      gsap.fromTo(
        items,
        { x: 42, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.55, ease: "power3.out", stagger: 0.06, delay: 0.12 },
      );
    }
  }, [open]);

  const navItems = navigationItems.filter((item) => item.label !== "Archive");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-white sm:px-7 sm:pt-7">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between">
        <Link className="group flex items-center gap-3" href="/#top" aria-label={copy.brand}>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_35%_25%,#baffd9,#38ff9c_35%,#03140b_72%)] text-lg font-black text-black shadow-[0_0_30px_rgba(56,255,156,.22)]">
            S
          </span>
          <span className="hidden text-sm font-black tracking-[-0.03em] text-white/86 transition group-hover:text-white sm:block">
            {copy.brand}
          </span>
          <span className="hidden rounded-full bg-[#38ff9c] px-2 py-1 text-[10px] font-black text-black sm:block">
            {language === "zh" ? "可持续迭代" : "iterating"}
          </span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-black text-white/46 md:flex">
          <a className="text-white" href="#top">
            {language === "zh" ? "舞台" : "stage"}
          </a>
          <span className="h-1.5 w-1.5 rounded-full bg-[#38ff9c]" />
          <a className="transition hover:text-white" href="#work">
            {language === "zh" ? "列表" : "list"}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-white/12 bg-black/30 px-2 py-1 backdrop-blur-md sm:flex">
            {(["zh", "en"] as const).map((item) => (
              <button
                aria-label={`Switch language to ${item}`}
                className={`rounded-full px-3 py-2 text-xs font-black transition ${
                  language === item ? "bg-[#38ff9c] text-black" : "text-white/58 hover:text-white"
                }`}
                key={item}
                onClick={() => setLanguage(item)}
                type="button"
              >
                {item === "zh" ? "中" : "EN"}
              </button>
            ))}
          </div>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-3 pl-5 text-sm font-black text-black shadow-[0_14px_50px_rgba(0,0,0,.28)] transition hover:scale-[1.03]"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span className="hidden sm:block">{open ? (language === "zh" ? "关闭" : "close") : language === "zh" ? "菜单" : "menu"}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
              {open ? <X size={18} /> : <Menu size={18} />}
            </span>
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className={`fixed bottom-4 right-4 top-4 z-50 w-[min(88vw,430px)] rounded-[1.4rem] bg-[#f6f6f2] p-8 text-black shadow-[0_30px_90px_rgba(0,0,0,.45)] sm:p-10 ${
          open ? "block" : "hidden"
        }`}
        data-open={open ? "true" : "false"}
        data-testid="mobile-menu"
        ref={drawerRef}
      >
        <button
          aria-label="Close menu"
          className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-black text-white"
          onClick={() => setOpen(false)}
          type="button"
        >
          <X size={20} />
        </button>
        <nav className="mt-24 grid gap-2" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <Link
              className="group flex items-center gap-4 text-[clamp(2.8rem,8vw,4.6rem)] font-black leading-[0.95] tracking-[-0.08em]"
              data-drawer-item
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {index === 0 ? <span className="h-4 w-4 rounded-full bg-black" /> : <span className="h-4 w-4 opacity-0" />}
              <span className="transition group-hover:translate-x-2">{copy.nav[item.label]}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-7 left-8 right-8 flex items-end justify-between border-t border-black/12 pt-5 text-xs font-bold text-black/45 sm:left-10 sm:right-10">
          <span>sunwang.design</span>
          <div className="flex gap-2">
            {(["zh", "en"] as const).map((item) => (
              <button
                className={`rounded-full px-3 py-2 font-black ${language === item ? "bg-black text-white" : "bg-black/8 text-black"}`}
                key={item}
                onClick={() => setLanguage(item)}
                type="button"
              >
                {item === "zh" ? "中" : "EN"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
