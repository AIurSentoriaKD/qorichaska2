import Image from "next/image";
import React from "react";
import Hover from "./animation/Hover";

function ContactItem({
  tipo,
  subtext,
  cta,
  icon,
  direction,
}: {
  tipo: string;
  subtext: string;
  cta: string;
  icon: string;
  direction: string;
}) {
  return (
    <div className="md:w-1/3 lg:w-[450px]  my-10 relative bg-white rounded-lg drop-shadow-lg border-l-4 border-qori-accent border-b-4">
      <div className="absolute w-full flex justify-center -top-9 right-0">
        <Image
          src={`/${icon}`}
          alt="contacticon"
          className="h-16 w-16 bg-white p-3 rounded-3xl drop-shadow-md"
          width={400}
          height={400}
        />
      </div>
      <div className="p-8 flex flex-col gap-4">
        <h1 className="text-lg font-extrabold">{tipo}</h1>
        <p className="font-extralight">{subtext}</p>
        <div className="flex justify-end">
          <Hover h_type="spring">
            <a href={direction} className="flex flex-row gap-4 justify-end">
              <p>{cta}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </Hover>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
