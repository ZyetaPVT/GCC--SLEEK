import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "The Reality", target: "#reality" },
  { label: "Work", target: "#work" },
  { label: "Awards", target: "#awards" },
  { label: "Studios", target: "#studios" },
  { label: "FAQ", target: "#faq" },
];

const Logo = ({ light }) => (
  <a href="#top" data-testid="header-logo" className="flex items-center gap-2.5">
    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-forest">
      <span className="font-mono text-sm font-medium text-limebright">Z</span>
    </span>
    <span
      className={`text-sm font-medium uppercase tracking-[0.3em] transition-colors duration-500 ${
        light ? "text-white" : "text-ink"
      }`}
    >
      Zyeta
    </span>
  </a>
);

const Nav = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target) => {
    setOpen(false);
    onNavigate(target);
  };

  const light = !scrolled && !open;

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-forest/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo light={light} />
        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.target}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => go(l.target)}
              className={`text-[13px] font-normal tracking-wide transition-colors duration-300 ${
                light ? "text-white/75 hover:text-white" : "text-slate2 hover:text-ink"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            data-testid="nav-plan-workplace-btn"
            onClick={() => go("#contact")}
            className="group hidden items-center gap-2 rounded-full bg-forest py-2.5 pl-5 pr-2.5 text-[13px] font-medium text-cream transition-transform duration-300 hover:scale-[1.03] sm:flex"
          >
            Start a project
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5 text-forest" />
            </span>
          </button>
          <button
            data-testid="nav-mobile-menu-btn"
            onClick={() => setOpen(!open)}
            className={`flex h-9 w-9 items-center justify-center rounded-full lg:hidden ${
              light ? "text-white" : "text-ink"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-forest/10 bg-cream/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden">
          {LINKS.map((l) => (
            <button
              key={l.target}
              data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => go(l.target)}
              className="block w-full py-3 text-left text-base font-light text-ink"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-mobile-plan-btn"
            onClick={() => go("#contact")}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-forest py-3 text-sm font-medium text-cream"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 text-limebright" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;
