import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal, Kicker, EASE } from "./Reveal";

const METRICS = [
  { to: 15, suffix: "M+", label: "Square feet designed and delivered across India" },
  { to: 300, suffix: "+", label: "Global GCC workplaces built and expanded" },
  { to: 98.6, decimals: 1, suffix: "%", label: "On-time handover record across all projects" },
  { to: 35, suffix: "%", label: "Average operational energy savings delivered" },
];

const Counter = ({ to, decimals = 0, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: EASE,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} data-testid="counter-value">
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Numbers = () => (
  <section id="numbers" data-testid="numbers-section" className="bg-cream py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <Kicker>04 — By the Numbers</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-8 text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
          The numbers behind <span className="text-[#4c8c1f]">the promise.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <Reveal key={m.suffix + m.to} delay={0.07 * i}>
            <div data-testid={`metric-${i + 1}`} className="border-l border-forest/15 pl-5 sm:pl-6">
              <p className="text-4xl font-light tracking-tight text-ink sm:text-5xl lg:text-6xl">
                <Counter to={m.to} decimals={m.decimals} suffix={m.suffix} />
              </p>
              <p className="mt-4 max-w-[220px] text-sm font-light leading-relaxed text-slate2">{m.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Numbers;
