import React from "react";
import { render, screen } from "@testing-library/react";
import HouseView from "@/app/components/HouseView";

// Define the House type
interface House {
  id: number;
  name: string;
  floors: number;
  color: string;
}

describe("HouseView Component", () => {
  const mockHouse: House = {
    id: 1,
    name: "Test House",
    floors: 3,
    color: "blue",
  };

  it("renders the component correctly", () => {
    render(<HouseView house={mockHouse} />);

    // ✅ Ensure the house container is rendered
    const houseElement = screen.getByTestId(`house-${mockHouse.id}`);
    expect(houseElement).toBeInTheDocument();
  });

  it("applies the correct background color", () => {
    render(<HouseView house={mockHouse} />);
    const houseElement = screen.getByTestId(`house-${mockHouse.id}`);

    expect(houseElement).toHaveStyle(`background-color: ${mockHouse.color.toLowerCase()}`);
  });

  it("calculates the correct height based on floors", () => {
    render(<HouseView house={mockHouse} />);
    const houseElement = screen.getByTestId(`house-${mockHouse.id}`);
    
    const expectedHeight = `${mockHouse.floors * 40 + 40}px`;
    expect(houseElement).toHaveStyle(`height: ${expectedHeight}`);
  });

  it("renders the correct number of windows", () => {
    render(<HouseView house={mockHouse} />);
    
    // ✅ Fetch all windows dynamically
    const windows = screen.getAllByTestId((id) => id.startsWith(`window-${mockHouse.id}`));
    
    expect(windows.length).toBe(mockHouse.floors * 2);
  });
});
