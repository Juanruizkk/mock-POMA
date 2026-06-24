import { Gallery } from "@/components/gallery";

const images = [
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

export function Galeria() {
  return (
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

      <Gallery images={images} />
    </section>
  );
}
