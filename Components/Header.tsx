import Navigation from "./Navigation";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:w-[48%] lg:flex lg:flex-col lg:justify-between lg:py-30 gap-4 pb-25">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-slate-200 mb-5">
          Stefan Leucioiu
        </h1>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-200">
          Frontend engineer
        </h2>
        <p className="mt-4 text-lg max-w-sm leading-relaxed text-slate-400">
          I build accessible and performance focused, digital experiences for
          the web.
        </p>
      </div>
      <Navigation />
      <Socials />
    </header>
  );
};

export default Header;
