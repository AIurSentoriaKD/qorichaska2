"use client";

import { redirect, usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import { Fragment, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import { Locale } from "@/i18n.config";
import { LangChangerProps } from "@/types";
import Link from "next/link";

function LangChanger({ initialLang }: LangChangerProps) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    //return redirect(segments.join("/"));
    return segments.join("/");
  };
  const [selectedLang, setSelectedLang] = useState(initialLang);

  // {
  //   i18n.locales.map((lang) => (
  //     <Link
  //       href={redirectedPathName(lang)}
  //       className="rounded-md border bg-black px-3 py-2 text-white"
  //       key={lang}
  //     >
  //       {lang}
  //     </Link>
  //   ));
  // }

  return (
    <div className="w-40 sm:w-20 text-black">
      <Listbox value={selectedLang} onChange={setSelectedLang}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedLang}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {i18n.locales.map((lang) => (
                <Listbox.Option
                  key={lang}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={lang}
                >
                  {({ selected }) => (
                    <>
                      <Link
                        href={redirectedPathName(lang)}
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {lang}
                      </Link>
                      {selected ? (
                        <Link
                          href={redirectedPathName(lang)}
                          className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </Link>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default LangChanger;
