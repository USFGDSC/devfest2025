interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Event {id}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Event details for event {id}.
        </p>
      </main>
    </div>
  );
}
