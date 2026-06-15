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
    <section className="relative min-h-[62vh] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f3]/96 via-[#fcf9f3]/70 to-[#fcf9f3]/16" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fcf9f3] to-transparent" />
      <div className="qori-container relative z-10 flex min-h-[62vh] items-center py-20">
        <div className="max-w-2xl">
          <p className="qori-label mb-5">{eyebrow}</p>
          <h1 className="hero__title text-qori-ink">{title}</h1>
          <p className="hero__subtitle mt-7 max-w-xl">{description}</p>
          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref.startsWith("/") ? ctaHref : `/${lang}${ctaHref}`}
              className="qori-button-primary mt-9"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
