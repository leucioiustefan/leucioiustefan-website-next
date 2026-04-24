const Epassi = () => {
  return (
    <a
      href="https://www.bedrijfsfitnessnederland.nl/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex gap-6 px-3 py-3 transition rounded-sm
   lg:hover:bg-[rgba(23,39,75,1)]
    lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
lg:hover:drop-shadow-lg block"
    >
      <span className="hidden md:block w-fit shrink-0 mt-2 whitespace-nowrap z-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
        AUG 2025 — present
      </span>
      <div>
        <span className="block md:hidden w-fit shrink-0 whitespace-nowrap z-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
          AUG 2025 — present
        </span>
        <p className="text-lg font-medium text-slate-200 mb-4 leading-relaxed lg:group-hover:text-special">
          Senior frontend engineer at Bedrijfsfitness Nederland
        </p>
        <p className="text-base mb-2 leading-relaxed">
          Build and maintain the core component library powering 4 B2B and
          consumer portals serving active users across the BFNL platform.
          Collaborate with cross-functional teams including backend engineers,
          product designers, and stakeholders to deliver user-facing features,
          while contributing to the overall architecture of the application and
          resolving critical security vulnerabilities.
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {[
            "Javascript",
            "Typescript",
            "React",
            "Next.js",
            "Tailwind",
            "Zustand",
            "React Query",
            "AWS",
            "TDD",
          ].map((skill) => (
            <li key={skill} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-special/15 px-3 py-2 text-sm font-normal leading-5 text-special">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default Epassi;
