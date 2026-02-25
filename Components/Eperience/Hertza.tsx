const Zerobounce = () => {
  return (
    <a
      href="https://www.zerobounce.net/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex gap-6 px-3 py-3 transition rounded-sm
   lg:hover:bg-[rgba(23,39,75,1)]
    lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
lg:hover:drop-shadow-lg"
    >
      <span className="hidden md:block w-fit shrink-0 mt-2 whitespace-nowrap z-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
        OCT 2022 — JUL 2025
      </span>
      <div>
        <span className="block md:hidden w-fit shrink-0 whitespace-nowrap z-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
          OCT 2022 — JUL 2025
        </span>
        <p className="text-lg font-medium text-slate-200 mb-1 leading-relaxed lg:group-hover:text-special">
          Lead frontend engineer at Hertza
        </p>
        <p className="text-base font-light text-slate-300 mb-1 leading-relaxed lg:group-hover:text-special">
          Senior frontend engineer
        </p>
        <p className="text-base font-light text-slate-300 mb-3 leading-relaxed lg:group-hover:text-special">
          Frontend engineer
        </p>
        <p className="text-base mb-2 leading-relaxed">
          Led a complete platform migration from Gatsby to Next.js for an
          award-winning email validation SaaS, rebuilding 1,000+ pages across
          English and Spanish. Worked closely with the DevOps team to migrate
          from legacy Jenkins deployments to modern GitHub CI/CD.
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {[
            "Javascript",
            "Typescript",
            "React",
            "Angular",
            "Next.js",
            "Gatsby",
            "GraphQL",
            "CI/CD",
            "Jenkins",
            "Github Actions",
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

export default Zerobounce;
