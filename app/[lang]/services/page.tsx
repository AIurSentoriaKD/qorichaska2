import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import Hover from "../components/animation/Hover";
import Reveal from "../components/animation/Reveal";
import CustomButton from "../components/CustomButton";

import { AiOutlineWifi, AiFillLock, AiFillMedicineBox } from "react-icons/ai";
import { LiaLanguageSolid } from "react-icons/lia";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaBed } from "react-icons/fa";
import {
  RiLuggageDepositLine,
  RiTimer2Line,
  RiTempColdLine,
  RiRestaurantFill,
} from "react-icons/ri";
import { BsDroplet } from "react-icons/bs";
import { MdCardTravel, MdLocalLaundryService } from "react-icons/md";
import CtaReservation from "../components/CtaReservation";

export default async function Services({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION SERVICES */}
      <div className="relative w-full h-screen/2">
        <Image
          src="/services_banner.png"
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
              <h1 className="hero__title text-white">{page.services.slogan}</h1>
            </Reveal>
            <Reveal>
              <p className="hero__subtitle text-gray-200">
                {page.services.description}
              </p>
            </Reveal>
            <div className="my-5">
              <Hover>
                <Reveal>
                  <CustomButton
                    title={page.services["button-text"]}
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
      {/* INCLUDED SERVICES SECTION */}
      <div className="bg-qori-primary text-white ">
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
                <p className="text-gray-100">
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
                <p className="text-gray-100">
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
                <p className="text-gray-100">
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
                <p className="text-gray-100">
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
                <p className="text-gray-100">
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
                <p className="text-gray-100">
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
                <p className="text-gray-100">
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
                <p className="text-gray-100">
                  {page.services.included[7].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA  */}
      <CtaReservation lang={lang} />
      {/* OPTIONAL SERVICES SECTION */}
      <div className="bg-teal-700 text-white ">
        <div className="py-10">
          <h1 className="text-3xl font-semibold text-center w-full underline underline-offset-8">
            {page.services["option-text"]}
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2 gap-10 my-9">
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <MdCardTravel size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.optional[0].service}
                </h1>
                <p className="text-gray-100">
                  {page.services.optional[0].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <RiTempColdLine size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.optional[1].service}
                </h1>
                <p className="text-gray-100">
                  {page.services.optional[1].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <AiFillMedicineBox size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.optional[2].service}
                </h1>
                <p className="text-gray-100">
                  {page.services.optional[2].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <MdLocalLaundryService size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.optional[3].service}
                </h1>
                <p className="text-gray-100">
                  {page.services.optional[3].description}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <RiRestaurantFill size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  {page.services.optional[4].service}
                </h1>
                <p className="text-gray-100">
                  {page.services.optional[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
