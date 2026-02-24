import Description from "@/Components/Description";
import Experience from "@/Components/Experience";
import Projects from "@/Components/Projects";
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
        {/* <Projects /> */}
        <Link
          className="text-lg font-medium text-slate-200 leading-relaxed lg:hover:text-special lg:hover:underline underline block mt-10 lg:mt-5"
          href="/projects"
        >
          View Project Archive
        </Link>
        <p className="text-sm leading-relaxed max-w-[500px] mt-10">
          Website designed in{" "}
          <a
            className="text-slate-200"
            rel="noopener noreferrer nofollow"
            href="https://www.figma.com/"
            target="_blank"
          >
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            className="text-slate-200"
            rel="noopener noreferrer nofollow"
            href="https://code.visualstudio.com/"
            target="_blank"
          >
            Visual Studio Code
          </a>{" "}
          by me. Build with{" "}
          <a
            className="text-slate-200"
            rel="noopener noreferrer nofollow"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            className="text-slate-200"
            rel="noopener noreferrer nofollow"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            className="text-slate-200"
            rel="noopener noreferrer nofollow"
            href="https://vercel.com/"
            target="_blank"
          >
            Vercel
          </a>
          . The code for the website can be found on{" "}
          <a
            className="text-slate-200"
            rel="noopener noreferrer nofollow"
            href="https://vercel.com/"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </section>
    </main>
  );
}
