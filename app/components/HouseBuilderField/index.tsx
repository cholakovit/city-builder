"use client";

import React from "react";
import { FaTrash, FaCopy } from "react-icons/fa";
import { COLORS } from "@/app/helper/constants";
import Button from "@/app/components/Atomic/Button";
import SelectInput from "@/app/components/Atomic/SelectInput";
import TextInput from "@/app/components/Atomic/TextInput";
import RangeInput from "@/app/components/Atomic/RangeInput";
import { useHouseActions } from "@/app/helper/hooks";


const HouseBuilderField: React.FC<HouseProps> = ({ house, updateHouse, duplicateHouse, removeHouse }) => {

  const { handleChange, handleDuplicate, handleRemove } = useHouseActions({
    house,
    updateHouse,
    duplicateHouse,
    removeHouse,
  });

  return (
    <article className="p-3 mb-3 bg-white rounded-lg shadow" aria-labelledby={`house-${house.id}`}>
      <h3 id={`house-${house.id}`} className="text-md font-semibold">
        {house.name}
      </h3>

      <TextInput id={`house-name-${house.id}`} label="House Name" type="text" value={house.name} onChange={handleChange} />

      <RangeInput id={`house-floors-${house.id}`} label="Floors" min="1" max="10" value={house.floors} onChange={handleChange} />

      <SelectInput id={`house-color-${house.id}`} label="Color" options={COLORS} value={house.color.toLowerCase()} onChange={handleChange} />

      <aside className="flex gap-2 mt-2">
        <Button onClick={handleDuplicate} icon={<FaCopy />} label="Duplicate house" />
        <Button onClick={handleRemove} icon={<FaTrash />} label="Delete house" />
      </aside>
    </article>
  );
};

// ✅ Prevent unnecessary re-renders with React.memo
export default React.memo(HouseBuilderField);
