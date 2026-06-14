import Image from "next/image";

function GalleryHome({ image, label }: { image: string; label: string }) {
  return (
    <figure className="group overflow-hidden rounded-3xl border border-white/15 bg-white/8">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={`/${image}`}
          className="object-cover transition duration-700 group-hover:scale-105"
          alt={label}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <figcaption className="px-5 py-4 text-sm font-bold uppercase tracking-[0.05em] text-white/85">
        {label}
      </figcaption>
    </figure>
  );
}

export default GalleryHome;
