"use client";

import { useEffect } from "react";

/**
 * Drives the homepage scroll animations:
 *  - reveals `.reveal` elements as they enter the viewport (adds `.in`)
 *  - a light parallax on the hero background (`#hero-bg`)
 * Respects `prefers-reduced-motion`.
 */
export function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    if (reduce) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach((el) => observer.observe(el));

    // Failsafe: never leave content permanently hidden.
    const failsafe = window.setTimeout(() => {
      reveals.forEach((el) => el.classList.add("in"));
    }, 2600);

    // Hero parallax.
    const hero = document.getElementById("hero-bg");
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        if (!hero) return;
        const y = Math.min(window.scrollY, window.innerHeight) * 0.18;
        hero.style.transform = `translateY(${y}px)`;
      });
    };
    if (hero) window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      if (hero) window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
