import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import CustomButton from "./components/CustomButton";
import ImageCard from "./components/ImageCard";
import ContactItem from "./components/ContactItem";
import GalleryHome from "./components/GalleryHome";

import Reveal from "./components/animation/Reveal";
import Hover from "./components/animation/Hover";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const galleryImages = [
    "card1.jpg",
    "card1.jpg",
    "card1.jpg",
    "card1.jpg",
    "card1.jpg",
    "card1.jpg",
    "card1.jpg",
    "card1.jpg",
  ];
  console.log(lang);
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}

      <div className="hero">
        <div className="flex-1 py-36 padding-x">
          <Reveal>
            <h1 className="hero__title">{page.home.slogan}</h1>
          </Reveal>
          <Reveal>
            <p className="hero__subtitle">{page.home.description}</p>
          </Reveal>
          <div className="my-5">
          <Hover>
            <CustomButton
              title="Reservar ahora"
              containerStyles="bg-primary-blue text-white rounded-full"
            ></CustomButton>
          </Hover>
          </div>
        </div>
        <div className="md:h-[900px] sm:h-[700px] h-[500px]">
          <img
            src="/hero.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      {/* banner image */}
      <div className="h-64 md:h-[500px] relative">
        <img
          className="w-full h-full object-cover absolute z-7"
          src="/cusco-2.jpg"
        ></img>
        <div className="bg-gradient-to-b from-transparent to-zinc-900 absolute z-8 w-full h-36 bottom-0"></div>
      </div>
      {/* Cards Items */}
      <div className="md:flex flex-wrap justify-center align-middle gap-10 padding-x my-10 mx-auto">
        <Reveal>
          <ImageCard
            image="card1.jpg"
            title={page.home.infocards[0].title}
            subtitle={page.home.infocards[0].subtitle}
            content={page.home.infocards[0].content}
            action="Acc"
          />
        </Reveal>
        <Reveal>
          <ImageCard
            image="card2.jpg"
            title={page.home.infocards[1].title}
            subtitle={page.home.infocards[1].subtitle}
            content={page.home.infocards[1].content}
            action="Acc"
          />
        </Reveal>
        <Reveal>
          <ImageCard
            image="card1.jpg"
            title={page.home.infocards[2].title}
            subtitle={page.home.infocards[2].subtitle}
            content={page.home.infocards[2].content}
            action="Acc"
          />
        </Reveal>
        <Reveal>
          <ImageCard
            image="card1.jpg"
            title={page.home.infocards[3].title}
            subtitle={page.home.infocards[3].subtitle}
            content={page.home.infocards[3].content}
            action="Acc"
          />
        </Reveal>
      </div>
      {/* Contacts Items */}
      <div className="py-10 md:flex justify-center align-middle gap-10 padding-x my-10 bg-blue-200">
        <ContactItem
          tipo="Whatsapp"
          subtext="Contáctanos por Whatsapp"
          cta="Cóntactanos"
          icon="wsp-icon.svg"
        />
        <ContactItem
          tipo="Teléfono"
          subtext="Contáctanos por Teléfono"
          cta="Cóntactanos"
          icon="call-icon.svg"
        />
        <ContactItem
          tipo="Correo"
          subtext="Contáctanos por Correo"
          cta="Cóntactanos"
          icon="mail-icon.svg"
        />
      </div>
      {/* Rooms items gallery mini */}
      <div className="flex items-center justify-center min-h-96 bg-fixed bg-parallax bg-cover">
        <div className="bg-black/30 w-full h-full grid lg:grid-cols-4 sm:grid-cols-2">
          {galleryImages.map((image) => {
            return (
              <GalleryHome image={image} key={image} plusclass={"col-auto"} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
