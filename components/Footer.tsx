import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/past-shows", label: "Past Shows" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-peat-800/30 bg-ink-light/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-accent text-2xl md:text-3xl tracking-[0.25em] uppercase text-copper hover:text-copper-light transition-colors"
          >
            Muck Savage
          </Link>

          {/* Decorative line */}
          <div className="section-divider" />

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-cream/50 hover:text-copper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Tagline */}
          <p className="text-center text-cream/30 text-xs tracking-wider font-display italic">
            Contemporary &amp; Traditional Irish Music
          </p>
        </div>
      </div>
    </footer>
  );
}
