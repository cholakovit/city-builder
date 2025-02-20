import React from "react";

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertStyles = {
    success: "bg-green-100 text-green-700 border-green-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    error: "bg-red-100 text-red-700 border-red-400",
  };

  return (
    <aside className={`p-4 border-l-4 rounded-md ${alertStyles[type]}`} role="alert">
      <p>{message}</p>
    </aside>
  );
};

export default Alert;
