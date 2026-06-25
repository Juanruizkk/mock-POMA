import { InkBleed } from "@/components/ink-bleed";
import { StaggerReveal } from "@/components/stagger-reveal";
import { Reveal } from "@/components/reveal";
import { SepCerros } from "@/components/separators";
// Alternativa minimalista (descomentar este import y su uso más abajo):
// import { SepHairline } from "@/components/separators";

const WHATSAPP = "https://wa.me/5493812032123";
const INSTAGRAM = "https://instagram.com/poma.tafidelvalle";

export function Contacto() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden"
      style={{ background: "var(--deepgreen)" }}
    >
      <div className="absolute inset-0 noise opacity-[0.07]" />

      {/* ── Costura: cerros suaves de Tafí (transición desde Quiénes Somos) ── */}
      <SepCerros className="relative block w-full -mt-6 lg:-mt-10 mb-8 lg:mb-12" />

      {/* Alternativa minimalista — descomentar (y su import) para usarla en vez de los cerros:
      <SepHairline className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-2" />
      */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-14 lg:pb-20 pt-4 lg:pt-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Columna humana: encabezado + canales + firma ── */}
          <div>
            <p
              className="reveal eyebrow text-[12px] mb-4"
              style={{ color: "var(--gold-bright)" }}
            >
              Hablemos
            </p>
            <InkBleed
              as="h2"
              className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.0] tracking-[-0.02em] font-medium text-white"
            >
              Planifiquemos tu
              <br />
              <span className="italic font-normal" style={{ color: "var(--gold-bright)" }}>
                próxima aventura
              </span>
            </InkBleed>
            <StaggerReveal y={12}>
            <p className="mt-5 text-white/75 text-[16px] leading-relaxed max-w-md">
              Escribinos por WhatsApp o dejanos tu consulta. Sergio y Naty te
              responden en persona, como buenos vecinos del valle.
            </p>

            {/* WhatsApp + canales secundarios como un bloque único */}
            <div className="mt-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl px-6 py-5 press-btn"
                style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}
              >
                <span
                  className="grid place-items-center h-12 w-12 rounded-full text-2xl shrink-0"
                  style={{ background: "var(--deepgreen)", color: "var(--gold-bright)" }}
                >
                  <i className="ti ti-brand-whatsapp" />
                </span>
                <span className="flex-1">
                  <span className="block eyebrow text-[10px] opacity-70">
                    WhatsApp · respondemos en persona
                  </span>
                  <span className="block text-[19px] font-semibold mt-0.5">
                    +54 9 381 203-2123
                  </span>
                </span>
                <i className="ti ti-arrow-right text-xl transition-transform group-hover:translate-x-1" />
              </a>

              {/* Instagram + Ubicación */}
              <div className="mt-3 space-y-3">
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
            </StaggerReveal>
          </div>

          {/* ── Postal: formulario ── */}
          <Reveal
            as="div"
            y={32}
            scale={0.97}
            className="relative rounded-[20px] p-7 sm:p-9"
            style={{
              background: "var(--cream)",
              border: "1px solid var(--gold)",
              boxShadow: "0 22px 55px rgba(7,18,13,0.35)",
            }}
          >
            {/* Sello postal */}
            <div
              className="absolute -top-4 right-6 sm:right-8 grid place-items-center text-center px-3 py-2 rotate-3"
              style={{
                background: "var(--sand-soft)",
                border: "2px dashed var(--gold)",
                borderRadius: "6px",
              }}
            >
              <span
                className="font-serif text-base font-semibold leading-none"
                style={{ color: "var(--green)", letterSpacing: "0.04em" }}
              >
                PÓMA
              </span>
              <span
                className="eyebrow text-[7px] mt-1"
                style={{ color: "var(--terra)" }}
              >
                Tafí · 2025
              </span>
            </div>

            <p
              className="eyebrow text-[12px] mb-2"
              style={{ color: "var(--terra)" }}
            >
              Dejanos tu mensaje
            </p>
            <h3
              className="font-serif text-3xl font-medium mb-7"
              style={{ color: "var(--deepgreen)" }}
            >
              Enviá una consulta
            </h3>

            <form className="space-y-6" action={WHATSAPP}>
              <div>
                <label
                  className="block eyebrow text-[11px] mb-2"
                  style={{ color: "var(--muted)" }}
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="¿Cómo te llamás?"
                  className="w-full bg-transparent border-b border-[#d8c9ad] px-1 py-2.5 text-[15px] text-[#2a2a26] placeholder:text-[#a99e88] outline-none transition-colors focus:border-[#c08a2d]"
                />
              </div>
              <div>
                <label
                  className="block eyebrow text-[11px] mb-2"
                  style={{ color: "var(--muted)" }}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-transparent border-b border-[#d8c9ad] px-1 py-2.5 text-[15px] text-[#2a2a26] placeholder:text-[#a99e88] outline-none transition-colors focus:border-[#c08a2d]"
                />
              </div>
              <div>
                <label
                  className="block eyebrow text-[11px] mb-2"
                  style={{ color: "var(--muted)" }}
                  htmlFor="mensaje"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={3}
                  placeholder="Contanos qué te gustaría descubrir..."
                  className="w-full bg-transparent border-b border-[#d8c9ad] px-1 py-2.5 text-[15px] text-[#2a2a26] placeholder:text-[#a99e88] outline-none transition-colors focus:border-[#c08a2d] resize-none"
                />
              </div>
              <button
                type="submit"
                className="press-btn w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[13px] eyebrow text-white"
                style={{ background: "var(--green)" }}
              >
                Enviar consulta <i className="ti ti-arrow-right text-base" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
