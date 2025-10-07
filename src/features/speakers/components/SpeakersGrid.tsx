"use client";

import { SpeakerCard } from "./SpeakerCard";

interface Speaker {
  name: string;
  status: string;
  linkedin: string;
  category: string;
  image: string;
}

interface SpeakersGridProps {
  selectedTrack: string;
  trackColor: string;
}

const speakers: Speaker[] = [
  {
    name: "Xiaoquan Kong",
    status: "Confirmed",
    linkedin: "1. LinkedIn",
    category: "Build with AI",
    image: "coming_soon.jpg",
  },
  {
    name: "Laurence Svekis",
    status: "Confirmed",
    linkedin: "1.LinkedIn",
    category: "Build with AI",
    image: "coming_soon.jpg",
  },
  {
    name: "Noble Ackerson",
    status: "Confirmed",
    linkedin: "1. LinkedIn",
    category: "Build with AI",
    image: "coming_soon.jpg",
  },
  {
    name: "Gerardo Sanchez",
    status: "Confirmed",
    linkedin: "https://www.linkedin.com/in/gsans7/",
    category: "Entrepreneurship",
    image: "coming_soon.jpg",
  },
  {
    name: "Rich Foltak",
    status: "Confirmed",
    linkedin: "1. LinkedIn",
    category: "Entrepreneurship",
    image: "coming_soon.jpg",
  },
  {
    name: "Carlos Vasquez",
    status: "Confirmed",
    linkedin: "1. LinkedIn",
    category: "Entrepreneurship",
    image: "coming_soon.jpg",
  },
  {
    name: "James Gress",
    status: "Confirmed",
    linkedin: "1. LinkedIn",
    category: "Career Spotlight",
    image: "coming_soon.jpg",
  },
  {
    name: "Modupe Ajala",
    status: "Coming soon",
    linkedin: "https://www.linkedin.com/in/modupeajala-3288/",
    category: "Career Spotlight",
    image: "coming_soon.jpg",
  },
];

export function SpeakersGrid({ selectedTrack, trackColor }: SpeakersGridProps) {
  // Map track names to speaker categories
  const trackToCategory: { [key: string]: string } = {
    "Build with AI 🤖": "Build with AI",
    "Entrepreneurship 💡": "Entrepreneurship",
    "Industry Spotlight 🌟": "Career Spotlight",
  };

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
