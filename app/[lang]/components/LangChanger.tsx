"use client";

import { i18n, Locale } from "@/i18n.config";
import { LangChangerProps } from "@/types";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

function LangChanger({ initialLang }: LangChangerProps) {
  const pathName = usePathname();
  const [selectedLang, setSelectedLang] = useState<Locale>(initialLang);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return `/${locale}`;
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-24 text-qori-ink" ref={dropdownRef}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full cursor-pointer rounded-full border border-qori-outline-soft/80 bg-white/80 py-2 pl-4 pr-9 text-left text-sm font-bold uppercase tracking-[0.05em] text-qori-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-qori-accent"
        >
          <span className="block truncate">{selectedLang}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronUpDownIcon className="h-4 w-4 text-qori-outline" />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-qori-outline-soft/80 bg-white py-2 text-sm shadow-xl opacity-100 transition-all duration-100 focus:outline-none">
          {i18n.locales.map((locale) => {
            const isSelected = selectedLang === locale;
            return (
              <div
                key={locale}
                onClick={() => {
                  setSelectedLang(locale);
                  setIsOpen(false);
                }}
                className={`relative cursor-pointer select-none py-2 pl-9 pr-3 hover:bg-qori-surface-low hover:text-qori-primary text-qori-muted`}
              >
                <Link
                  href={redirectedPathName(locale)}
                  className={`block truncate uppercase ${
                    isSelected ? "font-extrabold text-qori-primary" : "font-semibold"
                  }`}
                >
                  {locale}
                </Link>
                {isSelected && (
                  <Link
                    href={redirectedPathName(locale)}
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-qori-primary"
                  >
                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LangChanger;
