import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";
import ImageCard from "./components/ImageCard";
import ContactItem from "./components/ContactItem";
import AboutCard from "./components/AboutCard";
import RoomsMinimal from "./components/RoomsMinimal";
import { AiFillLock, AiOutlineWifi } from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FiCalendar, FiSearch, FiUsers } from "react-icons/fi";
import { LiaLanguageSolid } from "react-icons/lia";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { RiLuggageDepositLine, RiTimer2Line } from "react-icons/ri";

const homeCopy: Record<
  Locale,
  {
    eyebrow: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    search: string;
    experiences: string;
    servicesIntro: string;
    moreServices: string;
    contactTitle: string;
    cardAction: string;
  }
> = {
  en: {
    eyebrow: "Hotel Qorichaska",
    checkIn: "Check in",
    checkOut: "Check out",
    guests: "Guests",
    search: "Search",
    experiences: "Andean hospitality",
    servicesIntro:
      "The essentials for a comfortable stay, prepared with attentive service and a practical location in Cusco.",
    moreServices: "More services",
    contactTitle: "Plan your stay",
    cardAction: "Learn more",
  },
  es: {
    eyebrow: "Hotel Qorichaska",
    checkIn: "Llegada",
    checkOut: "Salida",
    guests: "Huespedes",
    search: "Buscar",
    experiences: "Hospitalidad andina",
    servicesIntro:
      "Lo esencial para una estadia comoda, con atencion cercana y una ubicacion practica en Cusco.",
    moreServices: "Mas servicios",
    contactTitle: "Planifica tu estadia",
    cardAction: "Ver mas",
  },
};

