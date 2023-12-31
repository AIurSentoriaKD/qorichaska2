import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import Reveal from "../components/animation/Reveal";
import CustomButton from "../components/CustomButton";
import Hover from "../components/animation/Hover";

export default async function About({
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
              <h1 className="hero__title text-white">{page.about.slogan}</h1>
            </Reveal>
            <Reveal>
              <p className="hero__subtitle text-gray-200">
                {page.about.description}
              </p>
            </Reveal>
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
      {/* Container section */}
      <div className="bg-qori-primary w-full flex justify-center">
        <div className=" text-white text-lg p-10 lg:w-1/2 flex flex-col gap-4 text-justify">
          <h1 className="text-center text-xl font-bold">
            {page.about.art1.pre}
          </h1>
          <p className="text-justify">{page.about.art1.first}</p>
          <p className="text-justify">{page.about.art1.second}</p>
          <p className="text-justify">{page.about.art1.third}</p>
        </div>
      </div>
    </div>
  );
}
