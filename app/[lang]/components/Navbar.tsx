"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import LangChanger from "./LangChanger";
import { motion } from "framer-motion";

function Navbar({ lang, navigation }: { lang: Locale; navigation: any }) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const [navbar, setNavbar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const changeBackground = () => {
    //    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const deployDropdown = () => {
    setDropDown(!dropDown);
    console.log("action drop");
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const linkStyle =
    "relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer";
  return (
    <header
      className={
        navbar
          ? `w-full h-20 sticky top-0 z-10 transition-all duration-100 backdrop-blur-md  border-b-2 border-white ${
              dropDown ? `bg-black/80` : `bg-black/30`
            }`
          : `w-full h-20 sticky top-0 z-10 bg-black`
      }
    >
      <nav className="hidden md:flex max-w-[1440px] mx-auto justify-between items-center sm:px-16 px-6 py-4 text-white">
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
      <nav className="flex sm:hidden relative top-0 text-white justify-between mx-auto px-6 py-4">
        <button className="mx-3" onClick={deployDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
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
      </nav>
      {dropDown ? (
        <div className="bg-black/80 h-screen w-screen absolute top-20">
          <div className="text-white flex flex-col gap-5 w-full justify-center items-center text-xl my-20">
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
            <LangChanger initialLang={lang} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
export default Navbar;
