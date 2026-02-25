import ProjectCard from "./ProjectCard";
import { ProjectInterface } from "@/utils/constants";

const ProjectsList = ({ projects }: { projects: ProjectInterface[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
