"use client";

import { useMemo, useState } from "react";
import { scheduleData } from "../data";
import { calculateEventPositions } from "../utils";
import Timeline from "./Timeline";
import ScheduleGrid from "./ScheduleGrid";
import { Section } from "@/ui";

export default function ScheduleSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Process events and calculate positions
  const processedEvents = useMemo(() => {
    return calculateEventPositions(scheduleData);
  }, []);

  // Filter events based on selected category
  const filteredEvents = useMemo(() => {
    if (selectedCategory === "all") return processedEvents;
    return processedEvents.filter(
      (event) => event.category === selectedCategory
    );
  }, [processedEvents, selectedCategory]);

  // Calculate total height needed for the schedule
  const totalHeight = useMemo(() => {
    const PIXELS_PER_MINUTE = 2;
    const SCHEDULE_DURATION = 8 * 60; // 9 AM to 5 PM = 8 hours
    return SCHEDULE_DURATION * PIXELS_PER_MINUTE + 100; // Extra padding
  }, []);

  // Get unique categories for filter buttons
  const categories = useMemo(() => {
    const cats = new Set(processedEvents.map((event) => event.category));
    return Array.from(cats);
  }, [processedEvents]);

  const categoryLabels: Record<string, string> = {
    ceremony: "Ceremonies",
    speaker: "Speakers",
    meal: "Meals",
    networking: "Networking",
    activity: "Activities",
  };

  return (
    <Section id="schedule" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-product-sans mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive schedule of talks, workshops, and
            networking sessions. Click on any event for more details.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Events
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Container */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border-2 border-black overflow-hidden">
            {/* Desktop Schedule */}
            <div className="hidden lg:block">
              <div className="flex h-[600px] overflow-auto">
                <Timeline startHour={9} endHour={17} pixelsPerMinute={2} />
                <ScheduleGrid
                  events={filteredEvents}
                  columns={3}
                  pixelsPerMinute={2}
                  totalHeight={totalHeight}
                />
              </div>
            </div>

            {/* Mobile Schedule - List View */}
            <div className="lg:hidden">
              <div className="p-4">
                <div className="space-y-4">
                  {filteredEvents
                    .sort((a, b) => {
                      // Sort by start time
                      const timeA = a.start_time;
                      const timeB = b.start_time;
                      return timeA.localeCompare(timeB);
                    })
                    .map((event) => (
                      <div
                        key={event.id}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {event.activity}
                          </h3>
                          <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded">
                            {event.start_time} - {event.end_time}
                          </span>
                        </div>

                        {event.speaker && event.speaker !== "coming soon" && (
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-medium">Speaker:</span>{" "}
                            {event.speaker}
                          </p>
                        )}

                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Location:</span>{" "}
                          {event.location}
                        </p>

                        {/* Category badge */}
                        <div className="mt-2">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              event.category === "ceremony"
                                ? "bg-red-100 text-red-800"
                                : event.category === "speaker"
                                ? "bg-blue-100 text-blue-800"
                                : event.category === "meal"
                                ? "bg-green-100 text-green-800"
                                : event.category === "networking"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {categoryLabels[event.category] || event.category}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
