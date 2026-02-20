import Epassi from "./Eperience/Epassi";
import Hertza from "./Eperience/Hertza";
import Jellysmack from "./Eperience/Jellysmack";
import Ibm from "./Eperience/Ibm";
import Link from "next/link";

const Experience = () => {
  return (
    <>
      <h2 className="text-lg font-bold uppercase tracking-widest text-slate-200 mb-5 mt-15 lg:sr-only">
        Experience
      </h2>
      <div className="py-5 lg: py-0">
        <Epassi />
      </div>
      <div className="py-5 lg: py-0">
        <Hertza />
      </div>
      <div className="py-5 lg: py-0">
        <Jellysmack />
      </div>
      <div className="py-5 lg: py-0">
        <Ibm />
      </div>
      <Link
        className="text-lg font-medium text-slate-200 leading-relaxed lg:hover:text-special lg:hover:underline underline block mt-10 lg:mt-5"
        href="/resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Resume
      </Link>
    </>
  );
};

export default Experience;
