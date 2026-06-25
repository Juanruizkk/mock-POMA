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
 * Reveal genérico (equivalente GSAP del `.reveal` CSS): el elemento entra con
 * fade + subida y, opcionalmente, un leve scale de asentamiento. Disparado por
 * ScrollTrigger al entrar en viewport. Polimórfico vía `as`.
 * Respeta `prefers-reduced-motion`; `useGSAP` limpia todo al desmontar.
 */
export function Reveal({
  children,
  className,
  style,
  as = "div",
  y = 28,
  scale,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  y?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(el, {
        y,
        opacity: 0,
        ...(scale !== undefined ? { scale } : {}),
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
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
