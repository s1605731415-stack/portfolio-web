"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { workflowSteps } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export function WorkflowStepper() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const steps = gsap.utils.toArray<HTMLElement>("[data-workflow-step]", root);
      steps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });
    },
    { scope: ref },
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" ref={ref}>
      <div className="space-y-3">
        {workflowSteps.map((step, index) => (
          <button
            className={`w-full rounded-lg border p-5 text-left shadow-soft transition ${
              active === index
                ? "border-[var(--accent)] bg-[var(--bg-strong)]"
                : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)]"
            }`}
            data-workflow-step
            key={step.title}
            onClick={() => setActive(index)}
            type="button"
          >
            <p className="text-sm font-semibold text-[var(--accent)]">0{index + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">{step.description}</p>
          </button>
        ))}
      </div>
      <div className="sticky top-24 h-fit rounded-lg border border-[var(--line)] bg-[var(--text)] p-5 text-[var(--bg-strong)] shadow-card">
        <div className="rounded-lg border border-white/10 bg-white/8 p-5">
          <p className="text-sm text-white/60">Workflow Board</p>
          <div className="mt-6 rounded-lg bg-white/10 p-4">
            <p className="text-xs uppercase text-white/50">Active stage</p>
            <h3 className="mt-2 text-3xl font-semibold">{workflowSteps[active].title}</h3>
            <p className="mt-4 leading-7 text-white/70">{workflowSteps[active].description}</p>
          </div>
          <div className="mt-5 grid gap-3">
            {workflowSteps.map((step, index) => (
              <div
                className={`flex items-center justify-between rounded-lg px-4 py-3 transition ${
                  active === index ? "bg-white text-slate-950" : "bg-white/10 text-white/70"
                }`}
                key={step.title}
              >
                <span className="text-sm">{step.title}</span>
                <span className="text-xs opacity-60">Step {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
