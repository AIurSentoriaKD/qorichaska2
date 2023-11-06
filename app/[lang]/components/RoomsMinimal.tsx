import { Locale } from "@/i18n.config";
import React from "react";
import GalleryHome from "./GalleryHome";
import { getDictionary } from "@/lib/dictionary";

async function RoomsMinimal({ lang }: { lang: Locale }) {
  const { components } = await getDictionary(lang);
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
  return (
    <div className="flex items-center justify-center min-h-96 bg-fixed bg-parallax bg-cover">
      <div className="bg-black/30 w-full h-full grid lg:grid-cols-4 sm:grid-cols-2">
        {galleryImages.map((image) => {
          return (
            <GalleryHome image={image} key={image} plusclass={"col-auto"} />
          );
        })}
      </div>
    </div>
  );
}

export default RoomsMinimal;
