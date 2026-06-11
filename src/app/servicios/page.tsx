import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios y Excursiones",
  description:
    "Descubra el alma de Tafi del Valle a traves de trayectos curados y servicios disenados para el viajero que busca lo autentico.",
};

export default function ServiciosPage() {
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
              Curaduria de Viajes Premium
            </span>
          </div>
          <h1 className="font-[var(--font-headline)] text-[36px] md:text-[72px] text-white leading-[1] max-w-4xl mb-8 font-extrabold drop-shadow-2xl">
            Nuestros Servicios <br className="hidden md:block" /> y Excursiones
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed font-light">
            Descubra el alma de Tafi del Valle a traves de trayectos curados y
            servicios disenados para el viajero que busca lo autentico.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-40 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 md:gap-y-32">
          {/* Mountain Excursions */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative w-full h-[350px] md:h-[550px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeB8BThUS9hl3qwi4Y-d_J_dCYRFX6rn46UJFgcZx8psIoj_mpLhAjl151cipl8Y0lHsMfFhzLKvCfrrUyYcWat-tDq_jv2Z3Itmv9GlGoQdLObGM9HVoMK1sNqDUTl3i5wfz55k4EMyd4Zkz6jrHjZYMEOs2pwuNMf_UAFvPqOQu6ZKE7jaX_Ez79b5LStml8hc_VzARw5t60qxyO6H5S726PfUVpDhbM-BCDz3V259dAzvGr1lrdTrLqFKvZ2dZ8m2VDYxdLBKA"
                  alt="Excursiones de Montana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:-ml-20 z-20 bg-white p-8 md:p-14 shadow-2xl rounded-2xl border border-outline/5">
              <span className="text-primary/40 font-bold text-[10px] uppercase tracking-[0.3em] block mb-4">
                Experiencia de Altura
              </span>
              <h3 className="font-[var(--font-headline)] text-3xl md:text-4xl text-primary mb-6 leading-tight font-bold">
                Excursiones de Montana
              </h3>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Travesias exclusivas por senderos ancestrales, guiadas por
                expertos locales que revelan los secretos mejor guardados de
                nuestra geografia con total seguridad.
              </p>
              <Link
                href="/excursiones"
                className="border border-primary/10 text-primary px-8 py-3.5 rounded-lg font-[var(--font-headline)] text-sm transition-all duration-300 hover:border-primary hover:bg-primary/5 active:scale-95 inline-block"
              >
                Ver Itinerarios Exclusivos
              </Link>
            </div>
          </div>

          {/* Transfers & Experiences */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-6">
            {/* Transfers */}
            <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline/5 flex flex-col items-start hover:shadow-xl transition-all duration-500">
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl mb-10 relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjHckFnfJ7NCJtt7Lrcl01Z4pNyyeuvMj24dyR231o1ydMc4ytrRu9SZQmfrWdRsm8V0EvuWx-lgXaUzonwI4lGPkGwZDuuoxzXPqGpdXPE1FfNdFgeZVqQoBeLthxMzSE_eR58OyjzUrQ3uM-xTWc_xUX_XTtJZ2CrFr_HgQTJzTA2jMm2an6ODFTJ0tFt1E5pk2YSWRvSHfqarJ0-9c_gIpz_yRKkGfRG4p7Lr82uBEGsCmZZQvICf2pGp35IlP61085KFC2gIA"
                  alt="Traslados VIP"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="flex justify-between w-full items-start mb-6">
                <h3 className="font-[var(--font-headline)] text-2xl text-primary font-semibold">
                  Traslados VIP
                </h3>
                <span className="material-symbols-outlined text-primary/30 text-3xl">
                  airport_shuttle
                </span>
              </div>
              <p className="text-on-surface-variant mb-8 leading-relaxed max-w-md">
                Movilidad segura y confortable para grupos y pasajeros
                individuales con flota de ultima generacion y conductores
                bilingues.
              </p>
              <Link
                href="/contacto"
                className="text-primary font-bold text-sm uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-all"
              >
                Mas informacion
              </Link>
            </div>

            {/* Custom Experiences */}
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col items-start lg:mt-24 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">
                    star_rate
                  </span>
                </div>
                <h3 className="font-[var(--font-headline)] text-2xl text-primary leading-tight font-semibold">
                  Experiencias <br /> a Medida
                </h3>
              </div>
              <p className="text-on-surface-variant mb-10 leading-relaxed max-w-md">
                Disenamos itinerarios basados en sus intereses unicos: desde
                catas privadas en bodegas de altura hasta picnics gourmet en
                valles virgenes.
              </p>
              <div className="w-full h-48 md:h-64 overflow-hidden rounded-2xl mb-10 relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXp4wiaibP9MIdF4SCrXO9kY5PgmxJfrzztuFoy-V-HJtOAQ-sTz8fxFaly-HG7iB3cPRQBj7C-fjUDp_m1uN3VKMyRGaTcS88vWMxtUPGxs_hDaSUMsWqs4KGTahM23EjZQXiaY7Mc9Hp67-5TcWEtT52i9QeBCkye66u0U_uyf7CrCu-Lu0IxARYNVInjg-EtCRTHZ5shzV1cUEvfi6GeXFOgkPESfs2rcIG6BzRGowtSIJgHzxUn4HxcFTvbyUtZsRrcVAgFu4"
                  alt="Experiencias a medida"
                  fill
                  className="object-cover"
                />
              </div>
              <Link
                href="/contacto"
                className="w-full bg-primary text-white px-8 py-3.5 rounded-lg font-[var(--font-headline)] text-sm transition-all duration-300 hover:bg-primary-container active:scale-95 shadow-md text-center block"
              >
                Solicitar Propuesta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alianzas */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-block px-4 py-1 border border-primary-fixed/20 rounded-full">
                <span className="text-primary-fixed text-[10px] font-bold uppercase tracking-[0.3em]">
                  Business &amp; Partnerships
                </span>
              </div>
              <h2 className="font-[var(--font-headline)] text-3xl md:text-5xl text-white leading-tight font-bold">
                Alianzas y Reventa Estrategica
              </h2>
              <p className="text-primary-fixed-dim/90 text-lg leading-relaxed max-w-xl">
                Proporcionamos soporte logistico y tarifas preferenciales para
                agencias, hoteles y operadores que buscan un estandar de
                excelencia sin compromisos en la region.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed text-3xl">
                    verified_user
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                      Confianza Total
                    </h4>
                    <p className="text-primary-fixed-dim/60 text-sm">
                      Operaciones certificadas y seguras.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed text-3xl">
                    handshake
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                      Red Global
                    </h4>
                    <p className="text-primary-fixed-dim/60 text-sm">
                      Soporte 24/7 para socios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface/5 backdrop-blur-sm p-10 md:p-16 rounded-[40px] border border-white/10 text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-primary-fixed text-6xl mb-8">
                corporate_fare
              </span>
              <h3 className="text-white font-[var(--font-headline)] text-2xl mb-6 font-semibold">
                Solicite nuestra Guia Corporativa
              </h3>
              <p className="text-primary-fixed-dim/70 mb-12 max-w-xs">
                Acceda a nuestra estructura de costos exclusiva para aliados
                comerciales.
              </p>
              <Link
                href="/contacto"
                className="bg-white text-primary px-12 py-5 rounded-full font-[var(--font-headline)] text-sm hover:scale-105 transition-transform duration-300 font-bold"
              >
                Descargar Propuesta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-40 px-5 md:px-16 bg-surface-container-lowest border-t border-outline/5 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary/5 font-[var(--font-headline)] text-[80px] md:text-[120px] whitespace-nowrap select-none pointer-events-none font-extrabold">
            CONTACTO
          </div>
          <h2 className="font-[var(--font-headline)] text-3xl md:text-6xl text-primary mb-10 relative z-10 font-extrabold">
            &iquest;Hablamos de su proximo viaje?
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-16 max-w-2xl mx-auto leading-relaxed">
            Nuestros expertos en el destino estan disponibles para asesorarle
            personalmente y asegurar que cada detalle sea perfecto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              className="group relative bg-[#25D366] text-white px-10 py-5 rounded-full font-[var(--font-headline)] text-sm flex items-center justify-center gap-4 hover:shadow-2xl transition-all w-full sm:w-auto"
              href="https://wa.me/5493812032123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.197 1.411 4.835 1.412 5.298 0 9.603-4.305 9.603-9.603 0-2.566-1-4.978-2.817-6.795-1.817-1.817-4.229-2.817-6.786-2.817-5.297 0-9.602 4.305-9.602 9.602.001 1.705.452 3.37 1.306 4.821l-1.01 3.686 3.774-.99z" />
              </svg>
              <span>Asesoria por WhatsApp</span>
            </a>
            <a
              className="group relative border-2 border-primary text-primary px-10 py-5 rounded-full font-[var(--font-headline)] text-sm flex items-center justify-center gap-4 hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
              href="tel:+5493812032123"
            >
              <span className="material-symbols-outlined text-xl">call</span>
              <span>Llamada Directa</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
