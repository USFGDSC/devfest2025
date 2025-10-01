"use client";

import { SpeakerCard } from "./SpeakerCard";

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

interface SpeakersGridProps {
  selectedTrack: string;
  trackColor: string;
}

// Mock speakers data - replace with real data later
const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dr. Sarah Chen",
    title: "Senior AI Engineer",
    company: "Google",
    bio: "Leading expert in machine learning and AI ethics with 10+ years of experience building scalable AI systems.",
    track: "Expert",
  },
  {
    id: "speaker-2",
    name: "Marcus Rodriguez",
    title: "Startup Founder & CEO",
    company: "TechVenture Inc",
    bio: "Serial entrepreneur who has built and scaled multiple successful tech startups from idea to IPO.",
    track: "Entrepreneurship",
  },
  {
    id: "speaker-3",
    name: "Jennifer Kim",
    title: "Senior Software Engineer",
    company: "Meta",
    bio: "Full-stack developer passionate about mentoring new graduates and building inclusive tech teams.",
    track: "Spotlight",
  },
  {
    id: "speaker-4",
    name: "Alex Thompson",
    title: "DevOps Engineer",
    company: "AWS",
    bio: "Cloud infrastructure specialist with expertise in containerization, CI/CD, and scalable system design.",
    track: "Workshop",
  },
  {
    id: "speaker-5",
    name: "Dr. Maria Santos",
    title: "Data Science Director",
    company: "Netflix",
    bio: "Data science leader specializing in recommendation systems and large-scale data processing.",
    track: "Expert",
  },
  {
    id: "speaker-6",
    name: "David Park",
    title: "Product Manager",
    company: "Stripe",
    bio: "Product strategist focused on fintech innovation and building products that developers love.",
    track: "Entrepreneurship",
  },
];

export function SpeakersGrid({ selectedTrack, trackColor }: SpeakersGridProps) {
  // Filter speakers by selected track
  const filteredSpeakers = speakers.filter(
    (speaker) => speaker.track.toLowerCase() === selectedTrack.toLowerCase()
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
          key={speaker.id}
          speaker={speaker}
          trackColor={trackColor}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
}
