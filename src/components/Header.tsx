"use client";

import { Bookmark, ExternalLink, Menu, Moon, Share2, Sun, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { navigationItems } from "../data/navigation";
import { uiCopy } from "../data/translations";
import { getActiveSectionId } from "../lib/section-observer";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const copy = uiCopy[language];
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    function updateActiveSection() {
      const sections = Array.from(document.querySelectorAll("[data-section]"));
      setActiveSection(getActiveSectionId(sections, window.innerHeight * 0.42));
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--surface)]/94 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6 sm:px-10">
        <Link className="text-sm font-extrabold tracking-[-0.02em]" href="/#top">
          {copy.brand}
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              className={`rounded-md px-3 py-2 text-sm font-bold tracking-[-0.02em] underline-offset-4 transition hover:text-[var(--text)] hover:underline ${
                activeSection === item.href.replace("#", "") ? "text-[var(--text)] underline" : "text-[var(--muted)]"
              }`}
              href={item.href}
              key={item.href}
            >
              {copy.nav[item.label]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden rounded-lg border border-[var(--line)] bg-[var(--soft)] p-1 sm:flex">
            {(["en", "zh"] as const).map((item) => (
              <button
                aria-label={`Switch language to ${item}`}
                className={`rounded-md px-3 py-2 text-xs font-extrabold transition ${
                  language === item ? "bg-[var(--text)] text-[var(--bg)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
                key={item}
                onClick={() => setLanguage(item)}
                type="button"
              >
                {item === "en" ? "EN" : "中"}
              </button>
            ))}
          </div>
          <button
            aria-label="Bookmark portfolio"
            className="hidden h-10 w-10 items-center justify-center rounded-lg text-[var(--text)] transition hover:bg-[var(--soft)] sm:inline-flex"
            type="button"
          >
            <Bookmark size={18} />
          </button>
          <button
            aria-label="Share portfolio"
            className="hidden h-10 w-10 items-center justify-center rounded-lg text-[var(--text)] transition hover:bg-[var(--soft)] sm:inline-flex"
            type="button"
          >
            <Share2 size={18} />
          </button>
          <Link
            aria-label="Open live portfolio"
            className="hidden h-10 w-10 items-center justify-center rounded-lg text-[var(--text)] transition hover:bg-[var(--soft)] sm:inline-flex"
            href="/#work"
          >
            <ExternalLink size={18} />
          </Link>
          <button
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:bg-[var(--soft)]"
            onClick={() => setTheme((value) => (value === "light" ? "dark" : "light"))}
            type="button"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:bg-[var(--soft)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div
        className={`border-t border-[var(--line)] bg-[var(--surface)] px-5 py-3 backdrop-blur-xl transition md:hidden ${
          open ? "block" : "hidden"
        }`}
        data-open={open ? "true" : "false"}
        data-testid="mobile-menu"
      >
        <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
          <div className="mb-2 grid grid-cols-2 gap-2">
            <button
              className={`rounded-lg border border-[var(--line)] px-3 py-3 text-sm font-extrabold ${
                language === "en" ? "bg-[var(--text)] text-[var(--bg)]" : "text-[var(--muted)]"
              }`}
              onClick={() => setLanguage("en")}
              type="button"
            >
              EN
            </button>
            <button
              className={`rounded-lg border border-[var(--line)] px-3 py-3 text-sm font-extrabold ${
                language === "zh" ? "bg-[var(--text)] text-[var(--bg)]" : "text-[var(--muted)]"
              }`}
              onClick={() => setLanguage("zh")}
              type="button"
            >
              中文
            </button>
          </div>
          {navigationItems.map((item) => (
            <Link
              className="rounded-lg px-3 py-3 text-sm font-extrabold text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--text)]"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {copy.nav[item.label]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
