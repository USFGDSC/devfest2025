"use client";

import { useState } from "react";
import { TrackCard } from "./TrackCard";
import { SpeakersGrid } from "@/features/speakers";

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
    id: "build-with-ai",
    name: "Build with AI 🤖",
    description: "Explore cutting-edge AI technologies and applications",
    bullets: [
      "Explore cutting-edge AI technologies and applications",
      "Gain insights from GDEs and AI practitioners",
      "Hands-on learning experiences in AI projects",
    ],
    idleFill: "#C3ECF6",
    selectedFill: "#4285F4",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship 💡",
    description: "Learn strategies to launch and grow startups",
    bullets: [
      "Learn strategies to launch and grow startups",
      "Hear founder stories and real-world case studies",
      "Participate in interactive sessions to brainstorm ideas",
    ],
    idleFill: "#CCF6C5",
    selectedFill: "#34A853",
  },
  {
    id: "industry-spotlight",
    name: "Industry Spotlight 🌟",
    description: "Career talks from seasoned professionals",
    bullets: [
      "Career talks from seasoned professionals",
      "Insights into emerging tech trends and industry best practices",
      "Networking opportunities with recruiters and tech leaders",
    ],
    idleFill: "#FFE7A5",
    selectedFill: "#FAAB00",
  },
];

export function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState<string>("build-with-ai");
  const [activeView, setActiveView] = useState<"about" | "speakers">("about");
  const [showAllSpeakers, setShowAllSpeakers] = useState<boolean>(false);

  const selectedTrackData = tracks.find((track) => track.id === selectedTrack);

  return (
    <section
      id="tracks-speakers"
      className="bg-white flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-product-sans mb-6">
            Our Tracks & Speakers
          </h2>

          {/* View Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-full p-1 border-[1.5px] border-black">
              <button
                onClick={() => setActiveView("about")}
                className={`px-6 py-2 rounded-full font-bold font-product-sans text-sm transition-all duration-200 ${
                  activeView === "about"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveView("speakers")}
                className={`px-6 py-2 rounded-full font-bold font-product-sans text-sm transition-all duration-200 ${
                  activeView === "speakers"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Speakers
              </button>
            </div>
          </div>
        </div>

        {/* Conditional Content Based on Active View */}
        {activeView === "about" ? (
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mobile: 2x2 Grid Layout */}
            <div className="lg:hidden w-full px-4">
              <div className="grid grid-cols-2 gap-3">
                {tracks.slice(0, 2).map((track) => (
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
              {/* Third track centered below */}
              {tracks.length === 3 && (
                <div className="flex justify-center mt-3">
                  <button
                    key={tracks[2].id}
                    onClick={() => setSelectedTrack(tracks[2].id)}
                    className="px-4 py-3 rounded-full border-[1.5px] border-black font-bold font-product-sans text-sm transition-all duration-200"
                    style={{
                      backgroundColor:
                        selectedTrack === tracks[2].id
                          ? tracks[2].selectedFill
                          : tracks[2].idleFill,
                      color:
                        selectedTrack === tracks[2].id ? "white" : "#333333",
                    }}
                  >
                    {tracks[2].name}
                  </button>
                </div>
              )}
            </div>

            {/* Desktop: Track Cards Grid */}
            <div className="hidden lg:block max-w-lg mx-auto lg:mx-0 lg:order-1">
              {/* First two cards in grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                {tracks.slice(0, 2).map((track, index) => (
                  <TrackCard
                    key={track.id}
                    track={track}
                    isSelected={selectedTrack === track.id}
                    onClick={() => setSelectedTrack(track.id)}
                    animationDelay={index * 0.5}
                  />
                ))}
              </div>
              {/* Third card centered below */}
              {tracks.length === 3 && (
                <div className="flex justify-center">
                  <div className="w-1/2">
                    <TrackCard
                      track={tracks[2]}
                      isSelected={selectedTrack === tracks[2].id}
                      onClick={() => setSelectedTrack(tracks[2].id)}
                      animationDelay={2 * 0.5}
                    />
                  </div>
                </div>
              )}
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
        ) : (
          <div className="w-full">
            {/* Track Selection for Speakers View */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap justify-center gap-3">
                {/* Show All Button */}
                <button
                  onClick={() => {
                    setShowAllSpeakers(true);
                    setSelectedTrack(""); // Clear selected track when showing all
                  }}
                  className="px-4 py-2 rounded-full border-[1.5px] border-black font-bold font-product-sans text-sm transition-all duration-200"
                  style={{
                    backgroundColor: showAllSpeakers ? "#1a1a1a" : "#f5f5f5",
                    color: showAllSpeakers ? "white" : "#333333",
                  }}
                >
                  Show All
                </button>

                {/* Track Buttons */}
                {tracks.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => {
                      setSelectedTrack(track.id);
                      setShowAllSpeakers(false);
                    }}
                    className="px-4 py-2 rounded-full border-[1.5px] border-black font-bold font-product-sans text-sm transition-all duration-200"
                    style={{
                      backgroundColor:
                        selectedTrack === track.id && !showAllSpeakers
                          ? track.selectedFill
                          : track.idleFill,
                      color:
                        selectedTrack === track.id && !showAllSpeakers
                          ? "white"
                          : "#333333",
                    }}
                  >
                    {track.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Speakers Grid */}
            {(selectedTrackData || showAllSpeakers) && (
              <SpeakersGrid
                selectedTrack={selectedTrackData?.name || ""}
                trackColor={selectedTrackData?.selectedFill || "#4285F4"}
                showAll={showAllSpeakers}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default TracksSection;
