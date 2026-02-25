const Softbinator = () => {
  return (
    <a
      href="https://jellysmack.com/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex gap-6 px-3 py-3 transition rounded-sm
   lg:hover:bg-[rgba(23,39,75,1)]
    lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
lg:hover:drop-shadow-lg"
    >
      <span className="hidden md:block w-fit shrink-0 mt-2 whitespace-nowrap z-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
        JAN 2022 — OCT 2022
      </span>
      <div>
        <span className="block md:hidden w-fit shrink-0 whitespace-nowrap z-10 text-xs font-semibold uppercase tracking-wide text-slate-400">
          JAN 2022 — OCT 2022
        </span>
        <p className="text-lg font-medium text-slate-200 mb-4 leading-relaxed lg:group-hover:text-special">
          Frontend engineer at Jellysmack
        </p>
        <p className="text-base mb-2 leading-relaxed">
          Build and maintain critical components used to construct products
          across Keli Network. Focused mainly on Kamua - a browser-based video
          editing platform, similar to Adobe Premiere, but built with React,
          enabling content creators to edit video content directly in the
          browser.
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {["Javascript", "Typescript", "React", "GraphQL", "SCSS", "MUI"].map(
            (skill) => (
              <li key={skill} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-special/15 px-3 py-2 text-sm font-normal leading-5 text-special">
                  {skill}
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </a>
  );
};

export default Softbinator;
