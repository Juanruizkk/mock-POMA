"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#quienes", label: "Quiénes Somos" },
  { href: "/servicios-y-excursiones", label: "Servicios y Excursiones" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];

const WHATSAPP = "https://wa.me/5493812032123";
const BLUR = "blur(24px) saturate(160%)";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  const pill = scrolled
    ? {
        background: "rgba(14,32,24,0.86)",
        backdropFilter: BLUR,
        WebkitBackdropFilter: BLUR,
        border: "1px solid rgba(224,176,85,0.2)",
        boxShadow: "0 14px 44px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)",
        transition: "background 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease",
      }
    : {
        background: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        border: "1px solid transparent",
        boxShadow: "none",
        transition: "background 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease",
      };

  const cream = "rgba(245,241,236,0.88)";
  const creamMuted = "rgba(245,241,236,0.42)";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 lg:px-6 pt-3 lg:pt-4">
      <nav
        className="max-w-7xl mx-auto rounded-full h-16 lg:h-[66px] pl-4 pr-3 lg:pl-6 lg:pr-4 flex items-center justify-between"
        style={pill}
      >
        {/* Logo */}
        <Link href="/#inicio" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logopoma.png"
            alt="PÓMA Tafí del Valle"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.18)" }}
            priority
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span
              className="font-serif text-[17px] font-semibold tracking-[0.05em] transition-colors duration-500"
              style={{ color: scrolled ? "var(--gold-bright)" : "white" }}
            >
              PÓMA
            </span>
            <span
              className="eyebrow text-[8px] mt-0.5"
              style={{ color: creamMuted }}
            >
              Tafí del Valle
            </span>
          </span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="flex flex-col items-center gap-1.5">
                <Link
                  href={link.href}
                  className="eyebrow text-[11px] transition-colors duration-200 hover:opacity-100"
                  style={{ color: active ? "white" : cream }}
                >
                  {link.label}
                </Link>
                {/* Dot activo */}
                <span
                  className="w-1 h-1 rounded-full transition-all duration-300"
                  style={{
                    background: "var(--gold-bright)",
                    opacity: active ? 1 : 0,
                    transform: active ? "scale(1)" : "scale(0)",
                  }}
                />
              </li>
            );
          })}
        </ul>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <Link
            href="/#contacto"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 eyebrow text-[11px] press-btn"
            style={
              scrolled
                ? { background: "var(--gold-bright)", color: "var(--deepgreen)", transition: "background 0.4s ease, color 0.4s ease" }
                : { background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.28)", color: "white", transition: "background 0.4s ease" }
            }
          >
            Reservá
          </Link>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid place-items-center h-10 w-10 rounded-full text-[18px] transition-all duration-400"
            style={{
              background: scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: scrolled ? "var(--gold-bright)" : "white",
            }}
          >
            <i className="ti ti-brand-whatsapp" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden grid place-items-center h-10 w-10 text-xl transition-colors"
            style={{ color: cream }}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <i className={menuOpen ? "ti ti-x" : "ti ti-menu-2"} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(14,32,24,0.94)",
            backdropFilter: BLUR,
            WebkitBackdropFilter: BLUR,
            border: "1px solid rgba(224,176,85,0.15)",
            boxShadow: "0 18px 52px rgba(0,0,0,0.38)",
          }}
        >
          <div className="px-5 pt-5 pb-2 space-y-0">
            {links.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-3.5 eyebrow text-[12px]"
                  style={{
                    color: active ? "var(--gold-bright)" : "rgba(245,241,236,0.72)",
                    borderBottom: i < links.length - 1 ? "1px solid rgba(224,176,85,0.09)" : "none",
                  }}
                >
                  {link.label}
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold-bright)" }} />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="px-5 pb-5 pt-3">
            <Link
              href="/#contacto"
              className="flex items-center justify-center rounded-full py-3.5 eyebrow text-[12px] press-btn"
              style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}
            >
              Reservá ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
