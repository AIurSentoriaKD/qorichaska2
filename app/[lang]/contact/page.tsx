import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import Reveal from "../components/animation/Reveal";
import Hover from "../components/animation/Hover";
import CustomButton from "../components/CustomButton";
import ContactItem from "../components/ContactItem";

export default async function Gallery({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, components } = await getDictionary(lang);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen/2">
        <Image
          src="/cusco-2.jpg"
          alt="mainimage"
          className="h-full w-full object-contain absolute"
          width={1700}
          height={1700}
          style={{ objectFit: "cover" }}
        />
        <div className="w-full h-full bg-gradient-to-r from-black/50 left-0 absolute" />
        <div className="flex">
          <div className="flex flex-col py-36 padding-x w-full lg:w-1/2">
            <Reveal>
              <h1 className="hero__title text-white">
                {page.location.subtitle}
              </h1>
            </Reveal>
            <Reveal>
              <p className="hero__subtitle text-gray-200">
                {page.location.slogan}
              </p>
            </Reveal>
            <div className="my-5">
              <Hover>
                <Reveal>
                  <CustomButton
                    title={page.home["button-text"]}
                    containerStyles="bg-qori-primary text-white rounded-full hover:bg-qori-accent"
                  ></CustomButton>
                </Reveal>
              </Hover>
            </div>
          </div>
          <div className="h-full  items-center align-middle absolute right-0 hidden lg:block lg:scale-75">
            <Reveal>
              <Image
                src="/hero.png"
                alt="mainimage"
                className=""
                width={640}
                height={640}
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center">
        <form
          method="POST"
          className=" w-auto md:w-[650px] m-4 py-2 px-4 bg-gray-100 border-r-4 border-r-black rounded-lg shadow-lg hover:border-r-blue-500 hover:shadow-xl border-b-4 border-b-black hover:border-b-blue-500"
        >
          <div className="pt-0 mb-3">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>

          <div className="pt-0 mb-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>

          <div className="pt-0 mb-3">
            <textarea
              placeholder="Your message"
              name="message"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>

          <div className="pt-0 mb-3">
            <button
              className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>
        <div className="w-auto md:w-[350px] m-4 p-2 border-b-4 border-r-4 border-b-black border-r-black rounded-lg content-center grid bg-stone-100 drop-shadow-lg">
          <h2 className="font-bold">Dirección</h2>
          <p className="mx-2">
            123 Main Street
            <br />
            Cityville, State 12345
            <br />
            Country
          </p>
          <h2 className="font-bold">Phone Number</h2>
          <p className="mx-2">Phone: +1 (555) 123-4567</p>
          <p className="font-bold">Email: </p>
          <p className="mx-2">info@example.com</p>
        </div>
      </div>
      {/* Contacts Items */}
      <div className="py-10 md:flex justify-center align-middle gap-10 padding-x bg-qori-primary">
        <ContactItem
          tipo={components.contactItems.wsp.title}
          subtext={components.contactItems.wsp.content}
          cta={components.contactItems.wsp.action}
          icon="wsp-icon.svg"
          direction="/wsp"
        />
        <ContactItem
          tipo={components.contactItems.phone.title}
          subtext={components.contactItems.phone.content}
          cta={components.contactItems.phone.action}
          icon="call-icon.svg"
          direction="/call"
        />
        <ContactItem
          tipo={components.contactItems.email.title}
          subtext={components.contactItems.email.content}
          cta={components.contactItems.email.action}
          icon="mail-icon.svg"
          direction="mailto:"
        />
      </div>
    </div>
  );
}
