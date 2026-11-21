import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Stefan Leucioiu – Senior Fullstack Engineer",
    template: "%s | Stefan Leucioiu",
  },

  description:
    "Senior full stack engineer specializing in frontend/backend/agentic architectures. I build and deploy high-performance, pixel-perfect applications and AI-driven products.",

  keywords: [
    "Fullstack developer",
    "Agentic developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "TypeScript",
    "AI agents",
    "LLM integration",
    "Web performance",
    "TDD development",
  ],

  creator: "Stefan Leucioiu",

  metadataBase: new URL("https://stefanleucioiu.net"),
  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://stefanleucioiu.net",
    title: "Stefan Leucioiu – Senior Fullstack & Agentic Engineer",
    description:
      "Senior fullstack engineer building high-performance web applications and AI-driven agentic products.",
    siteName: "Stefan Leucioiu Personal Website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stefan Leucioiu - Senior Fullstack & Agentic Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stefan Leucioiu – Senior Fullstack & Agentic Engineer",
    description:
      "Senior fullstack engineer building high-performance web applications and AI-driven agentic products.",
    images: ["/og-image.png"],
  },
};
