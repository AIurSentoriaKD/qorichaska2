import { Locale } from "@/i18n.config";
import PageHero from "../components/PageHero";

const policyCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    updated: string;
    sections: { title: string; body: string[] }[];
  }
> = {
  en: {
    eyebrow: "Policies",
    title: "Privacy Policy and Terms of Use",
    description:
      "Information about how Hotel Qorichaska handles reservation and guest communication details.",
    updated: "Last updated: 2026-06-13",
    sections: [
      {
        title: "Information we collect",
        body: [
          "When you contact or book with Hotel Qorichaska, we may collect your name, contact details, reservation information, arrival details, and communication preferences.",
          "When you use this website, standard technical details such as browser type and visited pages may be used to maintain and improve the site experience.",
        ],
      },
      {
        title: "How we use information",
        body: [
          "We use guest information to respond to inquiries, manage reservations, coordinate stays, and improve our services.",
          "We do not sell guest information. Information is shared only when needed to provide hotel services, comply with legal obligations, or protect guests and the property.",
        ],
      },
    ],
  },
  es: {
    eyebrow: "Politicas",
    title: "Politica de privacidad y terminos de uso",
    description:
      "Informacion sobre como Hotel Qorichaska gestiona datos de reservas y comunicacion con huespedes.",
    updated: "Ultima actualizacion: 2026-06-13",
    sections: [
      {
        title: "Informacion que recopilamos",
        body: [
          "Cuando te comunicas o reservas con Hotel Qorichaska, podemos recopilar tu nombre, datos de contacto, informacion de reserva, detalles de llegada y preferencias de comunicacion.",
          "Cuando usas este sitio web, datos tecnicos habituales como tipo de navegador y paginas visitadas pueden utilizarse para mantener y mejorar la experiencia del sitio.",
        ],
      },
      {
        title: "Uso de la informacion",
        body: [
          "Usamos la informacion de huespedes para responder consultas, gestionar reservas, coordinar estadias y mejorar nuestros servicios.",
          "No vendemos informacion de huespedes. La informacion se comparte solo cuando es necesaria para prestar servicios del hotel, cumplir obligaciones legales o proteger a huespedes y propiedad.",
        ],
      },
    ],
  },
};

export default async function TermsPolicy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langLocale = lang as Locale;
  const copy = policyCopy[langLocale];

  return (
    <div className="overflow-hidden">
      <PageHero
        lang={langLocale}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        image="/services_banner.png"
      />

      <section className="qori-section">
        <article className="qori-container qori-card p-8 md:p-12">
          <p className="qori-label mb-8">{copy.updated}</p>
          <div className="space-y-10">
            {copy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="qori-serif text-3xl font-bold text-qori-ink">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-qori-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
