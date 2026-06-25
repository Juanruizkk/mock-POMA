"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { InkBleed } from "@/components/ink-bleed";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Servicios() {
  const t = useTranslations("servicios");
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".svc-card", {
          opacity: 0,
          y: 24,
          scale: 0.985,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".svc-grid",
            start: "top 78%",
            once: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".svc-card img").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest(".svc-card"),
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        gsap.from(".svc-pledge", {
          opacity: 0,
          x: 28,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".svc-pledge",
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p
            className="reveal eyebrow text-[12px] mb-4"
            style={{ color: "var(--terra)" }}
          >
            {t("eyebrow")}
          </p>
          <InkBleed
            as="h2"
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.02em] font-medium"
            style={{ color: "var(--deepgreen)" }}
          >
            {t("h2a")}
            <br />
            {t("h2b")}
          </InkBleed>
        </div>
        <p
          className="reveal max-w-sm text-[16px] leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {t("desc")}
        </p>
      </div>

      <div className="svc-grid grid lg:grid-cols-12 gap-5">
        <Link
          href="/servicios-y-excursiones"
          className="svc-card group relative lg:col-span-7 rounded-2xl overflow-hidden min-h-[420px] block"
          style={{ border: "1px solid var(--sand)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Fotos Excursiones/imagen-vehiculo.png"
            alt="Recorrido en vehículo por el valle"
            className="absolute inset-x-0 top-[-8%] w-full h-[116%] object-cover object-top will-change-transform"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(22,51,40,0.10) 0%, rgba(22,51,40,0.45) 55%, rgba(22,51,40,0.92) 100%)",
            }}
          />
          <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
            <span
              className="grid place-items-center h-12 w-12 rounded-full text-2xl mb-auto"
              style={{
                background: "rgba(250,245,236,0.16)",
                color: "var(--cream)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(250,245,236,0.3)",
              }}
            >
              <i className="ti ti-car" />
            </span>
            <p className="eyebrow text-[11px] mb-3" style={{ color: "var(--apricot)" }}>
              {t("vehiculo.eyebrow")}
            </p>
            <h3 className="font-serif text-3xl lg:text-4xl text-white font-medium leading-tight">
              {t("vehiculo.title")}
            </h3>
            <p className="text-white/85 mt-3 max-w-md leading-relaxed">
              {t("vehiculo.desc")}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-[12px] eyebrow text-white/90">
              {t("vehiculo.cta")} <i className="ti ti-arrow-right" />
            </span>
            <span className="svc-underline block h-[2.5px] mt-3" style={{ background: "var(--gold)" }} />
          </div>
        </Link>

        <Link
          href="/servicios-y-excursiones"
          className="svc-card group relative lg:col-span-5 rounded-2xl overflow-hidden min-h-[420px] block"
          style={{ border: "1px solid var(--sand)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/expedicionesimagen.webp"
            alt="Trekking guiado por Naty"
            className="absolute inset-x-0 top-[-8%] w-full h-[116%] object-cover will-change-transform"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(181,86,58,0.10) 0%, rgba(22,51,40,0.40) 50%, rgba(22,51,40,0.93) 100%)",
            }}
          />
          <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
            <span
              className="grid place-items-center h-12 w-12 rounded-full text-2xl mb-auto"
              style={{
                background: "rgba(250,245,236,0.16)",
                color: "var(--cream)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(250,245,236,0.3)",
              }}
            >
              <i className="ti ti-mountain" />
            </span>
            <p className="eyebrow text-[11px] mb-3" style={{ color: "var(--apricot)" }}>
              {t("trekking.eyebrow")}
            </p>
            <h3 className="font-serif text-3xl lg:text-4xl text-white font-medium leading-tight">
              {t("trekking.title")}
            </h3>
            <p className="text-white/85 mt-3 max-w-xs leading-relaxed">
              {t("trekking.desc")}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-[12px] eyebrow text-white/90">
              {t("trekking.cta")} <i className="ti ti-arrow-right" />
            </span>
            <span className="svc-underline block h-[2.5px] mt-3" style={{ background: "var(--gold)" }} />
          </div>
        </Link>
      </div>

      <div className="reveal mt-8 flex justify-center">
        <Link
          href="/servicios-y-excursiones"
          className="press-btn inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[13px] eyebrow text-white"
          style={{ background: "var(--green)" }}
        >
          {t("ctaTodos")} <i className="ti ti-arrow-right text-base" />
        </Link>
      </div>

      <div
        className="svc-pledge mt-5 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{ background: "var(--green)" }}
      >
        <span
          className="grid place-items-center h-11 w-11 rounded-full text-xl shrink-0"
          style={{ background: "rgba(192,138,45,0.25)", color: "var(--gold-bright)" }}
        >
          <i className="ti ti-leaf" />
        </span>
        <div className="flex-1">
          <p className="font-serif text-xl text-white font-medium">{t("pledge.title")}</p>
          <p className="text-white/70 text-[15px] mt-1">{t("pledge.desc")}</p>
        </div>
        <span className="eyebrow text-[11px]" style={{ color: "var(--gold-bright)" }}>
          {t("pledge.badge")}
        </span>
      </div>
    </section>
  );
}
