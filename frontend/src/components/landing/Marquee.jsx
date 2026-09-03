import { Diamond } from "lucide-react";

const CLIENTS = [
  "Microsoft", "Google", "Goldman Sachs", "NVIDIA", "Target",
  "SAP", "Intel", "Texas Instruments", "Wells Fargo", "Adobe",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {CLIENTS.map((c) => (
      <div key={c} className="flex items-center">
        <span className="whitespace-nowrap px-8 text-2xl font-light tracking-tight text-ink/35 sm:px-10 sm:text-3xl">
          {c}
        </span>
        <Diamond className="h-2.5 w-2.5 fill-lime text-lime" />
      </div>
    ))}
  </div>
);

const Marquee = () => (
  <section data-testid="client-marquee" className="border-y border-forest/10 bg-cream py-10 sm:py-12">
    <p className="mb-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted2 sm:text-xs">
      Trusted by organizations building what comes next
    </p>
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  </section>
);

export default Marquee;
