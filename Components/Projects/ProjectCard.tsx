import ArrowIcon from "./ArrowIcon";
import { ProjectInterface, statusStyles } from "@/utils/constants";

const ProjectCard = ({
  title,
  description,
  extraDescription,
  tags,
  href,
  status,
}: ProjectInterface) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noindex nofollow"
      className="group relative grid grid-cols-[auto_1fr] gap-4 rounded-xl border border-slate-700/40 bg-slate-800/20 p-5 transition-all duration-300 hover:border-special/30 hover:bg-slate-800/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.06)] my-2"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(34,211,238,0.05), transparent)",
        }}
      />

      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/60 text-slate-400 transition-colors duration-200 group-hover:border-special/40 group-hover:text-special">
        <ArrowIcon />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold leading-snug text-slate-200 transition-colors duration-200 group-hover:text-special">
            {title}
          </h3>
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-400 pt-3">
          {description}
        </p>
        <p className="text-sm leading-relaxed text-slate-400 py-2">
          {extraDescription}
        </p>

        <ul
          className="mt-1 flex flex-wrap gap-1.5"
          aria-label="Technologies used"
        >
          {tags.map((tag) => (
            <li key={tag}>
              <span className="flex items-center rounded-full bg-special/15 px-3 py-1 text-xs font-normal leading-5 text-special">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;
