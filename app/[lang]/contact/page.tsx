import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ContactItem from "../components/ContactItem";
import MapComponent from "../components/MapComponent";
import PageHero from "../components/PageHero";

const copy: Record<
  Locale,
  { eyebrow: string; title: string; description: string; mapTitle: string }
> = {
  en: {
    eyebrow: "Contact",
    title: "Tell us about your stay in Cusco",
    description:
      "Reach Hotel Qorichaska for reservations, arrival details, or help planning your visit.",
    mapTitle: "Find us in the historic center",
  },
  es: {
    eyebrow: "Contacto",
    title: "Cuentanos sobre tu estadia en Cusco",
    description:
      "Comunicate con Hotel Qorichaska para reservas, detalles de llegada o ayuda con tu visita.",
    mapTitle: "Encuentranos en el centro historico",
  },
};

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langLocale = lang as Locale;
  const { components } = await getDictionary(langLocale);

  return (
    <div className="overflow-hidden">
      <PageHero
        lang={langLocale}
        eyebrow={copy[langLocale].eyebrow}
        title={copy[langLocale].title}
        description={copy[langLocale].description}
        image="/hotelview1.jpg"
      />

      <section className="qori-section qori-pattern bg-qori-surface-low">
        <div className="qori-container relative grid gap-10 lg:grid-cols-3">
          <ContactItem
            tipo={components.contactItems.wsp.title}
            subtext={components.contactItems.wsp.content}
            cta={components.contactItems.wsp.action}
            icon="wsp-icon.svg"
            direction="#"
          />
          <ContactItem
            tipo={components.contactItems.phone.title}
            subtext={components.contactItems.phone.content}
            cta={components.contactItems.phone.action}
            icon="call-icon.svg"
            direction="#"
          />
          <ContactItem
            tipo={components.contactItems.email.title}
            subtext={components.contactItems.email.content}
            cta={components.contactItems.email.action}
            icon="mail-icon.svg"
            direction="mailto:"
          />
        </div>
      </section>

      <section className="qori-section bg-qori-surface">
        <div className="qori-container">
          <div className="mb-8 max-w-2xl">
            <p className="qori-label mb-4">Hotel Qorichaska</p>
            <h2 className="qori-heading">{copy[langLocale].mapTitle}</h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-qori-outline-soft/70 shadow-[0_16px_45px_rgba(147,48,24,0.05)]">
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
