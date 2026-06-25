"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Reveal para un retrato: la imagen entra levemente ampliada y se asienta
 * (scale 1.08 → 1) mientras la `figcaption` sube en fade. El conjunto aparece
 * cuando entra en viewport (ScrollTrigger). Renderiza un `<figure>`.
 * Respeta `prefers-reduced-motion`; `useGSAP` limpia todo al desmontar.
 */
export function ImageReveal({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const img = el.querySelector("img");
      const caption = el.querySelector("figcaption");

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
      tl.from(el, { opacity: 0, duration: 0.6, ease: "power2.out" }, 0);
      if (img) tl.from(img, { scale: 1.08, duration: 1.3, ease: "power2.out" }, 0);
      if (caption)
        tl.from(
          caption,
          { y: 18, opacity: 0, duration: 0.7, ease: "power2.out" },
          0.35
        );
    },
    { scope: ref }
  );

  return (
    <figure ref={ref} className={className} style={style}>
      {children}
    </figure>
  );
}
