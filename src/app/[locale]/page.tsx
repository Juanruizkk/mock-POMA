import { ScrollEffects } from "@/components/scroll-effects";
import { Hero } from "@/components/sections/hero";
import { QuienesSomos } from "@/components/sections/quienes-somos";
import { Servicios } from "@/components/sections/servicios";
import { Galeria } from "@/components/sections/galeria";
import { Contacto } from "@/components/sections/contacto";

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--char)" }}>
      <ScrollEffects />
      <Hero />
      <Servicios />
      <Galeria />
      <QuienesSomos />
      <Contacto />
    </div>
  );
}
