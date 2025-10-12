"use client";

import { MapPin, Navigation, ExternalLink, Car, Building2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/ui";

export default function LocationSection() {
  const handleGetDirections = () => {
    const address = "4220 E Fowler Ave, Tampa, FL 33620";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  const handleFindParking = () => {
    window.open(
      "https://www.usf.edu/parking/documents/visitormap.pdf",
      "_blank"
    );
  };

  return (
    <section
      id="location"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/Textures/Paper Fibers.png')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        outline: "2.5px solid #000000",
      }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-product-sans">
              Event Location
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-product-sans">
            Join us at the University of South Florida&apos;s Engineering
            Building for an amazing day of learning and networking.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Location Details */}
          <div className="space-y-6">
            {/* Building Name */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-black">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-product-sans mb-4">
                ENG - Engineering Building II
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-900 font-product-sans">
                    4220 E Fowler Ave
                  </p>
                  <p className="text-lg text-gray-700 font-product-sans">
                    Tampa, FL 33620
                  </p>
                </div>
              </div>

              {/* Event Rooms */}
              <div className="flex items-start gap-3 mb-6">
                <Building2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-900 font-product-sans">
                    Event Rooms
                  </p>
                  <p className="text-lg text-gray-700 font-product-sans">
                    ENB 109, ENB 116, ENB 118, Hall of Flags
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleGetDirections}
                  variant="primary"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={handleFindParking}
                  variant="outline"
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Car className="w-4 h-4 mr-2" />
                  Find Parking
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right - Building Image */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-black">
              <Image
                src="/Images/usf-engineering-ii.BeFaJwht.webp"
                alt="USF Engineering Building II - Event Venue"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />

              {/* Overlay with building name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h4 className="text-white text-xl md:text-2xl font-bold font-product-sans">
                  University of South Florida
                </h4>
                <p className="text-white/90 font-product-sans">
                  Engineering Building II
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
