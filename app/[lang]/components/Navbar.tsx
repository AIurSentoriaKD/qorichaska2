"use client";

import { Locale } from "@/i18n.config";
import Image from "next/image";
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
    ? "border-qori-outline/20 bg-[#fcf9f3]/[0.92] shadow-[0_16px_40px_rgba(49,49,45,0.08)] backdrop-blur-xl"
    : "border-transparent bg-[#fcf9f3]/80 backdrop-blur-md";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${navClass}`}
    >
      <nav className="qori-container flex min-h-20 items-center justify-between gap-6 py-3">
        <Link
          href={`/${lang}`}
          className="flex min-w-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo-qorichaska_color.png"
            alt="Hotel Qorichaska"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="qori-serif truncate text-2xl font-bold text-qori-primary">
            Hotel Qorichaska
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== `/${lang}` && pathname?.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-extrabold tracking-[0.05em] transition-colors ${
                  isActive
                    ? "text-qori-primary"
                    : "text-qori-muted hover:text-qori-primary"
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
            className="rounded-full bg-qori-primary px-6 py-3 text-sm font-extrabold uppercase tracking-[0.05em] text-white transition hover:bg-[#84250e]"
          >
            {bookingLabel[lang]}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="grid h-11 w-11 place-items-center rounded-full border border-qori-outline/30 text-qori-primary lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-qori-outline/20 bg-[#fcf9f3] lg:hidden">
          <div className="qori-container flex flex-col gap-4 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-bold text-qori-muted"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-4 pt-3">
              <LangChanger initialLang={lang} />
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-qori-primary px-5 py-3 text-sm font-extrabold uppercase tracking-[0.05em] text-white"
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
