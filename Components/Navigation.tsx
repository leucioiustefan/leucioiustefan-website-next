"use client";

import { useEffect, useState } from "react";

const sectionIds = ["about", "experience", "projects"];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const active = sectionIds.find((id) => visibleSections.has(id));
        if (active) {
          setActiveSection(active);
        }
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const items = ["About", "Experience", "Projects"];

  return (
    <nav className="hidden flex-1 lg:block">
      <ul className="space-y-6 mt-8">
        {items.map((item) => {
          const id = item.toLowerCase();
          const isActive = activeSection === id;

          return (
            <li key={item}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="group flex items-center gap-4 uppercase hover:text-white"
              >
                <span
                  className={`nav-indicator mr-1 h-px transition-all duration-300 motion-reduce:transition-none ${
                    isActive
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                  }`}
                />
                <span
                  className={`nav-text text-[13px] font-bold uppercase tracking-widest ${
                    isActive
                      ? "text-slate-200"
                      : "text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  }`}
                >
                  {item}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
