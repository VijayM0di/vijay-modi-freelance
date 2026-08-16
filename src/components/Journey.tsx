import { journey, site } from "@/data/content";

export function Journey() {
  return (
    <section id="journey" className="border-t border-[var(--line)] px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Journey</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          {site.education}. From research internships to enterprise AI Command Centers.
        </p>

        <ol className="mt-10 space-y-6">
          {journey.map((j) => (
            <li key={j.where} className="grid gap-2 border-l-2 border-[var(--accent)] pl-5 md:grid-cols-[180px_1fr] md:gap-8">
              <p className="text-sm font-semibold text-[var(--accent-ink)]">{j.when}</p>
              <div>
                <p className="font-display text-lg font-bold">{j.where}</p>
                <p className="mt-1 text-[var(--muted)]">{j.what}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
