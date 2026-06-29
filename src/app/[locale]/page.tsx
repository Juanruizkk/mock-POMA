import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ScrollEffects } from "@/components/scroll-effects";
import { Hero } from "@/components/sections/hero";
import { QuienesSomos } from "@/components/sections/quienes-somos";
import { Servicios } from "@/components/sections/servicios";
import { Galeria } from "@/components/sections/galeria";
import { Contacto } from "@/components/sections/contacto";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "homePage.meta" });

  const ogLocale = locale === "es" ? "es_AR" : "en_US";

  return {
    title: { absolute: t("title") },
    description: t("desc"),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        es: `${BASE_URL}/es`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/${locale}`,
      title: t("title"),
      description: t("desc"),
      locale: ogLocale,
      images: [
        {
          url: "/og-home.jpg",
          width: 1200,
          height: 630,
          alt: "PÓMA Tafí del Valle — Excursiones y Trekking en los Valles Calchaquíes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("desc"),
      images: ["/og-home.jpg"],
    },
  };
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  name: "PÓMA Tafí del Valle",
  description:
    "Agencia familiar de turismo en Tafí del Valle. Excursiones guiadas, trekking y caminatas por los Valles Calchaquíes con Sergio y Naty.",
  url: BASE_URL,
  telephone: "+54-9-381-203-2123",
  email: "poma.tafidelvalle@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tafí del Valle",
    addressRegion: "Tucumán",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.8567,
    longitude: -65.7069,
  },
  sameAs: [
    "https://www.instagram.com/poma_tafidelvalle/",
    "https://www.facebook.com/share/1B2cZY2wr3/",
    "https://www.tiktok.com/@pma.taf.del.valle",
  ],
  priceRange: "$$",
  currenciesAccepted: "ARS",
  areaServed: {
    "@type": "State",
    name: "Tucumán",
    addressCountry: "AR",
  },
  founder: [
    { "@type": "Person", name: "Sergio", jobTitle: "Guía de Turismo" },
    { "@type": "Person", name: "Naty", jobTitle: "Guía de Montaña" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué excursiones ofrecen desde Tafí del Valle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos 14 excursiones y caminatas: trekking a cascadas (Cascadas de la Costa, Los Alisos, El Rincón), ascenso a cerros (El Pelado, Loma La Cruz, Fuerte Viejo), recorridos históricos (Casco Céntrico, Cueva Los Corrales) y excursiones en vehículo a Cafayate, Quilmes, Santa María, La Ciénaga y más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo reservo una excursión con PÓMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podés reservar por WhatsApp al +54 9 381 203-2123 o completando el formulario de contacto en nuestro sitio. Trabajamos con seña del 50% para confirmar tu lugar; el saldo se abona el día de la excursión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el precio de las excursiones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todas las excursiones incluyen guía local (Sergio o Naty), explicaciones históricas y culturales del valle, y el acompañamiento personalizado. Las excursiones en vehículo incluyen traslado. El almuerzo no está incluido salvo indicación específica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si la excursión se cancela por mal tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En caso de cancelación por condiciones climáticas adversas, ofrecemos reprogramar la excursión sin costo adicional o el reembolso completo de la seña. La seguridad de los pasajeros es siempre la prioridad.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué idiomas guían las excursiones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guiamos en español e inglés. Naty y Sergio son técnicos en turismo y ofrecen acompañamiento bilingüe para que cada relato histórico y cultural llegue con total claridad.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--char)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollEffects />
      <Hero />
      <Servicios />
      <Galeria />
      <QuienesSomos />
      <Contacto />
    </div>
  );
}
