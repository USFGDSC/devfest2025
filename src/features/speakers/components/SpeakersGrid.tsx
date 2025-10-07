"use client";

import { SpeakerCard } from "./SpeakerCard";
import { speakers, trackToCategory } from "../data";

interface SpeakersGridProps {
  selectedTrack: string;
  trackColor: string;
}

export function SpeakersGrid({ selectedTrack, trackColor }: SpeakersGridProps) {
  // Filter speakers by selected track
  const filteredSpeakers = speakers.filter(
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSpeakers.map((speaker, index) => (
        <SpeakerCard
          key={speaker.name}
          speaker={speaker}
          trackColor={trackColor}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
}
