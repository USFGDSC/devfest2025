import { NavigationBar, FloatingCalendarButton } from "@/features/navigation";
import { HeroWithIntro } from "@/features/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <NavigationBar />

      {/* Floating Calendar Button for Mobile */}
      <FloatingCalendarButton />

      {/* Hero Section with Animation */}
      <HeroWithIntro />

      {/* Placeholder sections for navigation testing */}
      <section
        id="about"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-product-sans mb-4">
            About DevFest
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about the DevFest community and our mission to bring
            developers together.
          </p>
        </div>
      </section>

      <section
        id="speakers"
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-product-sans mb-4">
            Amazing Speakers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the incredible speakers who will be sharing their knowledge and
            expertise.
          </p>
        </div>
      </section>

      <section
        id="schedule"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-product-sans mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out the full schedule of talks, workshops, and networking
            sessions.
          </p>
        </div>
      </section>

      <section
        id="sponsors"
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-product-sans mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you to our amazing sponsors who make DevFest possible.
          </p>
        </div>
      </section>

      <section
        id="faq"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-product-sans mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about DevFest USF.
          </p>
        </div>
      </section>
    </div>
  );
}
