"use client";

import { useTranslations } from "next-intl";
import { InkBleed } from "@/components/ink-bleed";
import { StaggerReveal } from "@/components/stagger-reveal";

export function Hero() {
  const t = useTranslations("hero");
  const tNav = useTranslations("nav");

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ background: "var(--deepgreen)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="hero-bg"
          src={encodeURI("/Fotos Excursiones/Foto principal/20230513_174717-EFFECTS.jpg")}
          alt="Atardecer sobre Tafí del Valle"
          className="absolute inset-x-0 top-[-8%] w-full h-[120%] object-cover will-change-transform"
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,51,40,0.45) 0%, rgba(22,51,40,0.22) 45%, rgba(22,51,40,0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,28,22,0.45) 0%, rgba(15,28,22,0) 62%)",
        }}
      />
      <div className="absolute inset-0 z-10 noise opacity-[0.12] mix-blend-overlay" />

      <div
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="max-w-2xl pt-24 pb-32">
          <p
            className="reveal eyebrow text-[12px] mb-6"
            style={{ color: "#e6c68a" }}
          >
            {t("eyebrow")}
          </p>
          <InkBleed
            as="h1"
            className="font-serif text-white leading-[0.95] tracking-[-0.02em] text-6xl md:text-7xl lg:text-[5.5rem] font-medium"
          >
            {t("h1a")}{" "}
            <span
              className="italic font-normal"
              style={{ color: "#e7b24a" }}
            >
              {t("h1accent")}
            </span>
            <br />
            {t("h1b")}
          </InkBleed>
          <StaggerReveal>
          <p
            className="text-lg md:text-xl mt-7 max-w-xl leading-relaxed"
            style={{ color: "rgba(245,241,236,0.92)" }}
          >
            {t("desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#servicios"
              className="press-btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[13px] eyebrow text-white"
              style={{ background: "var(--green)" }}
            >
              {t("ctaPrimary")} <i className="ti ti-arrow-right text-base" />
            </a>
            <a
              href="#contacto"
              className="press-btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[13px] eyebrow"
              style={{
                background: "rgba(250,245,236,0.14)",
                color: "var(--cream)",
                border: "1.5px solid rgba(250,245,236,0.55)",
                backdropFilter: "blur(4px)",
              }}
            >
              {t("ctaSecondary")}
            </a>
          </div>
          </StaggerReveal>
        </div>
      </div>

      <div className="absolute z-20 bottom-8 left-6 lg:left-10 flex items-center gap-3">
        <span
          className="h-px w-10"
          style={{ background: "var(--gold)" }}
        />
        <span className="eyebrow text-[11px] text-white/80">
          {t("badge")}
        </span>
      </div>
    </section>
  );
}
