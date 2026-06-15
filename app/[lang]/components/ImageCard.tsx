import Image from "next/image";
import Link from "next/link";

function ImageCard({
  image,
  title,
  subtitle,
  content,
  action,
  href,
}: {
  image: string;
  title: string;
  subtitle: string;
  content: string;
  action: string;
  href?: string;
}) {
  return (
    <article className="qori-card group flex h-full flex-col">
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <Image
          className="object-cover transition duration-700 group-hover:scale-105"
          src={`/${image}`}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="qori-label mb-3 text-qori-secondary">{subtitle}</p>
        <h3 className="qori-serif text-2xl font-bold leading-tight text-qori-ink">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-qori-muted">{content}</p>
        {href ? (
          <Link
            href={href}
            className="mt-7 inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.05em] text-qori-primary"
          >
            {action}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export default ImageCard;
