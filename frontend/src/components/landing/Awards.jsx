import { Award, Leaf, Building2 } from "lucide-react";
import { Reveal, Kicker } from "./Reveal";

const AWARDS = [
  {
    year: "2025",
    title: "Workplace Project of the Year",
    org: "India Design Awards",
    project: "Fortune 100 FinTech · Bengaluru",
    img: "https://images.pexels.com/photos/9300768/pexels-photo-9300768.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
  },
  {
    year: "2024",
    title: "Best Sustainable Workplace",
    org: "IGBC Green Champion Awards",
    project: "Global Cloud Platform · Hyderabad",
  },
  {
    year: "2024",
    title: "Excellence in Corporate Interiors",
    org: "FRAME Awards, APAC",
    project: "US Financial Services Major · Pune",
  },
  {
    year: "2023",
    title: "Innovation in Smart Workplace",
    org: "WORKTECH Academy",
    project: "European Semiconductor Leader · NCR",
  },
];

const CERTS = [
  { icon: Leaf, tag: "IWBI", title: "WELL Platinum", body: "Health & well-being certification across flagship GCC workplaces." },
  { icon: Building2, tag: "USGBC", title: "LEED Accredited Studio", body: "Platinum and Gold certified projects across four Indian metros." },
  { icon: Award, tag: "IGBC", title: "IGBC Green Leader", body: "Recognised for sustainable design & build delivery in India." },
];

const Awards = () => (
  <section id="awards" data-testid="awards-section" className="bg-forest py-24 text-cream sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <Kicker dark>03 — Awards</Kicker>
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <Reveal delay={0.05} className="lg:col-span-7">
          <h2 className="text-3xl font-light leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.9rem]">
            Award-winning workplaces,
            <br />
            <span className="text-limebright">recognised where it counts.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="flex items-end lg:col-span-5">
          <p className="max-w-md text-sm font-light leading-relaxed text-[#B0C4BC] sm:text-base">
            Our projects don't just perform — they set the benchmark. Here are the honours our GCC
            workplaces have earned across design and sustainability.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <div data-testid="award-featured-card" className="group relative h-full overflow-hidden rounded-2xl">
            <img
              src={AWARDS[0].img}
              alt={AWARDS[0].title}
              loading="lazy"
              className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/30 to-transparent" />
            <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-lime px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-forest">
              <Award className="h-3 w-3" /> Winner · {AWARDS[0].year}
            </span>
            <div className="absolute inset-x-5 bottom-5">
              <h3 className="text-xl font-normal tracking-tight sm:text-2xl">{AWARDS[0].title}</h3>
              <p className="mt-1.5 text-sm font-light text-[#B0C4BC]">
                {AWARDS[0].org} — {AWARDS[0].project}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 lg:col-span-7">
          {AWARDS.slice(1).map((a, i) => (
            <Reveal key={a.title} delay={0.07 * i}>
              <div
                data-testid={`award-row-${i + 2}`}
                className="group flex items-center gap-6 rounded-2xl border border-white/10 bg-forestcard p-6 transition-all duration-500 hover:border-lime/40 sm:p-7"
              >
                <span className="font-mono text-sm text-limebright">{a.year}</span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-normal tracking-tight sm:text-lg">{a.title}</h3>
                  <p className="mt-1 text-xs font-light text-[#B0C4BC] sm:text-sm">
                    {a.org} · {a.project}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 border-t border-white/10 pt-12 sm:grid-cols-3 sm:gap-6">
        {CERTS.map((c, i) => (
          <Reveal key={c.tag} delay={0.06 * i}>
            <div data-testid={`cert-card-${i + 1}`} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lime/40">
                <c.icon className="h-4 w-4 text-limebright" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-limebright">{c.tag}</p>
                <h4 className="mt-1.5 text-base font-normal tracking-tight">{c.title}</h4>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-[#B0C4BC]">{c.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
