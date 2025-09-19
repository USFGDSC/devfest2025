'use client';

import { useState, useEffect } from 'react';

export function useEvent(eventId?: string) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!eventId) {
      setLoading(false);
      return;
    }

    // Fetch event logic would go here
    // For now, just simulate loading
    const timer = setTimeout(() => {
      setEvent(null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [eventId]);

  return { event, loading, error };
}
