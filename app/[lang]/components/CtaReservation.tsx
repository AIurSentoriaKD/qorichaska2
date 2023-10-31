import React from "react";
import Reveal from "./animation/Reveal";
import Image from "next/image";
import CustomButton from "./CustomButton";

function CtaReservation() {
  return (
    <div className="bg-sky-300 grid grid-flow-row lg:grid-flow-col">
      <div className="h-full flex flex-col align-middle justify-center">
        <div className=" flex justify-center align-middle items-center flex-wrap m-3 ">
          <div className="p-3">
            <p className="">correo</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="mail"
              placeholder="Correo"
            />
          </div>
          <div className="p-3">
            <p>nombre</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div className="p-3">
            <p>apellido</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Apellido"
            />
          </div>
        </div>
        <div className="p-3 w-full flex justify-center">
          <CustomButton
            title="Inquiry Now"
            containerStyles="bg-qori-primary rounded-md text-white shadow-lg"
          />
        </div>
      </div>
      <div className=" w-full">
        <div className="flex justify-end relative">
          <Reveal direction="from-left">
            <Image
              src={"/machu2.png"}
              alt="ctaimage"
              className=" right-0 bottom-0"
              width={850}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default CtaReservation;
