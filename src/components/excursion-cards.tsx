"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Dificultad = "Baja" | "Media" | "Alta";

type ExcursionBase = {
  key: string;
  tipoIcono: string;
  dificultad: Dificultad | null;
  duracion: string | null;
  distancia?: string;
  mainImg: string;
  gallery: string[];
};

const DIFF_DOT: Record<Dificultad, string> = {
  Baja: "#6ee7b7",
  Media: "#d97706",
  Alta: "#dc2626",
};

const excursionesBase: ExcursionBase[] = [
  { key: "cascadasCosta", tipoIcono: "footprint", dificultad: "Baja", duracion: "3h 30min", mainImg: "/Excursiones/CascadaDeLaCosta.webp", gallery: ["/Fotos Excursiones/CascadaLaCosta/105603040Master.jpg", "/Fotos Excursiones/CascadaLaCosta/images.jpeg"] },
  { key: "cienaga", tipoIcono: "footprint", dificultad: "Media", duracion: "8 horas", distancia: "26 km", mainImg: "/Excursiones/LaCienaga.webp", gallery: ["/Fotos Excursiones/La ciénaga/FB_IMG_1781372173736.jpg", "/Fotos Excursiones/La ciénaga/FB_IMG_1781372182082.jpg", "/Fotos Excursiones/La ciénaga/FB_IMG_1781372210165.jpg"] },
  { key: "pelado", tipoIcono: "nights_stay", dificultad: "Baja", duracion: "2h 30min", mainImg: "/Excursiones/ElPelado.webp", gallery: ["/Fotos Excursiones/CerroElPelado/16112574.jpg", "/Fotos Excursiones/CerroElPelado/57875521Master.jpg", "/Fotos Excursiones/CerroElPelado/76466906.700x525.jpg"] },
  { key: "cafayate", tipoIcono: "directions_car", dificultad: null, duracion: "8 horas", mainImg: "/Excursiones/Cafayate.webp", gallery: ["/Fotos Excursiones/Cafayate/02-7.jpg", "/Fotos Excursiones/Cafayate/102892298Master.jpg", "/Fotos Excursiones/Cafayate/30139936.jpg", "/Fotos Excursiones/Cafayate/baedae04-3529-41ee-a19b-f9d80bc26167.jpeg", "/Fotos Excursiones/Cafayate/Cafayate_Amphitheatre.jpeg", "/Fotos Excursiones/Cafayate/images (1).jpeg", "/Fotos Excursiones/Cafayate/museo la pachamama  (1)_nruj56oc_24-06-2025.jpg", "/Fotos Excursiones/Cafayate/SRV52BDNOJG6BODWR33UTY5MCU.jpg"] },
  { key: "santaMaria", tipoIcono: "directions_car", dificultad: null, duracion: "6 horas", mainImg: "/Excursiones/RutaCapia.webp", gallery: [] },
  { key: "sosa", tipoIcono: "directions_car", dificultad: null, duracion: "4 horas", mainImg: "/Excursiones/LosSosa.webp", gallery: [] },
  { key: "vueltaLago", tipoIcono: "directions_car", dificultad: null, duracion: null, mainImg: "/Excursiones/vueltaalLago.webp", gallery: ["/Fotos Excursiones/Vuelta al lago en auto/cristo_qdlq8qr2_15-12-2025.jpeg", "/Fotos Excursiones/Vuelta al lago en auto/cristo_r2qt5k8z_15-12-2025.jpg", "/Fotos Excursiones/Vuelta al lago en auto/IMG-20260613-WA0026.jpg", "/Fotos Excursiones/Vuelta al lago en auto/ok20112024angostura.jpg", "/Fotos Excursiones/Vuelta al lago en auto/proliferan-algas-menor-caudal-dique-angostura-1066526-081505.jpg"] },
  { key: "quilmes", tipoIcono: "directions_car", dificultad: null, duracion: "6 horas", mainImg: "/Fotos Excursiones/Quilmes/ruinas-de-quilmes.jpg", gallery: ["/Fotos Excursiones/Quilmes/cristo_qdlq8qr2_15-12-2025.jpeg", "/Fotos Excursiones/Quilmes/DJI_0304_cuqi9u6h_24-06-2025.jpg", "/Fotos Excursiones/Quilmes/images (1).jpeg", "/Fotos Excursiones/Quilmes/museo la pachamama  (1)_nruj56oc_24-06-2025.jpg", "/Fotos Excursiones/Quilmes/ruinas-de-quilmes.jpg", "/Fotos Excursiones/Quilmes/SRV52BDNOJG6BODWR33UTY5MCU.jpg"] },
  { key: "lomaCruz", tipoIcono: "footprint", dificultad: "Baja", duracion: "2h 30min", mainImg: "/Fotos Excursiones/LomaLaCruz/file_000000002304720eb655c6402fda4c69.png", gallery: ["/Fotos Excursiones/LomaLaCruz/FB_IMG_1781372242218.jpg", "/Fotos Excursiones/LomaLaCruz/file_000000002304720eb655c6402fda4c69.png"] },
  { key: "fuerteViejo", tipoIcono: "footprint", dificultad: "Alta", duracion: "6 horas", mainImg: "/Fotos Excursiones/La ciénaga/FB_IMG_1781372173736.jpg", gallery: [] },
  { key: "cueva", tipoIcono: "footprint", dificultad: "Baja", duracion: "2h 30min", mainImg: "/Fotos Excursiones/Cuevas los corrales/20230416_175133.jpg", gallery: ["/Fotos Excursiones/Cuevas los corrales/20230416_175133.jpg"] },
  { key: "casco", tipoIcono: "location_city", dificultad: "Baja", duracion: "1h 30min", mainImg: "/Fotos Excursiones/Casco céntrico caminata/tafi-del-valle-tucumán-la-argentina-92559800.jpg", gallery: ["/Fotos Excursiones/Casco céntrico caminata/tafi-del-valle-tucumán-la-argentina-92559800.jpg"] },
  { key: "alisos", tipoIcono: "footprint", dificultad: "Media", duracion: "3 horas", mainImg: "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781372102256.jpg", gallery: ["/Fotos Excursiones/CascadaLosAlisos/20073826.jpg", "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781372102256.jpg", "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781373575671.jpg", "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781373581524.jpg"] },
  { key: "rincon", tipoIcono: "footprint", dificultad: "Media", duracion: "3 horas", mainImg: "/Fotos Excursiones/Cascada el Rincon/FB_IMG_1781375535235.jpg", gallery: ["/Fotos Excursiones/Cascada el Rincon/FB_IMG_1781375535235.jpg", "/Fotos Excursiones/Cascada el Rincon/FB_IMG_1781375540390.jpg"] },
];

