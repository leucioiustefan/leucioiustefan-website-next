import Description from "@/Components/Description";
import Experience from "@/Components/Experience";
import PersonalProjects from "@/Components/PersonalProjects";
import Footer from "@/Components/Footer";
import Link from "next/link";

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
        <PersonalProjects />
        <Link
          className="text-lg font-medium text-slate-200 leading-relaxed lg:hover:text-special lg:hover:underline underline block mt-10 lg:mt-5"
          href="/projects"
        >
          View Project Archive
        </Link>
        <Footer />
      </section>
    </main>
  );
}
