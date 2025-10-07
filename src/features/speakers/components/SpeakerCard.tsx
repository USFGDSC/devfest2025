"use client";

import { useState } from "react";
import Image from "next/image";
import { type Speaker } from "../data";

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
  const [imageError, setImageError] = useState(false);

  // Check if speaker has a valid LinkedIn URL
  const hasValidLinkedIn =
    speaker.linkedin &&
    speaker.linkedin !== "1. LinkedIn" &&
    speaker.linkedin !== "1.LinkedIn";

  // Handle card click to open LinkedIn
  const handleCardClick = () => {
    if (hasValidLinkedIn) {
      window.open(speaker.linkedin, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`relative bg-white rounded-[20px] border-[1.5px] border-black p-6 transition-all duration-300 ease-out group hover:shadow-lg ${
        hasValidLinkedIn ? "cursor-pointer" : "cursor-default"
      }`}
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
      onClick={handleCardClick}
    >
      {/* Speaker Avatar */}
      <div className="flex justify-center mb-4">
        {speaker.image && speaker.image !== "coming_soon.jpg" && !imageError ? (
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full border-[2px] border-black object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
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
        )}
      </div>

      {/* Speaker Info */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900 font-product-sans mb-1">
          {speaker.name}
        </h3>

        {/* Status Badge */}
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-product-sans mb-3 ${
            speaker.status === "Confirmed"
              ? "text-white"
              : "text-gray-700 bg-gray-200"
          }`}
          style={{
            backgroundColor:
              speaker.status === "Confirmed" ? trackColor : undefined,
          }}
        >
          {speaker.status}
        </div>

        {/* Category Badge */}
        <div className="text-xs text-gray-600 mb-3 font-medium">
          {speaker.category}
        </div>

        {/* LinkedIn Indicator */}
        {hasValidLinkedIn && (
          <div className="inline-flex items-center gap-1 text-xs text-blue-600 mt-2">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Click to view LinkedIn</span>
          </div>
        )}
      </div>

      {/* Hover overlay for better interaction feedback */}
      <div
        className={`absolute inset-0 rounded-[20px] transition-opacity duration-200 ${
          isHovered ? "opacity-5" : "opacity-0"
        }`}
        style={{ backgroundColor: trackColor }}
      />

      {/* Click indicator for LinkedIn cards */}
      {hasValidLinkedIn && (
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center opacity-80">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
