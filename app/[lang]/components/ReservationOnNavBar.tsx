import { Locale } from "@/i18n.config";
import React, { useState } from "react";

import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import CustomButton from "./CustomButton";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
function ReservationOnNavBar({
  lang,
  navigation,
}: {
  lang: Locale;
  navigation: any;
}) {
  const [date, setDate] = useState<DateValueType>(null);
  let footerDateOptions = { cancel: "Cancelar", apply: "Aceptar" };
  let buttonTitle = "Reservar";
  let habitat = "Habitación";
  if (lang == "en") {
    footerDateOptions = { cancel: "Cancel", apply: "Apply" };
    buttonTitle = "Book";
    habitat = "Room";
  }
  return (
    <div className="backdrop-blur-md absolute top-0 right-1/4 bg-black/50 rounded-b-lg px-2 border-b-2 border-l-2 border-r-2 border-white">
      <div className="flex flex-row items-center gap-2">
        <Datepicker
          primaryColor={"emerald"}
          minDate={new Date()}
          startFrom={new Date()}
          showFooter={true}
          separator={"~"}
          i18n={lang}
          value={date}
          onChange={setDate}
          configs={{ footer: footerDateOptions }}
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-1 text-xs">
            <select
              id="roomselect"
              name="rooms"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="1">1 {habitat}</option>
              <option value="2">2 {habitat}{lang == "en"? "s":"es"}</option>
              <option value="3">3 {habitat}{lang == "en"? "s":"es"}</option>
              <option value="4">4 {habitat}{lang == "en"? "s":"es"}</option>
              <option value="5">5 {habitat}{lang == "en"? "s":"es"}</option>
            </select>
          </div>
          <div className="flex flex-row gap-1 mt-2 items-center justify-between">
            <div className="flex flex-row gap-1 bg-black/50 p-2 rounded-md w-20 items-center">
              <select
                id="personselect"
                name="person"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <FaPerson />
            </div>
            <div className="flex flex-row gap-1 bg-black/50 p-2 rounded-md w-20 items-center">
              <select
                id="childselect"
                name="child"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <FaChild />
            </div>
          </div>
        </div>
        <CustomButton
          title={buttonTitle}
          containerStyles="bg-teal-500 text-white  hover:bg-teal-300 rounded-md"
        />
      </div>
    </div>
  );
}

export default ReservationOnNavBar;
