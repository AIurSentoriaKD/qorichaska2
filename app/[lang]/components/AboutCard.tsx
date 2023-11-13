import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import Hover from "./animation/Hover";
import Reveal from "./animation/Reveal";

async function AboutCard({ lang }: { lang: Locale }) {
  const { components } = await getDictionary(lang);
  return (
    <div className="grid grid-flow-row lg:grid-flow-col bg-gradient-to-br from-white via-transparent to-slate-300 rounded-lg shadow-lg mx-10 mb-10 overflow-hidden">
      <div className="flex flex-wrap">
        <div className="w-1/2 flex flex-col justify-center px-5">
          <h1 className="text-2xl font-extrabold underline underline-offset-8 mb-5">
            Un hotel tradicional comprometido con su comodidad
          </h1>
          <p className="text-justify text-xl">
            El Hostal Qorichaska, estamos comprometidos en brindarte el mejor
            servicio, y asegurarnos que te lleves el mejor recuerdo de tu visita
            al Cusco, además de ser un hostal moderno, nuestro principal
            objetivo es la amabilidad que siempre nos caracteriza.
          </p>
          <div className="my-5 w-full flex justify-center">
            <Reveal>
              <CustomButton
                title="Acerca De"
                containerStyles="border-4 text-black border-qori-primary hover:border-qori-accent hover:text-qori-accent"
              ></CustomButton>
            </Reveal>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <Image
            src="/catedral1.png"
            alt="mainimage"
            className=""
            width={540}
            height={540}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
