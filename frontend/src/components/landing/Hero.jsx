import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { EASE, Kicker } from "./Reveal";

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
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-10 lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="mb-6"
          >
            <Kicker>Workplace Strategy · Design · Build</Kicker>
          </motion.div>

          <h1
            data-testid="hero-headline"
            className="text-[12vw] font-light leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            <MaskedLine delay={0.25}>Your India GCC</MaskedLine>
            <MaskedLine delay={0.38}>
              <span className="font-normal text-[#4c8c1f]">deserves more</span>
            </MaskedLine>
            <MaskedLine delay={0.51}>than an office.</MaskedLine>
          </h1>

          <motion.p
            data-testid="hero-subtext"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
            className="mt-6 max-w-lg text-sm font-light leading-relaxed text-slate2 sm:text-base"
          >
            Zyeta turns global GCC ambition into high-performing India workplaces — strategy, design,
            technology, sustainability and build, connected as one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-plan-btn"
              onClick={() => onNavigate("#contact")}
              className="group flex items-center gap-2.5 rounded-full bg-forest py-3.5 pl-6 pr-3 text-sm font-medium text-cream transition-transform duration-300 hover:scale-[1.04]"
            >
              Plan Your India Workplace
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4 text-forest" />
              </span>
            </button>
            <button
              data-testid="hero-watch-story-btn"
              onClick={() => onNavigate("#voices")}
              className="group flex items-center gap-3 text-sm font-light text-ink/80 transition-colors hover:text-ink"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/20 transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-cream">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </span>
              Watch the story — 90 sec
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="mt-12 grid grid-cols-1 gap-4 border-t border-forest/10 pt-5 sm:grid-cols-2 sm:gap-6"
          >
            <div data-testid="hero-stat-established">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted2">Est. 2008</p>
              <p className="mt-1 text-sm font-normal text-ink">15M+ sq ft delivered</p>
            </div>
            <div data-testid="hero-stat-hubs">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted2">
                Bengaluru · Hyderabad · Pune · NCR
              </p>
              <p className="mt-1 text-sm font-normal text-ink">300+ projects including GCCs</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: videoY }}
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          className="relative"
        >
          <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-3xl border border-forest/15 lg:block" />
          <div className="relative overflow-hidden rounded-3xl shadow-[0_48px_90px_-40px_rgba(15,46,35,0.45)]">
            <motion.video
              data-testid="hero-video-player"
              className="aspect-video w-full object-cover"
              src={VIDEO_SRC}
              poster={POSTER}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              initial={{ scale: 1.14 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.4, ease: EASE }}
            />
            <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/90">
              Bengaluru Flagship
            </span>
            <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-cream/90 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-forest backdrop-blur">
              <Play className="h-3 w-3 fill-forest" /> 01:30 · Film
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
