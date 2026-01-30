import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stefan Leucioiu – Senior Software Developer",
    template: "%s | Stefan Leucioiu",
  },

  description:
    "Senior full-stack developer specializing in Next.js and React. I build and deploy high-performance, pixel-perfect web applications and AI-driven products.",

  keywords: [
    "Next.js developer",
    "React developer",
    "Node developer",
    "Full stack developer",
    "TypeScript",
    "Web performance",
    "TDD development",
    "AI integration",
  ],

  authors: [{ name: "Stefan Leucioiu", url: "https://yourdomain.com" }],
  creator: "Stefan Leucioiu",

  metadataBase: new URL("https://yourdomain.com"),
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
    url: "https://yourdomain.com",
    title: "Stefan Leucioiu – Senior Software Developer",
    description:
      "Building scalable, high-performance end-to-end web apps with Next.js, React, TypeScript and Node.",
    siteName: "Stefan Leucioiu Personal Website",
    images: [
      {
        url: "/og-image.png", // will create this later
        width: 1200,
        height: 630,
        alt: "Stefan Leucioiu Personal Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stefan Leucioiu – Senior Software Developer",
    description: "Next.js & React specialist building modern web applications.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
