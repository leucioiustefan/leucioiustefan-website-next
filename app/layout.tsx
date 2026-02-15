import CursorGlow from "@/Components/CursorGlow";
import Header from "@/Components/Header";
import { Analytics } from "@vercel/analytics/next";
import { inter } from "@/utils/fonts/fonts";
import "@/utils/globals.css";

export { metadata } from "../utils/seo/metadata";
export { viewport } from "../utils/seo/viewport";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${inter.className} antialiased font-sans bg-slate-900`}>
        <CursorGlow />
        <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-15 lg:flex lg:justify-between lg:py-0 gap-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
