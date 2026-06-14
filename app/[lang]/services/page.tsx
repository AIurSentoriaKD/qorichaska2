import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import PageHero from "../components/PageHero";
import { AiFillLock, AiFillMedicineBox, AiOutlineWifi } from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { MdCardTravel, MdLocalLaundryService } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {
  RiLuggageDepositLine,
  RiRestaurantFill,
  RiTempColdLine,
  RiTimer2Line,
} from "react-icons/ri";

const copy: Record<Locale, { included: string; optional: string; cta: string }> = {
  en: {
    included: "Included with your stay",
    optional: "Available by request",
    cta: "Inquiry now",
  },
  es: {
    included: "Incluidos en tu estadia",
    optional: "Disponibles a solicitud",
    cta: "Reservar ahora",
  },
};

const includedIcons = [
  AiOutlineWifi,
  AiFillLock,
  FaBed,
  LiaLanguageSolid,
  PiTelevisionSimpleBold,
  RiLuggageDepositLine,
  BsDroplet,
  RiTimer2Line,
];

const optionalIcons = [
  MdCardTravel,
  RiTempColdLine,
  AiFillMedicineBox,
  MdLocalLaundryService,
  RiRestaurantFill,
];

export default async function Services({
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
        eyebrow={page.services.title}
        title={page.services.slogan}
        description={page.services.description}
        image="/services_banner.png"
        ctaLabel={copy[langLocale].cta}
        ctaHref={`/${langLocale}/contact`}
      />

      <ServiceGrid
        title={copy[langLocale].included}
        items={page.services.included}
        icons={includedIcons}
        variant="light"
      />
      <ServiceGrid
        title={copy[langLocale].optional}
        items={page.services.optional}
        icons={optionalIcons}
        variant="dark"
      />
    </div>
  );
}

function ServiceGrid({
  title,
  items,
  icons,
  variant,
}: {
  title: string;
  items: { service: string; description: string }[];
  icons: typeof includedIcons;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <section
      className={`qori-section ${
        isDark ? "bg-qori-inverse text-white" : "bg-white text-qori-ink"
      }`}
    >
      <div className="qori-container">
        <div className="mb-12 max-w-3xl">
          <p className={`qori-label mb-4 ${isDark ? "text-qori-accent" : ""}`}>
            Hotel Qorichaska
          </p>
          <h2 className={`qori-heading ${isDark ? "text-white" : ""}`}>{title}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = icons[index] ?? AiOutlineWifi;
            return (
              <article
                key={item.service}
                className={`rounded-3xl border p-6 ${
                  isDark
                    ? "border-white/10 bg-white/[0.07]"
                    : "border-qori-outline/15 bg-qori-surface-low"
                }`}
              >
                <Icon
                  size={32}
                  className={isDark ? "text-qori-accent" : "text-qori-primary"}
                />
                <h3 className="mt-6 font-bold">{item.service}</h3>
                <p
                  className={`mt-3 text-sm leading-7 ${
                    isDark ? "text-white/70" : "text-qori-muted"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
