import { Play } from "lucide-react";
import { Reveal, Kicker } from "./Reveal";

const VOICES = [
  {
    title: "Why the workplace became a recruiting asset",
    name: "Marcus Vance",
    role: "Head of Global Real Estate · Fortune 100 FinTech",
    duration: "01:12",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Handover six weeks early — how it happened",
    name: "Sarah Lin",
    role: "VP & India GCC Centre Head · Global Cloud Platform",
    duration: "00:58",
    img: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Designing a GCC people don't want to leave",
    name: "Elena Rostova",
    role: "Chief People Officer · European Semiconductor Leader",
    duration: "01:24",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
];

const Voices = () => (
  <section id="voices" data-testid="voices-section" className="bg-soft py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <Kicker>05 — Voices</Kicker>
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <Reveal delay={0.05} className="lg:col-span-7">
          <h2 className="text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            Hear it from the people <span className="text-[#4c8c1f]">who signed off.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="flex items-end lg:col-span-5">
          <p className="max-w-md text-sm font-light leading-relaxed text-slate2 sm:text-base">
            Short, vertical stories from senior decision-makers — filmed at the workplaces they
            trusted us to build.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {VOICES.map((v, i) => (
          <Reveal key={v.name} delay={0.08 * i}>
            <div data-testid={`voice-card-${i + 1}`} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-cream/90 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-forest">
                    Client Story
                  </span>
                  <span className="font-mono text-[11px] text-white/85">{v.duration}</span>
                </div>
                <button
                  data-testid={`voices-play-button-${i + 1}`}
                  aria-label={`Play story by ${v.name}`}
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/15 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-lime"
                >
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white transition-colors group-hover:fill-forest group-hover:text-forest" />
                </button>
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="text-base font-normal leading-snug tracking-tight text-cream sm:text-lg">
                    {v.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-normal text-ink">{v.name}</p>
              <p className="mt-0.5 text-xs font-light text-muted2">{v.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Voices;
