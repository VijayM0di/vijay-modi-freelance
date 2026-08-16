import { site } from "@/data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-4 px-5 py-5 md:px-10">
      <a href="#top" className="font-display text-lg font-bold tracking-tight text-[var(--ink)] md:text-xl">
        {site.name}
      </a>
      <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--muted)] md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-[var(--ink)]">
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="cta rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white"
      >
        Hire me
      </a>
    </header>
  );
}
