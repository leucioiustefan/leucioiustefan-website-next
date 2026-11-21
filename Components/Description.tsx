const Description = () => {
  return (
    <>
      <h2 className="text-lg font-bold uppercase tracking-widest text-slate-200 mb-5 lg:sr-only">
        About
      </h2>
      <p className="text-lg leading-relaxed">
        Senior Engineer specializing in React, Next.js and{" "}
        <span className="font-medium text-slate-200">agentic products</span>,
        with 6+ years building applications for companies across Europe and the
        US including{" "}
        <span className="font-medium text-slate-200">
          {" "}
          IBM, BP Digital, Jellysmack, Hertza, Bedrijfsfitness Nederland
        </span>{" "}
        and <span className="font-medium text-slate-200">Printec Group</span>.
      </p>
      <p className="mt-3 text-lg leading-relaxed">
        I work at the intersection of product and engineering. I care about user
        experience, but I care just as much about the architecture behind it. My
        focus is on Next.js, TypeScript, Node.js and performance optimization,
        with experience integrating and building{" "}
        <span className="font-medium text-slate-200">agentic</span> capabilities
        into products.
      </p>
      <p className="mt-3 text-lg leading-relaxed">
        Currently at <span className="font-medium text-slate-200">Printec</span>
        , I build AI powered fleet-wide analytics dashboard (KPIs, telemetry
        health, cash collection planning, sales comparisons, smart technician
        route planning, interactive machine location map) end to end.
      </p>
    </>
  );
};

export default Description;
