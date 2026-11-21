const Printec = () => {
  return (
    <a
      href="https://www.printecgroup.com/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex gap-6 px-3 py-3 transition rounded-sm
   lg:hover:bg-[rgba(23,39,75,1)]
    lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
lg:hover:drop-shadow-lg"
    >
      <span className="hidden md:block w-fit shrink-0 mt-2 whitespace-nowrap z-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
        JUNE 2026 — present
      </span>
      <div>
        <span className="block md:hidden w-fit shrink-0 whitespace-nowrap z-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
          JUNE 2026 — present
        </span>
        <p className="text-lg font-medium text-slate-200 mb-4 leading-relaxed lg:group-hover:text-special">
          Head of web and mobile development at Printec
        </p>
        <p className="text-base mb-2 leading-relaxed">
          Leading frontend and working on backend development for Vendipack, an
          enterprise IoT platform managing fleets of connected vending machines,
          covering telemetry functionality, remote diagnostics, sales/ERP
          integration, and fleet analytics dashboards
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {[
            "Next.js",
            "Typescript",
            "React",
            "Devextreme",
            "REST",
            "Tailwind",
            "Kotlin",
            ".Net",
            "Postgresql",
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

export default Printec;
