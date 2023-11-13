import { Locale } from "@/i18n.config";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
export interface LangChangerProps {
  initialLang: Locale;
}
export interface Keys {
  mapsApiKey: string;
}
