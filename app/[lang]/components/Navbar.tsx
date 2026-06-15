"use client";

import { Locale } from "@/i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LangChanger from "./LangChanger";

type Navigation = {
  home: string;
  about: string;
  services: string;
  gallery: string;
  location: string;
  contact: string;
};

const bookingLabel: Record<Locale, string> = {
  en: "Book now",
  es: "Reservar",
};

function Navbar({ lang, navigation }: { lang: Locale; navigation: Navigation }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${lang}`, label: navigation.home },
    { href: `/${lang}/services`, label: navigation.services },
    { href: `/${lang}/gallery`, label: navigation.gallery },
    { href: `/${lang}/location`, label: navigation.location },
    { href: `/${lang}/contact`, label: navigation.contact },
    { href: `/${lang}/about`, label: navigation.about },
  ];

  const navClass = isScrolled
    ? "border-qori-outline-soft/70 bg-[#fcf9f3]/[0.94] shadow-[0_12px_28px_rgba(49,49,45,0.06)] backdrop-blur-xl"
    : "border-qori-outline-soft/45 bg-[#fcf9f3]/90 backdrop-blur-md";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${navClass}`}
    >
      <nav className="qori-container flex min-h-16 items-center justify-between gap-6 py-2">
        <Link
          href={`/${lang}`}
          className="qori-serif min-w-0 truncate text-[1.35rem] font-bold leading-none text-qori-primary"
          onClick={() => setIsOpen(false)}
        >
          Hotel Qorichaska
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== `/${lang}` && pathname?.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 text-[0.72rem] font-extrabold tracking-[0.05em] transition-colors ${
                  isActive
                    ? "border-qori-primary text-qori-primary"
                    : "border-transparent text-qori-muted hover:text-qori-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LangChanger initialLang={lang} />
          <Link
            href={`/${lang}/contact`}
            className="qori-button-primary min-h-0 px-5 py-2 text-[0.72rem]"
          >
            {bookingLabel[lang]}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="grid h-10 w-10 place-items-center rounded-full border border-qori-outline-soft bg-white text-qori-primary lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-qori-outline-soft/70 bg-[#fcf9f3] lg:hidden">
          <div className="qori-container flex flex-col gap-4 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-[0.05em] text-qori-muted"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-4 pt-3">
              <LangChanger initialLang={lang} />
              <Link
                href={`/${lang}/contact`}
                className="qori-button-primary min-h-0 px-5 py-3"
                onClick={() => setIsOpen(false)}
              >
                {bookingLabel[lang]}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
