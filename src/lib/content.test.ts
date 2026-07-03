import { describe, expect, it } from "vitest";
import { archiveItems } from "../data/archive";
import { navigationItems } from "../data/navigation";
import { projects } from "../data/projects";

describe("portfolio content", () => {
  it("uses the approved homepage navigation labels", () => {
    expect(navigationItems.map((item) => item.label)).toEqual([
      "Work",
      "Method",
      "AI Workflow",
      "System",
      "Archive",
      "About",
      "Contact",
    ]);
  });

  it("prioritizes 2026 AI and product work before archived commercial work", () => {
    expect(projects.slice(0, 4).every((project) => project.year === "2026")).toBe(true);
    expect(projects[0].slug).toBe("awak-health-app");
    expect(projects.slice(4).every((project) => project.year === "2025")).toBe(true);
  });

  it("keeps every selected project ready for a consistent case-study route", () => {
    const requiredSections = [
      "Overview",
      "Problem",
      "Role",
      "Process",
      "Design Decisions",
      "Outcome",
    ];

    for (const project of projects) {
      expect(project.caseStudy.map((section) => section.title)).toEqual(requiredSections);
      expect(project.summary.length).toBeGreaterThan(40);
      expect(project.tags.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("separates past commercial work into archive data", () => {
    expect(archiveItems.length).toBeGreaterThanOrEqual(4);
    expect(archiveItems.every((item) => item.year === "2025")).toBe(true);
  });
});
