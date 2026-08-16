import { site } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-6 md:px-10 md:pb-24 md:pt-10">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <p className="anim-rise font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-ink)]">
          {site.role}
        </p>

        <h1 className="anim-rise-2 font-display mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-8xl">
          {site.name}
        </h1>

        <p className="anim-rise-3 mt-6 max-w-xl text-lg text-[var(--muted)] md:text-xl">
          {site.tagline} Enterprise Command Centers, document AI, agents, and vision — Dockerized and
          deployment-safe.
        </p>

        <div className="anim-rise-3 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="cta rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="cta rounded-full border border-[var(--ink)]/20 bg-white/40 px-6 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur"
          >
            See portfolio
          </a>
        </div>

        <svg
          className="mt-14 hidden h-16 w-full max-w-3xl text-[var(--accent)] md:block"
          viewBox="0 0 600 40"
          fill="none"
          aria-hidden
        >
          <path
            className="hero-line"
            d="M2 28 C 80 8, 140 36, 220 18 S 360 6, 420 22 520 34, 598 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <p className="mt-6 text-sm text-[var(--muted)]">{site.location}</p>
      </div>
    </section>
  );
}
