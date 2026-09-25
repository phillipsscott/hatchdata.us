const links = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#proof", label: "Proof" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-14 items-center justify-between sm:h-16">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-ink"
        >
          Hatch Analytics
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary !px-3.5 !py-2 text-sm md:!px-4">
          Start a conversation
        </a>
      </div>
    </header>
  );
}
