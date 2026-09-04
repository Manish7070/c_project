"use client";

import React from "react";

interface WavyLineProps {
  className?: string;
  color?: string;
}

export const WavyLine: React.FC<WavyLineProps> = ({
  className = "w-full h-3 mt-1",
  color = "#F97316", // Vibrant orange accent
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 12C30 4 50 18 80 10C110 2 130 18 160 10C180 5 192 12 198 12"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
