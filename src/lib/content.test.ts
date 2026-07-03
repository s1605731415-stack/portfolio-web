import { describe, expect, it } from "vitest";
import { projects } from "../data/projects";

describe("portfolio content", () => {
  it("prioritizes 2026 AI and product work before archived commercial work", () => {
    expect(projects.slice(0, 4).every((project) => project.year === "2026")).toBe(true);
    expect(projects[0].slug).toBe("awak-health-app");
  });
});
