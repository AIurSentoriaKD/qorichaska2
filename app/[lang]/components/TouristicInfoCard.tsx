import Image from "next/image";
import React from "react";

function TouristicInfoCard({
  order,
  title,
  subtitle,
  image,
}: {
  order: boolean;
  title: string;
  subtitle: string;
  image: string;
}) {
  let contentf = () => {
    return (
      <section className="flex flex-col xl:flex-row  w-full h-auto xl:h-[350px]">
        <div className="w-full md:w-1/2 mx-5 flex flex-col align-middle justify-center">
          <h1 className="text-2xl lg:text-[50px] font-bold my-5 text-center w-full">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-extralight text-justify">{subtitle}</p>
        </div>
        <div className="">
          <Image
            src={image}
            alt="mainimage"
            className="h-full w-full object-contain"
            width={2040}
            height={1050}
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    );
  };
  if (order) {
    contentf = () => {
      return (
        <section className="flex flex-col xl:flex-row  w-full h-auto xl:h-[350px]">
          <div className="">
            <Image
              src={image}
              alt="mainimage"
              className="h-full w-full object-contain"
              width={2040}
              height={1050}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full md:w-1/2 mx-5 flex flex-col align-middle justify-center">
            <h1 className="text-2xl lg:text-[50px] font-bold my-5 text-center w-full">
              {title}
            </h1>
            <p className="text-lg md:text-xl font-extralight text-justify">{subtitle}</p>
          </div>
        </section>
      );
    };
  }

  return (
    <div className="m-5 bg-slate-50 drop-shadow-lg">
      <div className="hidden xl:block">{contentf()}</div>
      <div className="block xl:hidden">
        <section className="flex flex-col xl:flex-row  w-full h-auto xl:h-[350px]">
          <div className="">
            <Image
              src={image}
              alt="mainimage"
              className="h-full w-full object-contain"
              width={2040}
              height={1050}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <h1 className="text-2xl lg:text-[50px] font-bold my-5 text-center w-full">
              {title}
            </h1>
            <p className="text-lg md:text-xl m-5 font-extralight text-justify">{subtitle}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TouristicInfoCard;
