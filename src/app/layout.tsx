import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Viewport configuration for better mobile SEO
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// SEO metadata
export const metadata: Metadata = {
  title: {
    default: "DevFest USF 2025 - Google Developer Festival",
    template: "%s | DevFest USF 2025",
  },
  description:
    "Join DevFest USF 2025, the premier Google Developer Festival featuring cutting-edge tech talks, workshops, and networking opportunities. Discover the latest in AI, web development, mobile apps, and cloud technologies.",
  keywords: [
    "DevFest",
    "Google Developer Festival",
    "USF",
    "technology conference",
    "web development",
    "mobile development",
    "AI",
    "machine learning",
    "cloud computing",
    "developer community",
    "tech talks",
    "workshops",
    "networking",
    "2025",
    "Xiaoquan Kong",
    "Laurence Svekis",
    "Noble Ackerson",
    "Gerardo Sanchez",
    "Rich Foltak",
    "Carlos Vasquez",
    "James Gress",
    "Modupe Ajala",
    "Tampa",
    "Florida",
    "University of South Florida",
  ],
  authors: [{ name: "DevFest USF Organizing Team" }],
  creator: "DevFest USF",
  publisher: "DevFest USF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devfest2025-eight.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devfest2025-eight.vercel.app",
    siteName: "DevFest USF 2025",
    title: "DevFest USF 2025 - Google Developer Festival",
    description:
      "Join DevFest USF 2025, the premier Google Developer Festival featuring cutting-edge tech talks, workshops, and networking opportunities.",
    images: [
      {
        url: "/Images/Hero-group.png",
        width: 1200,
        height: 630,
        alt: "DevFest USF 2025 - Google Developer Festival",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@devfest_usf", // Replace with your actual Twitter handle
    creator: "@devfest_usf", // Replace with your actual Twitter handle
    title: "DevFest USF 2025 - Google Developer Festival",
    description:
      "Join DevFest USF 2025, the premier Google Developer Festival featuring cutting-edge tech talks, workshops, and networking opportunities.",
    images: ["/Images/Hero-group.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for the DevFest event
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "DevFest USF 2025",
    description:
      "Join DevFest USF 2025, the premier Google Developer Festival featuring cutting-edge tech talks, workshops, and networking opportunities. Discover the latest in AI, web development, mobile apps, and cloud technologies.",
    startDate: "2025-11-15T09:00:00-05:00", // Replace with actual date
    endDate: "2025-11-15T18:00:00-05:00", // Replace with actual date
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "University of South Florida",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4202 E Fowler Ave", // Replace with actual venue address
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33620",
        addressCountry: "US",
      },
    },
    image: ["https://devfest2025-eight.vercel.app/Images/Hero-group.png"],
    organizer: {
      "@type": "Organization",
      name: "Google Developer Groups USF",
      url: "https://devfest2025-eight.vercel.app",
    },
    offers: {
      "@type": "Offer",
      url: "https://devfest2025-eight.vercel.app",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2025-10-01T00:00:00-05:00", // Replace with actual registration start date
    },
    performer: [
      {
        "@type": "Person",
        name: "Xiaoquan Kong",
        url: "https://www.linkedin.com/in/xiaoquankong/",
        sameAs: ["https://www.linkedin.com/in/xiaoquankong/"],
      },
      {
        "@type": "Person",
        name: "Laurence Svekis",
      },
      {
        "@type": "Person",
        name: "Noble Ackerson",
        url: "https://www.linkedin.com/in/noblea/",
        sameAs: ["https://www.linkedin.com/in/noblea/"],
      },
      {
        "@type": "Person",
        name: "Gerardo Sanchez",
        url: "https://www.linkedin.com/in/gsans7/",
        sameAs: ["https://www.linkedin.com/in/gsans7/"],
      },
      {
        "@type": "Person",
        name: "Rich Foltak",
        url: "https://www.linkedin.com/in/richard-foltak/",
        sameAs: ["https://www.linkedin.com/in/richard-foltak/"],
      },
      {
        "@type": "Person",
        name: "Carlos Vasquez",
        url: "https://www.linkedin.com/in/juancvazquez/",
        sameAs: ["https://www.linkedin.com/in/juancvazquez/"],
      },
      {
        "@type": "Person",
        name: "James Gress",
        url: "https://www.linkedin.com/in/jamesgress/",
        sameAs: ["https://www.linkedin.com/in/jamesgress/"],
      },
      {
        "@type": "Person",
        name: "Modupe Ajala",
        url: "https://www.linkedin.com/in/modupeajala-3288/",
        sameAs: ["https://www.linkedin.com/in/modupeajala-3288/"],
      },
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <div id="main-content">{children}</div>

        {/* Additional structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DevFest USF",
              url: "https://devfest2025-eight.vercel.app",
              logo: "https://devfest2025-eight.vercel.app/logos/Logo Horizontal - Blue 1.svg",
              sameAs: [
                "https://twitter.com/devfest_usf", // Replace with actual social media links
                "https://linkedin.com/company/devfest-usf",
                "https://github.com/devfest-usf",
              ],
            }),
          }}
        />
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
