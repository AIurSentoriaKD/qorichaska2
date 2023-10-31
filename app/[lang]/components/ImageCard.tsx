import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Hover from "./animation/Hover";

function ImageCard({
  image,
  title,
  subtitle,
  content,
  action,
}: {
  image: string;
  title: string;
  subtitle: string;
  content: string;
  action: string;
}) {
  return (
    <div className="mb-3 sm:mx-0 mx-auto group rounded-xl overflow-hidden border-black border-2 relative w-[340px] h-[480px]">
      {/* <div className="z-3 absolute border-8 border-white rounded-lg w-full h-full bg-white"></div> */}
      <Image
        className="rounded-xl w-auto h-[600px] object-cover"
        src={`/${image}`}
        alt="imagecardimage"
        width={400}
        height={600}
      ></Image>
      <div className="w-full h-full top-0  absolute  backdrop-blur-md rounded-xl bg-black/30 text-white p-12 flex flex-col justify-center -right-full group-hover:right-0 transition-all duration-200">
        <h1 className="text-xl font-extrabold uppercase">{title}</h1>
        <p className="font-extralight capitalize text-sm">{subtitle}</p>
        <p className="text-lg my-5 text-justify">{content}</p>
        <div className="flex justify-center">
          <Hover>
            <CustomButton
              title={action}
              containerStyles="bg-qori-primary text-white rounded-lg mt-10 w-[150px]"
            ></CustomButton>
          </Hover>
        </div>
      </div>
    </div>
    // <div className="mb-3 group rounded-xl overflow-hidden border-black border-8 bg-black relative w-auto sm:w-full md:w-[400px] md:h-[600px] h-1/4">
    //   <Image className="rounded-xl w-auto h-[600px] object-cover" src={`/${image}`} alt="imagecardimage" width={400} height={600}></Image>
    // </div>
  );
}

export default ImageCard;
