const Ibm = () => {
  return (
    <a
      href="https://www.ibm.com/us-en"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex gap-6 px-3 py-3 transition rounded-sm
   lg:hover:bg-[rgba(23,39,75,1)]
    lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
lg:hover:drop-shadow-lg"
    >
      <span className="hidden md:block w-fit shrink-0 whitespace-nowrap z-10 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        JAN 2021 — JAN 2022
      </span>
      <div>
        <span className="block md:hidden w-fit shrink-0 whitespace-nowrap z-10 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
          JAN 2021 — JAN 2022
        </span>
        <p className="text-normal font-medium text-slate-200 mb-3 tracking-normal lg:group-hover:text-special">
          Junior frontend engineer at IBM — Remote
        </p>
        <p className="text-[13px] mb-2 tracking-tight">
          Build, style, and ship high-quality websites, design systems, mobile
          apps and digital experiences for a diverse array of projects for
          clients including <span className="text-slate-200"> BP Digital</span>,{" "}
          <span className="text-slate-200"> Shell South Africa</span> and more.
          Gained experience within the engineering department through close
          collaboration, knowledge sharing, and development of internal tools.
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              HTML
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              CSS
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              Javascript
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              React
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              React Native
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-special/15 px-2 py-1 text-[11px] font-normal leading-5 text-special">
              REST
            </div>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default Ibm;
