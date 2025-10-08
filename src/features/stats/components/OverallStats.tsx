"use client";

import { useState } from "react";

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
      icon: "👥",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "speakers",
      value: stats.totalSpeakers,
      label: "Expert Speakers",
      description: "Industry leaders and Google Developer Experts",
      icon: "🎤",
      color: "from-green-500 to-green-600",
    },
    {
      id: "sessions",
      value: stats.totalSessions,
      label: "Total Sessions",
      description: "Technical talks, workshops, and panels",
      icon: "📚",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: "years",
      value: stats.yearsRunning,
      label: "Years Running",
      description: "Building the Tampa Bay tech community",
      icon: "🎯",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "growth",
      value: stats.communityGrowth,
      label: "Community Growth",
      description: "Year-over-year attendance increase",
      icon: "📈",
      color: "from-red-500 to-red-600",
    },
    {
      id: "returning",
      value: stats.returningAttendees,
      label: "Returning Attendees",
      description: "Community members who come back",
      icon: "🔄",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="space-y-12">
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
                <div className="text-5xl mb-2">{stat.icon}</div>
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

      {/* Community Impact Section */}
      <div className="bg-white rounded-[20px] border-[1.5px] border-black p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900 font-product-sans mb-6 text-center">
          Community Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🌟</div>
            <h4 className="font-bold text-gray-900 font-product-sans mb-2">
              Knowledge Sharing
            </h4>
            <p className="text-sm text-gray-600">
              Fostering learning and collaboration in the Tampa Bay tech
              ecosystem
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🤝</div>
            <h4 className="font-bold text-gray-900 font-product-sans mb-2">
              Networking
            </h4>
            <p className="text-sm text-gray-600">
              Connecting developers, entrepreneurs, and tech enthusiasts
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="font-bold text-gray-900 font-product-sans mb-2">
              Innovation
            </h4>
            <p className="text-sm text-gray-600">
              Inspiring new projects and technological breakthroughs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
