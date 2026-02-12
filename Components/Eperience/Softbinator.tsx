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
      <span className="hidden md:block w-fit shrink-0 whitespace-nowrap z-10 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        JAN 2022 — OCT 2022
      </span>
      <div>
        <span className="block md:hidden w-fit shrink-0 whitespace-nowrap z-10 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
          JAN 2022 — OCT 2022
        </span>
        <p className="text-normal font-medium mb-3 text-slate-200 tracking-normal lg:group-hover:text-special">
          Frontend engineer at Jellysmack — Remote
        </p>
        <p className="text-[13px] mb-2 tracking-tight">
          Build and maintain critical components used to construct products
          across Keli Network. Focused mainly on Kamua - a browser-based video
          editing platform, similar to Adobe Premiere, but built with React,
          enabling content creators to edit video content directly in the
          browser.
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              Javascript
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              Typescript
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              React
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              GraphQL
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              SCSS
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              MUI
            </div>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default Softbinator;
