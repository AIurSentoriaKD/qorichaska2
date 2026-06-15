"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { GiHamburgerMenu } from "react-icons/gi";

type Navigation = {
  home: string;
  about: string;
  services: string;
  gallery: string;
  location: string;
  contact: string;
};

export default function DropDownNavBar({
  lang,
  navigation,
}: {
  lang: Locale;
  navigation: Navigation;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "text-qori-muted relative after:bg-qori-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:text-qori-primary";

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center focus:outline-none"
        >
          <GiHamburgerMenu size="40" />
        </button>
      </div>

      {isOpen && (
        <>
          {/* Transparent overlay to close the menu on click-outside */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-100 scale-100 opacity-100"
          >
            <div className="flex flex-col gap-4 py-4 items-center">
              <Link
                href={`/${lang}`}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {navigation.home}
              </Link>
              <Link
                href={`/${lang}/services`}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {navigation.services}
              </Link>
              <Link
                href={`/${lang}/gallery`}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {navigation.gallery}
              </Link>
              <Link
                href={`/${lang}/location`}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {navigation.location}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {navigation.contact}
              </Link>
              <Link
                href={`/${lang}/about`}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {navigation.about}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
