"use client";

import { useEffect, useRef, useState } from "react";
import { workflowSteps } from "../data/projects";
import { uiCopy } from "../data/translations";
import { registerGSAP, gsap, ScrollTrigger } from "../lib/gsap";
import { useLanguage } from "./LanguageProvider";

export function WorkflowStepper() {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = ref.current;
    const line = lineRef.current;
    if (!root || !line) {
      return;
    }

    registerGSAP();
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as { desktop: boolean; reduceMotion: boolean };
        if (!desktop || reduceMotion) {
          return;
        }

        const lineTween = gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 70%",
              end: "bottom 55%",
              scrub: 0.6,
            },
          },
        );

        const triggers = gsap.utils.toArray<HTMLElement>("[data-workflow-step]", root).map((step, index) =>
          ScrollTrigger.create({
            trigger: step,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActive(index),
            onEnterBack: () => setActive(index),
          }),
        );

        gsap.fromTo(
          root.querySelectorAll("[data-workflow-detail]"),
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: root,
              start: "top 78%",
              once: true,
            },
          },
        );

        return () => {
          lineTween.kill();
          triggers.forEach((trigger) => trigger.kill());
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div className="hidden lg:block">
        <div className="relative mb-12 h-px bg-white/10">
          <div className="absolute left-0 top-0 h-full w-full origin-left bg-[var(--accent)]" ref={lineRef} />
          <div className="absolute inset-x-0 -top-3 flex justify-between">
            {workflowSteps.map((step, index) => (
              <button
                className={`grid h-7 w-7 place-items-center border text-[11px] font-medium transition ${
                  active === index ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-white/16 bg-black text-white/46"
                }`}
                key={step.title}
                onClick={() => setActive(index)}
                type="button"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="grid gap-4">
          {workflowSteps.map((step, index) => (
            <button
              className={`group border p-5 text-left transition duration-300 ${
                active === index
                  ? "border-white/28 bg-white/[0.055] text-white"
                  : "border-white/10 bg-black/26 text-white/54 hover:border-white/22 hover:text-white/74"
              }`}
              data-workflow-step
              key={step.title}
              onClick={() => setActive(index)}
              type="button"
            >
              <p className="text-[12px] font-medium uppercase text-[var(--accent)]">0{index + 1}</p>
              <h3 className="mt-2 text-[22px] font-medium uppercase leading-[1.15] text-current">{step.title}</h3>
              <p className="mt-3 max-w-[640px] text-[15px] font-normal leading-[1.65] text-white/58">{step.description}</p>
            </button>
          ))}
        </div>

        <div className="sticky top-28 h-fit border border-white/14 bg-white/[0.035] p-5 backdrop-blur-md lg:p-7" data-testid="workflow-active-stage">
          <p className="text-[12px] font-medium uppercase text-white/42">{copy.activeStage}</p>
          <h3 className="mt-3 text-[32px] font-medium uppercase leading-[1.08] text-white lg:text-[40px]">{workflowSteps[active].title}</h3>
          <p className="mt-4 max-w-[680px] text-[16px] font-normal leading-[1.7] text-white/64">{workflowSteps[active].description}</p>

          <div className="mt-7 grid gap-4">
            <div className="border border-white/12 bg-black/34 p-4" data-workflow-detail>
              <p className="text-[11px] font-medium uppercase text-[var(--accent)]">AI Prompt</p>
              <p className="mt-3 text-[15px] font-normal leading-[1.65] text-white/68">{workflowSteps[active].prompt}</p>
            </div>
            <div className="border border-white/12 bg-black/34 p-4" data-workflow-detail>
              <p className="text-[11px] font-medium uppercase text-[var(--accent)]">Output</p>
              <p className="mt-3 text-[15px] font-normal leading-[1.65] text-white/68">{workflowSteps[active].output}</p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-6 gap-1">
            {workflowSteps.map((step, index) => (
              <span className={`h-1 ${index <= active ? "bg-[var(--accent)]" : "bg-white/12"}`} key={step.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
