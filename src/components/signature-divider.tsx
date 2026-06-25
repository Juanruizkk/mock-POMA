"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LINE_COLOR = "rgba(224,176,85,0.35)";

/**
 * Divisor de firma: una hairline dorada a cada lado de un label central.
 * Al entrar en viewport, las líneas se "dibujan" desde el centro hacia afuera
 * (scaleX 0 → 1) y el label aparece en fade.
 * Respeta `prefers-reduced-motion`; `useGSAP` limpia todo al desmontar.
 */
export function SignatureDivider({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const lines = el.querySelectorAll<HTMLElement>("[data-line]");
      const label = el.querySelector<HTMLElement>("[data-label]");

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
      tl.from(lines, { scaleX: 0, duration: 0.8, ease: "power2.out" }, 0);
      if (label)
        tl.from(label, { opacity: 0, y: 6, duration: 0.5, ease: "power2.out" }, 0.2);
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      <span
        data-line
        className="h-px flex-1 origin-right"
        style={{ background: LINE_COLOR }}
      />
      <span
        data-label
        className="eyebrow text-[11px] whitespace-nowrap"
        style={{ color: "var(--gold-bright)" }}
      >
        {children}
      </span>
      <span
        data-line
        className="h-px flex-1 origin-left"
        style={{ background: LINE_COLOR }}
      />
    </div>
  );
}
