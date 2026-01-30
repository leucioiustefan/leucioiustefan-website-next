export default function Home() {
  return (
    <main className="lg:w-[48%] py-30">
      <section className="text-sm font-normal leading-6 tracking-wide lg:flex lg:flex-col lg:justify-between gap-6">
        <p>
          I’m a full-stack engineer with a strong specialization in frontend
          development, passionate about building pixel-perfect, intuitive user
          interfaces. I enjoy working at the intersection of design and
          engineering, where great user experience meets clean, scalable, and
          reliable backend architecture.
        </p>
        <p>
          Currently, I work as a Senior Engineer at{" "}
          <span className="text-slate-200"> Epassi Netherlands</span>,
          contributing to multiple user and B2B portals that support and evolve
          our platform. In this role, I am leading the migration from a
          traditional role-based access model to an enterprise-grade
          attribute-based permission system, improving both flexibility and
          security across the application.
        </p>
        <p>
          Previously, I’ve worked across diverse environments—mobile and
          web—ranging from product studios and startups to large technology
          companies such as
          <span className="text-slate-200">
            {" "}
            IBM, BP Digital, Oren Mining, and ZeroBounce
          </span>
          —an award-winning email marketing platform . These experiences have
          strongly influenced how I approach product development today.
        </p>
        <p>
          Outside of work, you’ll usually find me reading, training for
          marathons, or exploring unknown bike trails across Romania—often
          collecting inspiration and data for my next app idea.
        </p>
      </section>
    </main>
  );
}
