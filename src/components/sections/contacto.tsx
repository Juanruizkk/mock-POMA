const WHATSAPP = "https://wa.me/5493812032123";
const INSTAGRAM = "https://instagram.com/poma.tafidelvalle";

export function Contacto() {
  return (
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
  );
}
