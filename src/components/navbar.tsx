"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#quienes", label: "Quiénes Somos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];

const WHATSAPP = "https://wa.me/5493812032123";

const BLUR = "blur(20px) saturate(180%)";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Liquid glass: frosted light pill, legible dark text on any background
  const glass = {
    background: scrolled
      ? "linear-gradient(180deg, rgba(255,255,255,0.62), rgba(250,245,236,0.48))"
      : "linear-gradient(180deg, rgba(255,255,255,0.40), rgba(250,245,236,0.26))",
    backdropFilter: BLUR,
    WebkitBackdropFilter: BLUR,
    border: "1px solid rgba(255,255,255,0.55)",
    boxShadow: scrolled
      ? "0 10px 34px rgba(22,51,40,0.14), inset 0 1px 0 rgba(255,255,255,0.75)"
      : "0 6px 22px rgba(22,51,40,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 lg:px-6 pt-3 lg:pt-4">
      <nav
        className="max-w-7xl mx-auto rounded-full h-16 lg:h-[68px] pl-4 pr-3 lg:pl-6 lg:pr-4 flex items-center justify-between transition-all duration-500"
        style={glass}
      >
        <Link href="/#inicio" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logopoma.png"
            alt="PÓMA Tafí del Valle"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span
              className="font-serif text-lg font-semibold"
              style={{ color: "var(--green)", letterSpacing: "0.04em" }}
            >
              PÓMA
            </span>
            <span
              className="eyebrow text-[9px] mt-0.5"
              style={{ color: "var(--muted)" }}
            >
              Tafí del Valle
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9 text-[12px]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link eyebrow"
                style={{ color: "var(--char)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <Link
            href="/#contacto"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] eyebrow text-white press-btn transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--green)" }}
          >
            Reservá
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid place-items-center h-11 w-11 rounded-full text-lg transition-transform hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.45)",
              border: "1px solid rgba(255,255,255,0.6)",
              backdropFilter: BLUR,
              WebkitBackdropFilter: BLUR,
              color: "var(--green)",
            }}
          >
            <i className="ti ti-brand-whatsapp" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden grid place-items-center h-11 w-11 text-2xl"
            style={{ color: "var(--green)" }}
            aria-label="Menú"
          >
            <i className={menuOpen ? "ti ti-x" : "ti ti-menu-2"} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl px-5 py-5 space-y-3"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.72), rgba(250,245,236,0.6))",
            backdropFilter: BLUR,
            WebkitBackdropFilter: BLUR,
            border: "1px solid rgba(255,255,255,0.55)",
            boxShadow: "0 12px 34px rgba(22,51,40,0.16)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block eyebrow text-[13px] py-1.5"
              style={{ color: "var(--char)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="block text-center rounded-full px-5 py-3 text-[12px] eyebrow text-white mt-2"
            style={{ background: "var(--green)" }}
          >
            Reservá
          </Link>
        </div>
      )}
    </header>
  );
}
