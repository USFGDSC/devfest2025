"use client";

import { useState } from "react";

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  image?: string;
  track: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface SpeakerCardProps {
  speaker: Speaker;
  trackColor: string;
  animationDelay?: number;
}

export function SpeakerCard({
  speaker,
  trackColor,
  animationDelay = 0,
}: SpeakerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-[20px] border-[1.5px] border-black p-6 transition-all duration-300 ease-out group hover:shadow-lg"
      style={{
        animationName: "fadeInUp",
        animationDuration: "0.6s",
        animationTimingFunction: "ease-out",
        animationDelay: `${animationDelay}s`,
        animationFillMode: "both",
        transform: isHovered ? "translateY(-2px)" : undefined,
        boxShadow: isHovered
          ? `0 10px 25px -5px ${trackColor}20, 0 4px 6px -2px ${trackColor}10`
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speaker Avatar Placeholder */}
      <div className="flex justify-center mb-4">
        <div
          className="w-20 h-20 rounded-full border-[2px] border-black flex items-center justify-center font-bold text-white text-xl font-product-sans"
          style={{ backgroundColor: trackColor }}
        >
          {speaker.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
      </div>

      {/* Speaker Info */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900 font-product-sans mb-1">
          {speaker.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 font-medium">
          {speaker.title}
        </p>
        <p className="text-xs text-gray-500 mb-3">{speaker.company}</p>

        {/* Track Badge */}
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-bold font-product-sans text-white mb-3"
          style={{ backgroundColor: trackColor }}
        >
          {speaker.track}
        </div>

        {/* Bio Preview */}
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
          {speaker.bio}
        </p>
      </div>

      {/* Hover overlay for better interaction feedback */}
      <div
        className={`absolute inset-0 rounded-[20px] transition-opacity duration-200 ${
          isHovered ? "opacity-5" : "opacity-0"
        }`}
        style={{ backgroundColor: trackColor }}
      />
    </div>
  );
}
