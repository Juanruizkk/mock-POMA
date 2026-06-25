"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { InkBleed } from "@/components/ink-bleed";
import { StaggerReveal } from "@/components/stagger-reveal";
import { ImageReveal } from "@/components/image-reveal";
import { SignatureDivider } from "@/components/signature-divider";

export function QuienesSomos() {
  const t = useTranslations("quienes");

  const personas = [
    {
      icon: "ti-car",
      name: "Sergio",
      role: t("sergio.role"),
      desc: t("sergio.desc"),
      cta: t("sergio.cta"),
    },
    {
      icon: "ti-mountain",
      name: "Naty",
      role: t("naty.role"),
      desc: t("naty.desc"),
      cta: t("naty.cta"),
    },
  ];

  return (
    <section
      id="quienes"
      className="relative overflow-hidden"
      style={{ background: "var(--deepgreen)" }}
    >
      <div className="absolute inset-0 noise opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-x-14 gap-y-8 items-end">
          <div>
            <p
              className="reveal eyebrow text-[12px] mb-5"
              style={{ color: "var(--gold-bright)" }}
            >
              {t("eyebrow")}
            </p>
            <InkBleed
              as="h2"
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.02em] font-medium text-white"
            >
              {t("h2a")}
              <br />
              <span className="italic font-normal" style={{ color: "var(--gold-bright)" }}>
                {t("h2accent")}
              </span>
              ,<br />
              {t("h2b")}
            </InkBleed>
          </div>
          <StaggerReveal className="space-y-4">
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(245,241,236,0.82)" }}>
              {t.rich("p1", {
                b: (chunks) => <span className="text-white font-semibold">{chunks}</span>,
              })}
            </p>
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(245,241,236,0.82)" }}>
              {t("p2")}
            </p>
          </StaggerReveal>
        </div>

        <SignatureDivider className="flex items-center gap-5 my-12 lg:my-16">
          {t("divider")}
        </SignatureDivider>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 items-stretch">
          <ImageReveal
            className="relative rounded-2xl overflow-hidden min-h-[340px] lg:min-h-full"
            style={{ border: "1px solid rgba(224,176,85,0.4)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Fotos Excursiones/fotos-nosotros.jpeg"
              alt="Sergio y Naty, fundadores de PÓMA"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,51,40,0) 45%, rgba(22,51,40,0.9) 100%)",
              }}
            />
            <figcaption className="absolute bottom-0 left-0 p-5 lg:p-6">
              <span className="block eyebrow text-[10px]" style={{ color: "var(--gold-bright)" }}>
                {t("caption")}
              </span>
              <span className="block font-serif text-2xl text-white font-medium mt-1">
                Sergio &amp; Naty
              </span>
            </figcaption>
          </ImageReveal>

          <StaggerReveal className="flex flex-col">
            {personas.map((p, i) => (
              <Link
                key={p.name}
                href="/servicios-y-excursiones"
                className="group flex-1 flex items-start gap-5 py-7 lg:py-8 transition-colors"
                style={
                  i === 1
                    ? { borderTop: "1px solid rgba(224,176,85,0.25)" }
                    : undefined
                }
              >
                <span
                  className="grid place-items-center h-14 w-14 rounded-full text-2xl shrink-0"
                  style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}
                >
                  <i className={`ti ${p.icon}`} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow text-[10px]" style={{ color: "var(--gold-bright)" }}>
                    {p.role}
                  </p>
                  <p className="font-serif text-2xl lg:text-3xl text-white font-medium mt-1">
                    {p.name}
                  </p>
                  <p
                    className="mt-2 text-[15px] leading-relaxed max-w-md"
                    style={{ color: "rgba(245,241,236,0.7)" }}
                  >
                    {p.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[12px] eyebrow text-white/90">
                    {p.cta}
                    <i className="ti ti-arrow-right transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
