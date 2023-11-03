import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";
import Reveal from "../components/animation/Reveal";
import Hover from "../components/animation/Hover";
import CustomButton from "../components/CustomButton";

export default async function page({
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

      <div className="bg-qori-primary w-full flex justify-center">
        <div className=" text-white text-lg p-10 lg:w-1/2 flex flex-col gap-4 text-justify">
          <h1>Política de Privacidad de [Qorichaska]</h1>

          <p>
            <strong>Última actualización:</strong> [2023/11/03]
          </p>

          <p className="pl-10">
            En [Qorichaska], valoramos y respetamos la privacidad de nuestros
            huéspedes y visitantes en línea. Esta Política de Privacidad
            describe cómo recopilamos, utilizamos y protegemos la información
            personal que pueda proporcionarnos durante su estancia en el hotel o
            al visitar nuestro sitio web.
          </p>

          <h2 className="text-xl font-bold">Información que Recopilamos:</h2>

          <ol className="pl-10">
            <li>
              <strong>Información de Reservas:</strong> Al hacer una reserva en
              nuestro hotel, recopilamos su nombre, información de contacto,
              detalles de pago y preferencias personales para garantizar una
              estancia cómoda.
            </li>

            <li>
              <strong>Información de Registro:</strong> Cuando se registra en
              nuestro hotel, recopilamos su nombre, información de contacto y,
              en algunos casos, detalles de identificación para fines de
              seguridad.
            </li>

            <li>
              <strong>Información de Comunicación:</strong> Podemos recopilar
              información que nos proporcione al ponerse en contacto con
              nosotros, como correos electrónicos, mensajes o comentarios en
              nuestras redes sociales.
            </li>

            <li>
              <strong>Información del Sitio Web:</strong> Cuando visita nuestro
              sitio web, podemos recopilar información no personal, como la
              dirección IP, tipo de navegador, ubicación geográfica y páginas
              visitadas, para mejorar la experiencia del usuario.
            </li>
          </ol>

          <h2 className="text-xl font-bold">Uso de la Información:</h2>

          <p className="pl-5">Utilizamos la información recopilada para los siguientes fines:</p>

          <ul className="list-disc pl-10">
            <li>Gestionar reservas y estancias en nuestro hotel.</li>

            <li>
              Mejorar nuestros servicios y personalizar la experiencia del
              huésped.
            </li>

            <li>Responder a consultas, solicitudes y comentarios.</li>

            <li>Comunicarnos con usted sobre ofertas especiales y eventos.</li>

            <li>
              Mantener la seguridad y proteger nuestros intereses legítimos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
