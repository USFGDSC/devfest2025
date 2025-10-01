"use client";

import { Badge, Button } from "@/ui";
import { BraceIcon, GoogleIcon } from "@/ui/svgs";
import { Globe } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: "url('/Textures/Paper Fibers.png')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left content */}
          <div className="max-w-4xl">
            {/* Top badge */}
            <Badge
              variant="outline"
              size="lg"
              className="mb-12 bg-white border-gray-300 text-gray-700 shadow-sm"
              icon={<Globe size={18} />}
            >
              Global community, local impact
            </Badge>

            {/* Main title with braces */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <h1 className="flex items-center gap-3 md:gap-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
                  <BraceIcon className="text-green-500 w-10 h-20 md:w-14 md:h-28 lg:w-16 lg:h-32 flex-shrink-0" />
                  <span className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                    <span className="font-product-sans font-bold">DevFest</span>
                    <GoogleIcon
                      size={40}
                      className="text-blue-600 w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0"
                    />
                    <span className="!font-normal">USF</span>
                  </span>
                  <BraceIcon
                    flipped
                    className="text-green-500 w-10 h-20 md:w-14 md:h-28 lg:w-16 lg:h-32 flex-shrink-0"
                  />
                </h1>
                
              </div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed font-product-sans font-normal">
                The world&apos;s largest community-driven tech conference,
                hosted by Google Developer Groups, where developers connect,
                learn and build the future with cutting-edge technologies.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6">
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

          {/* Right image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="/Images/Hero-group.png"
                alt="DevFest USF Community Group"
                fill
                className="object-contain rounded-2xl"
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
