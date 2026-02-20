const Description = () => {
  return (
    <>
      <h2 className="text-lg font-bold uppercase tracking-widest text-slate-200 mb-5 lg:sr-only">
        About
      </h2>
      <p className="text-lg leading-relaxed">
        Senior Frontend Engineer specializing in React and Next.js, with 5+
        years building web applications for companies across Europe and the US
        including{" "}
        <span className="font-medium text-slate-200">
          {" "}
          IBM, BP Digital, Jellysmack, Hertza, and Epassi Netherlands.
        </span>
      </p>
      <p className="mt-3 text-lg leading-relaxed">
        I work at the intersection of product and engineering. I care about user
        experience, but I care just as much about the architecture behind it. My
        focus is on Next.js, TypeScript, and performance optimization, with
        growing experience integrating AI capabilities into frontend products.
      </p>
      <p className="mt-3 text-lg leading-relaxed">
        Currently at{" "}
        <span className="font-medium text-slate-200">Epassi Netherlands</span>,
        I work on the components that help maintain our portals and evolve our
        permission system from a role based approach to a scalable attribute
        based system in order to handle the complexities of an enterprise
        application. This is a project that touches both frontend architecture
        and security design.
      </p>
    </>
  );
};

export default Description;
