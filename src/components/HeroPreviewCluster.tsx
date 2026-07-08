"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import { getProjectCopy } from "../data/translations";
import { useLanguage } from "./LanguageProvider";

const cardLayout = [
  "left-[28%] top-[2%] w-[34%] rotate-[-7deg]",
  "left-[52%] top-[7%] w-[38%] rotate-[5deg]",
  "left-[43%] top-[38%] w-[39%] rotate-[-2deg]",
  "left-[12%] top-[38%] w-[25%] rotate-[8deg]",
  "left-[62%] top-[62%] w-[26%] rotate-[7deg]",
  "left-[25%] top-[68%] w-[31%] rotate-[-4deg]",
];

export function HeroPreviewCluster() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      return;
    }
    const rootElement = root;

    const cards = gsap.utils.toArray<HTMLElement>("[data-hero-card]", rootElement);
    const reel = gsap.utils.toArray<HTMLElement>("[data-reel-card]", rootElement);
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .fromTo(cards, { autoAlpha: 0, y: 38, rotationX: -8, scale: 0.92 }, { autoAlpha: 1, y: 0, rotationX: 0, scale: 1, duration: 0.9, stagger: 0.08 })
      .fromTo(reel, { autoAlpha: 0, y: 28, rotate: -8 }, { autoAlpha: 1, y: 0, rotate: 0, duration: 0.55, stagger: 0.04 }, "-=0.35");

    const xTo = gsap.quickTo(cards, "x", { duration: 0.75, ease: "power3.out" });
    const yTo = gsap.quickTo(cards, "y", { duration: 0.75, ease: "power3.out" });
    const rotateTo = gsap.quickTo(cards, "rotationY", { duration: 0.75, ease: "power3.out" });

    function onMove(event: MouseEvent) {
      const rect = rootElement.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
      xTo(x * 24);
      yTo(y * 18);
      rotateTo(x * 8);
    }

    function onLeave() {
      xTo(0);
      yTo(0);
      rotateTo(0);
    }

    rootElement.addEventListener("mousemove", onMove);
    rootElement.addEventListener("mouseleave", onLeave);

    return () => {
      rootElement.removeEventListener("mousemove", onMove);
      rootElement.removeEventListener("mouseleave", onLeave);
      timeline.kill();
      gsap.killTweensOf(cards);
      gsap.killTweensOf(reel);
    };
  }, []);

  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[2rem]" ref={ref}>
      <div className="absolute inset-0 stage-grid" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-x-0 top-1/2 h-[38rem] -translate-y-1/2 rounded-full border border-white/8" />
      <div className="absolute inset-x-[8%] top-[48%] h-[28rem] -translate-y-1/2 rounded-full border border-[var(--accent)]/10" />

      {projects.map((project, index) => {
        const projectCopy = getProjectCopy(project, language);
        return (
          <Link
            className={`group absolute ${cardLayout[index % cardLayout.length]} block overflow-hidden rounded-[1.25rem] border border-white/12 bg-white/6 shadow-[0_28px_90px_rgba(0,0,0,.55)] backdrop-blur-sm transition hover:z-20 hover:scale-[1.04]`}
            data-hero-card
            href={`/work/${project.slug}`}
            key={project.slug}
          >
            <Image className="aspect-[16/9] w-full object-cover grayscale-[20%] transition duration-500 group-hover:grayscale-0" src={project.media.hero} alt={project.media.alt} width={900} height={506} sizes="34vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/12 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-black uppercase text-[var(--accent)]">{String(index + 1).padStart(2, "0")} / {project.year}</p>
              <h3 className="mt-1 text-[clamp(1.15rem,2vw,2rem)] font-black leading-none tracking-[-0.06em] text-white">
                {projectCopy.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs font-bold leading-5 text-white/62">{projectCopy.type}</p>
            </div>
          </Link>
        );
      })}

      <div className="absolute bottom-2 left-2 hidden h-36 w-36 rounded-full border border-white/10 text-white md:block">
        <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-white/55">
          <span className="absolute left-8 top-0">2026</span>
          <span className="absolute bottom-1 left-9">2025</span>
          <span className="absolute left-0 top-14 -rotate-90">show reel</span>
        </div>
        <Image className="absolute left-8 top-8 h-20 w-20 rounded-2xl border border-[var(--accent)]/60 object-cover" src={projects[0].media.thumb} alt="" width={80} height={80} sizes="80px" />
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-end gap-2 rounded-full border border-white/10 bg-black/42 p-2 backdrop-blur-md">
        {projects.slice(0, 5).map((project, index) => (
          <a
            className={`h-14 w-12 overflow-hidden rounded-xl border object-cover transition hover:h-20 hover:w-16 ${index === 0 ? "border-[var(--accent)]" : "border-white/12"}`}
            data-reel-card
            href={`/work/${project.slug}`}
            key={project.slug}
          >
            <Image className="h-full w-full object-cover" src={project.media.thumb} alt="" width={96} height={112} sizes="64px" />
          </a>
        ))}
      </div>
    </div>
  );
}
