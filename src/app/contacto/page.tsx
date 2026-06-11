import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactenos para organizar su proxima experiencia personalizada en Tafi del Valle.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Main content */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-20 lg:pt-0">
        {/* Left Column: Form */}
        <div className="w-full lg:w-1/2 bg-surface p-6 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <span className="text-[12px] text-primary uppercase tracking-[0.25em] mb-4 block font-bold">
              Ubicacion y Soporte
            </span>
            <h1 className="font-[var(--font-headline)] text-[36px] md:text-[48px] leading-tight text-primary mb-6 font-extrabold">
              Encuentra tu camino a la aventura
            </h1>
            <p className="text-[18px] leading-[28px] text-secondary/90 mb-12">
              Nuestra base se encuentra en el corazon de Tafi del Valle.
              Contactenos para organizar su proxima experiencia personalizada o
              resolver cualquier duda tecnica.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[11px] text-primary font-bold uppercase tracking-widest"
                    htmlFor="contact-name"
                  >
                    Nombre Completo
                  </label>
                  <input
                    className="bg-surface-container-low border-b-2 border-outline-variant/30 px-4 py-4 focus:border-primary focus:ring-0 focus:bg-white transition-all text-on-surface placeholder:text-secondary/40"
                    id="contact-name"
                    name="name"
                    placeholder="Ej: Juan Perez"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[11px] text-primary font-bold uppercase tracking-widest"
                    htmlFor="contact-email"
                  >
                    Correo Electronico
                  </label>
                  <input
                    className="bg-surface-container-low border-b-2 border-outline-variant/30 px-4 py-4 focus:border-primary focus:ring-0 focus:bg-white transition-all text-on-surface placeholder:text-secondary/40"
                    id="contact-email"
                    name="email"
                    placeholder="juan@ejemplo.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[11px] text-primary font-bold uppercase tracking-widest"
                  htmlFor="contact-message"
                >
                  Mensaje o Consulta
                </label>
                <textarea
                  className="bg-surface-container-low border-b-2 border-outline-variant/30 px-4 py-4 focus:border-primary focus:ring-0 focus:bg-white transition-all text-on-surface placeholder:text-secondary/40"
                  id="contact-message"
                  name="message"
                  placeholder="Como podemos ayudarte hoy?"
                  rows={4}
                />
              </div>
              <button
                className="w-full bg-primary text-on-primary px-8 py-5 font-[var(--font-headline)] text-sm uppercase tracking-[0.2em] hover:bg-primary-container hover:shadow-2xl transition-all flex items-center justify-center gap-4 group active:scale-[0.98] font-bold"
                type="submit"
              >
                Enviar Mensaje
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                  send
                </span>
              </button>
            </form>

            <div className="mt-14 flex flex-wrap gap-8">
              <a
                className="flex items-center gap-4 group"
                href="tel:+5493812032123"
              >
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined text-xl">
                    call
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-secondary">
                    Telefono
                  </p>
                  <p className="font-[var(--font-headline)] text-base text-primary font-semibold">
                    +54 9 381 203-2123
                  </p>
                </div>
              </a>
              <a
                className="flex items-center gap-4 group"
                href="https://wa.me/5493812032123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined text-xl">
                    chat
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-secondary">
                    WhatsApp
                  </p>
                  <p className="font-[var(--font-headline)] text-base text-primary font-semibold">
                    +54 9 381 203-2123
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Map & Cards */}
        <div className="w-full lg:w-1/2 bg-surface-container-low p-6 md:p-12 lg:p-16 flex flex-col gap-8">
          {/* Atencion Prioritaria */}
          <div className="relative overflow-hidden bg-primary p-8 rounded-xl shadow-xl group">
            <div className="absolute -right-12 -top-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[180px] text-on-primary">
                support_agent
              </span>
            </div>
            <div className="relative z-10">
              <h2 className="font-[var(--font-headline)] text-[24px] text-on-primary mb-6 flex items-center gap-3 font-semibold">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                Atencion Prioritaria
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim mt-1">
                    chat_bubble
                  </span>
                  <div>
                    <p className="text-primary-fixed text-xs uppercase font-bold tracking-widest mb-1">
                      WhatsApp 24/7
                    </p>
                    <a
                      className="text-on-primary text-xl font-bold hover:text-primary-fixed transition-colors"
                      href="https://wa.me/5493812032123"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +54 9 381 203-2123
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="text-primary-fixed text-xs uppercase font-bold tracking-widest mb-1">
                      Oficina Central
                    </p>
                    <p className="text-on-primary text-lg leading-snug font-medium">
                      Tafi del Valle,
                      <br />
                      Tucuman, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex-grow flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg flex-grow relative overflow-hidden group border border-tertiary/5 min-h-[350px]">
              <iframe
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-[1.1] opacity-90 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.886478950553!2d-65.71946025!3d-26.8525043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423c0f4f9f7d3d7%3A0x6b4c9e4e4e4e4e4e!2sTaf%C3%AD%20del%20Valle%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                title="Mapa de Tafi del Valle"
              />
              <a
                className="absolute bottom-6 left-6 z-20 bg-primary/95 backdrop-blur-md text-on-primary p-5 rounded-lg shadow-2xl flex items-center gap-4 hover:bg-primary transition-all cursor-pointer active:scale-95"
                href="https://maps.google.com/?q=Tafi+del+Valle+Tucuman+Argentina"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  directions
                </span>
                <div>
                  <p className="text-[14px] font-bold">Abrir Google Maps</p>
                  <p className="text-[11px] opacity-70 uppercase tracking-widest font-bold">
                    Como llegar
                  </p>
                </div>
              </a>
            </div>

            {/* Info Card */}
            <div className="bg-tertiary-fixed p-8 rounded-xl shadow-sm border border-tertiary/10 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-[var(--font-headline)] text-[24px] text-tertiary mb-3 font-semibold">
                Venga a conocernos
              </h3>
              <p className="text-tertiary/80 text-sm leading-relaxed mb-6 max-w-md">
                Estamos ubicados estrategicamente a pocos metros de la rotonda
                principal, con estacionamiento propio para su comodidad.
              </p>
              <div className="flex items-center gap-4 text-tertiary font-bold text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined text-lg">
                  schedule
                </span>
                Lunes a Sabado: 09:00 — 19:00 hs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Values */}
      <section className="bg-primary text-on-primary py-16 md:py-24 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {[
            {
              icon: "verified_user",
              title: "Experiencia Profesional",
              desc: "Guias certificados con mas de 15 anos de trayectoria en los Valles Calchaquies.",
            },
            {
              icon: "strategy",
              title: "Logistica de Excelencia",
              desc: "Planificacion personalizada para garantizar seguridad y confort total en su viaje.",
            },
            {
              icon: "workspace_premium",
              title: "Referente en Aventura",
              desc: "Sello de calidad turistica nacional avalado por miles de viajeros cada ano.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-5"
            >
              <div className="w-14 h-14 border border-primary-fixed-dim/40 rounded-full flex items-center justify-center text-primary-fixed-dim">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h4 className="font-[var(--font-headline)] text-xl font-semibold">
                {item.title}
              </h4>
              <p className="text-on-primary-container text-sm leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
