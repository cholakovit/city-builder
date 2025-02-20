"use client"; // Needed for dynamic behavior

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

type MermaidProps = {
  chart: string;
};

const MermaidChart: React.FC<MermaidProps> = ({ chart }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: "default" });

    if (chartRef.current) {
      mermaid.contentLoaded();
    }
  }, []);

  return <div ref={chartRef} className="mermaid">{chart}</div>;
};

export default MermaidChart;
