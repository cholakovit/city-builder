import React from "react";

export default function Button({ icon, label, ...props }: ButtonProps) {
  return (
    <button
      className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      aria-label={label}
      {...props}
    >
      {icon} {label}
    </button>
  );
}
