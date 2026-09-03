import { ArrowUpRight } from "lucide-react";
import { Reveal, Kicker } from "./Reveal";

const PROJECTS = [
  {
    id: "P.01",
    title: "Fortune 100 FinTech",
    meta: "Bengaluru · LEED Gold",
    badge: "LEED Gold",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "P.02",
    title: "Global Cloud Platform",
    meta: "Hyderabad · WELL Platinum",
    badge: "WELL Platinum",
    img: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "P.03",
    title: "US Financial Services Major",
    meta: "Pune · IGBC Platinum",
    badge: "IGBC Platinum",
    img: "https://images.pexels.com/photos/13219418/pexels-photo-13219418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "P.04",
    title: "European Semiconductor Leader",
    meta: "Gurugram (NCR) · LEED Platinum",
    badge: "LEED Platinum",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
];

const Proof = ({ onNavigate }) => (
  <section id="work" data-testid="proof-section" className="bg-soft py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <Kicker>02 — Proof of Work</Kicker>
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <Reveal delay={0.05} className="lg:col-span-7">
          <h2 className="text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            Global ambitions.
            <br />
            <span className="text-[#4c8c1f]">Proven workplaces.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="flex items-end lg:col-span-5">
          <p className="max-w-md text-sm font-light leading-relaxed text-slate2 sm:text-base">
            Flagship GCC programmes, delivered end-to-end across India's primary technology corridors.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={0.07 * (i % 2)}>
            <div data-testid={`proof-project-card-${i + 1}`} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-forest backdrop-blur">
                  {p.badge}
                </span>
                <span className="absolute right-4 top-4 font-mono text-xs text-white/85">{p.id}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-normal tracking-tight text-ink sm:text-2xl">{p.title}</h3>
                  <p className="mt-1.5 text-sm font-light text-muted2">{p.meta}</p>
                </div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest/15 transition-all duration-300 group-hover:border-transparent group-hover:bg-lime">
                  <ArrowUpRight className="h-4 w-4 text-forest" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-14 flex justify-center">
        <button
          data-testid="proof-discuss-btn"
          onClick={() => onNavigate("#contact")}
          className="group flex items-center gap-3 text-sm font-normal text-ink transition-colors hover:text-[#4c8c1f]"
        >
          Discuss Your Workplace Vision
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4 text-limebright" />
          </span>
        </button>
      </Reveal>
    </div>
  </section>
);

export default Proof;
