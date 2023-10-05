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
      <img src={`/${image}`} className="h-80 object-cover"></img>
      <br />
      <br />
      <br />
    </div>
  );
}

export default GalleryHome;
