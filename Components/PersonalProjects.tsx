import { personalProjects } from "@/utils/constants";
import ProjectsList from "./Projects/ProjectList";

const PersonalProjects = () => {
  return (
    <div>
      <h2 className="text-lg font-bold uppercase tracking-widest text-slate-200 mb-5 mt-15 lg:sr-only">
        Projects
      </h2>
      <ProjectsList projects={personalProjects} />
    </div>
  );
};

export default PersonalProjects;
