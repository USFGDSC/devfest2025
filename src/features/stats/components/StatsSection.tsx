"use client";

import { useState } from "react";
import { StatsCard } from "./StatsCard";
import { YearSelector } from "./YearSelector";
import { previousYearsStats } from "../data";

export function StatsSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2023);

  const selectedYearData = previousYearsStats.find(
    (yearData) => yearData.year === selectedYear
  );

  return (
    <section
      id="stats"
      className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4"
      style={{
        outline: "2.5px solid #000000",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-product-sans">
            Our Impact Over the Years
          </h2>
        </div>

        {/* Content */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedYearData.stats.map((stat, index) => (
                  <StatsCard
                    key={stat.id}
                    stat={stat}
                    animationDelay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
