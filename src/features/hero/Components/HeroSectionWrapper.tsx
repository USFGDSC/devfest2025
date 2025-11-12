"use client";

import { Badge, Button } from "@/ui";
import { BraceIcon, GoogleIcon } from "@/ui/svgs";
import { Globe, Calendar, Clock, MapPin, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function HeroSectionWrapper() {
  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Garantir que o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <section
        className="min-h-screen bg-gray-50 relative overflow-hidden"
        style={{
          backgroundImage: "url('/Textures/Paper Fibers.png')",
          backgroundSize: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Main content - Centralized vertically */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 flex items-center justify-center min-h-screen py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left content */}
            <div className="max-w-4xl order-2 lg:order-1">
              {/* Top badge */}
              <Badge
                variant="outline"
                size="lg"
                className="hidden md:inline-flex mb-6 md:mb-12 bg-white border-gray-300 text-gray-700 shadow-sm text-sm md:text-base"
                icon={<Globe size={16} className="md:w-[18px] md:h-[18px]" />}
              >
                Global community, local impact
              </Badge>

              {/* Main title with braces */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-2 mb-6 md:mb-8">
                  <h1 className="flex items-center gap-2 md:gap-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
                    <BraceIcon className="text-green-500 w-8 h-16 md:w-14 md:h-28 lg:w-16 lg:h-32 flex-shrink-0" />
                    <span className="flex items-center gap-1 md:gap-4">
                      <span className="font-product-sans font-bold">
                        DevFest
                      </span>
                      <GoogleIcon
                        size={32}
                        className="text-blue-600 w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0"
                      />
                      <span className="!font-normal">USF</span>
                    </span>
                    <BraceIcon
                      flipped
                      className="text-green-500 w-8 h-16 md:w-14 md:h-28 lg:w-16 lg:h-32 flex-shrink-0"
                    />
                  </h1>
                </div>

                {/* Event Details - Date, Time, Location */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {/* Date and Time - Same Line */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm md:text-base font-semibold text-gray-900 font-product-sans">
                        Sat, Nov 15, 2025
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm md:text-base font-medium text-gray-700 font-product-sans">
                        9 AM – 5 PM EST
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-2 md:gap-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <button
                        onClick={() =>
                          document
                            .getElementById("location")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-left hover:text-blue-600 transition-colors duration-200 group"
                      >
                        <span className="text-sm md:text-base font-semibold text-gray-900 font-product-sans group-hover:text-blue-600 transition-colors duration-200">
                          ENG - Engineering Building II
                        </span>
                        <span className="block text-xs md:text-sm text-gray-600 font-product-sans group-hover:text-blue-500 transition-colors duration-200">
                          4220 E Fowler Ave, Tampa, FL 33620
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed font-product-sans font-normal">
                  The world&apos;s largest community-driven tech conference,
                  hosted by Google Developer Groups, where developers connect,
                  learn and build the future with cutting-edge technologies.
                </p>
              </div>

              {/* Action buttons */}
              <div className="w-full mt-8 flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-center items-center gap-3 sm:gap-4 md:gap-6 !px-6 sm:!px-10 lg:!px-16 max-w-screen-xl mx-auto">
                <Button
                  variant="primary"
                  className="ml-0 sm:ml-16 w-full sm:!w-72 !h-14 whitespace-nowrap font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => {
                    window.open(
                      "https://bullsconnect.usf.edu/gdsc/rsvp_boot?id=1984399",
                      "_blank"
                    );
                  }}
                >
                  Join Us
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:!w-72 !h-14 whitespace-nowrap font-bold text-gray-700 hover:bg-gray-50 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  onClick={() => {
                    setShowSponsorModal(true);
                    window.open(
                      "https://drive.google.com/file/d/1M8PLzriSjUepPyXgo71g2H597f0MWwbJ/view?usp=drivesdk",
                      "_blank"
                    );
                  }}
                >
                  Become a Sponsor
                </Button>
                <Button
                  variant="primary"
                  className="w-full sm:!w-72 !h-14 whitespace-nowrap font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLScYldx6T_9Nuqv9uQe9Xu9cqWaLR1OtzO4kVHeWq-ohgayXSg/viewform",
                      "_blank"
                    );
                  }}
                >
                  Upload your Resume
                </Button>
              </div>
            </div>

            {/* Image - Mobile and Desktop */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 lg:h-[500px] flex justify-center lg:justify-end">
                <div className="relative w-80 sm:w-96 lg:w-full h-full">
                  <Image
                    src="/Images/Hero-group.png"
                    alt="DevFest USF Community Group"
                    fill
                    className="object-contain rounded-xl lg:rounded-2xl"
                    quality={90}
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1200px) 400px, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Modal - Portal */}
      {isMounted &&
        showSponsorModal &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
            onClick={() => setShowSponsorModal(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSponsorModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-product-sans">
                  Become a Sponsor
                </h3>
                <p className="text-gray-600 mb-6 font-product-sans">
                  Interested in sponsoring DevFest USF 2025? We&apos;d love to
                  hear from you!
                </p>

                <div className="bg-gray-50 rounded-xl p-4 mb-6 border-2 border-gray-200">
                  <p className="text-sm text-gray-500 mb-2 font-product-sans">
                    Contact us at:
                  </p>
                  <a
                    href="mailto:mariajulia57@usf.edu?subject=DevFest%20USF%202025%20-%20Sponsorship%20Opportunity&body=Hello%2C%0A%0AI%20am%20interested%20in%20becoming%20a%20sponsor%20for%20DevFest%20USF%202025.%0A%0ADevFest%20is%20the%20world's%20largest%20community-driven%20tech%20conference%20hosted%20by%20Google%20Developer%20Groups%2C%20and%20we%20would%20love%20to%20explore%20partnership%20opportunities%20with%20your%20organization.%0A%0ACould%20you%20please%20provide%20more%20information%20about%20sponsorship%20packages%20and%20benefits%20available%20for%20this%20event%3F%0A%0AI%20look%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg break-all font-product-sans transition-colors"
                  >
                    mariajulia57@usf.edu
                  </a>
                </div>

                <p className="text-xs text-gray-500 font-product-sans">
                  Click the email above to open your email client with a
                  pre-filled message
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
