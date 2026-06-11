"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const excursiones = [
  {
    img: "/Excursiones/CascadaDeLaCosta.webp",
    title: "Cascadas de la Costa",
    tipo: "Trekking",
    icono: "footprint",
    tag: "Dificultad baja",
    duracion: "3 h 30 min",
    desc: "Un recorrido entre vegetación, agua y paisajes que sorprenden en cada paso. Perfecto para disfrutar en familia y conectar con la naturaleza.",
    badge: "Nuevo",
    badgeColor: "bg-tertiary text-on-tertiary",
  },
  {
    img: "/Excursiones/LaCienaga.webp",
    title: "La Ciénaga",
    tipo: "Trekking",
    icono: "footprint",
    tag: "Alta exigencia · 26 km",
    duracion: "8 horas",
    desc: "Alta montaña, vistas panorámicas únicas, sitios arqueológicos y aire puro. Exigente pero totalmente gratificante.",
    badge: "Épico",
    badgeColor: "bg-primary text-on-primary",
  },
  {
    img: "/Excursiones/ElPelado.webp",
    title: "Cerro El Pelao",
    tipo: "Trekking Nocturno",
    icono: "nights_stay",
    tag: "Experiencia única",
    duracion: "2 h 30 min",
    desc: "Trekking de noche con vista del valle iluminado bajo el cielo estrellado. Tranquilo, emocionante y diferente.",
    badge: "Nocturno",
    badgeColor: "bg-surface-container-highest text-primary",
  },
  {
    img: "/Excursiones/Cafayate.webp",
    title: "Cafayate",
    tipo: "Excursión en Vehículo",
    icono: "directions_car",
    tag: "Valles Calchaquíes",
    duracion: "8 horas",
    desc: "Formaciones únicas, vistas espectaculares y uno de los destinos más emblemáticos del norte. Naturaleza, cultura y gastronomía.",
    badge: "Imperdible",
    badgeColor: "bg-secondary text-on-secondary",
  },
  {
    img: "/Excursiones/RutaCapia.webp",
    title: "Santa María",
    tipo: "Excursión en Vehículo",
    icono: "directions_car",
    tag: "Cultural",
    duracion: "6 horas",
    desc: "Valles Calchaquíes, paisajes y una experiencia artesanal de elaboración de capia. Historia, cultura y sabores en un solo recorrido.",
    badge: "Cultural",
    badgeColor: "bg-tertiary text-on-tertiary",
  },
  {
    img: "/Excursiones/LosSosa.webp",
    title: "Quebrada de Los Sosa",
    tipo: "Excursión en Vehículo",
    icono: "directions_car",
    tag: "Selva Tucumana",
    duracion: "4 horas",
    desc: "Ruta entre la selva tucumana con ríos, avistajes de aves y miradores naturales. Relajada pero llena de postales únicas.",
    badge: null,
    badgeColor: "",
  },
  {
    img: "/Excursiones/vueltaalLago.webp",
    title: "Vuelta al Lago",
    tipo: "Excursión en Vehículo",
    icono: "directions_car",
    tag: "Accesible para todos",
    duracion: "2 h 30 min",
    desc: "Los paisajes más lindos de Tafí del Valle en un paseo relajado. Montañas, agua y tranquilidad para toda la familia.",
    badge: "Familiar",
    badgeColor: "bg-primary-container text-on-primary-container",
  },
];

type Excursion = (typeof excursiones)[number];

export function ExcursionCards() {
  const [lightbox, setLightbox] = useState<Excursion | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        const idx = excursiones.findIndex((x) => x.img === lightbox.img);
        setLightbox(excursiones[(idx + 1) % excursiones.length]);
      }
      if (e.key === "ArrowLeft") {
        const idx = excursiones.findIndex((x) => x.img === lightbox.img);
        setLightbox(excursiones[(idx - 1 + excursiones.length) % excursiones.length]);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const currentIdx = lightbox
    ? excursiones.findIndex((x) => x.img === lightbox.img)
    : -1;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {excursiones.map((exc) => (
          <div
            key={exc.title}
            className="group bg-surface border border-outline-variant overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => setLightbox(exc)}
              className="relative h-56 overflow-hidden block w-full cursor-zoom-in"
              aria-label={`Ver foto de ${exc.title}`}
            >
              <Image
                src={exc.img}
                alt={exc.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {exc.badge && (
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] ${exc.badgeColor}`}
                >
                  {exc.badge}
                </span>
              )}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90">
                <span className="material-symbols-outlined text-[16px]">
                  {exc.icono}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em]">
                  {exc.tipo}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-white text-[40px] drop-shadow-lg">
                  zoom_in
                </span>
              </div>
            </button>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-[var(--font-headline)] text-[20px] text-primary font-semibold mb-2">
                {exc.title}
              </h3>
              <p className="text-[13px] text-secondary leading-relaxed mb-4 flex-1">
                {exc.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                <span className="text-[11px] text-outline font-semibold uppercase tracking-[0.1em]">
                  {exc.tag}
                </span>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span className="text-[12px] font-bold">{exc.duracion}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85"
          onClick={() => setLightbox(null)}
        >
          {/* Cerrar */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(excursiones[(currentIdx - 1 + excursiones.length) % excursiones.length]);
            }}
            className="absolute left-4 text-white/60 hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined text-[48px]">chevron_left</span>
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(excursiones[(currentIdx + 1) % excursiones.length]);
            }}
            className="absolute right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Siguiente"
          >
            <span className="material-symbols-outlined text-[48px]">chevron_right</span>
          </button>

          <div
            className="flex flex-col items-center gap-4 px-16 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2]">
              <Image
                src={lightbox.img}
                alt={lightbox.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <div className="text-center">
              <p className="text-white font-[var(--font-headline)] text-[20px] font-semibold">
                {lightbox.title}
              </p>
              <p className="text-white/60 text-[13px] mt-1">
                {lightbox.tipo} · {lightbox.duracion}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
