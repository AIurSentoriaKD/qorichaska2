import { Locale } from "@/i18n.config";
import GalleryHome from "./GalleryHome";

const copy: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Rooms for quiet nights in Cusco",
    description:
      "Single, double, triple, matrimonial, and family rooms prepared for rest after a day in the city.",
  },
  es: {
    title: "Habitaciones para descansar en Cusco",
    description:
      "Habitaciones simples, dobles, triples, matrimoniales y familiares preparadas para descansar despues de recorrer la ciudad.",
  },
};

async function RoomsMinimal({ lang }: { lang: Locale }) {
  const galleryImages = [
    { image: "single.jpg", label: lang === "en" ? "Single room" : "Habitacion simple" },
    { image: "double.jpg", label: lang === "en" ? "Double room" : "Habitacion doble" },
    { image: "triple.jpg", label: lang === "en" ? "Triple room" : "Habitacion triple" },
    { image: "matrim.jpg", label: lang === "en" ? "Matrimonial room" : "Habitacion matrimonial" },
    { image: "squad.jpg", label: lang === "en" ? "Family room" : "Habitacion familiar" },
  ];

  return (
    <section className="qori-section bg-qori-surface">
      <div className="qori-container">
        <div className="mb-12 max-w-3xl">
          <h2 className="qori-heading text-qori-ink">{copy[lang].title}</h2>
          <p className="mt-5 text-lg leading-8 text-qori-muted">
            {copy[lang].description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {galleryImages.map((item) => (
            <GalleryHome image={item.image} label={item.label} key={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsMinimal;
