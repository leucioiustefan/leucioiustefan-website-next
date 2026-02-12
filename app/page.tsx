import Description from "@/Components/Description";
import Experience from "@/Components/Experience";
import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <main className="lg:w-[48%] lg:py-30 lg:flex lg:flex-col gap-20">
      <section
        id="about"
        className="text-sm font-normal leading-6 tracking-wide lg:flex lg:flex-col lg:justify-between gap-6"
      >
        <Description />
      </section>
      <section
        id="experience"
        className="text-sm font-normal leading-6 tracking-wide lg:flex lg:flex-col lg:justify-between gap-6"
      >
        <Experience />
      </section>

      <section
        id="projects"
        className="text-sm font-normal leading-6 tracking-wide lg:flex lg:flex-col lg:justify-between gap-6"
      >
        <Projects />
      </section>
    </main>
  );
}
