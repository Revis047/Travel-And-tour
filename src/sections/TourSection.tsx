import { useState, useRef, useEffect, useCallback } from "react";
import { tours, whyChooseUs } from "../Data/tourData";
import demoImage from "../assets/demo.png";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IcoCheck = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="14" height="14" className="text-[#5cb85c] shrink-0">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.2 0z" />
  </svg>
);

const IcoChevronDown = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="14" height="14" className="text-gray-400 shrink-0">
    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
  </svg>
);

const IcoArrowRight = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="13" height="13">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L234.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

const IcoArrowLeft = () => (
  <svg viewBox="0 0 320 512" fill="currentColor" width="14" height="14">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
  </svg>
);

const IcoArrowRightNav = () => (
  <svg viewBox="0 0 320 512" fill="currentColor" width="14" height="14">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);

const IcoChevronRight = () => (
  <svg viewBox="0 0 320 512" fill="currentColor" width="11" height="11">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);

const IcoCalendar = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="13" height="13" className="text-gray-400">
    <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0z" />
  </svg>
);

const IcoMapPin = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" width="13" height="13" className="text-gray-400">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
  </svg>
);

const IcoHeart = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="14" height="14">
    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
  </svg>
);

const IcoStar = () => (
  <svg viewBox="0 0 576 512" fill="#f59e0b" width="13" height="13">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
);

// ─── Tour Card ────────────────────────────────────────────────────────────────

