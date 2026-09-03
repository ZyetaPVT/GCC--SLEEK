import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const Kicker = ({ children, dark = false }) => (
  <div
    className={`flex items-center gap-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] ${
      dark ? "text-limebright" : "text-[#4c8c1f]"
    }`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-limebright" : "bg-lime"}`} />
    {children}
  </div>
);
