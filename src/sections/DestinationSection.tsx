import { useRef, useState, useEffect, useCallback } from "react";
import { destinations } from "../Data/destinationData";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IcoMapPin = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" width="13" height="13">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
  </svg>
);
const IcoArrowLeft = () => (
  <svg viewBox="0 0 320 512" fill="currentColor" width="14" height="14">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
  </svg>
);
const IcoArrowRight = () => (
  <svg viewBox="0 0 320 512" fill="currentColor" width="14" height="14">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);
const IcoChevronRight = () => (
  <svg viewBox="0 0 320 512" fill="currentColor" width="11" height="11">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);

// ─── Tour type icons — white outline SVGs ─────────────────────────────────────

const IcoGroupTour = () => (
  <svg viewBox="0 0 640 512" fill="white" width="26" height="26">
    <path d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6.7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H104C46.6 192 0 238.6 0 296v2.7zm640 0V296c0-57.4-46.6-104-104-104H415.3c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 38.2-16.8 72.5-43.3 96c.2 0 .4 0 .7 0H618.7c11.8 0 21.3-9.6 21.3-21.3zM320 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm-58.7 192H378.7C445.1 352 499 401.7 507.3 465.9l1.9 14.1H130.7l1.9-14.1C140.9 401.7 194.9 352 261.3 352z" />
  </svg>
);
const IcoPrivateTour = () => (
  <svg viewBox="0 0 512 512" fill="white" width="26" height="26">
    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
  </svg>
);
const IcoTailorMade = () => (
  <svg viewBox="0 0 512 512" fill="white" width="26" height="26">
    <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 66.4 14.3 90.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-61.6-29-90.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8.5 104 28.7L429 274.5c49-23 83-72.8 83-130.5z" />
  </svg>
);

// ─── Tour types data ──────────────────────────────────────────────────────────

const tourTypes = [
  {
    icon: <IcoGroupTour />,
    title: "Group tours",
    description: "Join our group tours to explore stunning destinations with like-minded travelers. Fun and camaraderie guaranteed.",
    linkLabel: "VIEW TOURS",
    href: "/tours",
  },
  {
    icon: <IcoPrivateTour />,
    title: "Private tours",
    description: "Enjoy personalized experiences with our private tours. Perfect for families, couples, or friends seeking exclusivity.",
    linkLabel: "VIEW TOURS",
    href: "/tours",
  },
  {
    icon: <IcoTailorMade />,
    title: "Tailor-Made tours",
    description: "Customize your dream vacation with our tailor-made tours. Create unique itineraries that suit your interests and schedule.",
    linkLabel: "CONTACT US",
    href: "/contact",
  },
];

// ─── Destination Card ─────────────────────────────────────────────────────────

const DestCard = ({ name, tours, image, href }: {
  name: string; tours: number; image: string; href: string;
}) => (
  <a
    href={href}
    className="group relative block rounded-2xl overflow-hidden shrink-0 w-[200px] h-[280px] shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 z-10">
      <h3 className="text-white font-bold text-[17px] leading-tight mb-1">{name}</h3>
      <div className="flex items-center gap-1.5 text-white/80 text-[12px]">
        <IcoMapPin /><span>{tours} tours</span>
      </div>
    </div>
  </a>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DestinationSection() {
  const trackRef             = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft]   = useState(false);
  const [canRight, setCanRight] = useState(true);

  const CARD_W   = 200;
  const CARD_GAP = 20;
  const STEP     = (CARD_W + CARD_GAP) * 3;

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    return () => el.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") =>
    trackRef.current?.scrollBy({ left: dir === "left" ? -STEP : STEP, behavior: "smooth" });

  return (
    <section className="w-full font-['Outfit',sans-serif]">

      {/* ══════════════════════════════════════════════
          DESTINATIONS SLIDER  ·  bg-white
      ══════════════════════════════════════════════ */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-8 pt-20 pb-16">

          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#5cb85c] text-[11px] font-bold tracking-[4px] uppercase mb-2">
                Many tourists visit
              </p>
              <h2 className="text-gray-900 font-bold text-[32px] leading-tight">
                Top destinations
              </h2>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[#5cb85c] font-extrabold text-[22px] leading-none">+50</p>
                <p className="text-gray-500 text-[12px] leading-tight">Attractive<br />destinations</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canLeft}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors
                    ${canLeft ? "border-gray-300 text-gray-600 hover:border-[#5cb85c] hover:text-[#5cb85c] hover:bg-green-50" : "border-gray-200 text-gray-300 cursor-not-allowed"}`}
                >
                  <IcoArrowLeft />
                </button>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canRight}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors
                    ${canRight ? "border-gray-300 text-gray-600 hover:border-[#5cb85c] hover:text-[#5cb85c] hover:bg-green-50" : "border-gray-200 text-gray-300 cursor-not-allowed"}`}
                >
                  <IcoArrowRight />
                </button>
              </div>

              <a href="/destinations" className="flex items-center gap-1.5 text-[#5cb85c] hover:text-[#4cae4c] font-semibold text-[13px] transition-colors">
                View all destinations <IcoChevronRight />
              </a>
            </div>
          </div>

          {/* Slider track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {destinations.map((d) => (
              <DestCard key={d.id} name={d.name} tours={d.tours} image={d.image} href={d.href} />
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-7">
            {Array.from({ length: Math.ceil(destinations.length / 3) }).map((_, i) => (
              <button
                key={i}
                onClick={() => trackRef.current?.scrollTo({ left: i * STEP, behavior: "smooth" })}
                className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer
                  ${i === 0 ? "w-6 bg-[#5cb85c]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>

        </div>
      </div>{/* end bg-white */}

      {/* ══════════════════════════════════════════════
          TOUR TYPES CARDS  ·  bg-[#f0f2f0] grey
      ══════════════════════════════════════════════ */}
      <div className="bg-[#f0f2f0]">
        <div className="max-w-[1200px] mx-auto px-8 py-20">
          <div className="grid grid-cols-4 gap-5">

            {/* Col 1 — green promo card */}
            <div className="bg-[#5cb85c] rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-white/80 text-[10px] font-bold tracking-[3px] uppercase mb-4">
                  FLEXIBLE TOURS
                </p>
                <h2 className="text-white font-extrabold text-[32px] leading-[1.15] mb-5">
                  Explore your<br />way
                </h2>
                <p className="text-white/85 text-[13.5px] leading-[1.65] mb-5">
                  Explore Moliva your way with incredible trips and captivating experiences.
                </p>
              </div>
              <p className="text-white/85 text-[13.5px]">
                You need{" "}
                <a href="/contact" className="text-white font-bold underline underline-offset-2 hover:text-white/80 transition-colors">
                  advice
                </a>
                ?
              </p>
            </div>

            {/* Cols 2-4 — white tour type cards */}
            {tourTypes.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                {/* Green circle icon */}
                <div className="w-[56px] h-[56px] rounded-full bg-[#5cb85c] flex items-center justify-center mb-6 shrink-0">
                  {t.icon}
                </div>

                <h3 className="text-gray-900 font-bold text-[18px] mb-3">{t.title}</h3>

                <p className="text-gray-500 text-[13.5px] leading-[1.7] flex-1 mb-6">
                  {t.description}
                </p>

                <a
                  href={t.href}
                  className="inline-flex items-center gap-2 text-[#5cb85c] hover:text-[#4cae4c] text-[12px] font-bold tracking-[1.5px] uppercase transition-colors"
                >
                  {t.linkLabel} <IcoChevronRight />
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>{/* end bg-grey */}

    </section>
  );
}