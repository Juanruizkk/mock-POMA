"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Revela sus hijos directos uno tras otro (fade + subida) cuando el bloque
 * entra en viewport (ScrollTrigger). Pensado para líneas/párrafos.
 * Respeta `prefers-reduced-motion`; `useGSAP` limpia todo al desmontar.
 */
export function StaggerReveal({
  children,
  className,
  y = 30,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(gsap.utils.toArray<HTMLElement>(el.children), {
        y,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
