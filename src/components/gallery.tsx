"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type GallerySpan = "big" | "tall" | "wide" | "normal";
type GalleryImage = {
  src: string;
  alt: string;
  place?: string;
  span?: GallerySpan;
};

const spanClass: Record<GallerySpan, string> = {
  big: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export function Gallery({
  images,
  previewCount,
  fit,
}: {
  images: GalleryImage[];
  previewCount?: number;
  fit?: boolean;
}) {
  const visible =
    previewCount && previewCount < images.length
      ? images.slice(0, previewCount)
      : images;
  const hidden = images.length - visible.length;
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const wheelLock = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  // Visor (lightbox): refs y estado para las transiciones GSAP.
  const overlayRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const dirRef = useRef(1); // 1 = siguiente, -1 = anterior
  const openedRef = useRef(false); // distingue apertura vs. cambio de foto
  const closeRef = useRef<() => void>(() => setIndex(null));

  // Animación de la grilla con GSAP: entrada escalonada + micro-parallax.
  // Reemplaza el `.reveal` CSS solo para los tiles. Respeta reduced-motion y
  // atenúa el parallax en móvil. `useGSAP` revierte todo al desmontar.
  useGSAP(
    () => {
      const tiles = gsap.utils.toArray<HTMLElement>(".gal-wrap", gridRef.current);
      if (!tiles.length) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          desktop:
            "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
          mobile:
            "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { reduce, desktop } = ctx.conditions as {
            reduce: boolean;
            desktop: boolean;
            mobile: boolean;
          };
          if (reduce) return;

          // Entrada escalonada (fade + leve scale) al entrar la grilla.
          // No tocamos `y` acá: ese eje queda reservado para el parallax.
          gsap.from(tiles, {
            opacity: 0,
            scale: 0.98,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
          });

          // Micro-parallax: cada tile deriva con una amplitud algo distinta
          // (los más profundos se mueven más) para dar sensación de capas.
          const amp = desktop ? 10 : 4;
          tiles.forEach((tile, i) => {
            const depth = 0.6 + (i % 3) * 0.2; // 0.6 / 0.8 / 1.0
            const d = amp * depth;
            gsap.fromTo(
              tile,
              { y: d },
              {
                y: -d,
                ease: "none",
                scrollTrigger: {
                  trigger: gridRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          });
        }
      );
    },
    { scope: gridRef }
  );

  // El cierre dispara la animación de salida (definida en el useGSAP de abajo)
  // y recién al terminar hace setIndex(null). closeRef se reasigna en cada
  // apertura con la versión animada / o instantánea bajo reduced-motion.
  const close = useCallback(() => closeRef.current(), []);
  const next = useCallback(() => {
    dirRef.current = 1;
    setIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);
  const prev = useCallback(() => {
    dirRef.current = -1;
    setIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Transiciones del visor: apertura (fade del fondo + fade/scale de la figura),
  // cambio de foto (crossfade + slide direccional) y cierre (fade-out diferido).
  // Respeta prefers-reduced-motion. Cleanup automático vía useGSAP.
  useGSAP(
    (_context, contextSafe) => {
      if (index === null) {
        openedRef.current = false;
        return;
      }
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Función de cierre, segura de contexto: anima la salida y desmonta.
      closeRef.current =
        contextSafe?.(() => {
          if (reduce || !overlayRef.current) {
            setIndex(null);
            return;
          }
          gsap.to(figureRef.current, {
            opacity: 0,
            scale: 0.98,
            duration: 0.25,
            ease: "power2.in",
          });
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setIndex(null),
          });
        }) ?? (() => setIndex(null));

      if (reduce) {
        openedRef.current = true;
        return;
      }

      if (!openedRef.current) {
        // Apertura.
        openedRef.current = true;
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          figureRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
        );
      } else {
        // Cambio de foto: la nueva entra con fade + slide en el sentido del gesto.
        gsap.fromTo(
          figureRef.current,
          { opacity: 0, x: 40 * dirRef.current },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power3.out",
            overwrite: true,
          }
        );
      }
    },
    { dependencies: [index], scope: overlayRef }
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  const onWheel = (e: React.WheelEvent) => {
    if (wheelLock.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 8) return;
    wheelLock.current = true;
    if (delta > 0) next();
    else prev();
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 350);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <>
      <div className={fit ? "flex flex-col h-full min-h-0" : ""}>
      <div
        ref={gridRef}
        className={
          fit
            ? "grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-auto lg:grid-rows-2 gap-3 grid-flow-row-dense lg:h-full lg:min-h-0"
            : "grid grid-cols-2 auto-rows-[160px] sm:auto-rows-[220px] lg:auto-rows-[260px] gap-3 grid-flow-row-dense"
        }
      >
        {visible.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            aria-label={`Abrir foto: ${img.alt}`}
            className={`gal-wrap group relative block overflow-hidden rounded-[6px] cursor-zoom-in ${
              spanClass[img.span ?? "normal"]
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={encodeURI(img.src)}
              alt={img.alt}
              className="gal-img h-full w-full object-cover"
            />
            <span
              className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,51,40,0) 35%, rgba(22,51,40,0.72) 100%)",
              }}
            />
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span
                className="grid place-items-center h-11 w-11 rounded-full text-xl"
                style={{ background: "rgba(250,245,236,0.92)", color: "var(--green)" }}
              >
                <i className="ti ti-arrows-maximize" />
              </span>
            </span>
            {img.place && (
              <span className="pointer-events-none absolute bottom-0 left-0 p-3 lg:p-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span
                  className="flex items-center gap-1.5 eyebrow text-[10px] text-white"
                >
                  <span style={{ color: "var(--gold-bright)" }}>◈</span>
                  {img.place}
                </span>
              </span>
            )}
          </button>
        ))}
      </div>

      {hidden > 0 && (
        <div
          className={
            fit
              ? "shrink-0 mt-4 flex items-center justify-center gap-3"
              : "reveal mt-7 flex flex-col items-center gap-2"
          }
        >
          <button
            onClick={() => setIndex(0)}
            className="press-btn inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-[12px] eyebrow text-white"
            style={{ background: "var(--green)" }}
          >
            <i className="ti ti-photo text-base" /> Ver las {images.length} fotos
          </button>
          <p className="eyebrow text-[10px]" style={{ color: "var(--muted)" }}>
            +{hidden} fotos más
          </p>
        </div>
      )}
      </div>

      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(15,28,22,0.94)" }}
          onClick={close}
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full text-2xl text-white/80 hover:text-white transition-colors"
            style={{ background: "rgba(250,245,236,0.08)" }}
          >
            <i className="ti ti-x" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
            className="absolute left-3 sm:left-6 grid place-items-center h-12 w-12 rounded-full text-2xl text-white/80 hover:text-white transition-colors"
            style={{ background: "rgba(250,245,236,0.08)" }}
          >
            <i className="ti ti-chevron-left" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
            className="absolute right-3 sm:right-6 grid place-items-center h-12 w-12 rounded-full text-2xl text-white/80 hover:text-white transition-colors"
            style={{ background: "rgba(250,245,236,0.08)" }}
          >
            <i className="ti ti-chevron-right" />
          </button>

          <figure
            ref={figureRef}
            className="flex flex-col items-center gap-4 px-14 sm:px-20 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={encodeURI(images[index].src)}
              alt={images[index].alt}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-[4px]"
            />
            <figcaption className="text-center">
              <p className="text-white text-[15px]">{images[index].alt}</p>
              <p className="eyebrow text-[11px] mt-1 text-white/50">
                {index + 1} / {images.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
