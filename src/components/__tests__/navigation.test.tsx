import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "../Header";
import { LanguageProvider } from "../LanguageProvider";

function renderHeader() {
  return render(
    <LanguageProvider>
      <Header />
    </LanguageProvider>,
  );
}

describe("Header", () => {
  it("renders the approved navigation labels and controls", () => {
    renderHeader();

    expect(screen.getByRole("link", { name: "Sun Wang Portfolio" })).toBeInTheDocument();
    const primaryNav = screen.getByRole("navigation", { name: /primary navigation/i });
    for (const label of ["Work", "Method", "AI Workflow", "System", "Archive", "About", "Contact"]) {
      expect(within(primaryNav).getByRole("link", { name: label })).toBeInTheDocument();
    }
    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getByTestId("mobile-menu")).toHaveAttribute("data-open", "true");

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.getByTestId("mobile-menu")).toHaveAttribute("data-open", "false");
  });

  it("toggles the document theme", async () => {
    const user = userEvent.setup();
    renderHeader();

    expect(document.documentElement.dataset.theme).toBe("light");
    await user.click(screen.getByRole("button", { name: /toggle theme/i }));
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
