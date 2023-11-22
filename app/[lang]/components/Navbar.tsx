"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import LangChanger from "./LangChanger";
import { motion } from "framer-motion";
import DropDownNavBar from "./DropDownNavBar";
import ReservationOnNavBar from "./ReservationOnNavBar";

function Navbar({ lang, navigation }: { lang: Locale; navigation: any }) {
  const [navbar, setNavbar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [reservaDrop, setReservaDrop] = useState(false);
  const changeBackground = () => {
    //    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    if (window.scrollY >= 200) {
      setReservaDrop(true);
    } else {
      setReservaDrop(false);
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
          ? `w-full min-h-20 sticky top-0 z-10 transition-all duration-100 backdrop-blur-md  border-b-2 border-white ${
              dropDown ? `bg-black/80` : `bg-black/30`
            }`
          : `w-full min-h-20 sticky top-0 z-10 bg-black`
      }
    >
      {/* NORMAL OPEN NAVBAR */}
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
        {!reservaDrop ? (
          <>
            <div className="md:flex hidden gap-5">
              <Link
                href={`/${lang}`}
                className={linkStyle}
                onClick={(dropDown) => setDropDown(!dropDown)}
              >
                {navigation.home}
              </Link>
              <Link
                href={`/${lang}/services`}
                className={linkStyle}
                onClick={(dropDown) => setDropDown(!dropDown)}
              >
                {navigation.services}
              </Link>
              <Link
                href={`/${lang}/gallery`}
                className={linkStyle}
                onClick={(dropDown) => setDropDown(!dropDown)}
              >
                {navigation.gallery}
              </Link>
              <Link
                href={`/${lang}/location`}
                className={linkStyle}
                onClick={(dropDown) => setDropDown(!dropDown)}
              >
                {navigation.location}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className={linkStyle}
                onClick={(dropDown) => setDropDown(!dropDown)}
              >
                {navigation.contact}
              </Link>
              <Link
                href={`/${lang}/about`}
                className={linkStyle}
                onClick={(dropDown) => setDropDown(!dropDown)}
              >
                {navigation.about}
              </Link>
            </div>
            <LangChanger initialLang={lang} />
          </>
        ) : (
          <>
            <ReservationOnNavBar lang={lang} navigation={navigation} />
            <DropDownNavBar lang={lang} navigation={navigation} />
          </>
        )}
      </nav>
      {/* MOBILE NAVBAR */}
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
            <Link
              href={`/${lang}`}
              className={linkStyle}
              onClick={(dropDown) => setDropDown(!dropDown)}
            >
              {navigation.home}
            </Link>
            <Link
              href={`/${lang}/services`}
              className={linkStyle}
              onClick={(dropDown) => setDropDown(!dropDown)}
            >
              {navigation.services}
            </Link>
            <Link
              href={`/${lang}/gallery`}
              className={linkStyle}
              onClick={(dropDown) => setDropDown(!dropDown)}
            >
              {navigation.gallery}
            </Link>
            <Link
              href={`/${lang}/location`}
              className={linkStyle}
              onClick={(dropDown) => setDropDown(!dropDown)}
            >
              {navigation.location}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className={linkStyle}
              onClick={(dropDown) => setDropDown(!dropDown)}
            >
              {navigation.contact}
            </Link>
            <Link
              href={`/${lang}/about`}
              className={linkStyle}
              onClick={(dropDown) => setDropDown(!dropDown)}
            >
              {navigation.about}
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
