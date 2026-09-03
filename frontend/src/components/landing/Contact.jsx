import { useState } from "react";
import axios from "axios";
import { ArrowUpRight, Check, ChevronDown, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Reveal, Kicker } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const PROMISES = [
  "Response from a senior expert within one business day",
  "Confidential. NDA available on request",
  "A no-obligation consultation, not a sales call",
];

const SELECTS = {
  location: [
    "Bengaluru", "Hyderabad", "Pune", "Gurugram (NCR)", "Chennai", "Mumbai",
    "Multiple cities", "Evaluating locations",
  ],
  workplace_size: [
    "Under 25,000 sq ft", "25,000 – 75,000 sq ft", "75,000 – 150,000 sq ft",
    "150,000 – 300,000 sq ft", "300,000+ sq ft",
  ],
  journey_stage: [
    "Evaluating India entry", "Location shortlisted", "Space identified",
    "Expanding an existing GCC", "Consolidating multiple offices",
  ],
};

const inputCls =
  "w-full rounded-xl border border-forest/15 bg-cream/60 px-4 py-3 text-sm font-light text-ink placeholder:text-muted2/70 outline-none transition-colors duration-300 focus:border-lime focus:bg-white";

const Field = ({ label, required, children, testid }) => (
  <label className="block" data-testid={testid}>
    <span className="mb-2 block text-xs font-normal text-slate2">
      {label} {required && <span className="text-lime">*</span>}
    </span>
    {children}
  </label>
);

const Select = ({ name, value, onChange, options, testid }) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      data-testid={testid}
      className={`${inputCls} appearance-none pr-10 ${value ? "" : "text-muted2/70"}`}
    >
      <option value="">Select…</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted2" />
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({
    full_name: "", work_email: "", company: "", job_title: "",
    location: "", workplace_size: "", journey_stage: "",
  });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/leads`, form);
      toast.success("Thank you — a senior workplace expert will reach out within one business day.");
      setForm({ full_name: "", work_email: "", company: "", job_title: "", location: "", workplace_size: "", journey_stage: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>07 — Start</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 text-3xl font-light leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
                Planning your India expansion?{" "}
                <span className="text-[#4c8c1f]">Let's design what comes next.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-slate2 sm:text-base">
                Tell us what you're building and where you're headed. Our workplace experts will help
                you define the right path forward.
              </p>
              <ul className="mt-8 space-y-4">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-light text-slate2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/25">
                      <Check className="h-3 w-3 text-[#4c8c1f]" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-xs font-light text-muted2">
                Your details stay with Zyeta. No lists, no spam.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              data-testid="contact-form"
              onSubmit={onSubmit}
              className="rounded-3xl border border-forest/10 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(15,46,35,0.25)] sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" required testid="field-full-name">
                  <input name="full_name" required value={form.full_name} onChange={onChange} data-testid="input-full-name" placeholder="Jane Cooper" className={inputCls} />
                </Field>
                <Field label="Work Email" required testid="field-work-email">
                  <input name="work_email" type="email" required value={form.work_email} onChange={onChange} data-testid="input-work-email" placeholder="jane@company.com" className={inputCls} />
                </Field>
                <Field label="Company" required testid="field-company">
                  <input name="company" required value={form.company} onChange={onChange} data-testid="input-company" placeholder="Company Inc." className={inputCls} />
                </Field>
                <Field label="Job Title" testid="field-job-title">
                  <input name="job_title" value={form.job_title} onChange={onChange} data-testid="input-job-title" placeholder="Head of Real Estate" className={inputCls} />
                </Field>
                <Field label="Planned India Location" testid="field-location">
                  <Select name="location" value={form.location} onChange={onChange} options={SELECTS.location} testid="select-location" />
                </Field>
                <Field label="Approx. Workplace Size" testid="field-size">
                  <Select name="workplace_size" value={form.workplace_size} onChange={onChange} options={SELECTS.workplace_size} testid="select-size" />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Where Are You in the Journey?" testid="field-journey">
                    <Select name="journey_stage" value={form.journey_stage} onChange={onChange} options={SELECTS.journey_stage} testid="select-journey" />
                  </Field>
                </div>
              </div>
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-form-submit-btn"
                className="group mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-forest py-4 text-sm font-medium text-cream transition-transform duration-300 hover:scale-[1.01] disabled:opacity-60 sm:w-auto sm:pl-7 sm:pr-3"
              >
                {sending ? (
                  <>
                    Sending
                    <Loader2 className="h-4 w-4 animate-spin text-limebright" />
                  </>
                ) : (
                  <>
                    Start Your GCC Workplace Journey
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4 text-forest" />
                    </span>
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
