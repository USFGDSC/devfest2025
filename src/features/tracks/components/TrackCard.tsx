"use client";

import { useState } from "react";

interface Track {
  id: string;
  name: string;
  description: string;
  bullets: string[];
  idleFill: string;
  selectedFill: string;
}

interface TrackCardProps {
  track: Track;
  isSelected: boolean;
  onClick: () => void;
  animationDelay: number;
}

export function TrackCard({
  track,
  isSelected,
  onClick,
  animationDelay,
}: TrackCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-[4/3] rounded-[20px] border-[1.5px] border-black transition-all duration-300 ease-out group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
      style={{
        backgroundColor: isSelected ? track.selectedFill : track.idleFill,
        animationName: isHovered ? "none" : `float-${track.id}`,
        animationDuration: isHovered ? "none" : `${4 + animationDelay * 0.5}s`,
        animationTimingFunction: isHovered ? "none" : "ease-in-out",
        animationIterationCount: isHovered ? "none" : "infinite",
        animationDelay: `${animationDelay}s`,
        transform: isHovered ? "translateY(-2px)" : undefined,
        boxShadow: isSelected
          ? `0 8px 25px -5px ${track.selectedFill}40, 0 4px 10px -3px ${track.selectedFill}20`
          : isHovered
          ? "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Track Name */}
      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-4">
        <span
          className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-product-sans text-center leading-tight"
          style={{
            color: isSelected ? "white" : "#333333",
          }}
        >
          {track.name}
        </span>
      </div>

      {/* Hover overlay for better interaction feedback */}
      <div
        className={`absolute inset-0 rounded-[20px] transition-opacity duration-200 ${
          isHovered && !isSelected ? "opacity-10" : "opacity-0"
        }`}
        style={{ backgroundColor: "#000000" }}
      />
    </button>
  );
}