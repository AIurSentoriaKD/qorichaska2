import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";

type PageHeroProps = {
  lang: Locale;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PageHero({
  lang,
  eyebrow,
  title,
  description,
  image,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[68vh] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f3] via-[#fcf9f3]/82 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(147,48,24,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(147,48,24,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <div className="qori-container relative z-10 flex min-h-[68vh] items-center py-24">
        <div className="max-w-2xl">
          <p className="qori-label mb-5">{eyebrow}</p>
          <h1 className="hero__title text-qori-ink">{title}</h1>
          <p className="hero__subtitle mt-7 max-w-xl">{description}</p>
          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref.startsWith("/") ? ctaHref : `/${lang}${ctaHref}`}
              className="mt-9 inline-flex rounded-full bg-qori-primary px-7 py-4 text-sm font-extrabold uppercase tracking-[0.05em] text-white transition hover:bg-[#84250e]"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
