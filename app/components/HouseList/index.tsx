"use client";

import { FaHome } from "react-icons/fa";
import {
  useAddHouse,
  useDuplicateHouse,
  useRemoveHouse,
  useUpdateHouse,
} from "@/app/helper/hooks";
import HouseBuilderField from "@/app/components/HouseBuilderField";
import Button from "@/app/components/Atomic/Button";

import "./style.css";

export default function HouseList({ houses, setHouses }: HouseListProps) {
  const addHouse = useAddHouse(setHouses);
  const updateHouse = useUpdateHouse(setHouses);
  const duplicateHouse = useDuplicateHouse(setHouses);
  const removeHouse = useRemoveHouse(setHouses);

  return (
    <article className="house-list p-6 bg-gray-100 shadow-lg rounded-xl max-h-[800px] overflow-y-auto custom-scrollbar">
      <h2 className="text-lg font-semibold mb-4">🏡 Houses List</h2>
      {houses.map((house: House) => (
        <HouseBuilderField
          key={house.id}
          house={house}
          updateHouse={updateHouse}
          duplicateHouse={duplicateHouse}
          removeHouse={removeHouse}
        />
      ))}
      <Button onClick={addHouse} icon={<FaHome />} label="Build a new house" />
    </article>
  );
}
