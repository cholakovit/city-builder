import React from "react";
export default function TextInput({ label, id, ...props }: BaseInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="border p-2 w-full mt-1"
        aria-label={label}
      />
    </div>
  );
}
