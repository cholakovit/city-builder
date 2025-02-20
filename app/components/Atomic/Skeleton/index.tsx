import React from "react";

const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = "20px" }) => {
  return (
    <div
      className="animate-pulse bg-gray-300 rounded-md"
      style={{ width, height }}
      data-testid="skeleton"
    ></div>
  );
};

export default Skeleton;
