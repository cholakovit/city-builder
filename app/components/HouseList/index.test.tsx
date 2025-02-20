import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HouseList from "@/app/components/HouseList";

// Create Jest Mocks
const mockSetHouses = jest.fn();
const mockAddHouse = jest.fn();

// Mock dependencies
jest.mock("@/app/helper/hooks", () => ({
  useAddHouse: jest.fn(() => mockAddHouse), // ✅ Properly mock useAddHouse
  useDuplicateHouse: jest.fn(() => jest.fn()),
  useRemoveHouse: jest.fn(() => jest.fn()),
  useUpdateHouse: jest.fn(() => jest.fn()),
}));

jest.mock("@/app/components/HouseBuilderField", () => ({
  __esModule: true,
  default: ({ house }: { house: House }) => (
    <div data-testid={`house-${house.id}`}>{house.name}</div>
  ),
}));

jest.mock("@/app/components/Atomic/Button", () => ({
  __esModule: true,
  default: ({
    onClick,
    label,
  }: {
    onClick: () => void;
    label: string;
  }) => <button onClick={onClick}>{label}</button>,
}));

describe("HouseList Component", () => {
  const mockHouses: House[] = [
    { id: 1, name: "House A", floors: 2, color: "Red" },
    { id: 2, name: "House B", floors: 3, color: "Blue" },
  ];

  beforeEach(() => {
    jest.clearAllMocks(); // ✅ Reset mock function calls before each test
  });

  it("renders the component correctly", () => {
    render(<HouseList houses={mockHouses} setHouses={mockSetHouses} />);

    expect(screen.getByText("🏡 Houses List")).toBeInTheDocument();
    expect(screen.getByText("House A")).toBeInTheDocument();
    expect(screen.getByText("House B")).toBeInTheDocument();
  });

  it("calls addHouse function when the 'Build a new house' button is clicked", () => {
    render(<HouseList houses={mockHouses} setHouses={mockSetHouses} />);

    const buildHouseButton = screen.getByText("Build a new house");

    fireEvent.click(buildHouseButton);

    expect(mockAddHouse).toHaveBeenCalledTimes(1); // ✅ Check if addHouse is called
  });
});
