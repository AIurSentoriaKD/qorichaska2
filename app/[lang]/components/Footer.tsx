import { Locale } from "@/i18n.config";
import Image from "next/image";
import Link from "next/link";

const footerCopy: Record<
  Locale,
  {
    rights: string;
    privacy: string;
    terms: string;
    columns: { title: string; links: { title: string; url: string }[] }[];
  }
> = {
  en: {
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    columns: [
      {
        title: "Hotel",
        links: [
          { title: "About us", url: "/about" },
          { title: "Services", url: "/services" },
          { title: "Gallery", url: "/gallery" },
          { title: "Location", url: "/location" },
        ],
      },
      {
        title: "Contact",
        links: [
          { title: "Contact us", url: "/contact" },
          { title: "WhatsApp", url: "/contact" },
          { title: "Email", url: "/contact" },
        ],
      },
    ],
  },
  es: {
    rights: "Todos los derechos reservados",
    privacy: "Politica de privacidad",
    terms: "Terminos de uso",
    columns: [
      {
        title: "Hotel",
        links: [
          { title: "Acerca de", url: "/about" },
          { title: "Servicios", url: "/services" },
          { title: "Galeria", url: "/gallery" },
          { title: "Ubicacion", url: "/location" },
        ],
      },
      {
        title: "Contacto",
        links: [
          { title: "Contactanos", url: "/contact" },
          { title: "WhatsApp", url: "/contact" },
          { title: "Email", url: "/contact" },
        ],
      },
    ],
  },
};

async function Footer({ lang }: { lang: Locale }) {
  const copy = footerCopy[lang];

  return (
    <footer className="bg-qori-inverse text-white">
      <div className="qori-ribbon" />
      <div className="qori-container grid gap-12 py-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Image
            src="/logo-qorichaska_color.png"
            alt="Hotel Qorichaska"
            width={84}
            height={84}
            className="h-20 w-20 object-contain"
          />
          <h2 className="qori-serif mt-5 text-3xl font-bold">Hotel Qorichaska</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            C. Nueva Alta 458, Cusco 08000
          </p>
        </div>
        <div className="footer__links">
          {copy.columns.map((column) => (
            <div key={column.title} className="footer__link">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.05em] text-qori-accent">
                {column.title}
              </h3>
              {column.links.map((item) => (
                <Link
                  key={`${column.title}-${item.title}`}
                  href={`/${lang}${item.url}`}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="qori-container flex flex-col gap-4 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            @2026 Qorichaska. {copy.rights}
          </p>
          <div className="flex gap-6">
            <Link href={`/${lang}/terms-policy`}>{copy.privacy}</Link>
            <Link href={`/${lang}/terms-policy`}>{copy.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
