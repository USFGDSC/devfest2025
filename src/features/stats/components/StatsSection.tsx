"use client";

import { useState } from "react";
import { StatsCard } from "./StatsCard";
import { YearSelector } from "./YearSelector";
import { OverallStats } from "./OverallStats";
import { previousYearsStats, overallStats } from "../data";

export function StatsSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2023);
  const [activeView, setActiveView] = useState<"yearly" | "overall">("yearly");

  const selectedYearData = previousYearsStats.find(
    (yearData) => yearData.year === selectedYear
  );

  return (
    <section
      id="stats"
      className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-product-sans mb-6">
            Our Impact Over the Years
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            DevFest Tampa Bay has been growing year after year, bringing
            together the best of the tech community to learn, share, and build
            amazing things.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 border-[1.5px] border-black shadow-sm">
              <button
                onClick={() => setActiveView("yearly")}
                className={`px-6 py-2 rounded-full font-bold font-product-sans text-sm transition-all duration-200 ${
                  activeView === "yearly"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                By Year
              </button>
              <button
                onClick={() => setActiveView("overall")}
                className={`px-6 py-2 rounded-full font-bold font-product-sans text-sm transition-all duration-200 ${
                  activeView === "overall"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Overall
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeView === "yearly" ? (
          <div>
            {/* Year Selector */}
            <YearSelector
              years={previousYearsStats.map((data) => data.year)}
              selectedYear={selectedYear}
              onYearSelect={setSelectedYear}
            />

            {/* Year Stats */}
            {selectedYearData && (
              <div className="mt-12">
                {/* Year Theme */}
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-product-sans mb-2">
                    {selectedYearData.year} Theme
                  </h3>
                  <p className="text-xl md:text-2xl text-blue-600 font-medium">
                    &ldquo;{selectedYearData.theme}&rdquo;
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {selectedYearData.stats.map((stat, index) => (
                    <StatsCard
                      key={stat.id}
                      stat={stat}
                      animationDelay={index * 0.1}
                    />
                  ))}
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-[20px] border-[1.5px] border-black p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 font-product-sans mb-6 text-center">
                    {selectedYearData.year} Highlights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedYearData.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                        style={{
                          animationName: "fadeInUp",
                          animationDuration: "0.6s",
                          animationTimingFunction: "ease-out",
                          animationDelay: `${index * 0.1}s`,
                          animationFillMode: "both",
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <OverallStats stats={overallStats} />
        )}
      </div>
    </section>
  );
}
