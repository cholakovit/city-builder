import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HouseBuilderField from "./index";

const mockHouse = {
  id: 1, // ✅ Ensure this is a number
  name: "Test House",
  floors: 3,
  color: "orange",
};

const mockUpdateHouse = jest.fn();
const mockDuplicateHouse = jest.fn();
const mockRemoveHouse = jest.fn();

describe("🏠 HouseBuilderField Component", () => {
  it("renders house name correctly", () => {
    render(
      <HouseBuilderField
        house={mockHouse}
        updateHouse={mockUpdateHouse}
        duplicateHouse={mockDuplicateHouse}
        removeHouse={mockRemoveHouse}
      />
    );

    expect(screen.getByLabelText("House Name")).toHaveValue("Test House");
  });

  it("calls remove house function when clicked", () => {
    render(
      <HouseBuilderField
        house={mockHouse}
        updateHouse={mockUpdateHouse}
        duplicateHouse={mockDuplicateHouse}
        removeHouse={mockRemoveHouse}
      />
    );

    fireEvent.click(screen.getByLabelText("Delete house"));
    expect(mockRemoveHouse).toHaveBeenCalledWith(mockHouse.id);
  });
});
