"use client";

import { ProcessedEvent } from "../types";
import EventCard from "./EventCard";

interface ScheduleGridProps {
  events: ProcessedEvent[];
  columns: number;
  pixelsPerMinute?: number;
  totalHeight: number;
}

export default function ScheduleGrid({
  events,
  columns,
  pixelsPerMinute = 2,
  totalHeight,
}: ScheduleGridProps) {
  // Group events by column
  const eventsByColumn = Array.from(
    { length: columns },
    () => [] as ProcessedEvent[]
  );

  events.forEach((event) => {
    const column = Math.min(event.position.column, columns - 1);
    eventsByColumn[column].push(event);
  });

  return (
    <div className="flex-1 flex">
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div
          key={columnIndex}
          className="flex-1 border-r border-gray-200 last:border-r-0 relative bg-white"
          style={{ height: `${totalHeight}px` }}
        >
          {/* Events container */}
          <div className="relative px-3 h-full">
            {eventsByColumn[columnIndex].map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isCompact={event.position.height < 80}
              />
            ))}
          </div>

          {/* Grid lines for visual reference */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ height: `${totalHeight}px` }}
          >
            {Array.from({
              length: Math.ceil(totalHeight / (60 * pixelsPerMinute)),
            }).map((_, index) => (
              <div
                key={index}
                className="absolute left-0 right-0 border-t border-gray-100"
                style={{
                  top: `${index * 60 * pixelsPerMinute}px`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
