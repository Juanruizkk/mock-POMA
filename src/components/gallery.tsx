"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type GalleryImage = { src: string; alt: string };

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const wheelLock = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length
      ),
    [images.length]
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
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            aria-label={`Abrir foto: ${img.alt}`}
            className="gal-wrap reveal group relative block w-full overflow-hidden rounded-[4px] cursor-zoom-in"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={encodeURI(img.src)}
              alt={img.alt}
              className="gal-img w-full object-cover"
            />
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(22,51,40,0.28)" }}
            >
              <span
                className="grid place-items-center h-12 w-12 rounded-full text-2xl"
                style={{ background: "rgba(250,245,236,0.9)", color: "var(--green)" }}
              >
                <i className="ti ti-arrows-maximize" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div
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
