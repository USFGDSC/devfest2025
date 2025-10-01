"use client";

import { useEffect, useState } from "react";
import {
  WavesIcon,
  HashIcon,
  AsteriskIcon,
  ArrowIcon,
  InvertedWavesIcon,
} from "@/ui/doodles";

interface DoodlePosition {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
}

const DOODLE_SIZE = 60;
const SPEED = 2;

export function SimpleAboutSection() {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [doodlePositions, setDoodlePositions] = useState<DoodlePosition[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Initialize doodle positions
  useEffect(() => {
    setMounted(true);
    const initializePositions = () => {
      const positions: DoodlePosition[] = [];
      const safeWidth = Math.max(
        containerSize.width - DOODLE_SIZE,
        DOODLE_SIZE
      );
      const safeHeight = Math.max(
        containerSize.height - DOODLE_SIZE,
        DOODLE_SIZE
      );

      for (let i = 0; i < 5; i++) {
        positions.push({
          x: Math.random() * safeWidth,
          y: Math.random() * safeHeight,
          vx: (Math.random() - 0.5) * SPEED * 2,
          vy: (Math.random() - 0.5) * SPEED * 2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
        });
      }
      setDoodlePositions(positions);
    };

    if (containerSize.width > 0 && containerSize.height > 0) {
      initializePositions();
    }
  }, [containerSize]);

  // Animation loop
  useEffect(() => {
    if (doodlePositions.length === 0) return;

    const animate = () => {
      setDoodlePositions((prev) =>
        prev.map((pos) => {
          let newX = pos.x + pos.vx;
          let newY = pos.y + pos.vy;
          let newVx = pos.vx;
          let newVy = pos.vy;

          // Bounce off boundaries with safety margins
          const maxX = containerSize.width - DOODLE_SIZE;
          const maxY = containerSize.height - DOODLE_SIZE;

          if (newX <= 0 || newX >= maxX) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(maxX, newX));
          }

          if (newY <= 0 || newY >= maxY) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(maxY, newY));
          }

          return {
            ...pos,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: pos.rotation + pos.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, [doodlePositions.length, containerSize]);

  // Handle container resize and screen size detection
  useEffect(() => {
    const handleResize = () => {
      // Check if screen is desktop (lg breakpoint is 1024px)
      setIsDesktop(window.innerWidth >= 1024);

      const container = document.getElementById("about");
      if (container) {
        const rect = container.getBoundingClientRect();
        const newSize = { width: rect.width, height: rect.height };
        setContainerSize(newSize);
      }
    };

    // Initial size detection with delay to ensure DOM is ready
    const timer = setTimeout(handleResize, 100);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted]); // Re-run when component mounts

  const doodleComponents = [
    WavesIcon,
    HashIcon,
    AsteriskIcon,
    ArrowIcon,
    InvertedWavesIcon,
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#58CAFF",
        outline: "2.5px solid #000000",
      }}
    >
      {/* Background animated doodles - Only on desktop */}
      {mounted &&
        isDesktop &&
        doodlePositions.map((pos, index) => {
          const DoodleComponent = doodleComponents[index];
          return (
            <div
              key={index}
              className="absolute pointer-events-none opacity-30 transition-all duration-75"
              style={{
                left: pos.x,
                top: pos.y,
                width: DOODLE_SIZE,
                height: DOODLE_SIZE,
                transform: `rotate(${pos.rotation}deg)`,
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
              }}
            >
              <DoodleComponent className="w-full h-full" />
            </div>
          );
        })}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 py-8 sm:py-12">
        {/* Title */}
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl font-bold text-white font-product-sans mb-4 sm:mb-6 text-center ${
            isDesktop
              ? `transition-all duration-1000 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-12"
                }`
              : "opacity-100"
          }`}
        >
          About Us
        </h1>

        {/* Content Text */}
        <div
          className={`max-w-4xl mx-auto ${
            isDesktop
              ? `transition-all duration-1000 delay-300 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`
              : "opacity-100"
          }`}
        >
          <p className="text-sm sm:text-lg md:text-xl text-white leading-relaxed text-center font-product-sans">
            The Google Developer Student Club (GDSC) at the University of South
            Florida is one of the largest and most dynamic student organizations
            on campus. We are part of a global community supported by Google,
            dedicated to bridging the gap between theoretical knowledge and
            practical application in the tech world. Our mission is to empower
            the next generation of tech leaders by providing hands-on learning
            experiences, fostering innovation, and building a strong, supportive
            community of like-minded individuals.
          </p>
        </div>

        {/* Decorative elements */}
        <div
          className={`mt-4 sm:mt-6 flex justify-center space-x-4 sm:space-x-6 ${
            isDesktop
              ? `transition-all duration-1000 delay-600 ${
                  mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`
              : "opacity-100"
          }`}
        >
          {doodleComponents.slice(0, 3).map((DoodleComponent, index) => (
            <div
              key={index}
              className={`w-8 h-8 sm:w-12 sm:h-12 ${
                isDesktop ? "animate-bounce" : ""
              }`}
              style={
                isDesktop
                  ? {
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: `${3 + index * 0.5}s`,
                    }
                  : {}
              }
            >
              <DoodleComponent className="w-full h-full text-white opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SimpleAboutSection;
