"use client";

import { useEffect, useState } from "react";
import mermaid from "mermaid";

export default function DiagramsPage() {
  const [svgCode, setSvgCode] = useState("");

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false });

    const diagram = `
      graph TD;
        A[Layout] --> B[SkipLinks]
        A --> C[ReactQueryProvider]
        C -->|Children| D[Home]

        %% Home Page Structure
        D --> E[Header]
        D --> F[Main Content]
        
        %% Main Content Components
        F --> G[House Settings]
        F --> H[🌦 Weather]
        F --> I[CityView]
        D --> J[Footer]

        %% HouseList Details
        G --> K[House Building Fields]
        G --> L[Build New House Button]

        %% HouseBuilderField Details
        K --> M["House Name"]
        K --> N["Floors"]
        K --> O["Color"]
        K --> P["Button: Duplicate House"]
        K --> Q["Button: Delete House"]

        %% Weather Component Details
        H --> R["Heading: 🌦 Weather"]
        H --> S{"Loading?"}
        S -- Yes --> T["Skeleton"]
        S -- Yes --> U["Skeleton"]
        S -- Error --> V["Alert: Error Message"]
        S -- No --> W["Text: Temperature & Condition"]

        %% CityView Details
        I --> X["HouseView (for each house)"]
    `;

    mermaid.render("diagram", diagram).then(({ svg }) => {
      setSvgCode(svg);
    });
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Frontend Diagram</h1>
      <div dangerouslySetInnerHTML={{ __html: svgCode }} />
    </main>
  );
}
