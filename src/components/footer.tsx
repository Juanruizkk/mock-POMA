"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const WHATSAPP = "https://wa.me/5493812032123";
const INSTAGRAM = "https://instagram.com/poma.tafidelvalle";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const navLinks = [
    { href: "/#inicio", label: tNav("inicio") },
    { href: "/#quienes", label: tNav("quienes") },
    { href: "/servicios-y-excursiones", label: tNav("servicios") },
    { href: "/#galeria", label: tNav("galeria") },
    { href: "/#contacto", label: tNav("contacto") },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--deepgreen)", color: "var(--cream)" }}
    >
      <div className="absolute inset-0 noise opacity-[0.06]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logopoma.png"
                alt="PÓMA"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="flex flex-col leading-none">
                <span
                  className="font-serif text-2xl font-semibold"
                  style={{ letterSpacing: "0.04em" }}
                >
                  PÓMA
                </span>
                <span className="eyebrow text-[9px] mt-1 text-white/60">
                  Tafí del Valle
                </span>
              </span>
            </div>
            <p className="font-serif text-2xl italic text-white/90 max-w-xs leading-snug">
              {t("tagline")}
            </p>
          </div>

          <div>
            <p className="eyebrow text-[11px] text-white/50 mb-5">{t("navTitle")}</p>
            <ul className="space-y-3 text-[15px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as "/"}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[11px] text-white/50 mb-5">{t("followTitle")}</p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid place-items-center h-12 w-12 rounded-full text-xl transition-transform hover:-translate-y-1"
                style={{
                  background: "rgba(250,245,236,0.08)",
                  border: "1px solid rgba(250,245,236,0.15)",
                }}
              >
                <i className="ti ti-brand-whatsapp" />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid place-items-center h-12 w-12 rounded-full text-xl transition-transform hover:-translate-y-1"
                style={{
                  background: "rgba(250,245,236,0.08)",
                  border: "1px solid rgba(250,245,236,0.15)",
                }}
              >
                <i className="ti ti-brand-instagram" />
              </a>
            </div>
            <p className="mt-6 text-[14px] text-white/70 leading-relaxed">
              Tafí del Valle,
              <br />
              Tucumán · Argentina
            </p>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(250,245,236,0.12)" }}
        >
          <p className="text-[13px] text-white/55">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="eyebrow text-[10px] text-white/40">
            {t("credits")}
          </p>
        </div>
      </div>
    </footer>
  );
}
