import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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

export const metadata: Metadata = {
  title: {
    default: "PÓMA Tafí del Valle | Turismo Profesional",
    template: "%s | PÓMA Tafí del Valle",
  },
  description:
    "Experiencias diseñadas por expertos para el viajero estratégico. Naturaleza, aventura y cultura en Tafí del Valle, Tucumán.",
  icons: {
    icon: "/faviconpoma.png",
    shortcut: "/faviconpoma.png",
    apple: "/faviconpoma.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${hankenGrotesk.variable} ${workSans.variable} scroll-smooth`}
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
