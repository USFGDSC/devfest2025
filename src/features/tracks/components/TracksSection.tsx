"use client";

import { useState } from "react";
import { TrackCard } from "./TrackCard";

interface Track {
  id: string;
  name: string;
  description: string;
  bullets: string[];
  idleFill: string;
  selectedFill: string;
}

const tracks: Track[] = [
  {
    id: "expert",
    name: "Expert",
    description: "Master advanced skills and lead in tech innovation",
    bullets: [
      "Cutting-edge tools, frameworks, and AI",
      "Insights from software, data science, and cybersecurity",
      "Lead in emerging tech fields",
    ],
    idleFill: "#C3ECF6",
    selectedFill: "#4285F4",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    description: "Inspire your journey with insights from tech leaders",
    bullets: [
      "Startup skills and strategies",
      "Connect with professionals and visionaries",
      "Overcome challenges and grow",
    ],
    idleFill: "#CCF6C5",
    selectedFill: "#34A853",
  },
  {
    id: "spotlight",
    name: "Spotlight",
    description: "Kickstart your career with practical advice from the pros",
    bullets: [
      "Job search, interviews, and resume",
      "Early-career challenges and opportunities",
      "Build confidence and a professional network",
    ],
    idleFill: "#FFE7A5",
    selectedFill: "#FAAB00",
  },
  {
    id: "workshop",
    name: "Workshop",
    description: "Hands-on learning with leaders in USF tech clubs",
    bullets: [
      "Workshops by SHPE, IEEE-CS, BCI, SCP",
      "Practical technology experiences",
      "Foundation for your future tech career",
    ],
    idleFill: "#F8D8D8",
    selectedFill: "#EA4336",
  },
];

export function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState<string>("expert");

  const selectedTrackData = tracks.find((track) => track.id === selectedTrack);

  return (
    <section
      id="tracks"
      className="bg-white flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-product-sans mb-4">
            Our Tracks
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your learning path and dive deep into the areas that matter
            most to your growth
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mobile: 2x2 Grid Layout */}
          <div className="lg:hidden w-full px-4">
            <div className="grid grid-cols-2 gap-3">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className="px-4 py-3 rounded-full border-[1.5px] border-black font-bold font-product-sans text-sm transition-all duration-200"
                  style={{
                    backgroundColor:
                      selectedTrack === track.id
                        ? track.selectedFill
                        : track.idleFill,
                    color: selectedTrack === track.id ? "white" : "#333333",
                  }}
                >
                  {track.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Track Cards Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-8 max-w-lg mx-auto lg:mx-0 lg:order-1">
            {tracks.map((track, index) => (
              <TrackCard
                key={track.id}
                track={track}
                isSelected={selectedTrack === track.id}
                onClick={() => setSelectedTrack(track.id)}
                animationDelay={index * 0.5}
              />
            ))}
          </div>

          {/* Content Panel */}
          <div className="w-full lg:pl-8 lg:order-2">
            {selectedTrackData && (
              <div
                key={selectedTrackData.id}
                className="animate-fade-in text-center lg:text-left"
              >
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold font-product-sans mb-4 sm:mb-6"
                  style={{ color: selectedTrackData.selectedFill }}
                >
                  {selectedTrackData.name}
                </h3>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {selectedTrackData.description}
                </p>

                <ul className="space-y-3 sm:space-y-4 max-w-2xl mx-auto lg:mx-0">
                  {selectedTrackData.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 text-left"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{
                          backgroundColor: selectedTrackData.selectedFill,
                        }}
                      />
                      <span className="text-sm sm:text-base md:text-lg leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TracksSection;
