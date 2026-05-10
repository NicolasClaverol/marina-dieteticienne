"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CLIENT } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/consultations", label: "Consultations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-fond/95 backdrop-blur-md shadow-sm border-b border-gris"
          : "bg-fond/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-title text-xl md:text-2xl text-sage font-semibold leading-tight group-hover:text-sage-dark transition-colors">
              {CLIENT.nom}
            </span>
            <span className="text-xs text-texte/50 tracking-wider uppercase">
              {CLIENT.titre}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sage ${
                  pathname === link.href
                    ? "text-sage border-b-2 border-sage pb-0.5"
                    : "text-texte"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <Link
              href={CLIENT.doctolib}
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-sage text-white text-sm font-medium rounded-full hover:bg-sage-dark transition-colors shadow-sm"
            >
              Prendre rendez-vous
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gris transition-colors"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <svg
                  className="w-5 h-5 text-texte"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-texte"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-4 border-t border-gris animate-in slide-in-from-top-2 duration-200"
          >
            <nav
              className="flex flex-col pt-3"
              aria-label="Navigation mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 font-medium text-base transition-colors hover:text-sage border-b border-gris/50 last:border-0 ${
                    pathname === link.href ? "text-sage" : "text-texte"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={CLIENT.doctolib}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-sage text-white font-medium rounded-full hover:bg-sage-dark transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
