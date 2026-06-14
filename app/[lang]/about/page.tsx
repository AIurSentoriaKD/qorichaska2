import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import PageHero from "../components/PageHero";

const copy: Record<Locale, { eyebrow: string; imageTitle: string }> = {
  en: {
    eyebrow: "Tradition and hospitality",
    imageTitle: "Cusco heritage",
  },
  es: {
    eyebrow: "Tradicion y hospitalidad",
    imageTitle: "Herencia cusquena",
  },
};

export default async function About({
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
        eyebrow={page.about.title}
        title={page.about.slogan}
        description={page.about.description}
        image="/cusco-2.jpg"
      />

      <section className="qori-section">
        <div className="qori-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[560px] overflow-hidden qori-arch border-[10px] border-white shadow-[0_30px_70px_rgba(147,48,24,0.14)]">
            <Image
              src="/catedral1.png"
              alt={copy[langLocale].imageTitle}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <article className="qori-card p-8 md:p-12">
            <p className="qori-label mb-5">{copy[langLocale].eyebrow}</p>
            <h2 className="qori-heading">{page.about.art1.pre}</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-qori-muted">
              <p>{page.about.art1.first}</p>
              <p>{page.about.art1.second}</p>
              <p>{page.about.art1.third}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
