"use client";

import HouseView from "@/app/components/HouseView";
import "./style.css";
import { useHorizontalScroll } from "@/app/helper/hooks";

export default function CityView({ houses }: CityViewProps) {
  const scrollRef = useHorizontalScroll<HTMLDivElement>();

  return (
    <div className="city-wrapper" ref={scrollRef}>
      <article className="city-container">
        {houses.map((house) => (
          <HouseView key={house.id} house={house} />
        ))}
      </article>
    </div>
  );
}