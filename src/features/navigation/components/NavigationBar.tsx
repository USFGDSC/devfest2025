"use client";

import { useState, useEffect, useRef, useCallback } from "react";
// import { Button } from "@/ui"; // Unused import removed
import { CalendarIcon, Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

// Logo variants based on visible sections
// Changes when user enters each section: Hero → About → Speakers → Schedule+
const logoVariants = [
  { src: "/logos/Logo Horizontal - Light  1.svg", alt: "DevFest USF Light" }, // Hero section
  { src: "/logos/Logo Horizontal - Blue 1.svg", alt: "DevFest USF Blue" }, // About section
  { src: "/logos/Logo Horizontal - Green 1.svg", alt: "DevFest USF Green" }, // Speakers section
  { src: "/logos/Logo Horizontal - Red 1.svg", alt: "DevFest USF Red" }, // Schedule+ sections
];

// Map sections to logo variants
const sectionLogoMap = {
  hero: 0, // Light
  about: 1, // Blue
  speakers: 2, // Green
  schedule: 3, // Red
  sponsors: 3, // Red (same as schedule)
  faq: 3, // Red (same as schedule)
} as const;

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [, setIsTransitioning] = useState(false); // isTransitioning is used via ref
  const [isEasterEgg, setIsEasterEgg] = useState(false);
  const [showStatsPopup, setShowStatsPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Use refs to prevent unnecessary re-renders and state conflicts
  const lastDetectedSectionRef = useRef<string>("hero");
  const isTransitioningRef = useRef<boolean>(false);
  const lastScrollY = useRef<number>(0);
  const scrollDirection = useRef<"up" | "down">("down");
  const transitionCountRef = useRef<number>(0);
  const scrollCountRef = useRef<number>(0);
  const easterEggCountRef = useRef<number>(0);
  const logoRef = useRef<HTMLDivElement>(null);

  // Easter egg function - 1 in 1000 chance
  const CHANCE = 0.001; // 0.1%
  const triggerEasterEgg = (): boolean => {
    transitionCountRef.current += 1;
    const isTriggered = Math.random() < CHANCE;
    if (isTriggered) {
      easterEggCountRef.current += 1;
    }
    return isTriggered;
  };

  // Logo click handler
  const handleLogoClick = () => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      setPopupPosition({
        x: rect.left,
        y: rect.bottom + 8, // 8px gap below logo
      });
    }
    setShowStatsPopup(true);
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - popupPosition.x,
      y: e.clientY - popupPosition.y,
    });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setPopupPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    },
    [isDragging, dragOffset]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add drag event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, handleMouseMove]);

  // Generate special golden logo dynamically
  // const generateGoldenLogo = (baseLogoSrc: string): string => {
  //   // Create a canvas to apply golden filter
  //   const canvas = document.createElement("canvas");
  //   const ctx = canvas.getContext("2d");

  //   if (!ctx) return baseLogoSrc;

  //   // For now, we'll use CSS filters instead of canvas manipulation
  //   // This is more performant and simpler
  //   return baseLogoSrc; // We'll apply the golden effect via CSS
  // };

  useEffect(() => {
    // Handle basic scroll detection for navbar background and direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Count scroll interactions (throttled)
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
      if (scrollDiff > 50) {
        // Only count significant scrolls
        scrollCountRef.current += 1;
      }

      // Detect scroll direction
      if (currentScrollY > lastScrollY.current) {
        scrollDirection.current = "down";
      } else if (currentScrollY < lastScrollY.current) {
        scrollDirection.current = "up";
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for section detection
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger in the last third of current section
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // More granular detection
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find sections that are intersecting with any visibility
      const intersectingSections = entries.filter(
        (entry) => entry.isIntersecting && entry.intersectionRatio > 0.05
      );

      if (intersectingSections.length === 0) return;

      let targetSection = null;
      const sectionOrder = [
        "hero",
        "about",
        "speakers",
        "schedule",
        "sponsors",
        "faq",
      ];

      if (intersectingSections.length === 1) {
        // Only one section visible, use it
        targetSection = intersectingSections[0].target.id;
      } else {
        // Multiple sections visible - use more sophisticated logic
        if (scrollDirection.current === "down") {
          // Scrolling down: prioritize section with higher visibility that comes later
          let bestSection = null;
          let bestScore = -1;

          intersectingSections.forEach((entry) => {
            const index = sectionOrder.indexOf(entry.target.id);
            // Score combines section order and visibility
            const score = index * 2 + entry.intersectionRatio;
            if (score > bestScore) {
              bestScore = score;
              bestSection = entry.target.id;
            }
          });
          targetSection = bestSection;
        } else {
          // Scrolling up: prioritize section with higher visibility that comes earlier
          let bestSection = null;
          let bestScore = -1;

          intersectingSections.forEach((entry) => {
            const index = sectionOrder.indexOf(entry.target.id);
            // Score prioritizes earlier sections with good visibility
            const score =
              (sectionOrder.length - index) * 2 + entry.intersectionRatio;
            if (score > bestScore) {
              bestScore = score;
              bestSection = entry.target.id;
            }
          });
          targetSection = bestSection;
        }
      }

      if (targetSection) {
        const newLogoIndex =
          sectionLogoMap[targetSection as keyof typeof sectionLogoMap];

        // Allow logo change even during transition if direction changed significantly
        const shouldForceChange =
          targetSection !== lastDetectedSectionRef.current;

        if (newLogoIndex !== undefined && shouldForceChange) {
          // If already transitioning, reset the transition
          if (isTransitioningRef.current) {
            isTransitioningRef.current = false;
            setIsTransitioning(false);
          }

          lastDetectedSectionRef.current = targetSection;
          isTransitioningRef.current = true;
          setIsTransitioning(true);

          // Check for easter egg
          const isEasterEggTriggered = triggerEasterEgg();

          if (isEasterEggTriggered) {
            // Special easter egg transition
            setIsEasterEgg(true);

            // Extended duration for easter egg
            setTimeout(() => {
              setCurrentLogoIndex(newLogoIndex);
              setTimeout(() => {
                setIsTransitioning(false);
                isTransitioningRef.current = false;
                // Keep easter egg visible longer
                setTimeout(() => {
                  setIsEasterEgg(false);
                }, 2000); // Easter egg lasts 2 seconds
              }, 800); // Longer transition for easter egg
            }, 100);
          } else {
            // Normal transition
            setTimeout(() => {
              setCurrentLogoIndex(newLogoIndex);
              setTimeout(() => {
                setIsTransitioning(false);
                isTransitioningRef.current = false;
              }, 500); // Match CSS transition duration
            }, 50);
          }
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = document.querySelectorAll(
      "#hero, #about, #speakers, #schedule, #sponsors, #faq"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []); // Empty dependency array since we're using refs

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generateCalendarLink = () => {
    const event = {
      title: "DevFest USF 2025",
      details:
        "The world's largest community-driven tech conference, hosted by Google Developer Groups",
      location: "University of South Florida, Tampa, FL",
      startDate: "20251201T090000Z", // December 1, 2025, 9:00 AM UTC
      endDate: "20251201T180000Z", // December 1, 2025, 6:00 PM UTC
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(
      event.details
    )}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with smooth color transitions and easter egg */}
            <div className="flex items-center space-x-3 relative">
              <div
                ref={logoRef}
                className="relative h-12 lg:h-16 w-[300px] logo-container cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={handleLogoClick}
                title="Clique para ver suas estatísticas! 📊"
              >
                {/* Current Logo */}
                <Image
                  src={logoVariants[currentLogoIndex].src}
                  alt={logoVariants[currentLogoIndex].alt}
                  width={300}
                  height={64}
                  className={`absolute inset-0 h-12 lg:h-16 w-auto transition-opacity duration-300 ease-in-out ${
                    isEasterEgg ? "animate-golden-burst" : ""
                  }`}
                  style={{
                    filter: isEasterEgg
                      ? "brightness(1.3) contrast(1.2) drop-shadow(0 0 15px #FFD700)"
                      : undefined,
                  }}
                  unoptimized={true}
                  priority
                />

                {/* Golden overlay for easter egg */}
                {isEasterEgg && (
                  <div
                    className="absolute inset-0 h-12 lg:h-16 w-auto pointer-events-none animate-golden-overlay"
                    style={{
                      background: `
                        linear-gradient(135deg, 
                          rgba(255, 215, 0, 0.3) 0%, 
                          rgba(255, 193, 7, 0.4) 25%, 
                          rgba(255, 223, 0, 0.5) 50%, 
                          rgba(255, 193, 7, 0.4) 75%, 
                          rgba(255, 215, 0, 0.3) 100%
                        )
                      `,
                      mixBlendMode: "overlay",
                      borderRadius: "8px",
                    }}
                  />
                )}

                {/* Special easter egg effects */}
                {isEasterEgg && (
                  <>
                    {/* Golden particles */}
                    <div className="absolute inset-0 animate-golden-particles pointer-events-none">
                      <div
                        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full animate-bounce opacity-90"
                        style={{
                          background:
                            "radial-gradient(circle, #FFD700 0%, #FFA500 100%)",
                          boxShadow: "0 0 8px #FFD700",
                        }}
                      ></div>
                      <div
                        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full animate-ping opacity-80"
                        style={{
                          background:
                            "radial-gradient(circle, #FFFF00 0%, #FFD700 100%)",
                          boxShadow: "0 0 6px #FFD700",
                        }}
                      ></div>
                      <div
                        className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full animate-pulse opacity-85"
                        style={{
                          background:
                            "radial-gradient(circle, #FFD700 0%, #FF8C00 100%)",
                          boxShadow: "0 0 10px #FFD700",
                        }}
                      ></div>
                      <div
                        className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full animate-bounce opacity-75"
                        style={{
                          background:
                            "radial-gradient(circle, #FFFF00 0%, #FFD700 100%)",
                          boxShadow: "0 0 6px #FFD700",
                        }}
                      ></div>
                    </div>

                    {/* Golden aura */}
                    <div
                      className="absolute inset-0 pointer-events-none animate-pulse"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgba(255, 215, 0, 0.4) 0%, rgba(255, 193, 7, 0.3) 30%, rgba(255, 215, 0, 0.2) 60%, transparent 100%)",
                        borderRadius: "8px",
                      }}
                    />

                    {/* Success sparkle */}
                    <div
                      className="absolute -top-2 -right-2 animate-spin-slow text-2xl"
                      style={{
                        color: "#FFD700",
                        textShadow: "0 0 10px #FFD700, 0 0 20px #FFD700",
                        filter: "drop-shadow(0 0 5px #FFD700)",
                      }}
                    >
                      ✨
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 font-product-sans"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={generateCalendarLink}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 border border-gray-300 hover:border-blue-600 rounded-full transition-all duration-200 font-product-sans"
              >
                <CalendarIcon size={18} />
                <span>Add to Calendar</span>
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://bullsconnect.usf.edu/gdsc/rsvp_boot?id=1984399",
                    "_blank"
                  );
                }}
                className="flex items-center space-x-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 hover:border-blue-700 rounded-full transition-all duration-200 font-product-sans font-medium"
              >
                <span>Register Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
            <div className="container mx-auto px-6 py-4">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors font-product-sans"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-3">
                    <button
                      onClick={generateCalendarLink}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:text-blue-600 border border-gray-300 hover:border-blue-600 rounded-full transition-all duration-200 font-product-sans justify-center"
                    >
                      <CalendarIcon size={18} />
                      <span>Add to Calendar</span>
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://bullsconnect.usf.edu/gdsc/rsvp_boot?id=1984399",
                          "_blank"
                        );
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 hover:border-blue-700 rounded-full transition-all duration-200 font-product-sans font-medium justify-center"
                    >
                      <span>Register Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Stats Popup - Draggable */}
      {showStatsPopup && (
        <div
          className="fixed z-50 animate-popup-enter"
          style={{
            left: `${popupPosition.x}px`,
            top: `${popupPosition.y}px`,
          }}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-48 overflow-hidden">
            {/* Draggable bar */}
            <div
              className="bg-gray-100 border-b border-gray-200 h-6 flex items-center justify-center cursor-move relative"
              onMouseDown={handleMouseDown}
            >
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowStatsPopup(false)}
                className="absolute right-1 w-4 h-4 rounded-full bg-gray-600 text-white text-xs hover:bg-gray-700 flex items-center justify-center"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-3">
              {/* Header */}
              <div className="text-center mb-2">
                <h3 className="text-sm font-bold text-gray-900">
                  Logo Changes
                </h3>
                <p className="text-2xl font-bold text-purple-600">
                  {transitionCountRef.current}
                </p>
              </div>

              {/* Easter Egg Counter - Only visible when triggered */}
              {easterEggCountRef.current > 0 && (
                <div className="text-center mb-2 border-t border-gray-200 pt-2">
                  <h3 className="text-sm font-bold text-yellow-600">
                    Golden Triggers
                  </h3>
                  <p className="text-2xl font-bold text-yellow-600">
                    {easterEggCountRef.current}
                  </p>
                  <div className="text-center mt-2">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Tag us on Instagram with
                      <br />
                      <span className="font-bold text-purple-600">
                        #goldeneasteregg
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Keep scrolling to win prizes
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
