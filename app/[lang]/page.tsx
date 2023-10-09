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
                <CustomButton
                  title="Reservar ahora"
                  containerStyles="bg-primary-blue text-white rounded-full"
                ></CustomButton>
              </Hover>
            </div>
          </div>
          <div className="h-full  items-center align-middle absolute right-0 hidden lg:block lg:scale-75">
            <Image
              src="/hero.png"
              alt="mainimage"
              className=""
              width={640}
              height={640}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Cards Items */}
      <div className="flex-wrap sm:flex mx-auto sm:mx-auto md:mx-0 justify-center gap-4 relative h-[1950px] sm:h-[990px] md:h-[990px] lg:h-[500px] xl:[550px] w-full -top-10">
        <ImageCard
          image="card1.jpg"
          title={page.home.infocards[0].title}
          subtitle={page.home.infocards[0].subtitle}
          content={page.home.infocards[0].content}
          action="Acc"
        />
        <ImageCard
          image="card2.jpg"
          title={page.home.infocards[1].title}
          subtitle={page.home.infocards[1].subtitle}
          content={page.home.infocards[1].content}
          action="Acc"
        />

        <ImageCard
          image="card1.jpg"
          title={page.home.infocards[2].title}
          subtitle={page.home.infocards[2].subtitle}
          content={page.home.infocards[2].content}
          action="Acc"
        />

        <ImageCard
          image="card1.jpg"
          title={page.home.infocards[3].title}
          subtitle={page.home.infocards[3].subtitle}
          content={page.home.infocards[3].content}
          action="Acc"
        />
      </div>
      <div className="flex justify-center bg-gray-500 h-[100px] mx-4 rounded-lg">

      </div>
      {/* Contacts Items */}
      <div className="py-10 md:flex justify-center align-middle gap-10 padding-x mt-10 bg-gray-500">
        <ContactItem
          tipo="Whatsapp"
          subtext="Contáctanos por Whatsapp"
          cta="Cóntactanos"
          icon="wsp-icon.svg"
          direction="/wsp"
        />
        <ContactItem
          tipo="Teléfono"
          subtext="Contáctanos por Teléfono"
          cta="Cóntactanos"
          icon="call-icon.svg"
          direction="/call"
        />
        <ContactItem
          tipo="Correo"
          subtext="Contáctanos por Correo"
          cta="Cóntactanos"
          icon="mail-icon.svg"
          direction="mailto:"
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
