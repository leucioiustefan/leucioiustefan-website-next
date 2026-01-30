import { geistMono, geistSans } from "@/utils/fonts/fonts";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased font-sans`}
      >
        <div className="mx-auto min-h-screen max-w-screen-xl px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
