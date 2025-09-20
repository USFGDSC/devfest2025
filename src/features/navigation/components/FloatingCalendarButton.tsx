"use client";

import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";

export default function FloatingCalendarButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generateCalendarLink = () => {
    setIsAnimating(true);

    const event = {
      title: "DevFest USF 2025",
      details:
        "The world's largest community-driven tech conference, hosted by Google Developer Groups. Join us for a day of learning, networking, and innovation with cutting-edge technologies.",
      location: "University of South Florida, Tampa, FL",
      startDate: "20251201T090000Z", // December 1, 2025, 9:00 AM UTC
      endDate: "20251201T180000Z", // December 1, 2025, 6:00 PM UTC
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(
      event.details
    )}&location=${encodeURIComponent(event.location)}`;

    // Small delay for animation feedback
    setTimeout(() => {
      window.open(googleCalendarUrl, "_blank");
      setIsAnimating(false);
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={generateCalendarLink}
      className={`lg:hidden fixed bottom-6 right-6 z-40 group
        w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white
        rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        ${isAnimating ? "scale-95" : "scale-100 hover:scale-105"}
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }
      `}
      aria-label="Add DevFest USF to Google Calendar"
      title="Add to Calendar"
    >
      <CalendarIcon
        size={20}
        className={`transition-transform duration-200 ${
          isAnimating ? "scale-90" : "group-hover:scale-110"
        }`}
      />

      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-blue-600 opacity-30 animate-ping group-hover:animate-none" />

      {/* Tooltip for better UX */}
      <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-product-sans">
        Add to Calendar
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </button>
  );
}
