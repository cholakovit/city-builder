import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";
import { fetchWeather } from "@/app/api/weather";

export const useLoadHouse = (setHouses: (houses: House[]) => void) => {
  useEffect(() => {
    const savedHouses = localStorage.getItem("houses");
    if (savedHouses) setHouses(JSON.parse(savedHouses));
  }, [setHouses]);
};

export const useSaveHouses = (houses: { [id: number]: House }) => {
  useEffect(() => {
    localStorage.setItem("houses", JSON.stringify(houses));
  }, [houses]);
};


export const useAddHouse = (
  setHouses: React.Dispatch<React.SetStateAction<{ [id: number]: House }>>
) => {
  return () => {
    setHouses((prev) => {
      const newId = Date.now(); // Generate unique ID
      return {
        ...prev,
        [newId]: {
          id: newId,
          name: `House ${Object.keys(prev).length + 1}`,
          floors: 1,
          color: "Orange",
        },
      };
    });
  };
};

export const useUpdateHouse = (
  setHouses: React.Dispatch<React.SetStateAction<{ [id: number]: House }>>
) => {
  return <K extends keyof House>(id: number, key: K, value: House[K]) => {
    setHouses((prev) => ({
      ...prev,
      [id]: {
        ...prev[id], // Keep other properties
        [key]: value, // Update only the specified key
      },
    }));
  };
};


export const useDuplicateHouse = (
  setHouses: React.Dispatch<React.SetStateAction<{ [id: number]: House }>>
) => {
  return (id: number) => {
    setHouses((prev) => {
      const houseToCopy = prev[id];

      if (!houseToCopy) return prev; // If the house doesn't exist, return previous state

      const newId = Date.now(); // Generate a unique ID for the new house

      return {
        ...prev,
        [newId]: {
          ...houseToCopy,
          id: newId,
          name: houseToCopy.name + " (Copy)",
        },
      };
    });
  };
};


export const useRemoveHouse = (
  setHouses: React.Dispatch<React.SetStateAction<{ [id: number]: House }>>
) => {
  return (id: number) => {
    setHouses((prev) => {
      const newHouses = { ...prev }; // Create a shallow copy of the houses object
      delete newHouses[id]; // Remove the house with the given ID
      return newHouses;
    });
  };
};

export default function useWeather(city: string = "London") {
  return useQuery<WeatherData>({
    queryKey: ["weather", city], // ✅ Cache per city
    queryFn: () => fetchWeather(city),
  });
}

export function useHorizontalScroll<T extends HTMLElement>() {
  const scrollRef = useRef<T>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleWheelScroll = (event: WheelEvent) => {
      event.preventDefault(); // ✅ Prevents vertical scrolling
      element.scrollBy({ left: event.deltaY, behavior: "smooth" }); // ✅ Enables smooth horizontal scrolling
    };

    element.addEventListener("wheel", handleWheelScroll);
    return () => element.removeEventListener("wheel", handleWheelScroll);
  }, []);

  return scrollRef;
}

export const useHouseActions = ({ house, updateHouse, duplicateHouse, removeHouse }: HouseProps) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { id, value } = event.target;
  
      const key = id.includes("floors") ? "floors" : id.includes("color") ? "color" : "name";
      const newValue = key === "floors" ? Number(value) : value; // ✅ Ensure numbers for floors
  
      updateHouse(house.id, key as keyof House, newValue);
    },
    [updateHouse, house.id]
  );

  // ✅ Memoized event handlers for buttons
  const handleDuplicate = useCallback(() => duplicateHouse(house.id), [duplicateHouse, house.id]);
  const handleRemove = useCallback(() => removeHouse(house.id), [removeHouse, house.id]);

  return { handleChange, handleDuplicate, handleRemove };
}