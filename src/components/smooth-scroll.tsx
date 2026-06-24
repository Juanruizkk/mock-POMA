"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

// Altura del navbar fijo (top-3/4 + h-16/68px) para que el título de la
// sección no quede tapado al hacer scroll a un ancla.
const NAV_OFFSET = 90;

/**
 * Scroll suave para los enlaces hash de la misma página (#inicio, #quienes,
 * #galeria, #contacto). Usa ScrollToPlugin con un offset por el navbar fijo.
 * Los enlaces a otras páginas (p. ej. /servicios-y-excursiones) navegan normal.
 * Respeta `prefers-reduced-motion`.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scrollToId = (id: string, animate: boolean) => {
      const target = document.querySelector(id);
      if (!target) return;
      gsap.to(window, {
        duration: animate ? 0.9 : 0,
        ease: "power2.inOut",
        scrollTo: { y: id, offsetY: NAV_OFFSET, autoKill: true },
      });
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey)
        return;

      const anchor = (e.target as Element | null)?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const url = new URL(href, window.location.href);
      // Solo enlaces hash de la página actual; el resto navega normal.
      if (url.pathname !== window.location.pathname) return;
      const id = url.hash;
      if (!id || id === "#") return;
      if (!document.querySelector(id)) return;

      // Ganarle al handler de navegación de Next (fase de captura).
      e.preventDefault();
      e.stopPropagation();

      scrollToId(id, !prefersReduced);
      history.pushState(null, "", id);
    };

    document.addEventListener("click", onClick, true);

    // Si llegamos con un hash en la URL (p. ej. desde otra página), acomodamos
    // la posición con el offset del navbar una vez montado.
    if (window.location.hash && document.querySelector(window.location.hash)) {
      const hash = window.location.hash;
      requestAnimationFrame(() => scrollToId(hash, !prefersReduced));
    }

    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
