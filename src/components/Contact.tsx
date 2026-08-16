import { site } from "@/data/content";

export function Contact() {
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Freelance project inquiry")}&body=${encodeURIComponent(
    "Hi Vijay,\n\nI need help with:\nTimeline:\nBudget range:\n\n",
  )}`;
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Vijay — I have a freelance AI project.")}`;

  return (
    <section id="contact" className="border-t border-[var(--line)] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          Ready to ship an AI system?
        </h2>
        <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
          Tell me the process, the data, and the deadline. I design, build, and validate locally —
          Docker Compose first — then hand off clean to your infra team.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={mail} className="cta rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white">
            Email {site.email}
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="cta rounded-full border border-[var(--ink)]/20 bg-white/50 px-6 py-3 text-sm font-semibold"
          >
            WhatsApp
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="cta rounded-full border border-[var(--ink)]/20 bg-white/50 px-6 py-3 text-sm font-semibold"
          >
            GitHub
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="cta rounded-full border border-[var(--ink)]/20 bg-white/50 px-6 py-3 text-sm font-semibold">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-8 text-sm text-[var(--muted)] md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="font-display font-semibold text-[var(--ink)]">{site.name}</p>
        <p>Freelance AI systems · Portfolio from shipped work · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
