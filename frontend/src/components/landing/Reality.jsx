import { Reveal, Kicker } from "./Reveal";

const CARDS = [
  {
    n: "01",
    title: "Global standards, local realities",
    body: "Your HQ playbook meets Indian regulation, supply chains and construction practice. The gap is where budgets slip.",
  },
  {
    n: "02",
    title: "Speed to occupancy",
    body: "Every month of delay is a month of stalled hiring. GCC timelines punish fragmented delivery.",
  },
  {
    n: "03",
    title: "The talent equation",
    body: "India's top engineers compare your workplace with the best in the world. A sterile floor plan raises attrition.",
  },
  {
    n: "04",
    title: "Built for change",
    body: "Hybrid work, headcount swings, new business lines. A workplace that can't flex becomes a liability.",
  },
];

const Reality = () => (
  <section id="reality" data-testid="reality-section" className="bg-cream py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <Kicker>01 — The Reality</Kicker>
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <Reveal delay={0.05} className="lg:col-span-7">
          <h2 className="text-3xl font-light leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            India is the world's fastest-growing GCC destination.{" "}
            <span className="text-[#4c8c1f]">But the right workplace is not found — it is built.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="flex items-end lg:col-span-5">
          <p className="max-w-md text-sm font-light leading-relaxed text-slate2 sm:text-base">
            Setting up a capability centre is a business decision. The workplace it lands in decides
            whether hiring, culture and delivery keep pace — or quietly work against it.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {CARDS.map((c, i) => (
          <Reveal key={c.n} delay={0.08 * i}>
            <div
              data-testid={`reality-card-${i + 1}`}
              className="group h-full rounded-2xl border border-forest/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-lime/60 hover:shadow-[0_24px_50px_-24px_rgba(15,46,35,0.35)]"
            >
              <p className="font-mono text-sm font-medium text-lime">{c.n}</p>
              <h3 className="mt-6 text-lg font-normal leading-snug tracking-tight text-ink">{c.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-slate2">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Reality;
