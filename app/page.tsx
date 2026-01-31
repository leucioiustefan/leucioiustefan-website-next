import Description from "@/Components/Description";

export default function Home() {
  return (
    <main className="lg:w-[48%] py-30">
      <section className="text-sm font-normal leading-6 tracking-wide lg:flex lg:flex-col lg:justify-between gap-6">
        <Description />
      </section>
    </main>
  );
}
