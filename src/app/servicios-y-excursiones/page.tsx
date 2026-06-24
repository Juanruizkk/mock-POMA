import type { Metadata } from "next";
import Image from "next/image";
import { ExcursionCards } from "@/components/excursion-cards";

export const metadata: Metadata = {
  title: "Servicios y Excursiones",
  description:
    "Servicio de interprete, salidas en vehiculo y excursiones a pie por Tafi del Valle y los Valles Calchaquies.",
};

const servicios = [
  {
    icon: "record_voice_over",
    title: "Servicio de Interprete",
    desc: "Acompanamiento bilingue (espanol / ingles) para que cada relato historico y cultural del valle llegue con total claridad.",
  },
  {
    icon: "airport_shuttle",
    title: "Salidas en Vehiculo",
    desc: "Movilidad segura y confortable para grupos y pasajeros individuales, con unidades equipadas y conductores que conocen cada camino.",
  },
  {
    icon: "star_rate",
    title: "Experiencias a Medida",
    desc: "Disenamos itinerarios segun tus intereses: desde catas privadas en bodegas de altura hasta picnics en valles virgenes.",
  },
];

export default function ServiciosYExcursionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[550px] md:h-[750px] flex items-center overflow-hidden">
        <div className="absolute inset-0 premium-gradient z-10" />
        <div className="absolute inset-0">
          <Image
            src="/imagenservicios.avif"
            alt="Valles Calchaquies"
            fill
            className="object-cover scale-105"
            priority
          />
        </div>
        <div className="relative z-20 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-10">
            <span className="material-symbols-outlined text-white text-[18px]">
              verified
            </span>
            <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">
              Todo lo que ofrecemos
            </span>
          </div>
          <h1 className="font-[var(--font-headline)] text-[36px] md:text-[72px] text-white leading-[1] max-w-4xl mb-8 font-extrabold drop-shadow-2xl">
            Servicios <br className="hidden md:block" /> y Excursiones
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed font-light">
            Servicio de interprete, salidas en vehiculo y excursiones a pie:
            todo el valle, en un solo lugar.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        className="py-16 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto"
      >
        <div className="mb-12 md:mb-16 max-w-xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container text-[12px] uppercase tracking-[0.2em] mb-4 border border-outline-variant font-semibold">
            <span className="material-symbols-outlined text-[16px]">
              concierge
            </span>
            Nuestros Servicios
          </span>
          <h2 className="font-[var(--font-headline)] text-[32px] leading-[40px] text-primary mb-4 font-bold">
            Como te acompanamos
          </h2>
          <p className="text-secondary">
            Antes, durante y despues de cada salida: lo esencial para que tu
            visita al valle sea simple y memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="bg-surface-container-low rounded-3xl p-8 md:p-10 border border-outline/5 flex flex-col items-start hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-white text-2xl">
                  {s.icon}
                </span>
              </div>
              <h3 className="font-[var(--font-headline)] text-2xl text-primary mb-4 font-semibold">
                {s.title}
              </h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed flex-1">
                {s.desc}
              </p>
              <a
                href="/#contacto"
                className="text-primary font-bold text-sm uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-all"
              >
                Consultar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Cards de Excursiones */}
      <section
        id="excursiones"
        className="py-16 md:py-24 max-w-[1280px] mx-auto px-5 md:px-16"
      >
        <div className="mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container text-[12px] uppercase tracking-[0.2em] mb-4 border border-outline-variant font-semibold">
            <span className="material-symbols-outlined text-[16px]">explore</span>
            Todas las Excursiones
          </span>
          <h2 className="font-[var(--font-headline)] text-[32px] leading-[40px] text-primary mb-4 font-bold">
            Elegí tu Aventura
          </h2>
          <p className="text-secondary max-w-xl">
            Desde caminatas familiares hasta expediciones de jornada completa —
            cada salida está guiada por expertos locales.
          </p>
        </div>

        <ExcursionCards />
      </section>

      {/* Travesias a Pie */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-[var(--font-headline)] text-[32px] leading-[40px] text-primary mb-4 font-bold">
              Travesias a Pie
            </h2>
            <p className="text-secondary">
              Rutas disenadas para conectar con la naturaleza virgen de Tucuman,
              desde ascensos recreativos hasta desafios de jornada completa.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 text-[12px] text-outline font-semibold">
              <span className="material-symbols-outlined text-[18px]">
                footprint
              </span>{" "}
              Trekkings
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Baja Intensidad */}
          <div className="md:col-span-4 bg-surface-container-low p-8 md:p-10 border border-tertiary-fixed-dim bento-card flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full mb-8">
                <span className="material-symbols-outlined text-white">
                  hiking
                </span>
              </div>
              <h3 className="font-[var(--font-headline)] text-[24px] text-primary mb-2 uppercase tracking-wide font-semibold">
                Baja Intensidad
              </h3>
              <p className="text-secondary mb-8">
                Ideal para familias y contemplacion.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-outline-variant pb-2">
                  <span className="font-semibold text-primary">
                    Loma La Cruz
                  </span>
                  <span className="text-[12px] text-secondary font-semibold">
                    3 horas
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-outline-variant pb-2">
                  <span className="font-semibold text-primary">
                    Cerro El Pelado
                  </span>
                  <span className="text-[12px] text-secondary font-semibold">
                    3 horas
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Image */}
          <div className="md:col-span-8 group relative overflow-hidden h-[300px] md:h-[400px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF-Syyd9s-pCaHLHK2kUiFBiNAh7ZCxyQX8LetPHFfxhpDCeq2XVNur2XtQ-9lKWRFo0hT9HEa6POkU4rBMw9fXWpuKgJwJERbC5qSW9XGBPFcOBZDJCm92mkGXOIo04M3xXyHyiiZ_wEgf74aQbIhVUHeauIuhFtmruSZuU1Z1Sf8-I2xoFpjdyZ1WtWT2kYmu5hr0fXNNXfZ5mU9evEPuzi4XYid1a1v8PKzo_fl568MaE8XzIGoOcw3JWkFKwCc2Ih-4vU_oC0"
              alt="Vistas Panoramicas de la Villa"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-[12px] uppercase tracking-widest mb-2 font-semibold">
                Destacado
              </p>
              <h4 className="font-[var(--font-headline)] text-[24px] font-semibold">
                Vistas Panoramicas de la Villa
              </h4>
            </div>
          </div>

          {/* Media Intensidad */}
          <div className="md:col-span-7 bg-surface-container-high p-8 md:p-10 border border-tertiary-fixed-dim bento-card min-h-[300px]">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full mb-8">
              <span className="material-symbols-outlined text-white">
                water_drop
              </span>
            </div>
            <h3 className="font-[var(--font-headline)] text-[24px] text-primary mb-2 uppercase tracking-wide font-semibold">
              Media Intensidad
            </h3>
            <p className="text-secondary mb-10">
              Rutas hacia los tesoros hidricos del valle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-surface-container-lowest border border-outline-variant">
                <p className="font-semibold text-primary mb-1">
                  Cascada Los Alisos
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-[18px]">
                    schedule
                  </span>
                  <span className="text-[12px] font-semibold">3 horas</span>
                </div>
              </div>
              <div className="p-6 bg-surface-container-lowest border border-outline-variant">
                <p className="font-semibold text-primary mb-1">
                  Cascada la Costa
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-[18px]">
                    schedule
                  </span>
                  <span className="text-[12px] font-semibold">3 horas</span>
                </div>
              </div>
            </div>
          </div>

          {/* La Cienaga */}
          <div className="md:col-span-5 bg-primary p-8 md:p-10 bento-card text-on-primary flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="inline-block px-3 py-1 border border-on-primary/30 text-[12px] uppercase mb-6 font-semibold tracking-[0.05em]">
                Desafio Epico
              </div>
              <h3 className="font-[var(--font-headline)] text-[24px] mb-4 uppercase tracking-wide font-semibold">
                La Cienaga
              </h3>
              <p className="text-on-primary/80 mb-8 leading-relaxed">
                Una travesia tecnica de jornada completa para aventureros
                experimentados. Un viaje al silencio de las cumbres.
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-on-primary/20 pt-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">timer</span>
                <span className="font-[var(--font-headline)] text-[24px] font-semibold">
                  8 HORAS
                </span>
              </div>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>

      {/* Excursiones en Vehiculo */}
      <section className="bg-surface-container py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 md:sticky md:top-32">
              <h2 className="font-[var(--font-headline)] text-[32px] leading-[40px] text-primary mb-6 font-bold">
                Excursiones en Vehiculo
              </h2>
              <p className="text-secondary mb-10 leading-relaxed">
                Recorridos de confort a bordo de nuestras unidades equipadas.
                Descubra los hitos culturales y geograficos con la guia de
                expertos locales.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-surface border border-outline-variant">
                  <span className="material-symbols-outlined text-primary text-[32px]">
                    directions_car
                  </span>
                  <div>
                    <h4 className="font-bold text-primary">
                      Privacidad Garantizada
                    </h4>
                    <p className="text-[12px] text-secondary font-semibold">
                      Minimo 2 personas por salida
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 gap-6">
              {/* POMA Exclusive */}
              <div className="bg-surface p-6 md:p-8 border border-outline-variant flex flex-col md:flex-row gap-8 items-center group">
                <div className="md:w-1/3 overflow-hidden w-full relative h-48">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYz70Yi4pBi5YF-P9nXAqWSp_WpO3V0XAAS7LdL1RVqySHd-I6Ixp6dNm96FnEDqOC-fl8bHjsy-4HJE4-ZE3vgtJmTeqgWr8HJrJyCODV13xHh3uolqbpy2MGGfu8PDvcjvKG5DzmrXz1UeznB-6fUxOIfb2lmUAH-rz80ia5pgJ5jLDc-cmmc6SD99ybS-ih4_fOe-QjO_dgZt5feRCFQkDML6FQg-MT8qyc0N88y-ggd6Oyz7ZYdoR9fhP-ghJA26XNWAU8MjY"
                    alt="Excursion en vehiculo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-[var(--font-headline)] text-[24px] text-primary mb-4 uppercase font-semibold">
                    &quot;POMA&quot; Exclusive
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-tertiary-fixed-dim bg-surface-container-low">
                      <p className="text-[12px] text-secondary uppercase mb-1 font-semibold">
                        Clasico
                      </p>
                      <p className="font-bold">Vuelta al Valle</p>
                      <p className="text-[12px] text-primary font-semibold">
                        4 HORAS
                      </p>
                    </div>
                    <div className="p-4 border border-tertiary-fixed-dim bg-surface-container-low">
                      <p className="text-[12px] text-secondary uppercase mb-1 font-semibold">
                        Paisaje
                      </p>
                      <p className="font-bold">Vuelta al Lago</p>
                      <p className="text-[12px] text-primary font-semibold">
                        2 HORAS
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expediciones al Norte */}
              <div className="bg-primary p-8 md:p-12 text-on-primary border border-primary relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-[var(--font-headline)] text-[24px] mb-8 uppercase tracking-[0.1em] font-semibold">
                    Expediciones al Norte
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                    {[
                      {
                        name: "Quilmes",
                        desc: "Historia Precolombina",
                      },
                      {
                        name: "Cafayate (Salta)",
                        desc: "Minimo 4 personas",
                      },
                      {
                        name: "Colalao del Valle",
                        desc: "Tradicion y Valles",
                      },
                      {
                        name: "Santa Maria",
                        desc: "Ruta de la Capilla",
                      },
                      {
                        name: "Ruta del Vino",
                        desc: "Experiencia Sommelier (Reservar con 1 semana)",
                      },
                    ].map((exp) => (
                      <div
                        key={exp.name}
                        className="border-l border-on-primary/20 pl-6"
                      >
                        <h4 className="text-[18px] font-bold mb-1">
                          {exp.name}
                        </h4>
                        <p className="text-[12px] text-on-primary/60 font-semibold">
                          {exp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 opacity-5">
                  <span className="material-symbols-outlined text-[300px]">
                    explore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Politicas de Reserva */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="bg-surface-container-highest border border-outline p-8 md:p-20 relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary-container text-on-primary-container flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-[32px]">
                  payments
                </span>
              </div>
            </div>
            <h2 className="font-[var(--font-headline)] text-[32px] leading-[40px] text-primary mb-6 uppercase tracking-wider font-bold">
              Politicas de Reserva
            </h2>
            <p className="text-[18px] leading-[28px] text-secondary mb-12">
              Para garantizar la exclusividad y coordinacion de nuestros guias,
              todas las excursiones requieren una{" "}
              <span className="text-primary font-bold">Sena del 50%</span> al
              momento de la reserva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="bg-primary text-on-primary px-8 md:px-10 py-5 font-[var(--font-headline)] text-[14px] md:text-[16px] font-bold tracking-widest hover:bg-primary-container transition-all flex items-center justify-center gap-3"
                href="https://wa.me/5493812032123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">chat</span>
                RESERVAR POR WHATSAPP
              </a>
              <a
                className="border border-primary text-primary px-8 md:px-10 py-5 font-[var(--font-headline)] text-[14px] md:text-[16px] font-bold tracking-widest hover:bg-surface-container-low transition-all flex items-center justify-center gap-3"
                href="tel:+5493812032123"
              >
                <span className="material-symbols-outlined">call</span>
                CONSULTAR TARIFAS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
