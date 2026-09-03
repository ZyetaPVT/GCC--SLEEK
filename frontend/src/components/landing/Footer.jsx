import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = ({ onNavigate }) => (
  <footer data-testid="site-footer" className="bg-forest pb-28 pt-20 text-cream sm:pb-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-lime">
              <span className="font-mono text-sm font-medium text-forest">Z</span>
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.3em]">Zyeta</span>
          </div>
          <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-[#B0C4BC]">
            India's premier workplace strategy, design and build partner for Global Capability Centres.
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B0C4BC]">
          Bengaluru · Hyderabad · Pune · Gurugram (NCR) · Chennai
        </p>
      </div>
      <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-light text-[#B0C4BC]">© 2026 Zyeta. All rights reserved.</p>
        <p className="text-xs font-light text-[#B0C4BC]">Workplace Strategy · Design · Build</p>
      </div>
    </div>
  </footer>
);

const StickyBar = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const nearContact = contact && contact.getBoundingClientRect().top < window.innerHeight * 0.6;
      setVisible(window.scrollY > window.innerHeight * 0.8 && !nearContact);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      data-testid="sticky-bottom-bar"
      initial={false}
      animate={{ y: visible ? 0 : 120, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-3 bottom-3 z-40 sm:inset-x-6 sm:bottom-5"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-forest/95 px-5 py-3.5 shadow-[0_24px_60px_-20px_rgba(15,46,35,0.6)] backdrop-blur-md sm:rounded-full sm:px-6">
        <p className="flex items-center gap-2.5 text-xs font-light text-cream sm:text-sm">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-limebright" />
          Building your India GCC? Get a workplace strategy in one call.
        </p>
        <button
          data-testid="sticky-bottom-cta-btn"
          onClick={() => onNavigate("#contact")}
          className="group flex shrink-0 items-center gap-2 rounded-full bg-lime py-2.5 pl-4 pr-2 text-xs font-medium text-forest transition-transform duration-300 hover:scale-[1.04] sm:text-[13px]"
        >
          <span className="hidden sm:inline">Plan Your India Workplace</span>
          <span className="sm:hidden">Plan Now</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-3 w-3 text-limebright" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export { Footer, StickyBar };
