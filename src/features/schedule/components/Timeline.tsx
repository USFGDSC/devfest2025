"use client";

import { generateTimeSlots } from "../utils";

interface TimelineProps {
  startHour?: number;
  endHour?: number;
  pixelsPerMinute?: number;
}

export default function Timeline({
  startHour = 9,
  endHour = 17,
  pixelsPerMinute = 2,
}: TimelineProps) {
  const timeSlots = generateTimeSlots(startHour, endHour);

  return (
    <div className="flex-shrink-0 w-20 bg-gray-50 border-r border-gray-200 relative">
      {/* Time markers */}
      {timeSlots.map((slot, index) => (
        <div
          key={slot.time}
          className="absolute left-0 right-0 flex items-center justify-end pr-3"
          style={{
            top: `${index * 60 * pixelsPerMinute}px`,
            height: `${60 * pixelsPerMinute}px`,
          }}
        >
          <div className="text-xs font-medium text-gray-600 bg-gray-50 px-1">
            {slot.time}
          </div>

          {/* Hour line */}
          <div className="absolute right-0 w-3 h-px bg-gray-300" />
        </div>
      ))}

      {/* Quarter hour marks */}
      {timeSlots.map((slot, index) => (
        <div key={`quarter-${slot.time}`}>
          {[15, 30, 45].map((minute) => (
            <div
              key={`${slot.time}-${minute}`}
              className="absolute right-0 w-2 h-px bg-gray-200"
              style={{
                top: `${(index * 60 + minute) * pixelsPerMinute}px`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Current time indicator (optional - for live events) */}
      {/* This would be implemented with real-time logic */}
    </div>
  );
}
