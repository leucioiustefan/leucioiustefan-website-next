"use client";

import React from "react";

const Navigation = () => {
  return (
    <nav className="hidden flex-1 lg:block">
      <ul className="space-y-6">
        {["About", "Experience", "Projects"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="group flex items-center gap-4 text-slate-300 text-lg hover:text-white"
            >
              <span
                className="
              h-[2px] w-4 bg-white
              transition-all duration-300
              group-hover:w-12
            "
              />
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
