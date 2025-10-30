"use client";

import { useState } from "react";
import {
  Users,
  Mic2,
  BookOpen,
  Target,
  TrendingUp,
  RefreshCcw,
} from "lucide-react";

interface OverallStatsProps {
  stats: {
    totalAttendees: string;
    totalSpeakers: string;
    totalSessions: string;
    yearsRunning: string;
    communityGrowth: string;
    returningAttendees: string;
  };
}

export function OverallStats({ stats }: OverallStatsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const statsData = [
    {
      id: "attendees",
      value: stats.totalAttendees,
      label: "Total Attendees",
      description: "Across all DevFest Tampa Bay events",
      icon: Users,
      iconColor: "#4285F4",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "speakers",
      value: stats.totalSpeakers,
      label: "Expert Speakers",
      description: "Industry leaders and Google Developer Experts",
      icon: Mic2,
      iconColor: "#EA4335",
      color: "from-green-500 to-green-600",
    },
    {
      id: "sessions",
      value: stats.totalSessions,
      label: "Total Sessions",
      description: "Technical talks, workshops, and panels",
      icon: BookOpen,
      iconColor: "#FBBC04",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: "years",
      value: stats.yearsRunning,
      label: "Years Running",
      description: "Building the Tampa Bay tech community",
      icon: Target,
      iconColor: "#34A853",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "growth",
      value: stats.communityGrowth,
      label: "Community Growth",
      description: "Year-over-year attendance increase",
      icon: TrendingUp,
      iconColor: "#EA4335",
      color: "from-red-500 to-red-600",
    },
    {
      id: "returning",
      value: stats.returningAttendees,
      label: "Returning Attendees",
      description: "Community members who come back",
      icon: RefreshCcw,
      iconColor: "#4285F4",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div>
      {/* Overall Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <div
            key={stat.id}
            className="relative bg-white rounded-[20px] border-[1.5px] border-black p-6 transition-all duration-300 ease-out group hover:shadow-xl overflow-hidden"
            style={{
              animationName: "fadeInUp",
              animationDuration: "0.6s",
              animationTimingFunction: "ease-out",
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "both",
              transform:
                hoveredCard === stat.id ? "translateY(-6px)" : undefined,
            }}
            onMouseEnter={() => setHoveredCard(stat.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                stat.color
              } opacity-0 transition-opacity duration-300 ${
                hoveredCard === stat.id ? "opacity-5" : ""
              }`}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="text-center mb-4">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 mb-2"
                  style={{ borderColor: stat.iconColor }}
                >
                  <stat.icon
                    size={40}
                    style={{ color: stat.iconColor }}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Value */}
              <div className="text-center mb-3">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 font-product-sans mb-1">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
