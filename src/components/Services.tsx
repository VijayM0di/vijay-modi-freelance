import { proofs, services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="border-t border-[var(--line)] px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">What you hire me for</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          One builder for AI product + backend + UI + Docker handoff. I ship systems, not slide decks.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="border-t border-[var(--ink)]/15 pt-5">
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{s.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {proofs.map((p) => (
            <div key={p.label} className="rounded-2xl bg-white/50 px-4 py-5 backdrop-blur">
              <p className="font-display text-2xl font-bold text-[var(--accent-ink)] md:text-3xl">{p.value}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--ink)]">{p.label}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
