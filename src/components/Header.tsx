"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { navigationItems } from "../data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)]/70 bg-[var(--surface)]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link className="text-sm font-semibold tracking-normal" href="#top">
          Sun Wang
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--soft)] hover:text-[var(--text)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
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
          {navigationItems.map((item) => (
            <Link
              className="rounded-lg px-3 py-3 text-sm font-medium text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--text)]"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
