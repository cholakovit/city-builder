import React from "react";

import "./style.css"

export default function HouseView({ house }: { house: House }) {
  return (
    <aside
      className="house"
      data-testid={`house-${house.id}`} // ✅ Correctly applied
      style={{
        backgroundColor: house.color.toLowerCase(),
        height: `${house.floors * 40 + 40}px`,
      }}
    >
      <div className="roof"></div>
      <div className="body">
        {Array.from({ length: house.floors * 2 }).map((_, index) => (
          <div key={index} className="window" data-testid={`window-${house.id}-${index}`}></div>
        ))}
        <div className="door" data-testid={`door-${house.id}`}></div>
      </div>
    </aside>
  );
}
