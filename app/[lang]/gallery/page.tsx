import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import Hover from "../components/animation/Hover";
import CustomButton from "../components/CustomButton";
import Reveal from "../components/animation/Reveal";
import GalleryFromImages from "../components/GalleryFromImages";
export default async function GalleryPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  const fs = require("fs");
  const path = require("path");
  const sizeof = require("image-size");
  const directoryPath = "public/gallery"; // Replace this with the path to your directory

  // Read the files in the directory
  const files = fs.readdirSync(directoryPath);
  // Get the relative path of each file
  const imagesOnGallery = files.map((file: any) => {
    let values =  sizeof(
      path.relative(
        directoryPath,
        path.join(directoryPath, "public\\gallery\\" + file)
      )
    );
    return {
      src:
        "/gallery/" +
        path.relative(directoryPath, path.join(directoryPath, file)),
      width: values.width,
      height: values.height,
    };
  });
  return (
    <div className="">
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
      {/* IMAGES OF GALLERY */}
      {/* <div className="w-full flex flex-wrap justify-center">
        {imagesOnGallery.map((image: any) => (
          <GalleryImage image={image} />
        ))}
      </div> */}
      <GalleryFromImages images={imagesOnGallery} />
    </div>
  );
}
