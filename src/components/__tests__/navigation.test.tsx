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

    expect(screen.getByRole("link", { name: "Sun Wang 作品集" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });

  it("opens and closes the stage menu", async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getByTestId("mobile-menu")).toHaveAttribute("data-open", "true");
    const primaryNav = screen.getByRole("navigation", { name: /primary navigation/i });
    for (const label of ["作品", "方法", "AI 工作流", "系统", "关于", "联系"]) {
      expect(within(primaryNav).getByRole("link", { name: label })).toBeInTheDocument();
    }

    await user.click(screen.getAllByRole("button", { name: /close menu/i })[0]);
    expect(screen.getByTestId("mobile-menu")).toHaveAttribute("data-open", "false");
  });

  it("switches the document language", async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getByRole("button", { name: "Switch language to en" }));
    expect(document.documentElement.lang).toBe("en");
  });
});
