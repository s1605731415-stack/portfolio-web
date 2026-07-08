"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import { registerGSAP, gsap } from "../lib/gsap";
import { motionTokens } from "../lib/motionTokens";

const wallProjects = projects.slice(0, 5);

export function HeroProjectWall() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    registerGSAP();
    const layers = gsap.utils.toArray<HTMLElement>("[data-hero-wall-layer]", root);
    const quick = layers.map((layer, index) => {
      const depth = index === 0 ? motionTokens.distance.parallaxNear : index < 3 ? motionTokens.distance.parallaxMid : motionTokens.distance.parallaxFar;
      return {
        x: gsap.quickTo(layer, "x", { duration: 0.65, ease: motionTokens.ease }),
        y: gsap.quickTo(layer, "y", { duration: 0.65, ease: motionTokens.ease }),
        rotateY: gsap.quickTo(layer, "rotationY", { duration: 0.65, ease: motionTokens.ease }),
        rotateX: gsap.quickTo(layer, "rotationX", { duration: 0.65, ease: motionTokens.ease }),
        depth,
      };
    });

    const handleMove = (event: PointerEvent) => {
      const bounds = root.getBoundingClientRect();
      const px = (event.clientX - bounds.left) / bounds.width - 0.5;
      const py = (event.clientY - bounds.top) / bounds.height - 0.5;

      quick.forEach((item) => {
        item.x(px * item.depth);
        item.y(py * item.depth * 0.72);
        item.rotateY(px * motionTokens.tilt.hero);
        item.rotateX(py * -motionTokens.tilt.hero);
      });
    };

    const handleLeave = () => {
      quick.forEach((item) => {
        item.x(0);
        item.y(0);
        item.rotateX(0);
        item.rotateY(0);
      });
    };

    root.addEventListener("pointermove", handleMove);
    root.addEventListener("pointerleave", handleLeave);

    return () => {
      root.removeEventListener("pointermove", handleMove);
      root.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div className="relative min-h-[520px] [perspective:1200px] sm:min-h-[620px]" ref={ref}>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_46%,rgba(255,255,255,.12),rgba(142,217,190,.055)_35%,transparent_68%)] blur-2xl" />

      {wallProjects.map((project, index) => {
        const layerClass = [
          "left-[12%] top-[19%] z-30 w-[70%] rotate-[-2deg]",
          "right-[3%] top-[4%] z-20 w-[43%] rotate-[4deg] opacity-76",
          "bottom-[7%] right-[8%] z-10 w-[48%] rotate-[-5deg] opacity-70",
          "bottom-[18%] left-[2%] z-10 w-[38%] rotate-[6deg] opacity-62",
          "right-[23%] top-[57%] z-40 w-[31%] rotate-[2deg] opacity-90",
        ][index];
        return (
          <Link
            aria-label={project.title}
            className={`group absolute block overflow-hidden border border-white/14 bg-black shadow-[0_28px_90px_rgba(0,0,0,.38)] transition duration-500 hover:border-white/36 ${layerClass}`}
            data-hero-wall-layer
            href={`/work/${project.slug}`}
            key={project.slug}
          >
            <Image className="aspect-[16/10] w-full object-cover opacity-78 grayscale transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0" src={project.media.hero} alt={project.media.alt} width={900} height={562} sizes="(min-width: 1024px) 40vw, 80vw" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(0,0,0,.74))]" />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
              <span className="max-w-[15rem] text-[11px] font-medium uppercase leading-tight text-white/80">{project.title}</span>
              <ArrowUpRight className="shrink-0 text-white/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" size={16} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
