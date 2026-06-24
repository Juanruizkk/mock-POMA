import Link from "next/link";
import { ScrollEffects } from "@/components/scroll-effects";
import { Gallery } from "@/components/gallery";

const WHATSAPP = "https://wa.me/5493812032123";
const INSTAGRAM = "https://instagram.com/poma.tafidelvalle";

// Fotos reales de las excursiones (rutas con espacios/acentos → se codifican al renderizar)
const gallery = [
  {
    src: "/Fotos Excursiones/Foto principal/20230513_174717-EFFECTS.jpg",
    alt: "Atardecer sobre Tafí del Valle",
  },
  {
    src: "/Fotos Excursiones/Cafayate/Cafayate_Amphitheatre.jpeg",
    alt: "Anfiteatro de Cafayate",
  },
  {
    src: "/Fotos Excursiones/Quilmes/ruinas-de-quilmes.jpg",
    alt: "Ruinas de Quilmes",
  },
  {
    src: "/Fotos Excursiones/Vuelta al lago en auto/ok20112024angostura.jpg",
    alt: "Dique La Angostura",
  },
  {
    src: "/Fotos Excursiones/CerroElPelado/57875521Master.jpg",
    alt: "Cerro El Pelao",
  },
  {
    src: "/Fotos Excursiones/La ciénaga/FB_IMG_1781372173736.jpg",
    alt: "La Ciénaga",
  },
  {
    src: "/Fotos Excursiones/CascadaLosAlisos/20073826.jpg",
    alt: "Cascada Los Alisos",
  },
  {
    src: "/Fotos Excursiones/Vuelta al valle en auto/Quebrada-del-Portugues-ovejas.jpg",
    alt: "Quebrada del Portugués",
  },
  {
    src: "/Fotos Excursiones/Vuelta nocturna en auto/20240202_203929.jpg",
    alt: "Vuelta nocturna por el valle",
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--char)" }}>
      <ScrollEffects />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{ minHeight: "92vh" }}
      >
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ background: "var(--deepgreen)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="hero-bg"
            src={encodeURI("/Fotos Excursiones/Foto principal/20230513_174717-EFFECTS.jpg")}
            alt="Atardecer sobre Tafí del Valle"
            className="absolute inset-x-0 top-[-8%] w-full h-[120%] object-cover will-change-transform"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(22,51,40,0.45) 0%, rgba(22,51,40,0.22) 45%, rgba(22,51,40,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,28,22,0.45) 0%, rgba(15,28,22,0) 62%)",
          }}
        />
        <div className="absolute inset-0 z-10 noise opacity-[0.12] mix-blend-overlay" />

        <div
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center"
          style={{ minHeight: "92vh" }}
        >
          <div className="max-w-2xl pt-24 pb-32">
            <p
              className="reveal eyebrow text-[12px] mb-6"
              style={{ color: "#e6c68a" }}
            >
              Tafí del Valle · Tucumán, Argentina
            </p>
            <h1 className="reveal font-serif text-white leading-[0.95] tracking-[-0.02em] text-6xl md:text-7xl lg:text-[5.5rem] font-medium">
              La{" "}
              <span
                className="italic font-normal"
                style={{ color: "#e7b24a" }}
              >
                esencia
              </span>
              <br />
              de Tafí del Valle
            </h1>
            <p
              className="reveal text-lg md:text-xl mt-7 max-w-xl leading-relaxed"
              style={{ color: "rgba(245,241,236,0.92)" }}
            >
              Excursiones y caminatas guiadas por Sergio y Naty — una familia que
              vive y respira estos valles.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#servicios"
                className="press-btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[13px] eyebrow text-white"
                style={{ background: "var(--green)" }}
              >
                Descubrí Tafí <i className="ti ti-arrow-right text-base" />
              </a>
              <a
                href="#contacto"
                className="press-btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[13px] eyebrow"
                style={{
                  background: "rgba(250,245,236,0.14)",
                  color: "var(--cream)",
                  border: "1.5px solid rgba(250,245,236,0.55)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Hablá con nosotros
              </a>
            </div>
          </div>
        </div>

        <div className="absolute z-20 bottom-8 left-6 lg:left-10 flex items-center gap-3">
          <span
            className="h-px w-10"
            style={{ background: "var(--gold)" }}
          />
          <span className="eyebrow text-[11px] text-white/80">
            Desde 2025 · Familia Tafinista
          </span>
        </div>
      </section>

      {/* ── Quiénes Somos ────────────────────────────────────── */}
      <section id="quienes" className="grid lg:grid-cols-[40%_60%]">
        <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imagenherenciaycultura.webp"
            alt="Sergio, Naty y viajeros entre menhires"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(22,51,40,0.10), rgba(22,51,40,0))",
            }}
          />
        </div>
        <div
          className="relative px-7 sm:px-12 lg:px-16 py-16 lg:py-24"
          style={{ borderLeft: "1px solid var(--sand)" }}
        >
          <div className="max-w-xl">
            <p
              className="reveal eyebrow text-[12px] mb-5"
              style={{ color: "var(--terra)" }}
            >
              Quiénes somos
            </p>
            <h2
              className="reveal font-serif text-4xl md:text-5xl leading-[1.02] tracking-[-0.02em] font-medium"
              style={{ color: "var(--deepgreen)" }}
            >
              Una familia, dos pasiones,
              <br className="hidden md:block" /> un mismo valle
            </h2>
            <p
              className="reveal mt-7 text-[17px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              PÓMA nació el 15 de octubre de 2025, de la mano de{" "}
              <span style={{ color: "var(--char)", fontWeight: 600 }}>
                Sergio y Naty
              </span>
              , ambos Técnicos en Turismo enamorados de su tierra. No somos una
              agencia: somos vecinos que decidimos compartir lo que más amamos.
            </p>
            <p
              className="reveal mt-4 text-[17px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Creemos en un turismo honesto, cercano y respetuoso con la
              naturaleza, la historia y la gente de los Valles Calchaquíes.
            </p>

            <div className="reveal mt-10 grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: "ti-car",
                  name: "Sergio",
                  role: "Excursiones en vehículo",
                  desc: "Lidera los recorridos y conoce cada camino de los Valles Calchaquíes.",
                },
                {
                  icon: "ti-mountain",
                  name: "Naty",
                  role: "Trekking & caminatas",
                  desc: "Guía de montaña, enamorada de los senderos y cumbres del valle.",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-xl p-5"
                  style={{ background: "#fff", border: "1px solid var(--sand)" }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid place-items-center h-10 w-10 rounded-full text-lg shrink-0"
                      style={{
                        background: "var(--sand-soft)",
                        color: "var(--terra)",
                      }}
                    >
                      <i className={`ti ${p.icon}`} />
                    </span>
                    <div>
                      <p
                        className="font-serif text-xl font-semibold"
                        style={{ color: "var(--green)" }}
                      >
                        {p.name}
                      </p>
                      <p className="text-[13px]" style={{ color: "var(--muted)" }}>
                        {p.role}
                      </p>
                    </div>
                  </div>
                  <p
                    className="mt-3 text-[14px] leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Servicios ────────────────────────────────────────── */}
      <section
        id="servicios"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p
              className="reveal eyebrow text-[12px] mb-4"
              style={{ color: "var(--terra)" }}
            >
              Lo que hacemos
            </p>
            <h2
              className="reveal font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.02em] font-medium"
              style={{ color: "var(--deepgreen)" }}
            >
              Dos formas de
              <br />
              descubrir el valle
            </h2>
          </div>
          <p
            className="reveal max-w-sm text-[16px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Elegí el ritmo de tu aventura: la comodidad de un recorrido en
            vehículo o la intimidad de un sendero a pie.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <Link
            href="/excursiones"
            className="svc-card group relative lg:col-span-7 rounded-2xl overflow-hidden min-h-[420px] block"
            style={{ border: "1px solid var(--sand)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Excursiones/RutaCapia.webp"
              alt="Recorrido en vehículo por el valle"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,51,40,0.10) 0%, rgba(22,51,40,0.45) 55%, rgba(22,51,40,0.92) 100%)",
              }}
            />
            <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
              <span
                className="grid place-items-center h-12 w-12 rounded-full text-2xl mb-auto"
                style={{
                  background: "rgba(250,245,236,0.16)",
                  color: "var(--cream)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(250,245,236,0.3)",
                }}
              >
                <i className="ti ti-car" />
              </span>
              <p
                className="eyebrow text-[11px] mb-3"
                style={{ color: "var(--apricot)" }}
              >
                Con Sergio al volante
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl text-white font-medium leading-tight">
                Excursiones en Vehículo
              </h3>
              <p className="text-white/85 mt-3 max-w-md leading-relaxed">
                Recorridos cómodos y seguros por los Valles Calchaquíes,
                Cafayate, El Pelado y más.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] eyebrow text-white/90">
                Ver excursiones <i className="ti ti-arrow-right" />
              </span>
              <span
                className="svc-underline block h-[2.5px] mt-3"
                style={{ background: "var(--gold)" }}
              />
            </div>
          </Link>

          <Link
            href="/excursiones"
            className="svc-card group relative lg:col-span-5 rounded-2xl overflow-hidden min-h-[420px] block"
            style={{ border: "1px solid var(--sand)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/expedicionesimagen.webp"
              alt="Trekking guiado por Naty"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(181,86,58,0.10) 0%, rgba(22,51,40,0.40) 50%, rgba(22,51,40,0.93) 100%)",
              }}
            />
            <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
              <span
                className="grid place-items-center h-12 w-12 rounded-full text-2xl mb-auto"
                style={{
                  background: "rgba(250,245,236,0.16)",
                  color: "var(--cream)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(250,245,236,0.3)",
                }}
              >
                <i className="ti ti-mountain" />
              </span>
              <p
                className="eyebrow text-[11px] mb-3"
                style={{ color: "var(--apricot)" }}
              >
                Con Naty al frente
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl text-white font-medium leading-tight">
                Trekking &amp; Caminatas
              </h3>
              <p className="text-white/85 mt-3 max-w-xs leading-relaxed">
                Senderos, cascadas y cumbres a tu ritmo.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] eyebrow text-white/90">
                Ver caminatas <i className="ti ti-arrow-right" />
              </span>
              <span
                className="svc-underline block h-[2.5px] mt-3"
                style={{ background: "var(--gold)" }}
              />
            </div>
          </Link>
        </div>

        <div className="reveal mt-8 flex justify-center">
          <Link
            href="/excursiones"
            className="press-btn inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[13px] eyebrow text-white"
            style={{ background: "var(--green)" }}
          >
            Ver todas las excursiones y servicios{" "}
            <i className="ti ti-arrow-right text-base" />
          </Link>
        </div>

        <div
          className="reveal mt-5 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: "var(--green)" }}
        >
          <span
            className="grid place-items-center h-11 w-11 rounded-full text-xl shrink-0"
            style={{
              background: "rgba(192,138,45,0.25)",
              color: "var(--gold-bright)",
            }}
          >
            <i className="ti ti-leaf" />
          </span>
          <div className="flex-1">
            <p className="font-serif text-xl text-white font-medium">
              Turismo responsable y sostenible
            </p>
            <p className="text-white/70 text-[15px] mt-1">
              Cuidamos cada sendero, cada piedra y cada comunidad que nos recibe
              en el camino.
            </p>
          </div>
          <span
            className="eyebrow text-[11px]"
            style={{ color: "var(--gold-bright)" }}
          >
            Compromiso PÓMA
          </span>
        </div>
      </section>

      {/* ── Galería ──────────────────────────────────────────── */}
      <section
        id="galeria"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20"
      >
        <div className="mb-12">
          <p
            className="reveal eyebrow text-[12px] mb-4"
            style={{ color: "var(--terra)" }}
          >
            Galería
          </p>
          <h2
            className="reveal font-serif text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] font-medium"
            style={{ color: "var(--deepgreen)" }}
          >
            Momentos en los valles
          </h2>
        </div>

        <Gallery images={gallery} />
      </section>

      {/* ── Contacto ─────────────────────────────────────────── */}
      <section id="contacto" className="grid lg:grid-cols-2">
        <div
          className="relative px-7 sm:px-12 lg:px-16 py-16 lg:py-24 overflow-hidden"
          style={{ background: "var(--green)" }}
        >
          <div className="absolute inset-0 noise opacity-[0.07]" />
          <div className="relative max-w-lg">
            <p
              className="reveal eyebrow text-[12px] mb-5"
              style={{ color: "var(--gold-bright)" }}
            >
              Hablemos
            </p>
            <h2 className="reveal font-serif text-4xl md:text-5xl leading-[1.02] tracking-[-0.02em] font-medium text-white">
              Planifiquemos tu próxima aventura
            </h2>
            <p className="reveal mt-6 text-white/75 text-[16px] leading-relaxed">
              Escribinos por WhatsApp o dejanos tu consulta. Sergio y Naty te
              responden en persona.
            </p>

            <div className="reveal mt-10 space-y-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl px-5 py-4 transition-colors"
                style={{
                  background: "rgba(250,245,236,0.06)",
                  border: "1px solid rgba(250,245,236,0.14)",
                }}
              >
                <span
                  className="grid place-items-center h-11 w-11 rounded-full text-xl shrink-0"
                  style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}
                >
                  <i className="ti ti-brand-whatsapp" />
                </span>
                <span className="flex-1">
                  <span className="block eyebrow text-[10px] text-white/55">
                    WhatsApp
                  </span>
                  <span className="block text-white text-[15px] font-medium">
                    +54 9 381 203-2123
                  </span>
                </span>
                <span className="text-white/40 text-lg">
                  <i className="ti ti-arrow-right" />
                </span>
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl px-5 py-4"
                style={{
                  background: "rgba(250,245,236,0.06)",
                  border: "1px solid rgba(250,245,236,0.14)",
                }}
              >
                <span
                  className="grid place-items-center h-11 w-11 rounded-full text-xl shrink-0"
                  style={{ background: "var(--sand)", color: "var(--terra)" }}
                >
                  <i className="ti ti-brand-instagram" />
                </span>
                <span className="flex-1">
                  <span className="block eyebrow text-[10px] text-white/55">
                    Instagram
                  </span>
                  <span className="block text-white text-[15px] font-medium">
                    @poma.tafidelvalle
                  </span>
                </span>
                <span className="text-white/40 text-lg">
                  <i className="ti ti-arrow-right" />
                </span>
              </a>
              <div
                className="flex items-center gap-4 rounded-xl px-5 py-4"
                style={{
                  background: "rgba(250,245,236,0.06)",
                  border: "1px solid rgba(250,245,236,0.14)",
                }}
              >
                <span
                  className="grid place-items-center h-11 w-11 rounded-full text-xl shrink-0"
                  style={{ background: "var(--sand)", color: "var(--green)" }}
                >
                  <i className="ti ti-map-pin" />
                </span>
                <span className="flex-1">
                  <span className="block eyebrow text-[10px] text-white/55">
                    Ubicación
                  </span>
                  <span className="block text-white text-[15px] font-medium">
                    Tafí del Valle, Tucumán, Argentina
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="px-7 sm:px-12 lg:px-16 py-16 lg:py-24"
          style={{ background: "var(--cream)" }}
        >
          <div className="max-w-md mx-auto">
            <p
              className="reveal eyebrow text-[12px] mb-3"
              style={{ color: "var(--terra)" }}
            >
              Dejanos tu mensaje
            </p>
            <h3
              className="reveal font-serif text-3xl font-medium mb-8"
              style={{ color: "var(--deepgreen)" }}
            >
              Enviá una consulta
            </h3>
            <form className="reveal space-y-5" action={WHATSAPP}>
              <div>
                <label
                  className="block eyebrow text-[12px] mb-2"
                  style={{ color: "var(--muted)" }}
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="¿Cómo te llamás?"
                  className="w-full rounded-[4px] px-4 py-3.5 text-[15px] outline-none focus:ring-2"
                  style={{
                    background: "var(--sand)",
                    color: "var(--char)",
                    border: "1px solid #dcceb3",
                  }}
                />
              </div>
              <div>
                <label
                  className="block eyebrow text-[12px] mb-2"
                  style={{ color: "var(--muted)" }}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-[4px] px-4 py-3.5 text-[15px] outline-none focus:ring-2"
                  style={{
                    background: "var(--sand)",
                    color: "var(--char)",
                    border: "1px solid #dcceb3",
                  }}
                />
              </div>
              <div>
                <label
                  className="block eyebrow text-[12px] mb-2"
                  style={{ color: "var(--muted)" }}
                  htmlFor="mensaje"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="Contanos qué te gustaría descubrir..."
                  className="w-full rounded-[4px] px-4 py-3.5 text-[15px] outline-none focus:ring-2 resize-none"
                  style={{
                    background: "var(--sand)",
                    color: "var(--char)",
                    border: "1px solid #dcceb3",
                  }}
                />
              </div>
              <button
                type="submit"
                className="press-btn w-full inline-flex items-center justify-center gap-2 rounded-[4px] px-6 py-4 text-[13px] eyebrow text-white"
                style={{ background: "var(--green)" }}
              >
                Enviar consulta <i className="ti ti-arrow-right text-base" />
              </button>
            </form>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="press-btn mt-4 w-full inline-flex items-center justify-center gap-2.5 rounded-[4px] px-6 py-4 text-[13px] eyebrow text-white"
              style={{ background: "var(--terra)" }}
            >
              <i className="ti ti-brand-whatsapp text-lg" /> Escribinos por
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