const serviceIcons = [
  AiOutlineWifi,
  AiFillLock,
  FaBed,
  LiaLanguageSolid,
  PiTelevisionSimpleBold,
  RiLuggageDepositLine,
  BsDroplet,
  RiTimer2Line,
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langLocale = lang as Locale;
  const { page, components } = await getDictionary(langLocale);
  const copy = homeCopy[langLocale];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <Image
          src="/cusco-2.jpg"
          alt={page.home.slogan}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f3] via-[#fcf9f3]/86 to-[#fcf9f3]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(204,167,47,0.25),transparent_26rem)]" />

        <div className="qori-container relative z-10 grid min-h-[calc(100vh-80px)] items-center gap-10 py-16 lg:grid-cols-[1fr_0.82fr]">
          <div className="max-w-3xl">
            <p className="qori-label mb-5">{copy.eyebrow}</p>
            <h1 className="hero__title text-qori-ink">
              {page.home.slogan}
            </h1>
            <p className="hero__subtitle mt-7 max-w-xl">
              {page.home.description}
            </p>

            <form className="mt-10 grid gap-3 rounded-[1.5rem] border border-qori-outline/20 bg-white/[0.92] p-3 shadow-[0_28px_70px_rgba(147,48,24,0.16)] md:grid-cols-[1fr_1fr_1fr_auto]">
              <label className="flex items-center gap-3 rounded-2xl border border-qori-outline/15 px-4 py-3">
                <FiCalendar className="text-qori-accent" size={22} />
                <span className="flex flex-1 flex-col">
                  <span className="text-xs font-extrabold uppercase tracking-[0.05em] text-qori-outline">
                    {copy.checkIn}
                  </span>
                  <input
                    type="date"
                    className="mt-1 w-full bg-transparent text-sm font-semibold text-qori-ink outline-none"
                  />
                </span>
              </label>
              <label className="flex items-center gap-3 rounded-2xl border border-qori-outline/15 px-4 py-3">
                <FiCalendar className="text-qori-accent" size={22} />
                <span className="flex flex-1 flex-col">
                  <span className="text-xs font-extrabold uppercase tracking-[0.05em] text-qori-outline">
                    {copy.checkOut}
                  </span>
                  <input
                    type="date"
                    className="mt-1 w-full bg-transparent text-sm font-semibold text-qori-ink outline-none"
                  />
                </span>
              </label>
              <label className="flex items-center gap-3 rounded-2xl border border-qori-outline/15 px-4 py-3">
                <FiUsers className="text-qori-accent" size={22} />
                <span className="flex flex-1 flex-col">
                  <span className="text-xs font-extrabold uppercase tracking-[0.05em] text-qori-outline">
                    {copy.guests}
                  </span>
                  <select className="mt-1 w-full bg-transparent text-sm font-semibold text-qori-ink outline-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </span>
              </label>
              <Link
                href={`/${langLocale}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-qori-primary px-7 py-4 text-sm font-extrabold uppercase tracking-[0.05em] text-white transition hover:bg-[#84250e]"
              >
                {copy.search}
                <FiSearch />
              </Link>
            </form>
          </div>

          <div className="relative hidden min-h-[600px] lg:block">
            <div className="absolute inset-x-10 bottom-0 top-8 overflow-hidden qori-arch border-[10px] border-white/75 shadow-[0_35px_80px_rgba(49,49,45,0.22)]">
              <Image
                src="/hero.png"
                alt="Hotel Qorichaska"
                fill
                sizes="38vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="qori-section">
        <div className="qori-container">
          <div className="mb-12 max-w-3xl">
            <p className="qori-label mb-4">{copy.experiences}</p>
            <h2 className="qori-heading">{page.about.slogan}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {page.home.infocards.map((card, index) => (
              <ImageCard
                key={card.title}
                image={index === 1 ? "card2.jpg" : "card1.jpg"}
                title={card.title}
                subtitle={card.subtitle}
                content={card.content}
                action={copy.cardAction}
                href={`/${langLocale}/about`}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutCard lang={langLocale} />
      <RoomsMinimal lang={langLocale} />

      <section className="qori-section bg-white">
        <div className="qori-container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="qori-label mb-4">{page.services["inc-text"]}</p>
              <h2 className="qori-heading">{page.services.slogan}</h2>
              <p className="qori-subheading mt-6">{copy.servicesIntro}</p>
              <Link
                href={`/${langLocale}/services`}
                className="mt-8 inline-flex rounded-full border border-qori-primary px-6 py-3 text-sm font-extrabold uppercase tracking-[0.05em] text-qori-primary transition hover:bg-qori-primary hover:text-white"
              >
                {copy.moreServices}
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.services.included.map((service, index) => {
                const Icon = serviceIcons[index] ?? AiOutlineWifi;
                return (
                  <article
                    key={service.service}
                    className="rounded-3xl border border-qori-outline/15 bg-qori-surface-low p-6"
                  >
                    <Icon className="mb-5 text-qori-primary" size={30} />
                    <h3 className="font-bold text-qori-ink">{service.service}</h3>
                    <p className="mt-3 text-sm leading-7 text-qori-muted">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="qori-section qori-pattern bg-qori-surface-mid">
        <div className="qori-container relative">
          <div className="mb-14 max-w-3xl">
            <p className="qori-label mb-4">{copy.contactTitle}</p>
            <h2 className="qori-heading">{navigationTitle(langLocale)}</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            <ContactItem
              tipo={components.contactItems.wsp.title}
              subtext={components.contactItems.wsp.content}
              cta={components.contactItems.wsp.action}
              icon="wsp-icon.svg"
              direction={`/${langLocale}/contact`}
            />
            <ContactItem
              tipo={components.contactItems.phone.title}
              subtext={components.contactItems.phone.content}
              cta={components.contactItems.phone.action}
              icon="call-icon.svg"
              direction={`/${langLocale}/contact`}
            />
            <ContactItem
              tipo={components.contactItems.email.title}
              subtext={components.contactItems.email.content}
              cta={components.contactItems.email.action}
              icon="mail-icon.svg"
              direction="mailto:"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function navigationTitle(lang: Locale) {
  return lang === "en"
    ? "We are ready to help with your reservation"
    : "Estamos listos para ayudarte con tu reserva";
}
