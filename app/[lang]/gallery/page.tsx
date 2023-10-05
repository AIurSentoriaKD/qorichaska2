import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

export default async function Gallery({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className="py-24">
      <div className="">
        <h1 className="text-3xl font-bold">{page.gallery.title}</h1>
        <p className="text-gray-500">{page.gallery.description}</p>
      </div>
    </section>
  );
}
