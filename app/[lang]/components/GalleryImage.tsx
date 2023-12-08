'use client';
import Image from "next/image";
import React from "react";

function GalleryImage({ image }: { image: any }) {
  const displayFullImage = (image: any) => {
    return (
      <div className="absolute w-screen h-screen bg-black/50 flex justify-center content-center">
        <Image
          src={`/gallery/${image}`}
          alt="mainimage"
          className="h-full w-full object-contain absolute"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  };
  return (
    <button onClick={() => displayFullImage(image)}>
      <Image
        src={`/gallery/${image}`}
        alt="mainimage"
        className=""
        width={300}
        height={300}
        style={{ objectFit: "contain" }}
      />
    </button>
  );
}

export default GalleryImage;
