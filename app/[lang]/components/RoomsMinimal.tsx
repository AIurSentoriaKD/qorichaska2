import { Locale } from "@/i18n.config";
import React from "react";
import GalleryHome from "./GalleryHome";
import { getDictionary } from "@/lib/dictionary";

async function RoomsMinimal({ lang }: { lang: Locale }) {
  const { components } = await getDictionary(lang);
  const galleryImages = [
    "single.jpg",
    "double.jpg",
    "triple.jpg",
    "matrim.jpg",
    "squad.jpg",
  ];
  return (
    <div className="flex items-center justify-center min-h-96 bg-fixed bg-parallax bg-cover">
      <div className="bg-black/50 w-full h-full ">
        <div className="my-5">
          <h1 className="text-white text-3xl text-center font-extrabold underline underline-offset-8"> Nuestras Habitaciones</h1>
        </div>
        <div className="flex flex-wrap flex-row justify-center">
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

export default RoomsMinimal;
