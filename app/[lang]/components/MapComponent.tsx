import Link from "next/link";
import { FiMapPin, FiNavigation } from "react-icons/fi";

function MapComponent() {
  return (
    <div className="relative min-h-[500px] overflow-hidden bg-qori-surface-low">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(69,95,136,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(69,95,136,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-[50%] top-[48%] grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-qori-primary text-white shadow-[0_18px_38px_rgba(147,48,24,0.22)]">
        <FiMapPin size={34} />
      </div>
      <div className="absolute inset-x-6 bottom-6 rounded-xl border border-qori-outline-soft/70 bg-white/92 p-6 shadow-[0_16px_38px_rgba(147,48,24,0.08)] backdrop-blur">
        <p className="qori-label mb-2">Hotel Qorichaska</p>
        <p className="qori-serif text-2xl font-bold text-qori-ink">
          C. Nueva Alta 458, Cusco 08000
        </p>
        <Link
          href="https://www.google.com/maps/search/?api=1&query=Hostal%20Qorichaska%20C.%20Nueva%20Alta%20458%20Cusco"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.05em] text-qori-primary"
        >
          <FiNavigation />
          Google Maps
        </Link>
      </div>
    </div>
  );
}

export default MapComponent;
