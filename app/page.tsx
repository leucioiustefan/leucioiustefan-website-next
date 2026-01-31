import Description from "@/Components/Description";
import Experience from "@/Components/Experience";

export default function Home() {
  return (
    <main className="lg:w-[48%] lg:py-30 lg:flex lg:flex-col gap-20">
      <section className="text-sm font-normal leading-6 tracking-wide lg:flex lg:flex-col lg:justify-between gap-6">
        <Description />
      </section>
      <section className="text-sm font-normal leading-6 tracking-wide lg:flex lg:flex-col lg:justify-between gap-6">
        <Experience />
      </section>
    </main>
  );
}
