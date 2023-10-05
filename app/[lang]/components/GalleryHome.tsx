import Image from "next/image";
import React from "react";

function GalleryHome({
  image,
  plusclass,
}: {
  image: string;
  plusclass: string;
}) {
  return (
    <div
      className={`${plusclass} bg-white m-4 p-2 drop-shadow-md  flex flex-col justify-center align-middle overflow-hidden`}
    >
      <Image src={`/${image}`} className="h-80 object-cover" alt="imagecardimage" height={320} width={800}></Image>
      <br />
      <br />
      <br />
    </div>
  );
}

export default GalleryHome;
