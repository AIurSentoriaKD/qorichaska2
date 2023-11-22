import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { GiHamburgerMenu } from "react-icons/gi";

export default function DropDownNavBar({
  lang,
  navigation,
}: {
  lang: Locale;
  navigation: any;
}) {
  const linkStyle =
    "text-black relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">
          <GiHamburgerMenu size="40"/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col gap-4 py-4 items-center">
            <Menu.Item>
              <Link href={`/${lang}`} className={linkStyle}>
                {navigation.home}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href={`/${lang}/services`} className={linkStyle}>
                {navigation.services}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href={`/${lang}/gallery`} className={linkStyle}>
                {navigation.gallery}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href={`/${lang}/location`} className={linkStyle}>
                {navigation.location}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href={`/${lang}/contact`} className={linkStyle}>
                {navigation.contact}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href={`/${lang}/about`} className={linkStyle}>
                {navigation.about}
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
