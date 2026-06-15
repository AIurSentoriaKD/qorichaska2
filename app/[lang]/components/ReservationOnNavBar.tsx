import { Locale } from "@/i18n.config";
import React, { useState } from "react";

import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import CustomButton from "./CustomButton";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
function ReservationOnNavBar({
  lang,
}: {
  lang: Locale;
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
          primaryColor={"orange"}
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
            <div className="flex flex-row gap-1 rounded-md bg-qori-surface-low p-2 text-qori-primary">
              <span>#</span>
              <FaPerson />
            </div>
            <div className="flex flex-row gap-1 rounded-md bg-qori-surface-low p-2 text-qori-primary">
              <span>#</span>
              <FaChild />
            </div>
          </div>
        </div>
        <CustomButton
          title={buttonTitle}
          containerStyles="bg-qori-primary text-white hover:bg-[#84250e]"
        />
      </div>
    </div>
  );
}

export default ReservationOnNavBar;
