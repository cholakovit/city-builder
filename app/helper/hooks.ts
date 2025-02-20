import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";
import { fetchWeather } from "@/app/api/weather";

export const useLoadHouse = (setHouses: (houses: House[]) => void) => {
  useEffect(() => {
    const savedHouses = localStorage.getItem("houses");
    if (savedHouses) setHouses(JSON.parse(savedHouses));
  }, [setHouses]);
};

export const useSaveHouses = (houses: House[]) => {
  useEffect(() => {
    localStorage.setItem("houses", JSON.stringify(houses));
  }, [houses]);
};

export const useAddHouse = (
  setHouses: (callback: (prev: House[]) => House[]) => void
) => {
  return () => {
    setHouses((prev: House[]) => [
      ...prev,
      {
        id: Date.now(),
        name: `House ${prev.length + 1}`,
        floors: 1,
        color: "Orange",
      },
    ]);
  };
};

export const useUpdateHouse = (
  setHouses: (callback: (prev: House[]) => House[]) => void
) => {
  return <K extends keyof House>(id: number, key: K, value: House[K]) => {
    setHouses((prev: House[]) =>
      prev.map((house: House) =>
        house.id === id ? { ...house, [key]: value } : house
      )
    );
  };
};

export const useDuplicateHouse = (
  setHouses: (callback: (prev: House[]) => House[]) => void
) => {
  return (id: number) => {
    setHouses((prev: House[]) => {
      const houseToCopy = prev.find((house) => house.id === id);
      return houseToCopy
        ? [
            ...prev,
            {
              ...houseToCopy,
              id: Date.now(),
              name: houseToCopy.name + " (Copy)",
            },
          ]
        : prev;
    });
  };
};

export const useRemoveHouse = (
  setHouses: (callback: (prev: House[]) => House[]) => void
) => {
  return (id: number) => {
    setHouses((prev: House[]) =>
      prev.filter((house: House) => house.id !== id)
    );
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
  // ✅ Single handler for all inputs
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { id, value } = event.target;
      const key = id.includes("floors") ? "floors" : id.includes("color") ? "color" : "name";
  
      const newValue = key === "floors" ? Number(value) : value;
  
      updateHouse(house.id, key as keyof House, newValue);
    },
    [updateHouse, house.id]
  );

  // ✅ Memoized event handlers for buttons
  const handleDuplicate = useCallback(() => duplicateHouse(house.id), [duplicateHouse, house.id]);
  const handleRemove = useCallback(() => removeHouse(house.id), [removeHouse, house.id]);

  return { handleChange, handleDuplicate, handleRemove };
}