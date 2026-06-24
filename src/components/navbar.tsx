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

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "rgba(250,245,236,0.82)",
        borderColor: "#e8ddc9",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/#inicio" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logopoma.png"
            alt="PÓMA Tafí del Valle"
            width={52}
            height={52}
            className="h-[52px] w-[52px] rounded-full object-cover"
            priority
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span
              className="font-serif text-xl font-semibold"
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

        <div className="flex items-center gap-3">
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
            style={{ background: "var(--sand)", color: "var(--green)" }}
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
          className="lg:hidden border-t px-6 py-6 space-y-4"
          style={{ background: "var(--cream)", borderColor: "#e8ddc9" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block eyebrow text-[13px] py-1"
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
