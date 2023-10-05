import React from "react";
import CustomButton from "./CustomButton";

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
    <div className="my-3 group rounded-xl overflow-hidden border-black border-8 bg-black relative w-auto md:w-[400px] h-[600px]">
      {/* <div className="z-3 absolute border-8 border-white rounded-lg w-full h-full bg-white"></div> */}
      <img className="rounded-xl w-auto h-[600px] object-cover" src={`/${image}`}></img>
      <div className="w-full h-full top-0  absolute  backdrop-blur-md rounded-xl bg-black/30 text-white p-12 flex flex-col justify-center -right-full group-hover:right-0 transition-all duration-200">
        <h1 className="text-3xl font-extrabold uppercase">{title}</h1>
        <p className="font-extralight capitalize">{subtitle}</p>
        <p className="text-lg my-5 text-justify">{content}</p>
        <CustomButton
          title={action}
          containerStyles="bg-primary-blue text-white rounded-lg mt-10 w-[150px]"
        ></CustomButton>
      </div>
    </div>
  );
}

export default ImageCard;
