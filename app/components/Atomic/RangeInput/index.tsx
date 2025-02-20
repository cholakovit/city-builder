import React from "react";

export default function RangeInput({ label, id, ...props }: BaseInputProps) {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type="range"
        {...props}
        className="w-full mt-1"
        aria-label={label}
      />
    </>
  );
}
