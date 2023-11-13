import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import MapComponent from "../components/MapComponent";
import Reveal from "../components/animation/Reveal";
import Hover from "../components/animation/Hover";
import CustomButton from "../components/CustomButton";
import { FaStar } from "react-icons/fa";
import TouristicInfoCard from "../components/TouristicInfoCard";

export default async function Services({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

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
              <h1 className="hero__title text-white">
                {page.location.subtitle}
              </h1>
            </Reveal>
            <Reveal>
              <p className="hero__subtitle text-gray-200">
                {page.location.slogan}
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
      {/* SUB PARAGRAPH */}
      <div className="flex flex-col lg:flex-row md:m-5 bg-slate-100 drop-shadow-lg">
        <div className="md:w-1/2 w-full md:align-bottom flex flex-col justify-end md:m-5">
          <div className="flex justify-center">
            <FaStar size={35} />
          </div>
          <h1 className="text-[50px] font-bold my-5 text-center w-full">
            {page.location.title}
          </h1>
          <p className="text-xl font-extralight text-justify">
            {page.location.description}
          </p>
        </div>
        <MapComponent />
        {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342.8852952636169!2d-71.98379186275125!3d-13.516909025162873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd67130a0f86d%3A0x766e5366d8e8f062!2sHostal%20Qorichaska!5e0!3m2!1ses!2spe!4v1699894595946!5m2!1ses!2spe"
        width="600"
        height="450"
        className="border:0;"
        loading="lazy"
        ></iframe> */}
      </div>
      {/* TOURISTIC INFO CARDS */}
      <div className="flex flex-col justify-center items-center">
        <Reveal delay={0.3}>
          <TouristicInfoCard
            order={true}
            title={page.location.articles[0].article}
            subtitle={page.location.articles[0].description}
            image="/catedralfull.png"
          />
        </Reveal>
        <Reveal delay={0.3}>
          <TouristicInfoCard
            order={false}
            title={page.location.articles[1].article}
            subtitle={page.location.articles[1].description}
            image="/catedralfull.png"
          />
        </Reveal>
        <Reveal delay={0.3}>
          <TouristicInfoCard
            order={true}
            title={page.location.articles[2].article}
            subtitle={page.location.articles[2].description}
            image="/catedralfull.png"
          />
        </Reveal>
        <Reveal delay={0.3}>
          <TouristicInfoCard
            order={false}
            title={page.location.articles[3].article}
            subtitle={page.location.articles[3].description}
            image="/catedralfull.png"
          />
        </Reveal>
        <Reveal delay={0.3}>
          <TouristicInfoCard
            order={true}
            title={page.location.articles[4].article}
            subtitle={page.location.articles[4].description}
            image="/catedralfull.png"
          />
        </Reveal>
        <Reveal delay={0.3}>
          <TouristicInfoCard
            order={false}
            title={page.location.articles[5].article}
            subtitle={page.location.articles[5].description}
            image="/catedralfull.png"
          />
        </Reveal>
      </div>
    </div>
  );
}
