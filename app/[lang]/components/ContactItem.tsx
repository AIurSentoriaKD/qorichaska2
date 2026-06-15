import Image from "next/image";
import Hover from "./animation/Hover";

function ContactItem({
  tipo,
  subtext,
  cta,
  icon,
  direction,
}: {
  tipo: string;
  subtext: string;
  cta: string;
  icon: string;
  direction: string;
}) {
  return (
    <article className="qori-card relative overflow-visible p-7 pt-11">
      <div className="absolute -top-8 left-7 grid h-14 w-14 place-items-center rounded-xl border border-qori-outline-soft/70 bg-qori-surface-low shadow-[0_12px_30px_rgba(147,48,24,0.1)]">
        <Image
          src={`/${icon}`}
          alt=""
          className="h-8 w-8 object-contain"
          width={32}
          height={32}
        />
      </div>
      <h3 className="qori-serif text-2xl font-bold text-qori-ink">{tipo}</h3>
      <p className="mt-4 text-sm leading-7 text-qori-muted">{subtext}</p>
      <div className="mt-7">
        <Hover h_type="spring">
          <a
            href={direction}
            className="inline-flex text-[0.72rem] font-extrabold uppercase tracking-[0.05em] text-qori-primary"
          >
            {cta}
          </a>
        </Hover>
      </div>
    </article>
  );
}

export default ContactItem;
