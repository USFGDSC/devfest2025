"use client";

import { ProcessedEvent } from "../types";
import { getCategoryColors } from "../utils";

interface EventCardProps {
  event: ProcessedEvent;
  isCompact?: boolean;
}

export default function EventCard({
  event,
  isCompact = false,
}: EventCardProps) {
  const colors = getCategoryColors(event.category);

  // Extract speaker name from activity if it contains speaker info
  const getSpeakerName = () => {
    if (event.speaker && event.speaker !== "coming soon") {
      return event.speaker;
    }

    // Try to extract from activity title
    const match = event.activity.match(/Speaker - (.+?) \(/);
    return match ? match[1] : null;
  };

  const speakerName = getSpeakerName();

  // Get track type from activity (AI, E, C)
  const getTrackType = () => {
    const match = event.activity.match(/\(([AEC])\)/);
    return match ? match[1] : null;
  };

  const trackType = getTrackType();

  return (
    <div
      className={`
        absolute left-0 right-0 rounded-lg border-l-4 shadow-sm hover:shadow-md transition-all duration-200
        ${colors.bg} ${colors.border} ${colors.text}
        cursor-pointer group
        ${isCompact ? "px-2 py-1" : "px-3 py-2"}
      `}
      style={{
        top: `${event.position.top}px`,
        height: `${Math.max(event.position.height, isCompact ? 40 : 60)}px`,
        minHeight: isCompact ? "40px" : "60px",
      }}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="flex-1 min-h-0">
          <div className="flex items-start justify-between gap-2">
            <h4
              className={`font-semibold leading-tight ${
                isCompact ? "text-xs" : "text-sm"
              } line-clamp-2`}
            >
              {event.activity}
            </h4>
            {trackType && (
              <span
                className={`
                flex-shrink-0 px-1.5 py-0.5 rounded text-xs font-bold
                ${
                  trackType === "AI"
                    ? "bg-purple-200 text-purple-800"
                    : trackType === "E"
                    ? "bg-orange-200 text-orange-800"
                    : "bg-teal-200 text-teal-800"
                }
              `}
              >
                {trackType}
              </span>
            )}
          </div>

          {speakerName && !isCompact && (
            <p className="text-xs font-medium mt-1 opacity-80">{speakerName}</p>
          )}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between gap-2 mt-1 ${
            isCompact ? "text-xs" : "text-xs"
          }`}
        >
          <span className="font-medium">
            {event.start_time} - {event.end_time}
          </span>
          {!isCompact && (
            <span className="text-xs opacity-75 truncate">
              {event.location}
            </span>
          )}
        </div>
      </div>

      {/* Hover tooltip for compact mode */}
      {isCompact && (
        <div className="absolute left-full top-0 ml-2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
          <div className="font-semibold">{event.activity}</div>
          {speakerName && <div>Speaker: {speakerName}</div>}
          <div>{event.location}</div>
          <div>
            {event.start_time} - {event.end_time}
          </div>
        </div>
      )}
    </div>
  );
}
