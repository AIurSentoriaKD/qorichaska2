import React from "react";
import Reveal from "./animation/Reveal";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

async function CtaReservation({ lang }: { lang: Locale }) {
  const { components } = await getDictionary(lang);
  return (
    <div className="grid grid-flow-row bg-qori-surface-high lg:grid-flow-col">
      <div className="h-full flex flex-col align-middle justify-center">
        <div className=" flex justify-center align-middle items-center flex-wrap m-3 ">
          <div className="p-3">
            <p className="">{components["cta-reservation"].mail}</p>
            <input
              className="w-full rounded border border-qori-outline-soft bg-white px-3 py-2 leading-tight text-qori-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-qori-accent"
              id="username"
              type="mail"
              placeholder={components["cta-reservation"].mail}
            />
          </div>
          <div className="p-3">
            <p>{components["cta-reservation"].name}</p>
            <input
              className="w-full rounded border border-qori-outline-soft bg-white px-3 py-2 leading-tight text-qori-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-qori-accent"
              id="username"
              type="text"
              placeholder={components["cta-reservation"].name}
            />
          </div>
          <div className="p-3">
            <p>{components["cta-reservation"]["last-name"]}</p>
            <input
              className="w-full rounded border border-qori-outline-soft bg-white px-3 py-2 leading-tight text-qori-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-qori-accent"
              id="username"
              type="text"
              placeholder={components["cta-reservation"]["last-name"]}
            />
          </div>
        </div>
        <div className="p-3 w-full flex justify-center">
          <CustomButton
            title={components["cta-reservation"].action}
            containerStyles="bg-qori-primary text-white shadow-lg hover:bg-[#84250e]"
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
