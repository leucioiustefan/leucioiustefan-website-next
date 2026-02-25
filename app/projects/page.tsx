import Link from "next/link";
import ProjectsList from "@/Components/Projects/ProjectList";
import { projects } from "@/utils/constants";

const ProjectsPage = () => {
  return (
    <div className="lg:py-10">
      <div className="mx-auto max-w-2xl px-6 lg:px-0">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-special"
        >
          <svg
            className="transition-transform duration-200 group-hover:-translate-x-1"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Go back
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-200">
            Projects
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            A selection of products I&apos;ve built, contributed to, or am
            currently working on.
          </p>
        </div>

        <ProjectsList projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
