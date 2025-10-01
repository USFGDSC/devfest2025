"use client";

import { Badge, Button } from "@/ui";
import { BraceIcon, GoogleIcon } from "@/ui/svgs";
import { Globe, Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroSectionWrapper() {
  return (
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
                    <span className="font-product-sans font-bold">DevFest</span>
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
                    <span className="text-sm md:text-base font-semibold text-gray-900 font-product-sans">
                      ENG - Engineering Building I
                    </span>
                    <span className="text-xs md:text-sm text-gray-600 font-product-sans">
                      4202 E Fowler Ave, Tampa, FL 33620
                    </span>
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
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 mt-8 md:mt-12">
              <Button
                variant="primary"
                className="font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex-1"
              >
                Join Us
              </Button>
              <Button
                variant="outline"
                className="font-bold text-gray-700 hover:bg-gray-50 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex-1"
              >
                Become a Sponsor
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
  );
}
