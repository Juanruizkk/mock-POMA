import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ExcursionCards } from "@/components/excursion-cards";
import { StaggerReveal } from "@/components/stagger-reveal";
import { InkBleed } from "@/components/ink-bleed";
import { Reveal } from "@/components/reveal";
import { Contacto } from "@/components/sections/contacto";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const EXCURSION_KEYS = [
  { key: "cascadasCosta", dificultad: "Baja", duracion: "3h 30min" },
  { key: "cienaga", dificultad: "Media", duracion: "8 horas" },
  { key: "pelado", dificultad: "Baja", duracion: "2h 30min" },
  { key: "cafayate", dificultad: null, duracion: "8 horas" },
  { key: "santaMaria", dificultad: null, duracion: "6 horas" },
  { key: "sosa", dificultad: null, duracion: "4 horas" },
  { key: "vueltaLago", dificultad: null, duracion: null },
  { key: "quilmes", dificultad: null, duracion: "6 horas" },
  { key: "lomaCruz", dificultad: "Baja", duracion: "2h 30min" },
  { key: "fuerteViejo", dificultad: "Alta", duracion: "6 horas" },
  { key: "cueva", dificultad: "Baja", duracion: "2h 30min" },
  { key: "casco", dificultad: "Baja", duracion: "1h 30min" },
  { key: "alisos", dificultad: "Media", duracion: "3 horas" },
  { key: "rincon", dificultad: "Media", duracion: "3 horas" },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "serviciosPage.meta" });
  const ogLocale = locale === "es" ? "es_AR" : "en_US";
  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: `${BASE_URL}/${locale}/servicios-y-excursiones`,
      languages: {
        es: `${BASE_URL}/es/servicios-y-excursiones`,
        en: `${BASE_URL}/en/servicios-y-excursiones`,
      },
    },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/${locale}/servicios-y-excursiones`,
      title: t("title"),
      description: t("desc"),
      locale: ogLocale,
      images: [
        {
          url: "/og-servicios.jpg",
          width: 1200,
          height: 630,
          alt: "Excursiones y Trekking en Tafí del Valle — PÓMA",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("desc"),
      images: ["/og-servicios.jpg"],
    },
  };
}

export default async function ServiciosYExcursionesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "serviciosPage" });
  const tExc = await getTranslations({ locale, namespace: "excursiones.items" });

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@graph": EXCURSION_KEYS.map(({ key, dificultad, duracion }) => ({
      "@type": "TouristTrip",
      name: tExc(`${key}.title`),
      description: tExc(`${key}.desc`),
      url: `${BASE_URL}/${locale}/servicios-y-excursiones`,
      touristType: dificultad ? "Trekking" : "Excursión en Vehículo",
      ...(duracion ? { duration: duracion } : {}),
      provider: {
        "@type": "TouristInformationCenter",
        name: "PÓMA Tafí del Valle",
        url: BASE_URL,
      },
      location: {
        "@type": "Place",
        name: "Tafí del Valle",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tafí del Valle",
          addressRegion: "Tucumán",
          addressCountry: "AR",
        },
      },
    })),
  };

  const servicios = [
    {
      icon: "record_voice_over",
      eyebrow: t("svcs.interprete.eyebrow"),
      title: t("svcs.interprete.title"),
      desc: t("svcs.interprete.desc"),
    },
    {
      icon: "airport_shuttle",
      eyebrow: t("svcs.vehiculo.eyebrow"),
      title: t("svcs.vehiculo.title"),
      desc: t("svcs.vehiculo.desc"),
    },
    {
      icon: "star_rate",
      eyebrow: t("svcs.medida.eyebrow"),
      title: t("svcs.medida.title"),
      desc: t("svcs.medida.desc"),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ background: "var(--deepgreen)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imagenservicios.avif"
            alt="Valles Calchaquíes"
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
              {t("hero.eyebrow")}
            </p>

            <InkBleed
              as="h1"
              className="font-serif text-white leading-[0.95] tracking-[-0.02em] text-6xl md:text-7xl lg:text-[5.5rem] font-medium"
            >
              {t("hero.h1a")}{" "}
              <span className="italic font-normal" style={{ color: "#e7b24a" }}>
                {t("hero.h1accent")}
              </span>
              <br />
              {t("hero.h1b")}
            </InkBleed>

            <StaggerReveal>
              <p
                className="text-lg md:text-xl mt-7 max-w-xl leading-relaxed"
                style={{ color: "rgba(245,241,236,0.92)" }}
              >
                {t("hero.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="#excursiones"
                  className="press-btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[13px] eyebrow text-white"
                  style={{ background: "var(--green)" }}
                >
                  {t("hero.ctaPrimary")} <i className="ti ti-arrow-right text-base" />
                </a>
                <a
                  href="https://wa.me/5493812032123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[13px] eyebrow"
                  style={{
                    background: "rgba(250,245,236,0.14)",
                    color: "var(--cream)",
                    border: "1.5px solid rgba(250,245,236,0.55)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {t("hero.ctaSecondary")}
                </a>
              </div>
            </StaggerReveal>
          </div>
        </div>

        <div className="absolute z-20 bottom-8 left-6 lg:left-10 flex items-center gap-3">
          <span className="h-px w-10" style={{ background: "var(--gold)" }} />
          <span className="eyebrow text-[11px] text-white/80">
            {t("hero.badge")}
          </span>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        className="relative overflow-hidden py-10 md:py-16"
        style={{ background: "var(--cream)" }}
      >
        <div className="absolute inset-0 noise opacity-[0.04]" />

        <div className="relative max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="mb-8 md:mb-10 max-w-xl">
            <span
              className="inline-flex items-center gap-2 eyebrow text-[10px] mb-5"
              style={{ color: "var(--terra)" }}
            >
              <span className="material-symbols-outlined text-[14px]">concierge</span>
              {t("svcs.eyebrow")}
            </span>
            <InkBleed
              as="h2"
              className="font-[var(--font-headline)] text-[32px] md:text-[40px] leading-[1.1] font-bold mb-4"
              style={{ color: "var(--deepgreen)" }}
            >
              {t("svcs.h2")}
            </InkBleed>
          </div>

          <div
            className="h-px w-full"
            style={{ background: "rgba(192,138,45,0.18)" }}
          />

          <StaggerReveal y={20}>
            {servicios.map((s, i) => (
              <div key={s.title}>
                <div className="svc-card group flex items-center gap-6 md:gap-10 py-5 md:py-6 px-2 transition-all duration-300 cursor-default">
                  <span
                    className="font-[var(--font-headline)] text-[56px] md:text-[72px] leading-none shrink-0 w-16 md:w-20 select-none"
                    style={{ color: "rgba(192,138,45,0.22)" }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="eyebrow text-[10px] mb-2"
                      style={{ color: "var(--terra)" }}
                    >
                      {s.eyebrow}
                    </p>
                    <h3
                      className="font-[var(--font-headline)] text-[22px] md:text-[28px] font-bold leading-tight mb-2"
                      style={{ color: "var(--deepgreen)" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-[15px] leading-relaxed max-w-lg"
                      style={{ color: "var(--muted)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                  <div
                    className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      border: "1px solid rgba(192,138,45,0.35)",
                      color: "var(--gold)",
                    }}
                  >
                    <span className="material-symbols-outlined text-xl">{s.icon}</span>
                  </div>
                </div>
                <div
                  className="h-px w-full"
                  style={{ background: "rgba(192,138,45,0.18)" }}
                />
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Cards de Excursiones */}
      <section
        id="excursiones"
        className="relative overflow-hidden"
        style={{ background: "var(--sand-soft)" }}
      >
        <div className="absolute inset-0 noise opacity-[0.05]" />

        <div className="relative max-w-[1280px] mx-auto px-5 md:px-16 pt-10 md:pt-14 pb-6 md:pb-8">
          <div className="flex items-center justify-between mb-4">
            <Reveal y={10}>
              <p
                className="eyebrow text-[10px]"
                style={{ color: "var(--terra)" }}
              >
                {t("aventura.eyebrow")}
              </p>
            </Reveal>
            <Reveal y={10}>
              <div className="flex items-baseline gap-1.5">
                <span
                  className="font-[var(--font-headline)] font-black leading-none"
                  style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "rgba(163,79,53,0.18)" }}
                  aria-hidden="true"
                >
                  14
                </span>
                <span
                  className="eyebrow text-[9px]"
                  style={{ color: "var(--terra)", opacity: 0.6 }}
                >
                  {t("aventura.destinos")}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="h-px w-full mb-5" style={{ background: "rgba(192,138,45,0.2)" }} />

          <InkBleed
            as="h2"
            className="font-[var(--font-headline)] font-extrabold leading-[0.92] tracking-tight mb-5"
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              color: "var(--deepgreen)",
            }}
          >
            {t("aventura.h2a")}<br />
            <span
              className="italic font-medium"
              style={{ color: "var(--terra)", WebkitTextStroke: "0px" }}
            >
              {t("aventura.h2accent")}
            </span>
          </InkBleed>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <Reveal y={12} className="max-w-md">
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                {t("aventura.h2b")}
              </p>
            </Reveal>
            <Reveal y={12} className="shrink-0 hidden sm:flex items-center gap-3 pb-1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(192,138,45,0.3)", color: "var(--gold)" }}
              >
                <span className="material-symbols-outlined text-[18px]">explore</span>
              </div>
              <span className="eyebrow text-[9px]" style={{ color: "rgba(192,138,45,0.55)" }}>
                Tafí del Valle<br />Tucumán · Argentina
              </span>
            </Reveal>
          </div>

          <div className="h-px w-full mt-7" style={{ background: "rgba(192,138,45,0.2)" }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-5 md:px-16 pb-16 md:pb-24">
          <ExcursionCards />
        </div>
      </section>

      {/* Políticas de Reserva */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: "var(--deepgreen)" }}
      >
        <div className="absolute inset-0 noise opacity-[0.07]" />
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: "rgba(224,176,85,0.25)" }} />
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "rgba(224,176,85,0.25)" }} />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 font-[var(--font-headline)] font-black leading-none select-none"
          style={{
            fontSize: "clamp(180px, 28vw, 340px)",
            color: "rgba(224,176,85,0.04)",
            letterSpacing: "-0.04em",
          }}
        >
          {t("politicas.stamp")}
        </span>

        <div className="relative max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <Reveal y={24} scale={0.94} className="shrink-0">
              <div
                className="w-44 h-44 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center gap-1"
                style={{
                  border: "1.5px dashed rgba(224,176,85,0.45)",
                  background: "rgba(224,176,85,0.05)",
                  boxShadow: "0 0 60px rgba(224,176,85,0.06) inset",
                }}
              >
                <span
                  className="font-[var(--font-headline)] font-black leading-none"
                  style={{ fontSize: "clamp(40px, 8vw, 56px)", color: "var(--gold-bright)" }}
                >
                  {t("politicas.stamp")}
                </span>
                <span
                  className="eyebrow text-[8px] text-center px-4 leading-snug"
                  style={{ color: "rgba(224,176,85,0.55)" }}
                >
                  {t("politicas.stampLabel")}
                </span>
              </div>
            </Reveal>

            <div className="flex-1 flex flex-col gap-5">
              <p
                className="reveal eyebrow text-[10px]"
                style={{ color: "var(--gold-bright)" }}
              >
                {t("politicas.eyebrow")}
              </p>

              <InkBleed
                as="h2"
                className="font-serif text-[28px] md:text-[38px] font-medium text-white leading-tight"
              >
                {t("politicas.h2a")}{" "}
                <em className="not-italic" style={{ color: "var(--gold-bright)" }}>{t("politicas.h2b")}</em>
              </InkBleed>

              <StaggerReveal y={16}>
                <p className="text-[15px] leading-relaxed max-w-lg mt-4" style={{ color: "rgba(245,241,236,0.65)" }}>
                  {t("politicas.desc")}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href="https://wa.me/5493812032123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-btn inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full eyebrow text-[12px] transition-opacity hover:opacity-90"
                    style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}
                  >
                    <i className="ti ti-brand-whatsapp text-lg" />
                    {t("politicas.ctaWhatsapp")}
                  </a>
                  <a
                    href="tel:+5493812032123"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full eyebrow text-[12px] transition-colors hover:bg-white/5"
                    style={{
                      border: "1px solid rgba(224,176,85,0.3)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    <i className="ti ti-phone text-base" />
                    {t("politicas.ctaPhone")}
                  </a>
                </div>
              </StaggerReveal>
            </div>
          </div>

          <div
            className="mt-12 pt-5 flex items-center gap-4"
            style={{ borderTop: "1px solid rgba(224,176,85,0.12)" }}
          >
            <span className="eyebrow text-[8px]" style={{ color: "rgba(224,176,85,0.35)" }}>
              Poma · Tafí del Valle · Tucumán
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(224,176,85,0.08)" }} />
            <span className="eyebrow text-[8px]" style={{ color: "rgba(224,176,85,0.35)" }}>
              {t("politicas.stampLabel")}
            </span>
          </div>
        </div>
      </section>

      <Contacto />
    </>
  );
}
