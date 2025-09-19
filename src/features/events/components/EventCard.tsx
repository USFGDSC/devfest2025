interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
  };
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {event.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {event.description}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
    </div>
  );
}
