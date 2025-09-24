import Image from "next/image";

export function GallerySection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-64 flex items-center justify-center"
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
