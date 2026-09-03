import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Kicker, EASE } from "./Reveal";

const LEADERS = [
  { name: "Aditi Rao", role: "Studio Principal", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=800&q=80" },
  { name: "Rohan Mehta", role: "Design Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=800&q=80" },
  { name: "Kavya Iyer", role: "Head of Delivery", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&h=800&q=80" },
];

const CITIES = [
  {
    name: "Bengaluru",
    hq: true,
    desc: "Our largest design and delivery studio, anchored in India's deepest GCC market.",
    sqft: "6.2M",
    gcc: "18",
    people: "120+",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Hyderabad",
    hq: false,
    desc: "Delivery hub for hyperscale tech campuses along the western growth corridor.",
    sqft: "3.4M",
    gcc: "11",
    people: "70+",
    img: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Pune",
    hq: false,
    desc: "Engineering-led studio serving financial services and automotive GCCs.",
    sqft: "2.6M",
    gcc: "9",
    people: "55+",
    img: "https://images.pexels.com/photos/13219418/pexels-photo-13219418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Gurugram (NCR)",
    hq: false,
    desc: "Northern base for Fortune 500 capability centres and R&D campuses.",
    sqft: "2.1M",
    gcc: "8",
    people: "45+",
    img: "https://images.unsplash.com/photo-1715593949273-09009558300a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Chennai",
    hq: false,
    desc: "Fast-growing studio for manufacturing-tech and SaaS workplaces.",
    sqft: "1.4M",
    gcc: "6",
    people: "35+",
    img: "https://images.pexels.com/photos/9300768/pexels-photo-9300768.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const Studios = () => {
  const [active, setActive] = useState(0);
  const city = CITIES[active];

  return (
    <section id="studios" data-testid="studios-section" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Kicker>06 — India Expertise</Kicker>
        </Reveal>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <Reveal delay={0.05} className="lg:col-span-7">
            <h2 className="text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
              Global ambition, <span className="text-[#4c8c1f]">backed by local expertise.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="flex items-end lg:col-span-5">
            <p className="max-w-md text-sm font-light leading-relaxed text-slate2 sm:text-base">
              Five studios across India's primary GCC corridors — the teams who execute where your
              centre will actually be built.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap gap-2.5">
            {CITIES.map((c, i) => (
              <button
                key={c.name}
                data-testid={`studio-tab-${c.name.toLowerCase().replace(/[^a-z]/g, "")}`}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-[13px] font-normal transition-all duration-300 ${
                  active === i
                    ? "bg-forest text-cream"
                    : "border border-forest/15 bg-white text-slate2 hover:border-forest/40"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={city.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-10 grid gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              {city.hq && (
                <span className="mb-4 inline-block rounded-full bg-lime/20 px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#4c8c1f]">
                  Headquarters
                </span>
              )}
              <h3 className="text-2xl font-light tracking-tight text-ink sm:text-3xl">{city.name}</h3>
              <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-slate2 sm:text-base">
                {city.desc}
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-forest/10 pt-6">
                <div>
                  <p className="text-2xl font-light tracking-tight text-ink sm:text-3xl">{city.sqft}</p>
                  <p className="mt-1 text-xs font-light text-muted2">sq ft delivered</p>
                </div>
                <div>
                  <p className="text-2xl font-light tracking-tight text-ink sm:text-3xl">{city.gcc}</p>
                  <p className="mt-1 text-xs font-light text-muted2">GCC programmes</p>
                </div>
                <div>
                  <p className="text-2xl font-light tracking-tight text-ink sm:text-3xl">{city.people}</p>
                  <p className="mt-1 text-xs font-light text-muted2">specialists</p>
                </div>
              </div>

              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-muted2">
                Meet the studio leadership
              </p>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {LEADERS.map((l) => (
                  <div key={l.name} className="group">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={l.img}
                        alt={l.name}
                        loading="lazy"
                        className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                    </div>
                    <p className="mt-2.5 text-[13px] font-normal text-ink">{l.name}</p>
                    <p className="text-xs font-light text-muted2">{l.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="h-full overflow-hidden rounded-2xl">
                <img
                  src={city.img}
                  alt={`${city.name} studio`}
                  loading="lazy"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Studios;
