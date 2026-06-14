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
    <section className="qori-section qori-pattern bg-qori-surface-low">
      <div className="qori-container relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="qori-label mb-4">{labels[lang].eyebrow}</p>
          <h2 className="qori-heading max-w-xl">{page.about.art1.pre}</h2>
          <p className="qori-subheading mt-6 max-w-2xl">{page.about.art1.first}</p>
          <Link
            href={`/${lang}/about`}
            className="mt-8 inline-flex rounded-full border border-qori-primary px-6 py-3 text-sm font-extrabold uppercase tracking-[0.05em] text-qori-primary transition hover:bg-qori-primary hover:text-white"
          >
            {labels[lang].action}
          </Link>
        </div>
        <div className="relative min-h-[440px] overflow-hidden qori-arch border border-qori-outline/20 bg-white shadow-[0_28px_70px_rgba(147,48,24,0.14)]">
          <Image
            src="/catedral1.png"
            alt={page.about.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
