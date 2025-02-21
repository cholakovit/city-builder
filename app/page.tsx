"use client";

import { useState } from "react";
import HouseList from "@/app/components/HouseList";
import CityView from "@/app/components/CityView";
import Weather from "@/app/components/Weather";
import Header from "@/app/components/Header";
import { INITIAL_HOUSES } from "@/app/helper/constants";
import { useLoadHouse, useSaveHouses } from "@/app/helper/hooks";

export default function Home() {
  const [houses, setHouses] = useState(INITIAL_HOUSES);

  useLoadHouse(setHouses);
  useSaveHouses(houses);

  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row min-h-screen p-4 bg-gray-800 gap-4">
        
        <section className="w-full lg:w-1/2 xl:w-1/3">
          <HouseList houses={houses} setHouses={setHouses} />
        </section>

        <section className="w-full lg:w-2/3">
          <section className="w-full">
            <Weather />
          </section>
          <CityView houses={houses} />
        </section>

      </main>
      <footer id="footer">{/* Footer */}</footer>
    </>
  );
}
