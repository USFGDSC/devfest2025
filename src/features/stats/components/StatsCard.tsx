"use client";

import { useState } from "react";
import { type Stat } from "../data";

interface StatsCardProps {
  stat: Stat;
  animationDelay?: number;
}

export function StatsCard({ stat, animationDelay = 0 }: StatsCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-[20px] border-[1.5px] border-black p-6 transition-all duration-300 ease-out group hover:shadow-lg"
      style={{
        animationName: "fadeInUp",
        animationDuration: "0.6s",
        animationTimingFunction: "ease-out",
        animationDelay: `${animationDelay}s`,
        animationFillMode: "both",
        transform: isHovered ? "translateY(-4px)" : undefined,
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="text-center mb-4">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 mb-2"
          style={{ borderColor: stat.iconColor }}
        >
          <stat.icon
            size={32}
            style={{ color: stat.iconColor }}
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Value */}
      <div className="text-center mb-3">
        <div className="text-3xl md:text-4xl font-bold text-gray-900 font-product-sans mb-1">
          {stat.value}
        </div>
        <div className="text-lg font-bold text-gray-700 font-product-sans">
          {stat.label}
        </div>
      </div>

      {/* Description */}
      <div className="text-center">
        <p className="text-sm text-gray-600 leading-relaxed">
          {stat.description}
        </p>
      </div>

      {/* Hover effect overlay */}
      <div
        className={`absolute inset-0 rounded-[20px] bg-gradient-to-br from-blue-500/5 to-green-500/5 transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
