const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:w-[48%] lg:flex lg:flex-col lg:justify-between lg:py-30 gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-200">Stefan Leucioiu</h1>
        <h3 className="text-lg font-medium text-slate-200 my-3 tracking-tight">
          Full stack engineer
        </h3>
        <p className="text-normal max-w-[400px]">
          I build accessible, end-to-end digital experiences for the web.
        </p>
      </div>
      <nav className="hidden flex-1 lg:block">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </nav>
      <div>
        <li>Social1</li>
        <li>Social2</li>
        <li>Social3</li>
        <li>Social4</li>
      </div>
    </header>
  );
};

export default Header;
