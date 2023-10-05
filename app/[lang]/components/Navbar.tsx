import React from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./locale-switcher";
import Image from "next/image";
import LangChanger from "./LangChanger";

async function Navbar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);
  const linkStyle =
    "relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer";
  return (
    <header className="w-full h-20 sticky top-0  z-10 backdrop-blur-md bg-black/30 border-b-2 border-white">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 text-white">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo-qorichaska_color.png"
            alt="qorilogo"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="font-extrabold mx-5 text-2xl">Qorichaska Hotel</p>
        </Link>
        <div className="md:flex hidden gap-5">
          <Link href={`/${lang}`} className={linkStyle}>
            {navigation.home}
          </Link>
          <Link href={`/${lang}/services`} className={linkStyle}>
            {navigation.services}
          </Link>
          <Link href={`/${lang}/gallery`} className={linkStyle}>
            {navigation.gallery}
          </Link>
          <Link href={`/${lang}/location`} className={linkStyle}>
            {navigation.location}
          </Link>
          <Link href={`/${lang}/contact`} className={linkStyle}>
            {navigation.contact}
          </Link>
        </div>
        <LangChanger initialLang={lang} />
      </nav>
    </header>
  );
}
export default Navbar;
