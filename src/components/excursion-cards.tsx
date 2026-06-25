"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Dificultad = "Baja" | "Media" | "Alta";

type Excursion = {
  title: string;
  tipo: string;
  tipoIcono: string;
  dificultad: Dificultad | null;
  duracion: string | null;
  distancia?: string;
  desc: string;
  mainImg: string;
  gallery: string[];
};

const DIFF_DOT: Record<Dificultad, string> = {
  Baja: "#6ee7b7",
  Media: "#d97706",
  Alta: "#dc2626",
};

const excursiones: Excursion[] = [
  {
    title: "Cascadas de la Costa",
    tipo: "Trekking",
    tipoIcono: "footprint",
    dificultad: "Baja",
    duracion: "3h 30min",
    desc: "Un recorrido entre vegetación, agua y paisajes que sorprenden en cada paso. Perfecto para disfrutar en familia y conectar con la naturaleza.",
    mainImg: "/Excursiones/CascadaDeLaCosta.webp",
    gallery: [
      "/Fotos Excursiones/CascadaLaCosta/105603040Master.jpg",
      "/Fotos Excursiones/CascadaLaCosta/images.jpeg",
    ],
  },
  {
    title: "La Ciénaga",
    tipo: "Trekking",
    tipoIcono: "footprint",
    dificultad: "Media",
    duracion: "8 horas",
    distancia: "26 km",
    desc: "Paraje de montaña ubicado a más de 2.700 metros sobre el nivel del mar, La Ciénaga es un valle de altura que combina historia, paisaje y cultura en un solo recorrido. El camino atraviesa pircas históricas, ovejas que pastorean libremente y caballos que se cruzan en el sendero, mientras el guía va compartiendo datos sobre la cultura tafí, una civilización precolombina que habitó esta región. Al llegar, un refugio de montaña que funciona en lo que fuera una antigua escuelita espera con agua caliente y un descanso bien ganado. Un destino exigente, pero con recompensa de esas que no se olvidan.",
    mainImg: "/Excursiones/LaCienaga.webp",
    gallery: [
      "/Fotos Excursiones/La ciénaga/FB_IMG_1781372173736.jpg",
      "/Fotos Excursiones/La ciénaga/FB_IMG_1781372182082.jpg",
      "/Fotos Excursiones/La ciénaga/FB_IMG_1781372210165.jpg",
    ],
  },
  {
    title: "Cerro El Pelado",
    tipo: "Trekking Nocturno",
    tipoIcono: "nights_stay",
    dificultad: "Baja",
    duracion: "2h 30min",
    desc: "A 2.680 metros sobre el nivel del mar, este cerro divide en dos el Valle de Tafí y permite una de las vistas más espectaculares de ese escenario natural. De noche, la experiencia se transforma: el valle iluminado, el silencio de la montaña y un cielo cargado de estrellas convierten la caminata en algo difícil de explicar con palabras. El sendero está señalizado y no requiere equipamiento especial, solo ganas de elevarse entre las piedras. Ideal para quienes quieren vivir Tafí desde otro ángulo, literalmente.",
    mainImg: "/Excursiones/ElPelado.webp",
    gallery: [
      "/Fotos Excursiones/CerroElPelado/16112574.jpg",
      "/Fotos Excursiones/CerroElPelado/57875521Master.jpg",
      "/Fotos Excursiones/CerroElPelado/76466906.700x525.jpg",
    ],
  },
  {
    title: "Cafayate",
    tipo: "Excursión en Vehículo",
    tipoIcono: "directions_car",
    dificultad: null,
    duracion: "8 horas",
    desc: "Uno de los destinos más emblemáticos del norte argentino, Cafayate sorprende con la diversidad de experiencias que ofrece en un solo día. Formaciones rocosas únicas, bodegas, gastronomía regional y un paisaje que cambia de color kilómetro a kilómetro por la Ruta Nacional 40. Es cultura, naturaleza y sabor en un mismo recorrido, con el imponente telón de fondo de los Valles Calchaquíes.",
    mainImg: "/Excursiones/Cafayate.webp",
    gallery: [
      "/Fotos Excursiones/Cafayate/02-7.jpg",
      "/Fotos Excursiones/Cafayate/102892298Master.jpg",
      "/Fotos Excursiones/Cafayate/30139936.jpg",
      "/Fotos Excursiones/Cafayate/baedae04-3529-41ee-a19b-f9d80bc26167.jpeg",
      "/Fotos Excursiones/Cafayate/Cafayate_Amphitheatre.jpeg",
      "/Fotos Excursiones/Cafayate/images (1).jpeg",
      "/Fotos Excursiones/Cafayate/museo la pachamama  (1)_nruj56oc_24-06-2025.jpg",
      "/Fotos Excursiones/Cafayate/SRV52BDNOJG6BODWR33UTY5MCU.jpg",
    ],
  },
  {
    title: "Santa María – Ruta de la Capia",
    tipo: "Excursión en Vehículo",
    tipoIcono: "directions_car",
    dificultad: null,
    duracion: "6 horas",
    desc: "Santa María guarda una de las tradiciones más arraigadas del noroeste argentino: la capia, el maíz blanco sagrado de los pueblos originarios. Esta excursión combina los paisajes de los Valles Calchaquíes con una experiencia artesanal única, donde se aprende de primera mano cómo se elabora este cultivo ancestral. Historia, cultura y sabores que conectan con siglos de identidad calchaquí.",
    mainImg: "/Excursiones/RutaCapia.webp",
    gallery: [],
  },
  {
    title: "Quebrada de Los Sosa",
    tipo: "Excursión en Vehículo",
    tipoIcono: "directions_car",
    dificultad: null,
    duracion: "4 horas",
    desc: "Corredor natural que conecta distintos ecosistemas y permite observar la transición entre zonas áridas y húmedas. La ruta entre la selva tucumana se abre paso entre ríos, vegetación exuberante y miradores naturales que invitan a frenar y respirar. Ideal para el avistaje de aves y para quienes buscan una experiencia relajada sin sacrificar paisajes únicos. Una postal diferente a la montaña, pero igual de impactante.",
    mainImg: "/Excursiones/LosSosa.webp",
    gallery: [],
  },
  {
    title: "Vuelta al Lago",
    tipo: "Excursión en Vehículo",
    tipoIcono: "directions_car",
    dificultad: null,
    duracion: null,
    desc: "Un paseo que recorre los paisajes más lindos de Tafí del Valle siguiendo el contorno del dique La Angostura. Montañas que se reflejan en el agua, verde en todas sus tonalidades y una tranquilidad que se contagia con solo bajar la ventanilla. Perfecto para disfrutar en familia y sin apuro, con paradas en miradores que regalan postales de las mejores de la región.",
    mainImg: "/Excursiones/vueltaalLago.webp",
    gallery: [
      "/Fotos Excursiones/Vuelta al lago en auto/cristo_qdlq8qr2_15-12-2025.jpeg",
      "/Fotos Excursiones/Vuelta al lago en auto/cristo_r2qt5k8z_15-12-2025.jpg",
      "/Fotos Excursiones/Vuelta al lago en auto/IMG-20260613-WA0026.jpg",
      "/Fotos Excursiones/Vuelta al lago en auto/ok20112024angostura.jpg",
      "/Fotos Excursiones/Vuelta al lago en auto/proliferan-algas-menor-caudal-dique-angostura-1066526-081505.jpg",
    ],
  },
  {
    title: "Quilmes",
    tipo: "Excursión en Vehículo",
    tipoIcono: "directions_car",
    dificultad: null,
    duracion: "6 horas",
    desc: "Las Ruinas de Quilmes son uno de los sitios arqueológicos más importantes de la región y una de las atracciones turísticas más populares de Tucumán. Los Quilmes fueron un pueblo indígena que alcanzó un enorme desarrollo social y económico, llegando a tener 3.000 habitantes en el área urbana y 10.000 en los alrededores. Hoy es posible recorrer el sitio acompañado por guías descendientes del pueblo quilme, quienes transmiten la historia y cosmovisión de sus ancestros. Un lugar que trasciende el turismo y se convierte en un encuentro con la memoria.",
    mainImg: "/Fotos Excursiones/Quilmes/ruinas-de-quilmes.jpg",
    gallery: [
      "/Fotos Excursiones/Quilmes/cristo_qdlq8qr2_15-12-2025.jpeg",
      "/Fotos Excursiones/Quilmes/DJI_0304_cuqi9u6h_24-06-2025.jpg",
      "/Fotos Excursiones/Quilmes/images (1).jpeg",
      "/Fotos Excursiones/Quilmes/museo la pachamama  (1)_nruj56oc_24-06-2025.jpg",
      "/Fotos Excursiones/Quilmes/ruinas-de-quilmes.jpg",
      "/Fotos Excursiones/Quilmes/SRV52BDNOJG6BODWR33UTY5MCU.jpg",
    ],
  },
  {
    title: "Loma La Cruz",
    tipo: "Trekking",
    tipoIcono: "footprint",
    dificultad: "Baja",
    duracion: "2h 30min",
    desc: "A tan solo 20 o 30 minutos de caminata desde el centro de Tafí del Valle, se puede llegar a una de las cimas con mejores vistas de todo el valle. No es necesario tener equipamiento especial ni grandes horas de entrenamiento: simplemente ganas de elevarse entre las piedras. El sendero está señalizado y permite elegir el ritmo propio. Cuando la agitación de la caminata se calma, el panorama que aparece es de esos que hacen valer cada paso.",
    mainImg: "/Fotos Excursiones/LomaLaCruz/file_000000002304720eb655c6402fda4c69.png",
    gallery: [
      "/Fotos Excursiones/LomaLaCruz/FB_IMG_1781372242218.jpg",
      "/Fotos Excursiones/LomaLaCruz/file_000000002304720eb655c6402fda4c69.png",
    ],
  },
  {
    title: "Fuerte Viejo",
    tipo: "Trekking",
    tipoIcono: "footprint",
    dificultad: "Alta",
    duracion: "6 horas",
    desc: "El recorrido parte desde la zona de Molle Solo, ubicada antes de la Estancia Las Carreras, y llega hasta los 3.300 metros de altura. A lo largo del camino se puede adentrarse en la cultura Tafí, cruzarse con pastores de la zona y descubrir vestigios de la historia local entre pastizales y cerros rocosos. Cultura, historia y naturaleza se combinan en estas sendas que los pueblos originarios usaban para unir el valle de Tafí con la llanura tucumana, y por las que más tarde llegaron las corrientes colonizadoras. Un desafío real para los que buscan algo más que un paseo.",
    mainImg: "/Fotos Excursiones/La ciénaga/FB_IMG_1781372173736.jpg",
    gallery: [],
  },
  {
    title: "Cueva Los Corrales",
    tipo: "Trekking",
    tipoIcono: "footprint",
    dificultad: "Baja",
    duracion: "2h 30min",
    desc: "Cueva de Los Corrales se ubica en la Quebrada de Los Corrales, en El Infiernillo, y es un sitio arqueológico de alta montaña con evidencias de ocupación humana de hace más de 3.000 años. El sendero para llegar es accesible y el premio es notable: una cueva con restos bien preservados, morteros tallados en la roca y un paisaje de cumbres calchaquíes que pocas personas llegan a ver. Una combinación de naturaleza e historia que sorprende.",
    mainImg: "/Fotos Excursiones/Cuevas los corrales/20230416_175133.jpg",
    gallery: [
      "/Fotos Excursiones/Cuevas los corrales/20230416_175133.jpg",
    ],
  },
  {
    title: "Casco Céntrico",
    tipo: "Caminata Histórica",
    tipoIcono: "location_city",
    dificultad: "Baja",
    duracion: "1h 30min",
    desc: "La Ciudad Histórica de San Miguel de Tucumán invita a sumergirse en la gesta de la independencia argentina, que nació en sus calles adoquinadas y cuyo aura perdura hasta el día de hoy. El recorrido pasa por la Casa Histórica de la Independencia, la Iglesia Catedral, la Plaza Independencia con la estatua de la Libertad de Lola Mora, y los distintos edificios que la rodean. Una caminata corta pero densa en historia, perfecta para entender de dónde venimos.",
    mainImg: "/Fotos Excursiones/Casco céntrico caminata/tafi-del-valle-tucumán-la-argentina-92559800.jpg",
    gallery: [
      "/Fotos Excursiones/Casco céntrico caminata/tafi-del-valle-tucumán-la-argentina-92559800.jpg",
    ],
  },
  {
    title: "Cascada Los Alisos",
    tipo: "Trekking",
    tipoIcono: "footprint",
    dificultad: "Media",
    duracion: "3 horas",
    desc: "El ascenso de 300 metros hasta la Cascada de Los Alisos lleva a una caída de agua de 60 metros, una de las grandes bellezas de la provincia. Durante el recorrido por la ladera del Cerro Muñoz, los cóndores sobrevuelan en el cielo y se puede observar la condorera. El sonido del agua anunciándose antes de llegar y el impacto del salto desde abajo son de esos momentos que quedan grabados. En invierno, el agua se congela y transforma el lugar en una postal de otro mundo.",
    mainImg: "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781372102256.jpg",
    gallery: [
      "/Fotos Excursiones/CascadaLosAlisos/20073826.jpg",
      "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781372102256.jpg",
      "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781373575671.jpg",
      "/Fotos Excursiones/CascadaLosAlisos/FB_IMG_1781373581524.jpg",
    ],
  },
  {
    title: "Cascada El Rincón",
    tipo: "Trekking",
    tipoIcono: "footprint",
    dificultad: "Media",
    duracion: "3 horas",
    desc: "Entre Tafí del Valle y El Mollar, se esconde un verdadero tesoro natural que recompensa a quienes se animan a caminar sin apuro y con los sentidos bien despiertos. La Cascada de El Rincón aparece como un regalo inesperado en el piedemonte del Cerro Muñoz, en una zona donde el paisaje impone respeto, silencio y una conexión profunda con la naturaleza. Sin señalización oficial ni infraestructura turística, justamente ahí radica su encanto. Es un destino ideal para trekking de dificultad media, recomendado para personas con experiencia básica en montaña.",
    mainImg: "/Fotos Excursiones/Cascada el Rincon/FB_IMG_1781375535235.jpg",
    gallery: [
      "/Fotos Excursiones/Cascada el Rincon/FB_IMG_1781375535235.jpg",
      "/Fotos Excursiones/Cascada el Rincon/FB_IMG_1781375540390.jpg",
    ],
  },
];

