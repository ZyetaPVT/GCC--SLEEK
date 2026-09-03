import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Kicker } from "./Reveal";

const FAQS = [
  {
    q: "What is the typical timeline from space identification to GCC occupancy in India?",
    a: "Our integrated turnkey model reduces conventional delivery timelines by 30–40%. For standard 50,000 to 150,000 sq ft centres, design-build execution ranges between 14 to 20 weeks. Our pre-construction strategy addresses long-lead equipment procurement and Indian statutory approvals concurrently with early architectural design.",
  },
  {
    q: "How does Zyeta harmonize global corporate workplace guidelines with local Indian regulations?",
    a: "We maintain strict compliance with global enterprise standards — fire and life safety, acoustic privacy, IT redundancy, ESG/LEED guidelines — while tailoring engineering execution to regional Indian building codes (NBC), state municipal clearances, landlord fit-out handovers, and local vendor ecosystems across Bengaluru, Hyderabad, Pune, NCR, and Chennai.",
  },
  {
    q: "What sustainability and health certifications can Zyeta deliver for our India GCC?",
    a: "Zyeta is an accredited studio across USGBC LEED (Platinum/Gold), IWBI WELL, and IGBC standards. We embed sustainable material sourcing, high-efficiency HVAC, energy analytics, and biophilic interior planning into every GCC project, delivering up to 35% operational energy cost reduction.",
  },
  {
    q: "How does Zyeta handle hybrid flexibility and rapid headcount expansion for new GCCs?",
    a: "We design modular, reconfigurable spatial layouts with smart occupancy sensors, flexible micro-neighborhoods, and scalable MEP infrastructure. This allows GCCs to adjust density, convert workstation zones to collaborative innovation labs, and scale headcount seamlessly without disruptive re-fits.",
  },
];

const Faq = () => (
  <section id="faq" data-testid="faq-section" className="bg-soft py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Kicker>FAQ — GCC Entry &amp; Expansion in India</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            Answers, <span className="text-[#4c8c1f]">before you even ask.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-slate2 sm:text-base">
            Key insights for global decision-makers establishing or expanding GCC presence in India.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i + 1}`}
                data-testid={`faq-accordion-item-${i + 1}`}
                className="rounded-2xl border border-forest/10 bg-white px-6 transition-colors duration-300 data-[state=open]:border-lime/60 sm:px-8"
              >
                <AccordionTrigger className="py-6 text-left text-base font-normal tracking-tight text-ink hover:no-underline sm:text-lg [&[data-state=open]>svg]:text-lime">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm font-light leading-relaxed text-slate2 sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Faq;
