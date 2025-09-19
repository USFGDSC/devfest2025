"use client";

import { useState } from "react";

interface RsvpButtonProps {
  eventId: string;
  isRsvped?: boolean;
  onRsvp?: (eventId: string) => void;
}

export function RsvpButton({
  eventId,
  isRsvped = false,
  onRsvp,
}: RsvpButtonProps) {
  const [rsvped, setRsvped] = useState(isRsvped);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      // RSVP logic would go here
      setRsvped(!rsvped);
      onRsvp?.(eventId);
    } catch (error) {
      console.error("RSVP error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${
        rsvped
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-blue-600 text-white hover:bg-blue-700"
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? "Loading..." : rsvped ? "RSVP'd" : "RSVP"}
    </button>
  );
}
