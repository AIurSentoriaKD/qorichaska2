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
  if (lang == "en") {
    footerDateOptions = { cancel: "Cancel", apply: "Apply" };
    buttonTitle = "Book";
  }
  return (
    <div>
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
            <span>#</span>
            <span>habitacion(es)</span>
          </div>
          <div className="flex flex-row gap-1 mt-2 items-center justify-between">
            <div className="flex flex-row gap-1 bg-black/50 p-2 rounded-md">
              <span>#</span>
              <FaPerson />
            </div>
            <div className="flex flex-row gap-1 bg-black/50 p-2 rounded-md">
              <span>#</span>
              <FaChild />
            </div>
          </div>
        </div>
        <CustomButton
          title={buttonTitle}
          containerStyles="bg-teal-500 text-white  hover:bg-teal-300"
        />
      </div>
    </div>
  );
}

export default ReservationOnNavBar;
