"use client";

import {
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * "Ink bleed": el contenido entra desenfocado y a menor escala, y se revela
 * nítido cuando aparece en viewport (ScrollTrigger). Pensado para titulares.
 * Respeta `prefers-reduced-motion`; `useGSAP` limpia todo al desmontar.
 */
export function InkBleed({
  children,
  className,
  style,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(el, {
        filter: "blur(20px)",
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    },
    { scope: ref }
  );

  const Tag = as;
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
