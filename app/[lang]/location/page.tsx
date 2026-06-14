import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import MapComponent from "../components/MapComponent";
import PageHero from "../components/PageHero";
import TouristicInfoCard from "../components/TouristicInfoCard";

const copy: Record<Locale, { mapTitle: string; mapEyebrow: string }> = {
  en: {
    mapTitle: "Three blocks from Cusco's main square",
    mapEyebrow: "Historic center",
  },
  es: {
    mapTitle: "A tres cuadras de la plaza principal del Cusco",
    mapEyebrow: "Centro historico",
  },
};

const attractionImages = [
  "/catedralfull.png",
  // TODO image asset: replace with a 1200x800px photo of Santa Catalina Convent.
  "/catedralfull.png",
  // TODO image asset: replace with a 1200x800px photo of San Pedro Market.
  "/catedralfull.png",
  // TODO image asset: replace with a 1200x800px photo of Ollantaytambo.
  "/machu2.png",
  "/machu.png",
  // TODO image asset: replace with a 1200x800px photo of Rainbow Mountain.
  "/machu2.png",
];

export default async function Location({
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
        eyebrow={page.location.title}
        title={page.location.subtitle}
        description={page.location.slogan}
        image="/cusco-2.jpg"
      />

      <section className="qori-section bg-white">
        <div className="qori-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="qori-card p-8 md:p-12">
            <p className="qori-label mb-4">{copy[langLocale].mapEyebrow}</p>
            <h2 className="qori-heading">{copy[langLocale].mapTitle}</h2>
            <p className="qori-subheading mt-6">{page.location.description}</p>
          </article>
          <div className="overflow-hidden rounded-3xl border border-qori-outline/15 shadow-[0_24px_60px_rgba(147,48,24,0.08)]">
            <MapComponent />
          </div>
        </div>
      </section>

      <section className="qori-section qori-pattern bg-qori-surface-low">
        <div className="qori-container relative space-y-6">
          {page.location.articles.map((article, index) => (
            <TouristicInfoCard
              key={article.article}
              order={index % 2 === 0}
              title={article.article}
              subtitle={article.description}
              image={attractionImages[index]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
