import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/40 z-10" />
          <div className="absolute inset-0 hero-vignette z-20" />
          <Image
            src="/imagenherosection.webp"
            alt="Tafi del Valle Panorama"
            fill
            className="object-cover animate-subtle-zoom"
            priority
          />
        </div>

        <div className="relative z-30 px-5 md:px-16 max-w-[1280px] mx-auto w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-on-primary/60" />
              <span className="text-[12px] uppercase tracking-[0.4em] text-on-primary/90 text-glow font-semibold">
                Experiencia Profesional
              </span>
            </div>
            <h1 className="font-[var(--font-headline)] text-[32px] sm:text-[48px] md:text-[84px] leading-[0.95] font-extrabold text-on-primary mb-8 text-glow uppercase">
              Descubri <br />
              <span className="text-primary-fixed underline decoration-primary-fixed/30 underline-offset-8">
                Tafi del Valle
              </span>
            </h1>
            <div className="w-full max-w-xl bg-black/20 backdrop-blur-sm p-6 md:p-8 border-l-4 border-primary-fixed mb-12">
              <p className="text-[18px] leading-[28px] text-on-primary font-medium">
                NATURALEZA, AVENTURA Y CULTURA. Experiencias disenadas por
                expertos para el viajero estrategico que busca autenticidad y
                excelencia en el NOA.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/excursiones"
                className="group relative overflow-hidden bg-primary px-8 py-4 md:px-12 md:py-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(22,51,40,0.4)] text-center"
              >
                <span className="relative z-10 text-on-primary font-[var(--font-headline)] text-[14px] md:text-[16px] uppercase tracking-[0.25em] font-bold">
                  Ver Excursiones
                </span>
                <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-on-primary px-8 py-4 md:px-12 md:py-6 text-on-primary font-[var(--font-headline)] text-[14px] md:text-[16px] uppercase tracking-[0.25em] font-bold hover:bg-on-primary hover:text-primary transition-all duration-500 text-center"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-5 md:left-16 z-30 flex items-center gap-4 text-on-primary/60">
          <div className="flex flex-col gap-1">
            <div className="w-1 h-8 bg-on-primary/20" />
            <div className="w-1 h-8 bg-on-primary" />
            <div className="w-1 h-8 bg-on-primary/20" />
          </div>
          <span className="text-[10px] uppercase tracking-widest">
            Scroll para explorar
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-primary text-[12px] uppercase tracking-[0.3em] mb-4 block font-semibold">
              Portafolio de Servicios
            </span>
            <h2 className="font-[var(--font-headline)] text-[36px] md:text-[48px] leading-tight text-primary font-extrabold">
              EXPLORACION ESTRATEGICA
            </h2>
          </div>
          <p className="text-secondary max-w-xs border-l-2 border-outline-variant pl-6">
            Nuestra propuesta se basa en el conocimiento profundo del terreno y
            la logistica impecable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Excursiones card */}
          <div className="md:col-span-7 group relative h-[400px] md:h-[600px] overflow-hidden bg-secondary-container">
            <Image
              src="/expedicionesimagen.webp"
              alt="Excursiones de Alta Montana"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
            <div className="absolute inset-0 elegant-card-gradient opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-on-primary">
              <span className="material-symbols-outlined text-4xl mb-6 text-primary-fixed">
                terrain
              </span>
              <h3 className="font-[var(--font-headline)] text-[28px] md:text-[32px] leading-[40px] mb-4 font-bold tracking-tight">
                EXCURSIONES DE ALTA MONTANA
              </h3>
              <p className="text-on-primary/80 max-w-md mb-8">
                Rutas exclusivas y personalizadas por los valles calchaquies,
                guiadas por especialistas locales.
              </p>
              <div className="h-px w-20 bg-primary-fixed transition-all duration-500 group-hover:w-full" />
            </div>
          </div>

          {/* Traslados card */}
          <div className="md:col-span-5 group relative h-[400px] md:h-[600px] md:mt-20 overflow-hidden bg-secondary-container">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLMikjhkJ6rQmnylYnm8z3dmHp0kIkeVHhREqfBQadWEcuRi1T8DcDE7xWMpiVOOx3uGuqlfne8gQwEsR3ts3VuFDAKiaF3zQAn4lJXRP8IODRj1UqPk0nZqpRJMbPc2xGAl4jnStqRMO7Jgz1Z6yI7rvYZ64-epqRPV6WwiOUpMNfzh1X6UxGj0YnhBRUtvYjV9A5htGNtmkADyTQaCa-DGBHkpN6A6pdQkn_IDzd2p910M2QazNTnAO0pvieKIsGF1ybdDtp5b8"
              alt="Logistica y Traslados"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
            <div className="absolute inset-0 elegant-card-gradient opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-on-primary">
              <span className="material-symbols-outlined text-4xl mb-6 text-primary-fixed">
                directions_car
              </span>
              <h3 className="font-[var(--font-headline)] text-[24px] leading-[32px] mb-4 font-bold tracking-tight">
                LOGISTICA Y TRASLADOS
              </h3>
              <p className="text-on-primary/80 mb-8">
                Seguridad y confort en terrenos desafiantes. Flota propia
                preparada para el NOA.
              </p>
              <div className="h-px w-20 bg-primary-fixed transition-all duration-500 group-hover:w-full" />
            </div>
          </div>

          {/* Herencia y Cultura */}
          <div className="md:col-span-12 group relative h-[300px] md:h-[400px] overflow-hidden bg-secondary-container mt-6">
            <Image
              src="/imagenherenciaycultura.webp"
              alt="Herencia y Cultura"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
              <div className="text-center p-8 md:p-12 scale-90 group-hover:scale-100 transition-transform duration-500">
                <h3 className="font-[var(--font-headline)] text-[32px] md:text-[48px] text-on-primary mb-6 font-extrabold">
                  EXPERIENCIAS GENUINAS
                </h3>
                <p className="text-on-primary/90 max-w-xl mx-auto mb-8 text-lg">
                  Inmersion profunda en las raices de Tafi del Valle. Sabores,
                  historias y encuentros.
                </p>
                <Link
                  href="/excursiones"
                  className="bg-primary-fixed text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block"
                >
                  Explorar Catalogo
                </Link>
              </div>
            </div>
            <div className="absolute bottom-10 left-10 text-on-primary group-hover:opacity-0 transition-opacity">
              <h3 className="font-[var(--font-headline)] text-[24px] md:text-[32px] font-bold text-glow">
                HERENCIA Y CULTURA
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Commitment Section */}
      <section className="bg-primary text-on-primary py-24 md:py-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-on-primary/10 pointer-events-none" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-primary-fixed/5 rounded-full blur-3xl" />

        <div className="px-5 md:px-16 max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="space-y-10 md:space-y-12">
              <div className="inline-block border-l-4 border-primary-fixed pl-6 py-2">
                <span className="text-primary-fixed text-[12px] uppercase tracking-[0.5em] block font-semibold">
                  Tafi Heritage Collective
                </span>
              </div>
              <h2 className="font-[var(--font-headline)] text-[36px] md:text-[56px] leading-[1.1] font-extrabold">
                COMPROMISO CON LA EXCELENCIA
              </h2>
              <p className="text-on-primary/80 text-lg leading-relaxed max-w-xl">
                En POMA, no solo mostramos paisajes; disenamos logistica
                integral para que su unica preocupacion sea el asombro. Nuestra
                autoridad en el territorio nos permite ofrecer servicios de alta
                confiabilidad para agencias corporativas y viajeros exigentes.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { num: "01", label: "Estrategica" },
                  { num: "02", label: "Profesional" },
                  { num: "03", label: "Humana" },
                ].map((item) => (
                  <div key={item.num} className="group cursor-default">
                    <div className="text-primary-fixed font-[var(--font-headline)] text-5xl mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {item.num}
                    </div>
                    <h4 className="font-[var(--font-headline)] text-[14px] font-bold uppercase tracking-widest mb-2">
                      {item.label}
                    </h4>
                    <div className="h-0.5 w-8 bg-on-primary/20 group-hover:w-full group-hover:bg-primary-fixed transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden border border-on-primary/20 p-4">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB33uoGpatbA1rOIBWiCALIotP-KKgvu_4cKw81meJwcZUnVNPCBc9dslv-EWstE2w8CIxr8yRAQAtGaoEyYwI7V5u9GWzWm7C5SSjc9NsVUWghUsPHI_c6VZEY7Y5wVOdgKJSIGabAZW7s33NF5fWLn9RCFn02-ve_IWoDnn5WBxlxtXthc7hSSb089j5_cok9vtAy1qY1FgomqJebJlgCBMtYkVpVVS1y4EspIXzNQaH22SfyIkRJTuF3r8fqQ5Q9318Kt5qM-U4"
                  alt="Service Excellence"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-6 md:mt-0 md:absolute md:-bottom-10 md:-left-10 bg-surface p-6 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-primary/10">
                <div className="flex items-center gap-6 md:gap-8">
                  <div>
                    <div className="flex gap-1 text-primary mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-xl"
                          style={{
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="font-[var(--font-headline)] text-primary text-5xl md:text-6xl font-black leading-none">
                      5.0
                    </p>
                    <p className="text-[10px] text-primary/60 uppercase tracking-[0.2em] mt-3 font-semibold">
                      Calificacion Global
                    </p>
                  </div>
                  <div className="w-px h-20 bg-primary/10" />
                  <div className="text-primary font-bold text-[12px] uppercase tracking-widest opacity-40 hidden md:block">
                    Google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
          <div className="bg-surface shadow-[0_50px_100px_-20px_rgba(22,51,40,0.1)] border border-outline-variant/30 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Form */}
              <div className="lg:col-span-5 p-8 md:p-16 lg:p-20">
                <span className="text-primary/40 text-[12px] uppercase tracking-[0.4em] mb-4 block font-semibold">
                  Hablemos
                </span>
                <h2 className="font-[var(--font-headline)] text-[32px] leading-[40px] text-primary mb-10 font-bold">
                  CONTACTANOS
                </h2>
                <form className="space-y-8">
                  <div className="relative">
                    <input
                      className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary transition-all placeholder-transparent"
                      id="home-name"
                      placeholder="Nombre"
                      type="text"
                    />
                    <label
                      className="absolute left-0 -top-3.5 text-secondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm uppercase tracking-widest font-bold"
                      htmlFor="home-name"
                    >
                      Nombre Completo
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary transition-all placeholder-transparent"
                      id="home-email"
                      placeholder="Email"
                      type="email"
                    />
                    <label
                      className="absolute left-0 -top-3.5 text-secondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm uppercase tracking-widest font-bold"
                      htmlFor="home-email"
                    >
                      Correo Electronico
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      className="peer w-full bg-transparent border-0 border-b-2 border-outline-variant py-4 focus:ring-0 focus:border-primary transition-all placeholder-transparent"
                      id="home-message"
                      placeholder="Mensaje"
                      rows={3}
                    />
                    <label
                      className="absolute left-0 -top-3.5 text-secondary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm uppercase tracking-widest font-bold"
                      htmlFor="home-message"
                    >
                      Mensaje
                    </label>
                  </div>
                  <button
                    className="w-full bg-primary text-on-primary py-5 font-bold uppercase tracking-[0.3em] hover:bg-primary-container transition-all duration-500 shadow-lg hover:shadow-primary/20"
                    type="submit"
                  >
                    Enviar Solicitud
                  </button>
                </form>
                <div className="mt-12 flex flex-col sm:flex-row gap-8">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined text-xl">
                        call
                      </span>
                    </div>
                    <span className="font-bold text-[14px] text-primary tracking-wider">
                      +54 381 203-2123
                    </span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined text-xl">
                        chat
                      </span>
                    </div>
                    <span className="font-bold text-[14px] text-primary tracking-wider">
                      WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-7 relative min-h-[400px] md:min-h-[500px] overflow-hidden group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw3JLyh7stZxXhuYsupAOwnWNMbFLhiVy0oP1cDuGkkX0MaW6uNy259jaOOiZZTxKmna_61BhQ86A3orvgOxdd1Q2TqdXvYOaZOLXFBFeq4rwW1F-yEmrvkuW_tAtBsc_ahvn4SY2ft5icHAX13DuhFqE5x5OhQ8-oW-LlKSisYboWN_eVsIXtIW0JnbRQqU6eb6agRvt810Q7gZE9DreuB64WxJhbpC31XeD-OU_tOV8lxaXEVKTna-o8tWh8hVxemqk0brbq2uI"
                  alt="Mapa de ubicacion"
                  fill
                  className="object-cover transition-transform duration-[4s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 bg-primary p-8 md:p-10 text-on-primary border border-primary-fixed/20 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-on-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-4xl text-primary-fixed">
                        location_on
                      </span>
                    </div>
                    <div>
                      <h3 className="font-[var(--font-headline)] text-[24px] mb-2 font-bold tracking-tight">
                        COMO LLEGAR
                      </h3>
                      <p className="text-on-primary/70 leading-relaxed">
                        Tafi del Valle, Tucuman, Argentina.
                      </p>
                      <a
                        className="inline-flex items-center gap-2 mt-4 font-bold text-[11px] uppercase tracking-[0.3em] text-primary-fixed hover:text-white transition-colors"
                        href="https://maps.google.com/?q=Tafi+del+Valle+Tucuman+Argentina"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver en Google Maps{" "}
                        <span className="material-symbols-outlined text-sm">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
