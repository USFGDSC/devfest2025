import { LucideIcon } from "lucide-react";

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
}

export interface YearStats {
  year: number;
  theme: string;
  stats: Stat[];
  highlights: string[];
}

import { Users, Mic2, BookOpen, Code2, Coffee, Star, Building2, Globe, Rocket } from "lucide-react";

export const previousYearsStats: YearStats[] = [
  {
    year: 2023,
    theme: "Building the Future with AI",
    stats: [
      {
        id: "attendees",
        value: "500+",
        label: "Attendees",
        description: "Developers, students, and tech enthusiasts",
        icon: Users,
        iconColor: "#4285F4" // Blue
      },
      {
        id: "speakers",
        value: "25",
        label: "Expert Speakers",
        description: "Industry leaders and Google Developer Experts",
        icon: Mic2,
        iconColor: "#EA4335" // Red
      },
      {
        id: "sessions",
        value: "18",
        label: "Sessions",
        description: "Technical talks, workshops, and panels",
        icon: BookOpen,
        iconColor: "#FBBC04" // Yellow
      },
      {
        id: "workshops",
        value: "8",
        label: "Hands-on Workshops",
        description: "Interactive coding and learning experiences",
        icon: Code2,
        iconColor: "#34A853" // Green
      },
      {
        id: "networking",
        value: "12hrs",
        label: "Networking Time",
        description: "Coffee breaks, lunch, and after-party",
        icon: Coffee,
        iconColor: "#4285F4" // Blue
      },
      {
        id: "satisfaction",
        value: "4.8/5",
        label: "Satisfaction Rate",
        description: "Based on post-event surveys",
        icon: Star,
        iconColor: "#FBBC04" // Yellow
      }
    ],
    highlights: [
      "First DevFest in Tampa Bay with AI focus",
      "Partnership with University of South Florida",
      "Live coding sessions with Google technologies",
      "Student developer showcase competition",
      "Exclusive Google swag and prizes"
    ]
  },
  {
    year: 2022,
    theme: "Cloud-First Development",
    stats: [
      {
        id: "attendees",
        value: "350+",
        label: "Attendees",
        description: "Growing developer community",
        icon: Users,
        iconColor: "#4285F4" // Blue
      },
      {
        id: "speakers",
        value: "20",
        label: "Expert Speakers",
        description: "Cloud architects and developers",
        icon: Mic2,
        iconColor: "#EA4335" // Red
      },
      {
        id: "sessions",
        value: "15",
        label: "Sessions",
        description: "Cloud computing and web development",
        icon: BookOpen,
        iconColor: "#FBBC04" // Yellow
      },
      {
        id: "companies",
        value: "40+",
        label: "Companies",
        description: "Represented by attendees",
        icon: Building2,
        iconColor: "#34A853" // Green
      },
      {
        id: "countries",
        value: "8",
        label: "Countries",
        description: "International virtual participation",
        icon: Globe,
        iconColor: "#4285F4" // Blue
      },
      {
        id: "projects",
        value: "25",
        label: "Demo Projects",
        description: "Showcased by participants",
        icon: Rocket,
        iconColor: "#EA4335" // Red
      }
    ],
    highlights: [
      "Hybrid event format (in-person + virtual)",
      "Google Cloud Platform deep-dives",
      "Firebase for mobile development track",
      "Women in Tech panel discussion",
      "Community project collaborations"
    ]
  }
];

export const overallStats = {
  totalAttendees: "850+",
  totalSpeakers: "45+",
  totalSessions: "33+",
  yearsRunning: "3",
  communityGrowth: "140%",
  returningAttendees: "65%"
};
