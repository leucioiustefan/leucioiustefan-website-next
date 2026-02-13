import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Stefan Leucioiu – Senior Frontend Engineer",
    template: "%s | Stefan Leucioiu",
  },

  description:
    "Senior frontend engineer specializing in Next.js and React. I build and deploy high-performance, pixel-perfect web applications and AI-driven products.",

  keywords: [
    "Next.js developer",
    "React developer",
    "Front end developer",
    "TypeScript",
    "Web performance",
    "TDD development",
    "AI integration",
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
    title: "Stefan Leucioiu – Senior Frontend Engineer",
    description:
      "Building modern web applications with Next.js, React, and TypeScript",
    siteName: "Stefan Leucioiu Personal Website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stefan Leucioiu - Senior Frontend Engineer specializing in Next.js and React",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stefan Leucioiu – Senior Frontend Engineer",
    description:
      "Building modern web applications with Next.js, React, and TypeScript",
    images: ["/og-image.png"],
  },
};
