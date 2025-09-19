import { Button } from "@/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          DevFest 2025
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to DevFest! Our Next.js application is running with organized
          structure.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/about">
            <Button variant="primary">About</Button>
          </Link>
          <Link href="/events">
            <Button variant="outline">View Events</Button>
          </Link>
          <Link href="/sign-in">
            <Button variant="secondary">Sign In</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
