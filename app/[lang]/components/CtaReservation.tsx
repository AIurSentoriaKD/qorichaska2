import React from "react";
import Reveal from "./animation/Reveal";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

async function CtaReservation({ lang }: { lang: Locale }) {
  const { components } = await getDictionary(lang);
  return (
    <div className="bg-gradient-to-r from-teal-400 to-teal-500 grid grid-flow-row lg:grid-flow-col">
      <div className="h-full flex flex-col align-middle justify-center">
        <div className=" flex justify-center align-middle items-center flex-wrap m-3 ">
          <div className="p-3">
            <p className="">{components["cta-reservation"].mail}</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="mail"
              placeholder={components["cta-reservation"].mail}
            />
          </div>
          <div className="p-3">
            <p>{components["cta-reservation"].name}</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder={components["cta-reservation"].name}
            />
          </div>
          <div className="p-3">
            <p>{components["cta-reservation"]["last-name"]}</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder={components["cta-reservation"]["last-name"]}
            />
          </div>
        </div>
        <div className="p-3 w-full flex justify-center">
          <CustomButton
            title={components["cta-reservation"].action}
            containerStyles="bg-qori-primary rounded-md text-white shadow-lg"
          />
        </div>
      </div>
      <div className=" w-full">
        <div className="flex justify-end relative">
          <Reveal direction="from-left">
            <Image
              src={"/machu2.png"}
              alt="ctaimage"
              className=" right-0 bottom-0"
              width={850}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default CtaReservation;