type Filtro = "Todos" | "Vehículo" | "Baja" | "Media" | "Alta";

const FILTROS: { label: string; value: Filtro }[] = [
  { label: "Todos", value: "Todos" },
  { label: "En Vehículo", value: "Vehículo" },
  { label: "Dificultad Baja", value: "Baja" },
  { label: "Dificultad Media", value: "Media" },
  { label: "Dificultad Alta", value: "Alta" },
];

export function ExcursionCards() {
  const [selected, setSelected] = useState<Excursion | null>(null);
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const lbOpen = lbIdx !== null;
  const gallery = selected?.gallery ?? [];

  // Refs para animación GSAP del lightbox (igual que gallery.tsx)
  const overlayRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const dirRef = useRef(1);
  const openedRef = useRef(false);
  const closeRef = useRef<() => void>(() => setLbIdx(null));

  const closeLb = useCallback(() => closeRef.current(), []);
  const nextImg = useCallback(() => {
    dirRef.current = 1;
    setLbIdx((i) => (i === null ? i : (i + 1) % gallery.length));
  }, [gallery.length]);
  const prevImg = useCallback(() => {
    dirRef.current = -1;
    setLbIdx((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);

  // Animación GSAP: apertura, cambio de foto y cierre
  useGSAP(
    (_ctx, contextSafe) => {
      if (lbIdx === null) { openedRef.current = false; return; }
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      closeRef.current = contextSafe?.(() => {
        if (reduce || !overlayRef.current) { setLbIdx(null); return; }
        gsap.to(figureRef.current, { opacity: 0, scale: 0.98, duration: 0.25, ease: "power2.in" });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => setLbIdx(null) });
      }) ?? (() => setLbIdx(null));

      if (reduce) { openedRef.current = true; return; }

      if (!openedRef.current) {
        openedRef.current = true;
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.fromTo(figureRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" });
      } else {
        gsap.fromTo(figureRef.current,
          { opacity: 0, x: 40 * dirRef.current },
          { opacity: 1, x: 0, duration: 0.4, ease: "power3.out", overwrite: true }
        );
      }
    },
    { dependencies: [lbIdx], scope: overlayRef }
  );

  const visibles = excursiones.filter((exc) => {
    if (filtro === "Todos") return true;
    if (filtro === "Vehículo") return exc.dificultad === null;
    return exc.dificultad === filtro;
  });

  // Keyboard: ESC y flechas para el lightbox; ESC para el modal
  useEffect(() => {
    if (!selected && !lbOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (lbOpen) {
        if (e.key === "Escape") closeLb();
        else if (e.key === "ArrowRight") nextImg();
        else if (e.key === "ArrowLeft") prevImg();
      } else {
        if (e.key === "Escape") setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, lbOpen, closeLb, nextImg, prevImg]);

  return (
    <>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTROS.map((f) => {
          const active = filtro === f.value;
          const dot = f.value in DIFF_DOT ? DIFF_DOT[f.value as Dificultad] : null;
          return (
            <button
              key={f.value}
              onClick={() => setFiltro(f.value)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-200"
              style={{
                borderRadius: "100px",
                background: active ? "var(--deepgreen)" : "rgba(22,51,40,0.07)",
                border: `1px solid ${active ? "var(--deepgreen)" : "rgba(22,51,40,0.14)"}`,
                color: active ? "var(--cream)" : "var(--muted)",
              }}
            >
              {dot && (
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: dot, opacity: active ? 1 : 0.7 }}
                />
              )}
              {f.value === "Vehículo" && (
                <i className="ti ti-car text-[11px]" style={{ opacity: active ? 1 : 0.6 }} />
              )}
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibles.map((exc) => (
          <button
            key={exc.title}
            onClick={() => setSelected(exc)}
            className="group relative overflow-hidden aspect-[3/4] block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
          >
            {/* Imagen */}
            <Image
              src={exc.mainImg}
              alt={exc.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            {/* Badge dificultad — top-left */}
            <div className="absolute top-3 left-3">
              {exc.dificultad ? (
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/90"
                  style={{
                    background: "rgba(6,14,10,0.58)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(212,175,100,0.22)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: DIFF_DOT[exc.dificultad] }}
                  />
                  {exc.dificultad}
                </span>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/80"
                  style={{
                    background: "rgba(6,14,10,0.58)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(212,175,100,0.22)",
                  }}
                >
                  <span className="material-symbols-outlined text-[11px] opacity-70">directions_car</span>
                  Vehículo
                </span>
              )}
            </div>

            {/* Info — bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5 text-white/65 mb-1.5">
                <span className="material-symbols-outlined text-[13px]">{exc.tipoIcono}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">{exc.tipo}</span>
                {exc.duracion && (
                  <>
                    <span className="text-white/35">·</span>
                    <span className="text-[10px] font-semibold">{exc.duracion}</span>
                  </>
                )}
              </div>
              <h3 className="font-[var(--font-headline)] text-white text-[19px] font-semibold leading-tight">
                {exc.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {/* Modal del destino */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(6,14,10,0.9)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden flex shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            style={{ height: "min(92vh, 760px)", borderRadius: "6px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Columna izquierda: foto full-height ── */}
            <div className="relative w-[44%] shrink-0">
              <Image
                src={selected.mainImg}
                alt={selected.title}
                fill
                className="object-cover"
                priority
              />
              {/* Gradiente profundo abajo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/20" />

              {/* Badge dificultad / tipo — top left */}
              <div className="absolute top-4 left-4">
                {selected.dificultad ? (
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/90"
                    style={{
                      background: "rgba(6,14,10,0.55)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(212,175,100,0.25)",
                      borderRadius: "2px",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: DIFF_DOT[selected.dificultad] }} />
                    {selected.dificultad}
                  </span>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80"
                    style={{
                      background: "rgba(6,14,10,0.55)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(212,175,100,0.25)",
                      borderRadius: "2px",
                    }}
                  >
                    <i className="ti ti-car text-[11px] opacity-80" />
                    Vehículo
                  </span>
                )}
              </div>

              {/* Título sobre la foto */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-7">
                <p className="eyebrow text-[9px] mb-2" style={{ color: "rgba(224,176,85,0.7)" }}>
                  {selected.tipo}
                </p>
                <h2
                  className="font-serif text-white font-medium leading-tight"
                  style={{ fontSize: "clamp(22px, 3vw, 30px)" }}
                >
                  {selected.title}
                </h2>
              </div>
            </div>

            {/* ── Columna derecha: panel editorial oscuro ── */}
            <div
              className="relative flex-1 flex flex-col overflow-hidden"
              style={{ background: "var(--deepgreen)" }}
            >
              {/* Noise */}
              <div className="absolute inset-0 noise opacity-[0.08] pointer-events-none" />

              {/* Botón cerrar */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(250,245,236,0.07)",
                  border: "1px solid rgba(250,245,236,0.12)",
                  color: "rgba(250,245,236,0.55)",
                }}
                aria-label="Cerrar"
                onMouseOver={(e) => (e.currentTarget.style.color = "rgba(250,245,236,0.95)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "rgba(250,245,236,0.55)")}
              >
                <i className="ti ti-x text-base" />
              </button>

              {/* Contenido scrollable */}
              <div className="flex-1 overflow-y-auto px-6 pt-6 pb-4 flex flex-col gap-5 relative">

                {/* Badges de metadata */}
                <div className="flex flex-wrap gap-2 pr-10">
                  {selected.dificultad && (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        background: "rgba(250,245,236,0.07)",
                        border: "1px solid rgba(250,245,236,0.1)",
                        borderRadius: "100px",
                        color: "rgba(245,241,236,0.7)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: DIFF_DOT[selected.dificultad] }} />
                      {selected.dificultad}
                    </span>
                  )}
                  {selected.duracion && (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        background: "rgba(250,245,236,0.07)",
                        border: "1px solid rgba(250,245,236,0.1)",
                        borderRadius: "100px",
                        color: "rgba(245,241,236,0.7)",
                      }}
                    >
                      <i className="ti ti-clock text-[11px]" />
                      {selected.duracion}
                    </span>
                  )}
                  {selected.distancia && (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        background: "rgba(250,245,236,0.07)",
                        border: "1px solid rgba(250,245,236,0.1)",
                        borderRadius: "100px",
                        color: "rgba(245,241,236,0.7)",
                      }}
                    >
                      <i className="ti ti-route text-[11px]" />
                      {selected.distancia}
                    </span>
                  )}
                </div>

                {/* Hairline dorada */}
                <div className="h-px" style={{ background: "rgba(224,176,85,0.18)" }} />

                {/* Descripción */}
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "rgba(245,241,236,0.68)" }}
                >
                  {selected.desc}
                </p>

                {/* Galería */}
                {selected.gallery.length > 0 && (
                  <div>
                    <p
                      className="eyebrow text-[9px] mb-2.5"
                      style={{ color: "rgba(224,176,85,0.45)" }}
                    >
                      Galería de fotos
                    </p>
                    <div className="grid grid-cols-3 gap-1.5">
                      {selected.gallery.slice(0, 6).map((img, i) => (
                        <button
                          key={img}
                          onClick={() => setLbIdx(i)}
                          className="relative aspect-[4/3] overflow-hidden group/img"
                          style={{ borderRadius: "3px" }}
                          aria-label="Ver foto"
                        >
                          <img
                            src={encodeURI(img)}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                          />
                          <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity"
                            style={{ background: "rgba(6,14,10,0.5)" }}
                          >
                            <i className="ti ti-zoom-in text-white text-lg" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA sticky */}
              <div
                className="shrink-0 px-5 py-4 relative"
                style={{ borderTop: "1px solid rgba(224,176,85,0.14)" }}
              >
                <a
                  href="https://wa.me/5493812032123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-btn flex items-center justify-center gap-2.5 w-full py-3.5 eyebrow text-[11px] rounded-full transition-opacity hover:opacity-90"
                  style={{ background: "var(--gold-bright)", color: "var(--deepgreen)" }}
                >
                  <i className="ti ti-brand-whatsapp text-base" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox con navegación y animación GSAP */}
      {lbOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "rgba(6,14,10,0.94)" }}
          onClick={closeLb}
        >
          <button
            onClick={closeLb}
            aria-label="Cerrar"
            className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full text-2xl text-white/80 hover:text-white transition-colors"
            style={{ background: "rgba(250,245,236,0.08)" }}
          >
            <i className="ti ti-x" />
          </button>

          {gallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                aria-label="Anterior"
                className="absolute left-4 sm:left-6 grid place-items-center h-12 w-12 rounded-full text-2xl text-white/80 hover:text-white transition-colors"
                style={{ background: "rgba(250,245,236,0.08)" }}
              >
                <i className="ti ti-chevron-left" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                aria-label="Siguiente"
                className="absolute right-4 sm:right-6 grid place-items-center h-12 w-12 rounded-full text-2xl text-white/80 hover:text-white transition-colors"
                style={{ background: "rgba(250,245,236,0.08)" }}
              >
                <i className="ti ti-chevron-right" />
              </button>
            </>
          )}

          <figure
            ref={figureRef}
            className="flex flex-col items-center gap-3 px-16 sm:px-24 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={encodeURI(gallery[lbIdx!])}
              alt=""
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            {gallery.length > 1 && (
              <p className="eyebrow text-[11px] text-white/45">
                {lbIdx! + 1} / {gallery.length}
              </p>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
