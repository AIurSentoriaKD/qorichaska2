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
                    title="Reservar ahora"
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
            Included Services
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2 gap-10 my-9">
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <AiOutlineWifi size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">WI-FI</h1>
                <p className="text-gray-100">
                  We have good internet by WIFI in all rooms and environments of
                  our hostel, connect to social networks and enjoy.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <AiFillLock size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">24h security</h1>
                <p className="text-gray-100">
                  you can leave your bags safely in your room; Honesty is our
                  most fundamental value.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <FaBed size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  Comfortable beds
                </h1>
                <p className="text-gray-100">
                  Our hostel cares for you to sleep well, and comfortable; we
                  have hypoallergenic and orthopedic beds; always clean and tidy
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <LiaLanguageSolid size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  Multilingual Staff
                </h1>
                <p className="text-gray-100">
                  Travelers from all over the world are welcome, we speak your
                  language
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <PiTelevisionSimpleBold size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">TV Cable</h1>
                <p className="text-gray-100">
                  We have Cable TV with flat screen in all our rooms, with
                  national and international channels
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <RiLuggageDepositLine size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">Luggage storage</h1>
                <p className="text-gray-100">
                  If you go on a trip and plan to return, you can leave your
                  bags safely
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <BsDroplet size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">Hot showers</h1>
                <p className="text-gray-100">Enjoy hot water 24 hours a day</p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <RiTimer2Line size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  24hrs receptions
                </h1>
                <p className="text-gray-100">
                  We know that you can arrive from your trip at any time of the
                  day, we will wait for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA  */}
      <CtaReservation />
      {/* OPTIONAL SERVICES SECTION */}
      <div className="bg-teal-700 text-white ">
        <div className="py-10">
          <h1 className="text-3xl font-semibold text-center w-full underline underline-offset-8">
            Optional Services
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2 gap-10 my-9">
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <MdCardTravel size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">Travel services</h1>
                <p className="text-gray-100">
                  In our hostel you may require as many as tourist information
                  as well as be able to buy tourist packages to the main
                  destinations in Cusco
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <RiTempColdLine size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">Heating Service</h1>
                <p className="text-gray-100">
                  For those days where you feel at home we have heating, which
                  can request when making your reservation or reception
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <AiFillMedicineBox size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">
                  Medical assistance
                </h1>
                <p className="text-gray-100">
                  To require medical assistance you may request at any time,
                  we’ll manage it when needed.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <MdLocalLaundryService size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">Laundry service</h1>
                <p className="text-gray-100">
                  We have an excellent laundry service which will provide it
                  every day you need
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <i className="px-5 grid items-center content-center">
                <RiRestaurantFill size="50" />
              </i>
              <div className="">
                <h1 className="text-lg font-extrabold mb-5">Restaurant</h1>
                <p className="text-gray-100">
                  Restaurant (You can book in advance typical dishes of Peru and
                  Cusco)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
