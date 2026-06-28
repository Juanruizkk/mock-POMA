import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "PÓMA Tafí del Valle | Turismo Profesional",
    template: "%s | PÓMA Tafí del Valle",
  },
  description:
    "Experiencias diseñadas por expertos para el viajero estratégico. Naturaleza, aventura y cultura en Tafí del Valle, Tucumán.",
  icons: {
    icon: [
      { url: "/logopoma.ico", type: "image/x-icon" },
      { url: "/faviconpoma.png", type: "image/png" },
    ],
    shortcut: "/logopoma.ico",
    apple: "/faviconpoma.png",
  },
  openGraph: {
    type: "website",
    siteName: "PÓMA Tafí del Valle",
    title: "PÓMA Tafí del Valle | Turismo Profesional",
    description:
      "Excursiones y trekking guiados en Tafí del Valle. Naturaleza, aventura y cultura en los Valles Calchaquíes, Tucumán, Argentina.",
    locale: "es_AR",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "PÓMA Tafí del Valle — Excursiones en los Valles Calchaquíes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PÓMA Tafí del Valle | Turismo Profesional",
    description:
      "Excursiones y trekking guiados en Tafí del Valle, Tucumán, Argentina.",
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true, "max-snippet": 160, "max-image-preview": "large" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${hankenGrotesk.variable} ${workSans.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont/tabler-icons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-primary-fixed-dim/30 selection:text-primary">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
