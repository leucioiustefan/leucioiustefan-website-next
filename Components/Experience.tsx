import Epassi from "./Eperience/Epassi";
import Zerobounce from "./Eperience/Zerobounce";
import Softbinator from "./Eperience/Softbinator";
import Ibm from "./Eperience/Ibm";
import Link from "next/link";

const Experience = () => {
  return (
    <>
      <Epassi />
      <Zerobounce />
      <Softbinator />
      <Ibm />
      <Link
        className="text-normal font-medium text-slate-200 tracking-normal lg:hover:text-special lg:hover:underline"
        href="stefan_leucioiu_resume.pdf"
        target="_blank"
      >
        View Full Resume
      </Link>
    </>
  );
};

export default Experience;
