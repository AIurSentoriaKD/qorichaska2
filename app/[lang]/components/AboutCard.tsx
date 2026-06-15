import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";

const labels: Record<Locale, { eyebrow: string; action: string }> = {
  en: { eyebrow: "Our story", action: "About us" },
  es: { eyebrow: "Nuestra historia", action: "Acerca de" },
};

async function AboutCard({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);

  return (
    <section className="qori-section qori-pattern qori-soft-section">
      <div className="qori-container relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 grid gap-5 sm:grid-cols-2 lg:order-1">
          <div className="relative mt-10 aspect-[3/4] overflow-hidden qori-arch border-[8px] border-white shadow-[0_18px_45px_rgba(49,49,45,0.14)]">
            <Image
              src="/hotelview1.jpg"
              alt={page.about.title}
              fill
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden qori-arch border-[8px] border-white shadow-[0_18px_45px_rgba(49,49,45,0.14)]">
            <Image
              src="/catedral1.png"
              alt={page.about.title}
              fill
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-56 overflow-hidden rounded-xl border-[8px] border-white shadow-[0_18px_45px_rgba(49,49,45,0.14)] sm:col-span-2">
            <Image
              src="/machu.png"
              alt={page.about.title}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="qori-label mb-4">{labels[lang].eyebrow}</p>
          <h2 className="qori-heading max-w-xl">{page.about.art1.pre}</h2>
          <p className="qori-subheading mt-6 max-w-2xl">{page.about.art1.first}</p>
          <Link
            href={`/${lang}/about`}
            className="qori-button-primary mt-10"
          >
            {labels[lang].action}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
