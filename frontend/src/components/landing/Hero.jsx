import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { EASE } from "./Reveal";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/8347237/8347237-hd_1920_1080_25fps.mp4";
const POSTER =
  "https://images.pexels.com/videos/8347237/pexels-photo-8347237.jpeg?auto=compress&cs=tinysrgb&w=1600";

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className="block"
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = ({ onNavigate }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-forest">
      <motion.div style={{ y: videoY }} className="absolute inset-0">
        <motion.video
          data-testid="hero-video-player"
          className="h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/60 to-forest/20" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest/85 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="mb-5 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-limebright sm:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-limebright" />
          Workplace Strategy · Design · Build
        </motion.div>

        <h1
          data-testid="hero-headline"
          className="max-w-4xl text-[11.5vw] font-light leading-[1.04] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        >
          <MaskedLine delay={0.35}>Your India GCC</MaskedLine>
          <MaskedLine delay={0.48}>
            <span className="font-normal text-limebright">deserves more</span>
          </MaskedLine>
          <MaskedLine delay={0.61}>than an office.</MaskedLine>
        </h1>

        <motion.p
          data-testid="hero-subtext"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/70 sm:text-base"
        >
          Zyeta turns global GCC ambition into high-performing India workplaces — strategy, design,
          technology, sustainability and build, connected as one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-plan-btn"
            onClick={() => onNavigate("#contact")}
            className="group flex items-center gap-2.5 rounded-full bg-lime py-3.5 pl-6 pr-3 text-sm font-medium text-forest transition-transform duration-300 hover:scale-[1.04]"
          >
            Plan Your India Workplace
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4 text-limebright" />
            </span>
          </button>
          <button
            data-testid="hero-watch-story-btn"
            onClick={() => onNavigate("#voices")}
            className="group flex items-center gap-3 text-sm font-light text-white/85 transition-colors hover:text-white"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 transition-all duration-300 group-hover:border-limebright group-hover:bg-white/10">
              <Play className="ml-0.5 h-4 w-4 fill-current" />
            </span>
            Watch the story — 90 sec
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:grid-cols-3 sm:gap-6"
        >
          <div data-testid="hero-stat-established">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">Est. 2008</p>
            <p className="mt-1 text-sm font-normal text-white/90">15M+ sq ft delivered</p>
          </div>
          <div data-testid="hero-stat-hubs">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
              Bengaluru · Hyderabad · Pune · NCR
            </p>
            <p className="mt-1 text-sm font-normal text-white/90">300+ projects including GCCs</p>
          </div>
          <div data-testid="hero-stat-scroll" className="hidden items-end justify-end sm:flex">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
              Scroll to explore ↓
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
