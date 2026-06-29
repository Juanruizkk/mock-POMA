"use client";

import { useTranslations } from "next-intl";
import { InkBleed } from "@/components/ink-bleed";
import { StaggerReveal } from "@/components/stagger-reveal";
import { Reveal } from "@/components/reveal";
import { SepCerros } from "@/components/separators";
import { ContactForm } from "@/components/contact-form";

const WHATSAPP = "https://wa.me/5493812032123";
const INSTAGRAM = "https://instagram.com/poma.tafidelvalle";

export function Contacto() {
  const t = useTranslations("contacto");

  return (
    <section
      id="contacto"
      className="relative overflow-hidden"
      style={{ background: "var(--deepgreen)" }}
    >
      <div className="absolute inset-0 noise opacity-[0.07]" />

      {/* ── Costura: cerros suaves de Tafí (transición desde Quiénes Somos) ── */}
      <SepCerros className="relative block w-full -mt-6 lg:-mt-10 mb-8 lg:mb-12" />

      {/* Alternativa minimalista — descomentar (y su import) para usarla en vez de los cerros:
      <SepHairline className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-2" />
      */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-14 lg:pb-20 pt-4 lg:pt-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* ── Columna humana: encabezado + canales + firma ── */}
          <div className="flex flex-col">
            <p
              className="reveal eyebrow text-[12px] mb-4"
              style={{ color: "var(--gold-bright)" }}
            >
              {t("eyebrow")}
            </p>
            <InkBleed
              as="h2"
              className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.0] tracking-[-0.02em] font-medium text-white"
            >
              {t("h2a")}
              <br />
              <span className="italic font-normal" style={{ color: "var(--gold-bright)" }}>
                {t("h2accent")}
              </span>
            </InkBleed>
            <StaggerReveal y={12} className="flex-1 flex flex-col">
            <p className="mt-5 text-white/75 text-[16px] leading-relaxed max-w-md">
              {t("desc")}
            </p>

            {/* WhatsApp + canales secundarios como un bloque único */}
            <div className="mt-8 flex flex-col flex-1">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl px-6 py-5 press-btn"
                style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}
              >
                <span
                  className="grid place-items-center h-12 w-12 rounded-full text-2xl shrink-0"
                  style={{ background: "var(--deepgreen)", color: "var(--gold-bright)" }}
                >
                  <i className="ti ti-brand-whatsapp" />
                </span>
                <span className="flex-1">
                  <span className="block eyebrow text-[10px] opacity-70">
                    {t("waLabel")}
                  </span>
                  <span className="block text-[19px] font-semibold mt-0.5">
                    {t("waPhone")}
                  </span>
                </span>
                <i className="ti ti-arrow-right text-xl transition-transform group-hover:translate-x-1" />
              </a>

              {/* Instagram + Ubicación */}
              <div className="mt-3 space-y-3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl px-5 py-4"
                  style={{
                    background: "rgba(250,245,236,0.06)",
                    border: "1px solid rgba(250,245,236,0.14)",
                  }}
                >
                  <span
                    className="grid place-items-center h-11 w-11 rounded-full text-xl shrink-0"
                    style={{ background: "var(--sand)", color: "var(--terra)" }}
                  >
                    <i className="ti ti-brand-instagram" />
                  </span>
                  <span className="flex-1">
                    <span className="block eyebrow text-[10px] text-white/55">
                      {t("igLabel")}
                    </span>
                    <span className="block text-white text-[15px] font-medium">
                      {t("igHandle")}
                    </span>
                  </span>
                  <span className="text-white/40 text-lg">
                    <i className="ti ti-arrow-right" />
                  </span>
                </a>
              </div>

              {/* ── Mapa cartográfico (reemplaza card Ubicación, llega hasta el final del form) ── */}
              <div
                className="relative rounded-xl overflow-hidden flex-1 min-h-[140px] mt-5"
                style={{
                  border: "1px solid rgba(192,138,45,0.45)",
                  boxShadow: "0 8px 32px rgba(7,18,13,0.4), inset 0 0 0 1px rgba(192,138,45,0.12)",
                }}
              >
                {/* Marco decorativo dorado interior */}
                <div
                  className="absolute inset-[3px] rounded-xl z-10 pointer-events-none"
                  style={{ border: "1px solid rgba(192,138,45,0.18)" }}
                />

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14238.220943688984!2d-65.71481372387899!3d-26.854095116036994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422234e110bdd53%3A0x8ef226e18df85b8a!2sPlaza%20Don%20%C3%81ngel%20Miguel%20Esteves!5e0!3m2!1ses!2sar!4v1782398757685!5m2!1ses!2sar"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    border: 0,
                    filter: "sepia(0.25) saturate(0.85) brightness(0.88) contrast(1.05)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Ubicación Tafí del Valle"
                />

                {/* Overlay inferior con label */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 flex items-end justify-between pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(14,32,24,0.88) 0%, rgba(14,32,24,0.5) 60%, transparent 100%)",
                  }}
                >
                  <div>
                    <span className="block eyebrow text-[9px]" style={{ color: "rgba(192,138,45,0.8)" }}>
                      {t("mapCoords")}
                    </span>
                    <span className="block font-serif text-[13px] font-medium leading-tight" style={{ color: "var(--cream)" }}>
                      {t("mapPlace")}
                    </span>
                  </div>
                  <span className="eyebrow text-[8px]" style={{ color: "rgba(250,245,236,0.4)" }}>
                    {t("mapRegion")}
                  </span>
                </div>
              </div>
            </div>
            </StaggerReveal>
          </div>

          {/* ── Postal: formulario ── */}
          <Reveal
            as="div"
            y={32}
            scale={0.97}
            className="relative rounded-[20px] p-7 sm:p-9"
            style={{
              background: "var(--cream)",
              border: "1px solid var(--gold)",
              boxShadow: "0 22px 55px rgba(7,18,13,0.35)",
            }}
          >
            {/* Sello postal */}
            <div
              className="absolute -top-4 right-6 sm:right-8 grid place-items-center text-center px-3 py-2 rotate-3"
              style={{
                background: "var(--sand-soft)",
                border: "2px dashed var(--gold)",
                borderRadius: "6px",
              }}
            >
              <span
                className="font-serif text-base font-semibold leading-none"
                style={{ color: "var(--green)", letterSpacing: "0.04em" }}
              >
                PÓMA
              </span>
              <span
                className="eyebrow text-[7px] mt-1"
                style={{ color: "var(--terra)" }}
              >
                Tafí · {new Date().getFullYear()}
              </span>
            </div>

            <p
              className="eyebrow text-[12px] mb-2"
              style={{ color: "var(--terra)" }}
            >
              {t("formEyebrow")}
            </p>
            <h3
              className="font-serif text-3xl font-medium mb-7"
              style={{ color: "var(--deepgreen)" }}
            >
              {t("formTitle")}
            </h3>

            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
