import Header from "@/Components/Header";
import "@/utils/globals.css";

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-6 lg:flex lg:justify-between gap-4">
      <Header />
      {children}
    </div>
  );
}
