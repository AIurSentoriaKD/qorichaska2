"use client";

import { i18n, Locale } from "@/i18n.config";
import { LangChangerProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

function LangChanger({ initialLang }: LangChangerProps) {
  const pathName = usePathname();
  const [selectedLang, setSelectedLang] = useState<Locale>(initialLang);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return `/${locale}`;
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="w-24 text-qori-ink">
      <Listbox value={selectedLang} onChange={setSelectedLang}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-full border border-qori-outline/30 bg-white/80 py-2 pl-4 pr-9 text-left text-sm font-bold uppercase tracking-[0.05em] text-qori-primary shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-qori-accent">
            <span className="block truncate">{selectedLang}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon className="h-4 w-4 text-qori-outline" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute right-0 mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-qori-outline/20 bg-white py-2 text-sm shadow-xl focus:outline-none">
              {i18n.locales.map((locale) => (
                <Listbox.Option
                  key={locale}
                  value={locale}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-9 pr-3 ${
                      active ? "bg-qori-surface-low text-qori-primary" : "text-qori-muted"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <Link
                        href={redirectedPathName(locale)}
                        className={`block truncate uppercase ${
                          selected ? "font-extrabold" : "font-semibold"
                        }`}
                      >
                        {locale}
                      </Link>
                      {selected ? (
                        <Link
                          href={redirectedPathName(locale)}
                          className="absolute inset-y-0 left-0 flex items-center pl-3 text-qori-primary"
                        >
                          <CheckIcon className="h-4 w-4" aria-hidden="true" />
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
