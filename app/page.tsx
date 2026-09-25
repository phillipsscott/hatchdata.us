import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

const services = [
  {
    title: "Analytics foundation",
    body: "Clean models, trustworthy metrics, and a data layer your team can actually build on — without another year of warehouse archaeology.",
  },
  {
    title: "Decision systems / AI that ships",
    body: "Practical AI and decision workflows tied to real operating questions. Prototypes that graduate into production, not slide decks that die in a share drive.",
  },
  {
    title: "Measurement & instrumentation",
    body: "Instrumentation that tells you what changed, why it mattered, and what to do next. Event design, analytics QA, and reporting that leadership trusts.",
  },
  {
    title: "Fractional analytics leadership",
    body: "Senior judgment without a full-time hire. Roadmaps, hiring plans, vendor calls, and the weekly cadence that keeps analytics from becoming theater.",
  },
];

const steps = [
  {
    n: "01",
    title: "Frame the decision",
    body: "We start with the choice on the table — not the tool. What must be true for the business to move?",
  },
  {
    n: "02",
    title: "Map the signal",
    body: "Trace the data you have, the gaps that matter, and the shortest path to a reliable answer.",
  },
  {
    n: "03",
    title: "Build the smallest useful system",
    body: "Ship a focused model, dashboard, or workflow. Prove value early. Expand only where it earns its keep.",
  },
  {
    n: "04",
    title: "Hand off with clarity",
    body: "Documentation, ownership, and operating rhythm so the work survives after the engagement.",
  },
];

const proofs = [
  {
    label: "Engagement outcomes",
    note: "Case metrics TBD",
    detail:
      "Quantitative results will land here once client work is cleared for public use. No invented numbers.",
  },
  {
    label: "Selected work",
    note: "Case studies WIP",
    detail:
      "Detailed write-ups are in progress. Until then, ask for relevant references on a call.",
  },
  {
    label: "How we measure ourselves",
    note: "Honesty first",
    detail:
      "We would rather show empty proof slots than polish fake logos, testimonials, or vanity KPIs.",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <Nav />

      <main>
        {/* Hero */}
        <section
          aria-label="Hero"
          className="relative overflow-hidden border-b border-border"
        >
          <div
            className="pointer-events-none absolute inset-0 grid-backdrop"
            aria-hidden
          />
          <div className="container-page relative section-pad">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="wip-badge">Polished work-in-progress</span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-subtle">
                AI + analytics consultancy
              </span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                Turn messy data into decisions you can defend.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                Hatch Analytics is an AI and analytics consultancy for teams
                that need clarity under pressure — strong foundations, systems
                that ship, and leadership that keeps the signal honest.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#contact" className="btn-primary">
                  Start a conversation
                </a>
                <a href="#approach" className="btn-secondary">
                  See how we work
                </a>
              </div>
            </div>

            <div className="mt-14 grid gap-3 sm:grid-cols-3">
              {[
                ["Foundations", "Metrics & models that hold"],
                ["Systems", "AI & workflows that ship"],
                ["Leadership", "Fractional senior coverage"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-[var(--radius-sm)] border border-border bg-elevated/70 px-4 py-3"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
                    {k}
                  </p>
                  <p className="mt-1 text-sm text-muted">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          aria-label="Services"
          className="section-pad border-b border-border"
        >
          <div className="container-page">
            <p className="section-label">Services</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Modular work. Concrete outcomes.
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Engage one lane or stack them. Every offering is scoped to a
                decision your business needs to make.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <article key={service.title} className="card p-6 sm:p-7">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-medium tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <span className="font-mono text-xs text-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-muted">
                    {service.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section
          id="approach"
          aria-label="Approach"
          className="section-pad border-b border-border bg-elevated/40"
        >
          <div className="container-page">
            <p className="section-label">Approach</p>
            <h2 className="max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Short loops. Clear ownership. No slide-only engagements that leave
              your team holding an unfinished system.
            </p>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <li key={step.n} className="card p-5">
                  <p className="font-mono text-xs text-accent">{step.n}</p>
                  <h3 className="mt-3 text-base font-medium tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Proof */}
        <section
          id="proof"
          aria-label="Proof"
          className="section-pad border-b border-border"
        >
          <div className="container-page">
            <p className="section-label">Proof</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-xl text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Evidence, when we have it.
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Placeholders on purpose. Hatch does not invent logos, case
                metrics, or testimonials to fill a layout.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {proofs.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[var(--radius)] border border-dashed border-border-strong bg-card/70 p-6"
                >
                  <p className="text-sm font-medium text-ink">{item.label}</p>
                  <p className="mt-3 inline-flex rounded-full border border-accent-border bg-accent-soft px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-accent">
                    {item.note}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-label="Contact" className="section-pad">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Start a conversation
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Tell us what you are trying to decide. A short brief is enough —
                we will reply with whether Hatch is the right fit and what a
                first engagement could look like.
              </p>
              <div className="mt-8 rounded-[var(--radius)] border border-border bg-card p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-subtle">
                  Intended contact
                </p>
                <p className="mt-2 text-lg font-medium tracking-tight text-ink">
                  hello@hatchdata.us
                </p>
                <p className="mt-2 text-sm text-muted">
                  Mailbox may still be provisioning. The form opens a local
                  mailto draft in the meantime.
                </p>
              </div>
            </div>
            <div className="card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
