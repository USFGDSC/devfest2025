"use client";

import { SpeakerCard } from "./SpeakerCard";
import { speakers, trackToCategory } from "../data";

interface SpeakersGridProps {
  selectedTrack: string;
  trackColor: string;
  showAll?: boolean;
}

export function SpeakersGrid({
  selectedTrack,
  trackColor,
  showAll = false,
}: SpeakersGridProps) {
  // Filter speakers by selected track or show all if showAll is true
  const filteredSpeakers = showAll
    ? speakers
    : speakers.filter(
        (speaker) => speaker.category === trackToCategory[selectedTrack]
      );

  // If no speakers for the track, show a placeholder message
  if (filteredSpeakers.length === 0) {
    return (
      <div className="text-center py-8">
        <div
          className="w-16 h-16 rounded-full border-[2px] border-dashed mx-auto mb-4 flex items-center justify-center"
          style={{ borderColor: trackColor }}
        >
          <span className="text-2xl">🎤</span>
        </div>
        <p className="text-gray-600 font-product-sans">
          Amazing speakers coming soon for this track!
        </p>
      </div>
    );
  }

  // Helper function to get track color for a speaker category
  const getTrackColorForCategory = (category: string): string => {
    const trackEntry = Object.entries(trackToCategory).find(
      ([trackName, cat]) => cat === category
    );
    if (!trackEntry) return trackColor;

    const trackColors: { [key: string]: string } = {
      "Build with AI 🤖": "#4285F4",
      "Entrepreneurship 💡": "#34A853",
      "Industry Spotlight 🌟": "#FAAB00",
    };

    return trackColors[trackEntry[0]] || trackColor;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSpeakers.map((speaker, index) => (
        <SpeakerCard
          key={speaker.name}
          speaker={speaker}
          trackColor={
            showAll ? getTrackColorForCategory(speaker.category) : trackColor
          }
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
}
