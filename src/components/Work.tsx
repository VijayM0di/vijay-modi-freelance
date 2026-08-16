import { projects } from "@/data/content";

export function Work() {
  const list = projects.filter((p) => p.featured !== false);

  return (
    <section id="work" className="border-t border-[var(--line)] px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Selected work</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          From your journey folder — problem, architecture, result. Built by me end-to-end.
        </p>

        <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {list.map((p) => (
            <li key={p.id} className="project-row px-2 py-6 md:px-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                <div className="md:w-1/3">
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-[var(--accent-ink)]">{p.domain}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--line)] bg-white/40 px-2.5 py-0.5 text-xs text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid flex-1 gap-3 text-sm md:grid-cols-3">
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Problem</p>
                    <p className="mt-1 text-[var(--muted)]">{p.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Architecture</p>
                    <p className="mt-1 text-[var(--muted)]">{p.architecture}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Result</p>
                    <p className="mt-1 text-[var(--muted)]">{p.result}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
