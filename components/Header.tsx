"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/past-shows", label: "Past Shows" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header({ logoUrl }: { logoUrl?: string | null }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-peat-800/30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          {logoUrl && (
            <Image
              src={logoUrl}
              alt="Muck Savage logo"
              width={40}
              height={40}
              className="h-8 w-auto md:h-10 object-contain"
            />
          )}
          <span className="font-accent text-lg md:text-xl tracking-[0.2em] uppercase text-copper">
            Muck Savage
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm tracking-widest uppercase font-body transition-colors relative group ${
                  isActive
                    ? "text-copper"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-copper transition-all duration-300 ${
                    isActive ? "w-3/4" : "w-0 group-hover:w-1/2"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 text-sm tracking-widest uppercase border border-copper/60 text-copper hover:bg-copper/10 hover:border-copper transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 border-t border-peat-800/30" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1 bg-ink/95 backdrop-blur-md">
          {[...navLinks, { href: "/contact", label: "Contact" }].map(
            (link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-sm tracking-widest uppercase border-b border-peat-900/40 transition-colors ${
                    isActive ? "text-copper" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }
          )}
        </nav>
      </div>
    </header>
  );
}
