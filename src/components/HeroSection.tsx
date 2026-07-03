"use client";

import { uiCopy } from "../data/translations";
import { HeroPreviewCluster } from "./HeroPreviewCluster";
import { useLanguage } from "./LanguageProvider";
import { ButtonLink, Tag } from "./ui";

const capabilities = ["UI Design", "UX Strategy", "Health Tech", "AI-assisted Workflow", "Design System", "Frontend Handoff"];

export function HeroSection() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <section
      id="top"
      data-section="top"
      className="relative mx-auto grid min-h-screen w-full max-w-[1800px] items-center gap-12 px-6 pb-28 pt-32 sm:px-10 lg:grid-cols-[1fr_0.72fr]"
    >
      <div className="absolute left-6 top-40 hidden rounded-lg border-2 border-[var(--text)] text-center text-[var(--text)] lg:block">
        <div className="border-b-2 border-[var(--text)] px-3 py-1 text-xs font-extrabold">{copy.scoreLabel}</div>
        <div className="px-3 py-2">
          <div className="text-2xl font-black tracking-[-0.06em]">{copy.score}</div>
          <div className="-mt-1 text-xs font-bold">{copy.scoreOutOf}</div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl text-center lg:col-span-2">
        <p className="mb-8 text-sm font-bold text-[var(--muted)]">{copy.heroMeta}</p>
        <h1 className="mx-auto max-w-[15ch] text-[clamp(4.8rem,13vw,13.4rem)] font-black uppercase leading-[0.86] tracking-[-0.075em] text-[var(--text)]">
          {copy.heroTitle}
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-lg font-black tracking-[-0.04em]">
          {copy.creators.map((item) => (
            <span className="border-b-2 border-[var(--text)]" key={item}>
              {item}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          {copy.heroSubtitle}
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">
          {copy.heroChinese}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {capabilities.map((capability) => (
            <Tag key={capability}>{capability}</Tag>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="#work">{copy.dock.visit}</ButtonLink>
          <ButtonLink href="#method" variant="secondary">
            {copy.nav.Method}
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            {copy.nav.Contact}
          </ButtonLink>
        </div>
      </div>
      <div className="lg:col-span-2">
        <HeroPreviewCluster />
      </div>
    </section>
  );
}
