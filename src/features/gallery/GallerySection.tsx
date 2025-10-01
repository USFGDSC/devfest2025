"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const galleryImages = [
    {
      src: "/Images/gallery/Group 11.png",
      alt: "DevFest Gallery Image 1",
    },
    {
      src: "/Images/gallery/Group 12.png",
      alt: "DevFest Gallery Image 2",
    },
    {
      src: "/Images/gallery/Group 13.png",
      alt: "DevFest Gallery Image 3",
    },
    {
      src: "/Images/gallery/Group 14.png",
      alt: "DevFest Gallery Image 4",
    },
  ];

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="gallery"
      className="py-16"
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-product-sans mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Take a look at some memorable moments from our events
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {galleryImages.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="w-full h-64 flex items-center justify-center rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="max-w-full max-h-full object-contain"
                      priority={index < 2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  selectedIndex === index
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-64 flex items-center justify-center rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="max-w-full max-h-full object-contain"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
