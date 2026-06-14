import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import PageHero from "../components/PageHero";

const copy: Record<Locale, { eyebrow: string; intro: string }> = {
  en: {
    eyebrow: "Gallery",
    intro:
      "A look at the rooms, city views, and spaces that shape a stay at Hotel Qorichaska.",
  },
  es: {
    eyebrow: "Galeria",
    intro:
      "Una mirada a las habitaciones, vistas de la ciudad y espacios que forman la experiencia en Hotel Qorichaska.",
  },
};

const images = [
  { src: "/hotelview1.jpg", span: "lg:col-span-2", label: "Hotel view" },
  { src: "/single.jpg", span: "", label: "Single room" },
  { src: "/double.jpg", span: "", label: "Double room" },
  { src: "/triple.jpg", span: "", label: "Triple room" },
  { src: "/matrim.jpg", span: "lg:col-span-2", label: "Matrimonial room" },
  { src: "/squad.jpg", span: "", label: "Family room" },
  { src: "/cusco-2.jpg", span: "lg:col-span-2", label: "Cusco" },
];

export default async function Gallery({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langLocale = lang as Locale;
  const { page } = await getDictionary(langLocale);

  return (
    <div className="overflow-hidden">
      <PageHero
        lang={langLocale}
        eyebrow={copy[langLocale].eyebrow}
        title={page.gallery.title}
        description={copy[langLocale].intro}
        image="/hotelview1.jpg"
      />

      <section className="qori-section">
        <div className="qori-container">
          <div className="grid auto-rows-[320px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {images.map((item) => (
              <figure
                key={item.src}
                className={`group relative overflow-hidden rounded-3xl border border-qori-outline/15 bg-white shadow-[0_24px_60px_rgba(147,48,24,0.08)] ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-6 text-sm font-extrabold uppercase tracking-[0.05em] text-white">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
