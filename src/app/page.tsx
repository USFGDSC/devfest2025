import { NavigationBar, FloatingCalendarButton } from "@/features/navigation";
import { HeroWithIntro } from "@/features/hero";
import { SimpleAboutSection } from "@/features/about/SimpleAboutSection";
import { GallerySection } from "@/features/gallery";
import { TracksSection } from "@/features/tracks";
import { LocationSection } from "@/features/location";
import { ScheduleSection } from "@/features/schedule";
import { FAQSection } from "@/features/faqs";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <NavigationBar />

      {/* Floating Calendar Button for Mobile */}
      <FloatingCalendarButton />

      {/* Hero Section with Animation */}
      <HeroWithIntro />

      {/* About Section with Animated Doodles */}
      <SimpleAboutSection />

      {/* Tracks Section */}
      <TracksSection />

      {/* Location Section */}
      <LocationSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Schedule Section */}
      <ScheduleSection />

      {/* <section
        id="sponsors"
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-product-sans mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you to our amazing partners who make DevFest possible.
          </p>
        </div>
      </section> */}

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
