import React from "react";
import { render, screen } from "@testing-library/react";
import SkipLinks from "@/app/components/SkipLinks";

describe("SkipLinks Component", () => {
  it("renders correctly", () => {
    render(<SkipLinks />);

    // ✅ Check if the navigation element is present
    const navElement = screen.getByRole("navigation", { name: "Skip links" });
    expect(navElement).toBeInTheDocument();
  });

  it("contains all expected skip links", () => {
    render(<SkipLinks />);

    // ✅ Check all links exist
    expect(screen.getByText("Skip to Main Content")).toBeInTheDocument();
    expect(screen.getByText("Skip to Navigation")).toBeInTheDocument();
    expect(screen.getByText("Skip to Footer")).toBeInTheDocument();
  });

  it("has correct href attributes for links", () => {
    render(<SkipLinks />);

    // ✅ Ensure each link has the correct destination
    expect(screen.getByText("Skip to Main Content")).toHaveAttribute("href", "#main-content");
    expect(screen.getByText("Skip to Navigation")).toHaveAttribute("href", "#navigation");
    expect(screen.getByText("Skip to Footer")).toHaveAttribute("href", "#footer");
  });

  it("ensures accessibility with correct aria-label", () => {
    render(<SkipLinks />);

    // ✅ Check if the navigation element has an aria-label
    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveAttribute("aria-label", "Skip links");
  });
});
