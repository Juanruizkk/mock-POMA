"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/excursiones", label: "Excursiones" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 ${
        scrolled ? "py-2 shadow-2xl bg-surface/95" : "py-4"
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-16 max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logopoma.png"
            alt="PÓMA"
            width={140}
            height={80}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/contacto"
            className="hidden sm:block text-[13px] font-bold uppercase tracking-[0.2em] text-primary lg:hidden"
          >
            Contacto
          </Link>
          <a
            href="https://wa.me/5493812032123"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-7 py-3 text-[12px] uppercase tracking-[0.2em] font-bold hover:shadow-[0_8px_30px_rgb(22,51,40,0.3)] active:scale-95 transition-all duration-300 hidden sm:block"
          >
            Reservar
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-primary"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant/30 px-5 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-[14px] font-bold uppercase tracking-[0.15em] py-2 ${
                pathname === link.href ? "text-primary" : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5493812032123"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary text-on-primary px-7 py-3 text-[12px] uppercase tracking-[0.2em] font-bold text-center mt-4"
          >
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
}
