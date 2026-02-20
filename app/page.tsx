"use client";

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

      {/* <section
        id="projects"
        className="text-sm font-normal leading-6 tracking-wide lg:flex lg:flex-col lg:justify-between gap-6"
      >
        <Projects />
        <a
          className="text-lg font-medium text-slate-200 leading-relaxed lg:hover:text-special lg:hover:underline underline block mt-10 lg:mt-5"
          href="/stefan_leucioiu_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project Archive
        </a>
        <p className="text-base leading-relaxed max-w-[500px] mt-10">
          Build, style, and ship high-quality websites, design systems, mobile
          clients including <span className="text-slate-200"> BP Digital</span>,{" "}
          <span className="text-slate-200"> Shell South Africa</span>. Gained
        </p>
      </section> */}
    </main>
  );
}
