import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinksEN, footerLinksES } from "@/constants";
import { Locale } from "@/i18n.config";

async function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="relative w-full">
      <div className="w-full h-full bg-black  z-9 absolute"></div>
      {/* <Image src="/wave2.svg" className="bottom-0 absolute"></Image>
      <Image src="/wave.svg" className="bottom-0 absolute"></Image> */}
      <div className="z-10 flex flex-col border-t border-gray-100 text-white backdrop-blur-xl bg-black/30">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-60 px-6 py-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <Image
              src="/logo-qorichaska_color.png"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
            <p className="text-base text-gray-300">
              Qorichaska 2023 <br />
              All rights reserved &copy;
            </p>
          </div>
          <div className="footer__links">
            {lang === "en"
              ? footerLinksEN.map((link) => (
                  <div key={link.title} className="footer__link">
                    <h3 className="font-bold">{link.title}</h3>
                    {link.links.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="text-gray-400"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))
              : footerLinksES.map((link) => (
                  <div key={link.title} className="footer__link">
                    <h3 className="font-bold">{link.title}</h3>
                    {link.links.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="text-gray-400"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 Qorichaska. All Rights Reserved</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-400">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
