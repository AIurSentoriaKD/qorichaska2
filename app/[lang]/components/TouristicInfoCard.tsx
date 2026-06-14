import Image from "next/image";

function TouristicInfoCard({
  order,
  title,
  subtitle,
  image,
}: {
  order: boolean;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <article className="qori-card grid overflow-hidden lg:grid-cols-2">
      <div className={`relative min-h-[320px] ${order ? "" : "lg:order-2"}`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className="qori-label mb-4 text-qori-blue">Cusco</p>
        <h3 className="qori-serif text-3xl font-bold leading-tight text-qori-ink md:text-4xl">
          {title}
        </h3>
        <p className="mt-5 text-base leading-8 text-qori-muted">{subtitle}</p>
      </div>
    </article>
  );
}

export default TouristicInfoCard;