const TourCard = ({ tour }: { tour: typeof tours[0] }) => {
  const [wished, setWished] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shrink-0 w-72.5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-46.25 overflow-hidden">
        <img
          src={demoImage}
          alt={tour.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Wishlist heart */}
        <button
          onClick={() => setWished(!wished)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors
            ${wished ? "bg-[#5cb85c] text-white" : "bg-[#5cb85c] text-white"}`}
        >
          <IcoHeart />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-gray-900 font-bold text-[15px] leading-snug mb-3 line-clamp-2">
          {tour.title}
        </h3>

        {/* Days + Destinations */}
        <div className="flex items-center gap-4 text-gray-400 text-[12px] mb-3">
          <span className="flex items-center gap-1.5">
            <IcoCalendar /> {tour.days} days
          </span>
          <span className="flex items-center gap-1.5">
            <IcoMapPin /> {tour.destinations} Destinations
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-3" />

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="text-gray-800 font-bold text-[13px]">{tour.rating}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <IcoStar key={i} />)}
          </div>
          <span className="text-gray-400 text-[12px]">({tour.reviews} reviews)</span>
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-gray-900 font-extrabold text-[20px] leading-none">
              <sup className="text-[12px] font-bold align-top mt-1">$</sup>
              {tour.price.toFixed(2)}
            </span>
            <span className="text-gray-400 text-[12px] line-through">
              ${tour.originalPrice.toFixed(2)}
            </span>
          </div>

          {/* Arrow button */}
          <a
            href={tour.href}
            className="w-9 h-9 rounded-full bg-[#5cb85c] hover:bg-[#4cae4c] flex items-center justify-center text-white transition-colors shrink-0"
          >
            <IcoArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TourSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef                  = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const CARD_W   = 290;
  const CARD_GAP = 20;
  const STEP     = (CARD_W + CARD_GAP) * 4;

  const scrollTo = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({ left: dir === "left" ? -STEP : STEP, behavior: "smooth" });
  };

  const updateDot = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setActiveDot(Math.round(el.scrollLeft / STEP));
  }, [STEP]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateDot);
    return () => el.removeEventListener("scroll", updateDot);
  }, [updateDot]);

  const totalDots = Math.ceil(tours.length / 4);

  return (
    <section className="w-full font-['Outfit',sans-serif]">

      {/* ══════════════════════════════════════════════
          WHY CHOOSE US  ·  bg-[#f0f2f0] grey
      ══════════════════════════════════════════════ */}
      <div className="bg-[#f0f2f0]">
        <div className="max-w-300 mx-auto px-8 py-20 flex items-center gap-16">

          {/* ── LEFT: image block ── */}
          <div className="relative shrink-0 w-100">
            {/* Main image */}
            <div className="w-full h-120 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={demoImage}
                alt="Why choose us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tripadvisor floating card — top right */}
            <div className="absolute top-8 right-0 translate-x-[20%] bg-white rounded-xl shadow-xl overflow-hidden w-[160px] z-10">
              <div className="px-5 pt-4 pb-3 flex flex-col items-center text-center">
                <p className="text-gray-900 font-extrabold text-[32px] leading-none mb-1">4.9</p>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <IcoStar key={i} />)}
                </div>
                <p className="text-gray-500 text-[11px] mb-1">2394 reviews</p>
                <div className="bg-[#5cb85c] text-white text-[11px] font-bold px-3 py-0.5 rounded-full mb-2">
                  Excellent
                </div>
              </div>
              <div className="bg-[#00aa6c] px-3 py-2 text-center">
                <p className="text-white font-bold text-[12px] tracking-wide">Tripadvisor</p>
              </div>
            </div>

            {/* +30 Years badge — bottom left */}
            <div className="absolute bottom-8 left-0 -translate-x-[10%] bg-[#5cb85c] rounded-xl px-5 py-4 z-10 text-center shadow-lg">
              <p className="text-white font-extrabold text-[32px] leading-none">+30</p>
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-tight mt-1">
                YEARS OF<br />EXPERIENCE
              </p>
            </div>
          </div>

          {/* ── RIGHT: text ── */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <p className="text-[#5cb85c] text-[11px] font-bold tracking-[4px] uppercase mb-3">
              GREAT EXPERIENCE
            </p>

            {/* Heading */}
            <h2 className="text-gray-900 font-bold text-[36px] leading-tight mb-4">
              Why choose us
            </h2>

            {/* Sub text */}
            <p className="text-gray-500 text-[14px] leading-[1.7] mb-8 max-w-125">
              We are a leading travel agency in Moliva with many years of experience, highly rated
              and appreciated by tourists.
            </p>

            {/* Accordion items */}
            <div className="flex flex-col gap-0 mb-10">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="border-b border-gray-200 last:border-b-0">
                  {/* Row */}
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#5cb85c]"><IcoCheck /></span>
                      <span className="text-gray-800 font-semibold text-[14.5px] group-hover:text-[#5cb85c] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className={`transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}>
                      <IcoChevronDown />
                    </span>
                  </button>

                  {/* Expanded content */}
                  {openIndex === i && (
                    <p className="text-gray-500 text-[13.5px] leading-[1.7] pb-4 pl-6.5">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* VIEW TOURS button */}
            <a
              href="/tours"
              className="inline-flex items-center gap-3 bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-[12px] tracking-[2px] uppercase px-8 py-4 rounded-[6px] transition-colors"
            >
              VIEW TOURS <IcoArrowRight />
            </a>
          </div>

        </div>
      </div>{/* end grey */}

      {/* ══════════════════════════════════════════════
          TOP TOURS SLIDER  ·  bg-[#f0f2f0] grey
      ══════════════════════════════════════════════ */}
      <div className="bg-[#f0f2f0]">
        <div className="max-w-300 mx-auto px-8 pt-4 pb-20">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[#5cb85c] text-[11px] font-bold tracking-[4px] uppercase mb-2">
                MANY TOURISTS CHOOSE
              </p>
              <h2 className="text-gray-900 font-bold text-[32px] leading-tight">
                Top Moliva Tours
              </h2>
            </div>

            {/* Right: counter + nav arrows */}
            <div className="flex items-center gap-6">
              <div>
                <span className="text-gray-900 font-extrabold text-[22px]">+80K</span>
                <span className="text-gray-500 text-[13px] ml-2">Tourists have chosen these tours</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => scrollTo("left")}
                  className="w-9 h-9 rounded-lg bg-[#1e2d3d] hover:bg-[#2d3f52] text-white flex items-center justify-center transition-colors"
                >
                  <IcoArrowLeft />
                </button>
                <button
                  onClick={() => scrollTo("right")}
                  className="w-9 h-9 rounded-lg bg-[#1e2d3d] hover:bg-[#2d3f52] text-white flex items-center justify-center transition-colors"
                >
                  <IcoArrowRightNav />
                </button>
              </div>
            </div>
          </div>

          {/* Slider track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tours.map((t) => <TourCard key={t.id} tour={t} />)}
          </div>

          {/* Bottom row: dots left + "View all tours" right */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalDots }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    trackRef.current?.scrollTo({ left: i * STEP, behavior: "smooth" });
                    setActiveDot(i);
                  }}
                  className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300
                    ${i === activeDot ? "w-7 bg-[#5cb85c]" : "w-2 bg-gray-400 hover:bg-gray-500"}`}
                />
              ))}
            </div>

            {/* View all link */}
            <a
              href="/tours"
              className="flex items-center gap-1.5 text-[#5cb85c] hover:text-[#4cae4c] font-semibold text-[13px] transition-colors"
            >
              View all tours <IcoChevronRight />
            </a>
          </div>

        </div>
      </div>{/* end grey */}

      {/* ══════════════════════════════════════════════
          VIDEO BANNER  ·  full-width bg image
      ══════════════════════════════════════════════ */}
      <VideoSection />

    </section>
  );
}

function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ── Banner ── */}
      <div className="relative w-full h-105 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <img
          src={demoImage}
          alt="Moliva Video"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-5">
          <p className="text-white/80 text-[11px] font-semibold tracking-[4px] uppercase">
            MOLIVA VIDEO
          </p>
          <h2 className="text-white font-bold text-[42px] leading-tight">
            Beautiful &amp; Romantic
          </h2>

          {/* Play button — opens modal */}
          <button
            onClick={() => setModalOpen(true)}
            className="group relative w-18 h-[72px] rounded-full bg-[#5cb85c] hover:bg-[#4cae4c] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 mt-2"
            aria-label="Play video"
          >
            <span className="absolute inset-0 rounded-full bg-[#5cb85c]/40 animate-ping" />
            <svg viewBox="0 0 384 512" fill="white" width="22" height="22" className="ml-1 relative z-10">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Modal — shows demoImage full size ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-225 mx-4 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" width="14" height="14">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
              </svg>
            </button>

            {/* demoImage displayed inside modal */}
            <img
              src={demoImage}
              alt="Moliva Video Preview"
              className="w-full h-auto block max-h-[80vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
}