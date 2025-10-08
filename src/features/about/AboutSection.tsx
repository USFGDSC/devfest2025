"use client";

import { motion, useAnimation } from "framer-motion";
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

export function AboutSection() {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [doodlePositions, setDoodlePositions] = useState<DoodlePosition[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Controls for animations
  const titleControls = useAnimation();
  const textControls = useAnimation();
  const decorativeControls = useAnimation();

  // Ensure we're on client side before starting animations
  useEffect(() => {
    setIsClient(true);

    // Start animations sequence
    const startAnimations = async () => {
      await titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });

      await textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
      });

      decorativeControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
      });
    };

    startAnimations();
  }, [titleControls, textControls, decorativeControls]);

  // Initialize doodle positions
  useEffect(() => {
    const initializePositions = () => {
      const positions: DoodlePosition[] = [];
      for (let i = 0; i < 5; i++) {
        positions.push({
          x: Math.random() * (containerSize.width - DOODLE_SIZE),
          y: Math.random() * (containerSize.height - DOODLE_SIZE),
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

          // Bounce off boundaries
          if (newX <= 0 || newX >= containerSize.width - DOODLE_SIZE) {
            newVx = -newVx;
            newX = Math.max(
              0,
              Math.min(containerSize.width - DOODLE_SIZE, newX)
            );
          }

          if (newY <= 0 || newY >= containerSize.height - DOODLE_SIZE) {
            newVy = -newVy;
            newY = Math.max(
              0,
              Math.min(containerSize.height - DOODLE_SIZE, newY)
            );
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

  // Handle container resize
  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("about-container");
      if (container) {
        const rect = container.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const doodleComponents = [
    WavesIcon,
    HashIcon,
    AsteriskIcon,
    ArrowIcon,
    InvertedWavesIcon,
  ];

  return (
    <section
      id="about-container"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#58CAFF" }}
    >
      {/* Background animated doodles */}
      {isClient &&
        doodlePositions.map((pos, index) => {
          const DoodleComponent = doodleComponents[index];
          return (
            <motion.div
              key={index}
              className="absolute pointer-events-none"
              style={{
                left: pos.x,
                top: pos.y,
                width: DOODLE_SIZE,
                height: DOODLE_SIZE,
                opacity: 0.3,
              }}
              animate={{
                rotate: pos.rotation,
              }}
              transition={{
                duration: 0,
              }}
            >
              <DoodleComponent
                className="w-full h-full"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                }}
              />
            </motion.div>
          );
        })}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16">
        {/* Title */}
        <motion.h1
          className="text-6xl font-bold text-white font-product-sans mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={titleControls}
        >
          About Us
        </motion.h1>

        {/* Content Text */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={textControls}
        >
          <p className="text-lg md:text-xl text-white leading-relaxed text-center font-product-sans">
            The Google Developer Group on Campus at the University of South
            Florida is one of the largest and most dynamic student organizations
            on campus. We are part of a global community supported by Google,
            dedicated to bridging the gap between theoretical knowledge and
            practical application in the tech world. Our mission is to empower
            the next generation of tech leaders by providing hands-on learning
            experiences, fostering innovation, and building a strong, supportive
            community of like-minded individuals.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="mt-16 flex justify-center space-x-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={decorativeControls}
        >
          {doodleComponents.slice(0, 3).map((DoodleComponent, index) => (
            <motion.div
              key={index}
              className="w-16 h-16"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <DoodleComponent className="w-full h-full text-white opacity-60" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
