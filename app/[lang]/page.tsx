import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import CustomButton from "./components/CustomButton";
import ImageCard from "./components/ImageCard";
import ContactItem from "./components/ContactItem";

import Reveal from "./components/animation/Reveal";
import Hover from "./components/animation/Hover";
import CtaReservation from "./components/CtaReservation";
import RoomsMinimal from "./components/RoomsMinimal";
import AboutCard from "./components/AboutCard";
import { RiLuggageDepositLine, RiTimer2Line } from "react-icons/ri";
import { AiFillLock, AiOutlineWifi } from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaBed } from "react-icons/fa";
import Link from "next/link";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, components } = await getDictionary(lang);
  console.log(process.env.NEXT_PUBLIC_MAPS_API_KEY);
  console.log(lang);
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}

      <div className="relative w-full h-screen/2">
        <Image
          src="/cusco-2.jpg"
          alt="mainimage"
          className="h-full w-full object-contain absolute"
          width={1700}
          height={1700}
          style={{ objectFit: "cover" }}
        />
        <div className="w-full h-full bg-gradient-to-r from-black/50 left-0 absolute" />
        <div className="flex">
          <div className="flex flex-col py-36 padding-x w-full lg:w-1/2">
            <Reveal>
              <h1 className="hero__title text-white">{page.home.slogan}</h1>
            </Reveal>
            <Reveal>
              <p className="hero__subtitle text-gray-200">
                {page.home.description}
              </p>
            </Reveal>
            <div className="my-5">
              <Hover>
                <Reveal>
                  <CustomButton
                    title={page.home["button-text"]}
                    containerStyles="bg-qori-primary text-white rounded-full hover:bg-qori-accent"
                  ></CustomButton>
                </Reveal>
              </Hover>
            </div>
          </div>
          <div className="h-full  items-center align-middle absolute right-0 hidden lg:block lg:scale-75">
            <Reveal>
              <Image
                src="/hero.png"
                alt="mainimage"
                className=""
                width={640}
                height={640}
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Cards Items */}
      <div className="flex-wrap sm:flex mx-auto sm:mx-auto md:mx-0 justify-center gap-4 relative  w-full my-10">
        <Reveal delay={0.3}>
          <ImageCard
            image="card1.jpg"
            title={page.home.infocards[0].title}
            subtitle={page.home.infocards[0].subtitle}
            content={page.home.infocards[0].content}
            action="Acc"
          />
        </Reveal>
        <Reveal delay={0.35}>
          <ImageCard
            image="card2.jpg"
            title={page.home.infocards[1].title}
            subtitle={page.home.infocards[1].subtitle}
            content={page.home.infocards[1].content}
            action="Acc"
          />
        </Reveal>
        <Reveal delay={0.4}>
          <ImageCard
            image="card1.jpg"
            title={page.home.infocards[2].title}
            subtitle={page.home.infocards[2].subtitle}
            content={page.home.infocards[2].content}
            action="Acc"
          />
        </Reveal>
        <Reveal delay={0.45}>
          <ImageCard
            image="card1.jpg"
            title={page.home.infocards[3].title}
            subtitle={page.home.infocards[3].subtitle}
            content={page.home.infocards[3].content}
            action="Acc"
          />
        </Reveal>
      </div>
      {/* About Card */}
      <AboutCard lang={lang} />

      {/* Rooms items gallery mini */}
      <RoomsMinimal lang={lang} />
      {/* INCLUDED SERVICES SECTION */}
      <div className="bg-white text-black ">
        <div className="py-10">
          <h1 className="text-3xl font-semibold text-center w-full underline underline-offset-8">
            {page.services["inc-text"]}
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2 gap-10 my-9">
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <AiOutlineWifi size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.included[0].service}
                </h1>
                <p className="text-gray-500">
                  {page.services.included[0].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <AiFillLock size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.included[1].service}
                </h1>
                <p className="text-gray-500">
                  {page.services.included[1].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <FaBed size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.included[2].service}
                </h1>
                <p className="text-gray-500">
                  {page.services.included[2].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <LiaLanguageSolid size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.included[3].service}
                </h1>
                <p className="text-gray-500">
                  {page.services.included[3].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <PiTelevisionSimpleBold size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.included[4].service}
                </h1>
                <p className="text-gray-500">
                  {page.services.included[4].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <RiLuggageDepositLine size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.included[5].service}
                </h1>
                <p className="text-gray-500">
                  {page.services.included[5].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <BsDroplet size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.included[6].service}
                </h1>
                <p className="text-gray-500">
                  {page.services.included[6].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <RiTimer2Line size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.included[7].service}
                </h1>
                <p className="text-gray-500">
                  {page.services.included[7].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 w-full flex justify-center">
          <Reveal>
            <Link
              href={`/${lang}/services`}
              className="text-black border-qori-primary hover:border-qori-accent hover:text-qori-accent"
            >
              More Services
            </Link>
          </Reveal>
        </div>
      </div>

      {/* CTA Reservation Card */}
      {/* <CtaReservation lang={lang} /> */}

      {/* Contacts Items */}
      <div className="py-10 md:flex justify-center align-middle gap-10 padding-x bg-qori-primary">
        <ContactItem
          tipo={components.contactItems.wsp.title}
          subtext={components.contactItems.wsp.content}
          cta={components.contactItems.wsp.action}
          icon="wsp-icon.svg"
          direction="/wsp"
        />
        <ContactItem
          tipo={components.contactItems.phone.title}
          subtext={components.contactItems.phone.content}
          cta={components.contactItems.phone.action}
          icon="call-icon.svg"
          direction="/call"
        />
        <ContactItem
          tipo={components.contactItems.email.title}
          subtext={components.contactItems.email.content}
          cta={components.contactItems.email.action}
          icon="mail-icon.svg"
          direction="mailto:"
        />
      </div>
    </div>
  );
}