type Filtro = "Todos" | "Vehículo" | "Baja" | "Media" | "Alta";

export function ExcursionCards() {
  const t = useTranslations("excursiones");

  const FILTROS: { label: string; value: Filtro }[] = [
    { label: t("filtros.todos"), value: "Todos" },
    { label: t("filtros.vehiculo"), value: "Vehículo" },
    { label: t("filtros.baja"), value: "Baja" },
    { label: t("filtros.media"), value: "Media" },
    { label: t("filtros.alta"), value: "Alta" },
  ];

  const excursiones = excursionesBase.map((e) => ({
    ...e,
    title: t(`items.${e.key}.title`),
    tipo: t(`items.${e.key}.tipo`),
    desc: t(`items.${e.key}.desc`),
  }));

  type Excursion = (typeof excursiones)[0];

  const [selected, setSelected] = useState<Excursion | null>(null);
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const lbOpen = lbIdx !== null;
  const gallery = selected?.gallery ?? [];

  const overlayRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const dirRef = useRef(1);
  const openedRef = useRef(false);
  const closeRef = useRef<() => void>(() => setLbIdx(null));

  const closeLb = useCallback(() => closeRef.current(), []);
  const nextImg = useCallback(() => {
    dirRef.current = 1;
    setLbIdx((i) => (i === null ? i : (i + 1) % gallery.length));
  }, [gallery.length]);
  const prevImg = useCallback(() => {
    dirRef.current = -1;
    setLbIdx((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);

  useGSAP(
    (_ctx, contextSafe) => {
      if (lbIdx === null) { openedRef.current = false; return; }
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      closeRef.current = contextSafe?.(() => {
        if (reduce || !overlayRef.current) { setLbIdx(null); return; }
        gsap.to(figureRef.current, { opacity: 0, scale: 0.98, duration: 0.25, ease: "power2.in" });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => setLbIdx(null) });
      }) ?? (() => setLbIdx(null));

      if (reduce) { openedRef.current = true; return; }

      if (!openedRef.current) {
        openedRef.current = true;
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.fromTo(figureRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" });
      } else {
        gsap.fromTo(figureRef.current,
          { opacity: 0, x: 40 * dirRef.current },
          { opacity: 1, x: 0, duration: 0.4, ease: "power3.out", overwrite: true }
        );
      }
    },
    { dependencies: [lbIdx], scope: overlayRef }
  );

  const visibles = excursiones.filter((exc) => {
    if (filtro === "Todos") return true;
    if (filtro === "Vehículo") return exc.dificultad === null;
    return exc.dificultad === filtro;
  });

  useEffect(() => {
    if (!selected && !lbOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (lbOpen) {
        if (e.key === "Escape") closeLb();
        else if (e.key === "ArrowRight") nextImg();
        else if (e.key === "ArrowLeft") prevImg();
      } else {
        if (e.key === "Escape") setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, lbOpen, closeLb, nextImg, prevImg]);

  return (
    <>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTROS.map((f) => {
          const active = filtro === f.value;
          const dot = f.value in DIFF_DOT ? DIFF_DOT[f.value as Dificultad] : null;
          return (
            <button
              key={f.value}
              onClick={() => setFiltro(f.value)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-200"
              style={{
                borderRadius: "100px",
                background: active ? "var(--deepgreen)" : "rgba(22,51,40,0.07)",
                border: `1px solid ${active ? "var(--deepgreen)" : "rgba(22,51,40,0.14)"}`,
                color: active ? "var(--cream)" : "var(--muted)",
              }}
            >
              {dot && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: dot, opacity: active ? 1 : 0.7 }} />}
              {f.value === "Vehículo" && <i className="ti ti-car text-[11px]" style={{ opacity: active ? 1 : 0.6 }} />}
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibles.map((exc) => (
          <button
            key={exc.key}
            onClick={() => setSelected(exc)}
            className="group relative overflow-hidden aspect-[3/4] block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
          >
            <Image src={exc.mainImg} alt={exc.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute top-3 left-3">
              {exc.dificultad ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/90" style={{ background: "rgba(6,14,10,0.58)", backdropFilter: "blur(8px)", border: "1px solid rgba(212,175,100,0.22)" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: DIFF_DOT[exc.dificultad] }} />
                  {t(`dificultad.${exc.dificultad}`)}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/80" style={{ background: "rgba(6,14,10,0.58)", backdropFilter: "blur(8px)", border: "1px solid rgba(212,175,100,0.22)" }}>
                  <span className="material-symbols-outlined text-[11px] opacity-70">directions_car</span>
                  {t("vehiculoLabel")}
                </span>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5 text-white/65 mb-1.5">
                <span className="material-symbols-outlined text-[13px]">{exc.tipoIcono}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">{exc.tipo}</span>
                {exc.duracion && (
                  <>
                    <span className="text-white/35">·</span>
                    <span className="text-[10px] font-semibold">{exc.duracion}</span>
                  </>
                )}
              </div>
              <h3 className="font-[var(--font-headline)] text-white text-[19px] font-semibold leading-tight">{exc.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 p-0"
          style={{ background: "rgba(6,14,10,0.9)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full sm:max-w-4xl overflow-hidden flex flex-col md:flex-row shadow-[0_32px_80px_rgba(0,0,0,0.6)] rounded-t-2xl sm:rounded-[6px]"
            style={{ height: "min(92vh, 760px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[200px] shrink-0 md:h-auto md:w-[44%]">
              <Image src={selected.mainImg} alt={selected.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(6,14,10,0.55)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}
                aria-label={t("cerrar")}
              >
                <i className="ti ti-x text-base" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 px-4 md:px-6 py-4 md:py-7">
                <p className="eyebrow text-[9px] mb-1.5" style={{ color: "rgba(224,176,85,0.7)" }}>{selected.tipo}</p>
                <h2 className="font-serif text-white font-medium leading-tight text-xl md:text-[26px]">{selected.title}</h2>
              </div>
            </div>

            <div className="relative flex-1 flex flex-col overflow-hidden" style={{ background: "var(--deepgreen)" }}>
              <div className="absolute inset-0 noise opacity-[0.08] pointer-events-none" />
              <div className="flex-1 overflow-y-auto px-4 md:px-6 pt-4 md:pt-6 pb-3 flex flex-col gap-4 relative">
                <div className="flex flex-wrap gap-1.5 pr-10">
                  {selected.dificultad && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(250,245,236,0.07)", border: "1px solid rgba(250,245,236,0.1)", borderRadius: "100px", color: "rgba(245,241,236,0.7)" }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: DIFF_DOT[selected.dificultad] }} />
                      {t(`dificultad.${selected.dificultad}`)}
                    </span>
                  )}
                  {selected.duracion && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(250,245,236,0.07)", border: "1px solid rgba(250,245,236,0.1)", borderRadius: "100px", color: "rgba(245,241,236,0.7)" }}>
                      <i className="ti ti-clock text-[11px]" />{selected.duracion}
                    </span>
                  )}
                  {selected.distancia && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ background: "rgba(250,245,236,0.07)", border: "1px solid rgba(250,245,236,0.1)", borderRadius: "100px", color: "rgba(245,241,236,0.7)" }}>
                      <i className="ti ti-route text-[11px]" />{selected.distancia}
                    </span>
                  )}
                </div>
                <div className="h-px" style={{ background: "rgba(224,176,85,0.18)" }} />
                <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: "rgba(245,241,236,0.68)" }}>{selected.desc}</p>
                {selected.gallery.length > 0 && (
                  <div>
                    <p className="eyebrow text-[9px] mb-2" style={{ color: "rgba(224,176,85,0.45)" }}>{t("galeria")}</p>
                    <div className="grid grid-cols-4 md:grid-cols-3 gap-1">
                      {selected.gallery.slice(0, 8).map((img, i) => (
                        <button key={img} onClick={() => setLbIdx(i)} className="relative aspect-[4/3] overflow-hidden group/img" style={{ borderRadius: "3px" }} aria-label={t("galeria")}>
                          <img src={encodeURI(img)} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity" style={{ background: "rgba(6,14,10,0.5)" }}>
                            <i className="ti ti-zoom-in text-white text-base" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="shrink-0 px-4 md:px-5 py-3 md:py-4 relative" style={{ borderTop: "1px solid rgba(224,176,85,0.14)" }}>
                <a href="https://wa.me/5493812032123" target="_blank" rel="noopener noreferrer" className="press-btn flex items-center justify-center gap-2.5 w-full py-3.5 eyebrow text-[11px] rounded-full transition-opacity hover:opacity-90" style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}>
                  <i className="ti ti-brand-whatsapp text-base" />
                  {t("whatsappCta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lbOpen && (
        <div ref={overlayRef} className="fixed inset-0 z-[200] flex items-center justify-center" style={{ background: "rgba(6,14,10,0.94)" }} onClick={closeLb}>
          <button onClick={closeLb} aria-label={t("cerrar")} className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full text-2xl text-white/80 hover:text-white transition-colors" style={{ background: "rgba(250,245,236,0.08)" }}>
            <i className="ti ti-x" />
          </button>
          {gallery.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prevImg(); }} aria-label={t("anterior")} className="absolute left-4 sm:left-6 z-10 grid place-items-center h-14 w-14 rounded-full text-2xl text-white/80 hover:text-white transition-colors" style={{ background: "rgba(250,245,236,0.08)" }}>
                <i className="ti ti-chevron-left" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextImg(); }} aria-label={t("siguiente")} className="absolute right-4 sm:right-6 z-10 grid place-items-center h-14 w-14 rounded-full text-2xl text-white/80 hover:text-white transition-colors" style={{ background: "rgba(250,245,236,0.08)" }}>
                <i className="ti ti-chevron-right" />
              </button>
            </>
          )}
          <figure ref={figureRef} className="flex flex-col items-center gap-3 px-16 sm:px-24 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={encodeURI(gallery[lbIdx!])} alt="" className="max-h-[80vh] w-auto max-w-full object-contain" />
            {gallery.length > 1 && <p className="eyebrow text-[11px] text-white/45">{lbIdx! + 1} / {gallery.length}</p>}
          </figure>
        </div>
      )}
    </>
  );
}
