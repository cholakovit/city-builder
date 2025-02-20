import React, { useCallback } from "react";

export default function SelectInput({ label, id, options, value, onChange }: SelectInputProps) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium">{label}</label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className="border p-2 w-full mt-1"
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
