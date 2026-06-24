import Link from "next/link";

const personas = [
  {
    icon: "ti-car",
    name: "Sergio",
    role: "Excursiones en vehículo",
    desc: "Lidera los recorridos y conoce cada camino de los Valles Calchaquíes.",
    cta: "Ver excursiones",
  },
  {
    icon: "ti-mountain",
    name: "Naty",
    role: "Trekking & caminatas",
    desc: "Guía de montaña, enamorada de los senderos y cumbres del valle.",
    cta: "Ver caminatas",
  },
];

export function QuienesSomos() {
  return (
    <section
      id="quienes"
      className="relative overflow-hidden"
      style={{ background: "var(--deepgreen)" }}
    >
      <div className="absolute inset-0 noise opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {/* ── Encabezado editorial: titular + intro a dos columnas ── */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-x-14 gap-y-8 items-end">
          <div>
            <p
              className="reveal eyebrow text-[12px] mb-5"
              style={{ color: "var(--gold-bright)" }}
            >
              Quiénes somos
            </p>
            <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.02em] font-medium text-white">
              Una familia,
              <br />
              <span className="italic font-normal" style={{ color: "var(--gold-bright)" }}>
                dos pasiones
              </span>
              ,<br />
              un mismo valle
            </h2>
          </div>
          <div className="reveal space-y-4">
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(245,241,236,0.82)" }}>
              PÓMA nació el 15 de octubre de 2025, de la mano de{" "}
              <span className="text-white font-semibold">Sergio y Naty</span>, ambos
              Técnicos en Turismo enamorados de su tierra. No somos una agencia: somos
              vecinos que decidimos compartir lo que más amamos.
            </p>
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(245,241,236,0.82)" }}>
              Creemos en un turismo honesto, cercano y respetuoso con la naturaleza, la
              historia y la gente de los Valles Calchaquíes.
            </p>
          </div>
        </div>

        {/* ── Divisor firma: hairline dorada con el lugar real ── */}
        <div className="reveal flex items-center gap-5 my-12 lg:my-16">
          <span className="h-px flex-1" style={{ background: "rgba(224,176,85,0.35)" }} />
          <span className="eyebrow text-[11px] whitespace-nowrap" style={{ color: "var(--gold-bright)" }}>
            Tafí del Valle · Valles Calchaquíes
          </span>
          <span className="h-px flex-1" style={{ background: "rgba(224,176,85,0.35)" }} />
        </div>

        {/* ── Cuerpo: foto enmarcada + las dos pasiones como filas ── */}
        <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 items-stretch">
          {/* Retrato con epígrafe */}
          <figure
            className="reveal relative rounded-2xl overflow-hidden min-h-[340px] lg:min-h-full"
            style={{ border: "1px solid rgba(224,176,85,0.4)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Fotos Excursiones/fotos-nosotros.jpeg"
              alt="Sergio y Naty, fundadores de PÓMA"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,51,40,0) 45%, rgba(22,51,40,0.9) 100%)",
              }}
            />
            <figcaption className="absolute bottom-0 left-0 p-5 lg:p-6">
              <span className="block eyebrow text-[10px]" style={{ color: "var(--gold-bright)" }}>
                Fundadores
              </span>
              <span className="block font-serif text-2xl text-white font-medium mt-1">
                Sergio &amp; Naty
              </span>
            </figcaption>
          </figure>

          {/* Las dos pasiones, una bajo la otra, conectadas */}
          <div className="reveal flex flex-col">
            {personas.map((p, i) => (
              <Link
                key={p.name}
                href="/excursiones"
                className="group flex-1 flex items-start gap-5 py-7 lg:py-8 transition-colors"
                style={
                  i === 1
                    ? { borderTop: "1px solid rgba(224,176,85,0.25)" }
                    : undefined
                }
              >
                <span
                  className="grid place-items-center h-14 w-14 rounded-full text-2xl shrink-0"
                  style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}
                >
                  <i className={`ti ${p.icon}`} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow text-[10px]" style={{ color: "var(--gold-bright)" }}>
                    {p.role}
                  </p>
                  <p className="font-serif text-2xl lg:text-3xl text-white font-medium mt-1">
                    {p.name}
                  </p>
                  <p
                    className="mt-2 text-[15px] leading-relaxed max-w-md"
                    style={{ color: "rgba(245,241,236,0.7)" }}
                  >
                    {p.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[12px] eyebrow text-white/90">
                    {p.cta}
                    <i className="ti ti-arrow-right transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
