"use client";

import { useTranslations } from "next-intl";
import { Gallery } from "@/components/gallery";

const images = [
  { src: "/Fotos Excursiones/Foto principal/20230513_174717-EFFECTS.jpg", alt: "Atardecer sobre Tafí del Valle", place: "Tafí del Valle", span: "big" as const },
  { src: "/Fotos Excursiones/Cafayate/Cafayate_Amphitheatre.jpeg", alt: "Anfiteatro de Cafayate", place: "Cafayate" },
  { src: "/Fotos Excursiones/La ciénaga/FB_IMG_1781372173736.jpg", alt: "La Ciénaga", place: "La Ciénaga" },
  { src: "/Fotos Excursiones/Quilmes/ruinas-de-quilmes.jpg", alt: "Ruinas de Quilmes", place: "Quilmes" },
  { src: "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781372102256.jpg", alt: "Cascada Los Alisos", place: "Cascada Los Alisos" },
  { src: "/Fotos Excursiones/Cafayate/baedae04-3529-41ee-a19b-f9d80bc26167.jpeg", alt: "Quebrada de las Conchas, Cafayate", place: "Cafayate" },
  { src: "/Fotos Excursiones/Vuelta nocturna en auto/20240202_203929.jpg", alt: "Vuelta nocturna por el valle", place: "Noche en el valle" },
  { src: "/Fotos Excursiones/Vuelta al lago en auto/ok20112024angostura.jpg", alt: "Dique La Angostura", place: "Dique La Angostura" },
  { src: "/Fotos Excursiones/Cuevas los corrales/20230416_175133.jpg", alt: "Cuevas Los Corrales", place: "Los Corrales" },
  { src: "/Fotos Excursiones/CerroElPelado/57875521Master.jpg", alt: "Cerro El Pelao", place: "Cerro El Pelao" },
  { src: "/Fotos Excursiones/La ciénaga/FB_IMG_1781372210165.jpg", alt: "Cumbres de La Ciénaga", place: "La Ciénaga" },
  { src: "/Fotos Excursiones/Cascada el Rincon/FB_IMG_1781375540390.jpg", alt: "Cascada El Rincón", place: "Cascada El Rincón" },
  { src: "/Fotos Excursiones/Quilmes/DJI_0304_cuqi9u6h_24-06-2025.jpg", alt: "Ruinas de Quilmes desde el aire", place: "Quilmes" },
  { src: "/Fotos Excursiones/LomaLaCruz/FB_IMG_1781372242218.jpg", alt: "Loma La Cruz", place: "Loma La Cruz" },
  { src: "/Fotos Excursiones/Vuelta al valle en auto/Quebrada-del-Portugues-ovejas.jpg", alt: "Quebrada del Portugués", place: "Quebrada del Portugués" },
  { src: "/Fotos Excursiones/CascadaLaCosta/105603040Master.jpg", alt: "Cascada La Costa", place: "Cascada La Costa" },
  { src: "/Fotos Excursiones/Cafayate/102892298Master.jpg", alt: "Valles de Cafayate", place: "Cafayate" },
  { src: "/Fotos Excursiones/Vuelta al valle en auto/foto-museo-menhires1-1020x680.jpg", alt: "Museo de los Menhires", place: "Museo de los Menhires" },
];

export function Galeria() {
  const t = useTranslations("galeria");

  return (
    <section
      id="galeria"
      className="lg:h-screen flex flex-col max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-10"
    >
      <div className="shrink-0 mb-5 lg:mb-6">
        <p className="reveal eyebrow text-[12px] mb-3" style={{ color: "var(--terra)" }}>
          {t("eyebrow")}
        </p>
        <h2
          className="reveal font-serif text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] font-medium"
          style={{ color: "var(--deepgreen)" }}
        >
          {t("h2a")} <span className="italic" style={{ color: "var(--terra)" }}>{t("h2accent")}</span> {t("h2b")}
        </h2>
      </div>
      <div className="flex-1 min-h-0">
        <Gallery images={images} previewCount={5} fit />
      </div>
    </section>
  );
}
