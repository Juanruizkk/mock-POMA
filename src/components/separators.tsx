"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const GOLD_LINE = "rgba(224,176,85,0.5)";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ──────────────────────────────────────────────────────────────────────────
 * Opción 1 · Cerros suaves en capas
 * Dos capas de cerros redondeados (sage atrás, verde adelante) con la cresta
 * dorada que se dibuja. Es el "balcón verde" de Tafí, sin el serrucho.
 * ────────────────────────────────────────────────────────────────────────── */
export function SepCerros({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = ref.current;
      if (!svg) return;
      const stroke = svg.querySelector<SVGPathElement>("[data-stroke]");
      if (!stroke || prefersReduced()) return;

      const len = stroke.getTotalLength();
      gsap.set(stroke, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(stroke, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: svg, start: "top 95%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={{ display: "block", width: "100%", height: "clamp(64px, 9vw, 120px)" }}
    >
      <path
        d="M0,120 V70 C120,40 250,42 370,62 C520,88 650,32 800,48 C960,64 1080,36 1240,54 C1340,66 1400,60 1440,56 V120 Z"
        fill="var(--sage)"
        fillOpacity="0.85"
      />
      <path
        d="M0,120 V90 C170,66 310,98 470,86 C650,72 770,100 930,88 C1100,76 1240,98 1440,84 V120 Z"
        fill="var(--green)"
        fillOpacity="0.92"
      />
      <path
        data-stroke
        d="M0,70 C120,40 250,42 370,62 C520,88 650,32 800,48 C960,64 1080,36 1240,54 C1340,66 1400,60 1440,56"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Alternativa · Hairline + rombo central
 * Línea dorada fina que se dibuja desde el centro hacia afuera, con un rombo
 * (unidad de la greca) que aparece en el medio. Máxima sobriedad editorial.
 * ────────────────────────────────────────────────────────────────────────── */
export function SepHairline({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReduced()) return;
      const lines = el.querySelectorAll<HTMLElement>("[data-line]");
      const rombo = el.querySelector<HTMLElement>("[data-rombo]");

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
      tl.from(lines, { scaleX: 0, duration: 0.8, ease: "power2.out" }, 0);
      if (rombo)
        tl.from(
          rombo,
          { opacity: 0, scale: 0, duration: 0.5, ease: "back.out(2)" },
          0.2
        );
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 ${className ?? ""}`}
    >
      <span
        data-line
        className="h-px flex-1 origin-right"
        style={{ background: GOLD_LINE }}
      />
      <span
        data-rombo
        className="block h-2.5 w-2.5 rotate-45 shrink-0"
        style={{ background: "var(--gold-bright)" }}
      />
      <span
        data-line
        className="h-px flex-1 origin-left"
        style={{ background: GOLD_LINE }}
      />
    </div>
  );
}
