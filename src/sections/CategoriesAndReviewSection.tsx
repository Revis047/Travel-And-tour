import { useState, useRef, useEffect, useCallback, type JSX } from "react";
import profile1 from "../assets/prf1.jpg"


// ─── Icons ────────────────────────────────────────────────────────────────────

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
const IcoCalendar = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="16" height="16">
    <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192z" />
  </svg>
);
const IcoEnvelope = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="16" height="16">
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
  </svg>
);
const IcoStar = ({ filled = true }: { filled?: boolean }) => (
  <svg viewBox="0 0 576 512" fill={filled ? "#f59e0b" : "#d1d5db"} width="14" height="14">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
);

// ─── Category icons — green outline SVGs ──────────────────────────────────────

const CatIcons: Record<string, () => JSX.Element> = {
  ecotourism: () => (
    <svg viewBox="0 0 576 512" fill="none" stroke="#5cb85c" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <path d="M288 32c0 0-80 80-80 192a80 80 0 0 0 160 0C368 112 288 32 288 32z" />
      <path d="M96 320c0 0-64 32-64 96h512c0-64-64-96-64-96" />
      <path d="M288 224v192" />
    </svg>
  ),
  food: () => (
    <svg viewBox="0 0 448 512" fill="none" stroke="#5cb85c" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM64 0C46.3 0 32 14.3 32 32V224H16c-8.8 0-16 7.2-16 16v16c0 44.2 35.8 80 80 80h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V336h16c44.2 0 80-35.8 80-80V240c0-8.8-7.2-16-16-16H96V32C96 14.3 81.7 0 64 0z" />
    </svg>
  ),
  cultural: () => (
    <svg viewBox="0 0 512 512" fill="none" stroke="#5cb85c" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <circle cx="256" cy="160" r="80" />
      <path d="M256 272c-88 0-160 40-160 80v32h320v-32c0-40-72-80-160-80z" />
      <path d="M480 384H32" />
    </svg>
  ),
  explorer: () => (
    <svg viewBox="0 0 576 512" fill="none" stroke="#5cb85c" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <path d="M288 48L64 192l224 144 224-144z" />
      <path d="M64 192v128l224 144 224-144V192" />
    </svg>
  ),
  festival: () => (
    <svg viewBox="0 0 512 512" fill="none" stroke="#5cb85c" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <circle cx="256" cy="256" r="200" />
      <path d="M256 100v60M256 352v60M100 256h60M352 256h60" />
      <path d="M155 155l42 42M315 315l42 42M155 357l42-42M315 197l42-42" />
    </svg>
  ),
  museums: () => (
    <svg viewBox="0 0 512 512" fill="none" stroke="#5cb85c" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <rect x="48" y="160" width="416" height="304" rx="8" />
      <path d="M48 160L256 48l208 112" />
      <rect x="176" y="272" width="160" height="192" />
    </svg>
  ),
  hiking: () => (
    <svg viewBox="0 0 320 512" fill="none" stroke="#5cb85c" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <circle cx="160" cy="64" r="48" />
      <path d="M80 200l40 80 40-40 40 120 40-80" />
      <path d="M48 480l112-160 112 160" />
    </svg>
  ),
  motor: () => (
    <svg viewBox="0 0 640 512" fill="none" stroke="#5cb85c" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <circle cx="160" cy="384" r="80" />
      <circle cx="480" cy="384" r="80" />
      <path d="M160 304l80-160h160l80 160" />
      <path d="M320 144l-40-80h-80" />
    </svg>
  ),
  ships: () => (
    <svg viewBox="0 0 576 512" fill="none" stroke="#5cb85c" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <path d="M96 272l192-192 192 192" />
      <path d="M32 400c48 64 144 64 192 0s144-64 192 0" />
      <rect x="160" y="272" width="256" height="112" rx="8" />
    </svg>
  ),
  family: () => (
    <svg viewBox="0 0 640 512" fill="none" stroke="#5cb85c" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <circle cx="160" cy="112" r="64" />
      <circle cx="480" cy="112" r="64" />
      <circle cx="320" cy="80" r="48" />
      <path d="M32 480v-80c0-53 43-96 96-96h64M512 480v-80c0-53-43-96-96-96h-64M224 480v-96c0-35 27-64 64-64h64c35 0 64 29 64 64v96" />
    </svg>
  ),
  health: () => (
    <svg viewBox="0 0 512 512" fill="none" stroke="#5cb85c" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <path d="M256 480C256 480 48 352 48 192a112 112 0 0 1 208-56 112 112 0 0 1 208 56c0 160-208 288-208 288z" />
    </svg>
  ),
  educational: () => (
    <svg viewBox="0 0 512 512" fill="none" stroke="#5cb85c" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" width="34" height="34">
      <path d="M96 96h320v256H96z" />
      <path d="M176 352v96M336 352v96M128 448h256" />
      <path d="M160 176h192M160 240h128" />
    </svg>
  ),
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const adventureCategories = [
  { key: "ecotourism", label: "Ecotourism & Resort",   tours: 124 },
  { key: "food",       label: "Food & Culinary",        tours: 231 },
  { key: "cultural",   label: "In-depth Cultural",      tours: 271 },
  { key: "explorer",   label: "Explorer & Adventure",   tours: 311 },
  { key: "festival",   label: "Festival & Events",      tours: 219 },
  { key: "museums",    label: "Museums & Exhibitions",  tours: 189 },
  { key: "hiking",     label: "Hiking & Trekking",      tours: 167 },
  { key: "motor",      label: "Motor & Bicycles",       tours: 112 },
  { key: "ships",      label: "Ships & boats",          tours: 301 },
  { key: "family",     label: "Family Activities",      tours: 211 },
  { key: "health",     label: "Health & Spa",           tours: 189 },
  { key: "educational",label: "Educational",            tours: 129 },
];

const reviews = [
  { name: "John Doe",    location: "Venice, Italy",    rating: 5, date: "Jun 25 24", text: "Our trip to Moliva was amazing! Moliva Travel Agency organized everything perfectly, from the hotels to the sightseeing spots. I was very impressed and will definitely return!" },
  { name: "Emily Smith", location: "Chicago, USA",     rating: 4, date: "Jun 28 24", text: "We had an unforgettable vacation in Moliva thanks to the excellent service of Moliva Travel Agency. The itinerary was well-arranged, and the support team was very helpful. Best trip ever!" },
  { name: "Alex Mark",   location: "Texas, USA",       rating: 4, date: "Jun 28 24", text: "Moliva is a perfect destination, and Moliva Travel Agency made our trip flawless. From booking to sightseeing activities, everything was wonderful. I am very satisfied!" },
  { name: "Ariol Deep",  location: "Lisbon, Portugal", rating: 5, date: "Jun 28 24", text: "Moliva Travel Agency provided an excellent vacation in Moliva. Tours were well-organized, the schedule was great, and customer service was top-notch. Highly recommended!" },
  { name: "Sarah Kim",   location: "Seoul, Korea",     rating: 5, date: "Jul 02 24", text: "Absolutely breathtaking experience. The team at Moliva Travel Agency is professional and truly passionate about showing visitors the best of Moliva. I loved every moment!" },
  { name: "Marco Rossi", location: "Rome, Italy",      rating: 4, date: "Jul 05 24", text: "A wonderful journey from start to finish. Great organization, beautiful destinations, and friendly guides. We felt safe and well taken care of throughout the entire trip." },
  { name: "Lena Müller", location: "Berlin, Germany",  rating: 5, date: "Jul 08 24", text: "Moliva exceeded all expectations. The natural beauty is stunning and our guide was incredibly knowledgeable. I have already recommended Moliva Travel Agency to all my friends." },
  { name: "James Wang",  location: "Sydney, Australia",rating: 4, date: "Jul 10 24", text: "Fantastic trip with smooth logistics throughout. Every detail was taken care of and the accommodation was superb. Will definitely be booking again for next year's adventure!" },
];

// ─── Star row helper ──────────────────────────────────────────────────────────

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => <IcoStar key={i} filled={i <= rating} />)}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CategoriesAndReviewSection() {
  const trackRef             = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const CARDS_PER_VIEW = 2;
  const CARD_W   = 570;
  const CARD_GAP = 24;
  const STEP     = (CARD_W + CARD_GAP) * CARDS_PER_VIEW;
  const totalDots = Math.ceil(reviews.length / CARDS_PER_VIEW);

  const scroll = (dir: "left" | "right") => {
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

  return (
    <section className="w-full font-['Outfit',sans-serif]">

      {/* ══════════════════════════════════════════════
          1. ADVENTURE TYPES  ·  bg-[#f0f2f0]
      ══════════════════════════════════════════════ */}
      <div className="bg-[#f0f2f0]">
        <div className="max-w-[1200px] mx-auto px-8 py-20">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <p className="text-[#5cb85c] text-[11px] font-bold tracking-[4px] uppercase mb-2">
                TOUR CATEGORIES
              </p>
              <h2 className="text-gray-900 font-bold text-[36px] leading-tight">
                Adventure types
              </h2>
            </div>
            <p className="text-gray-500 text-[14px] mt-4">
              You need{" "}
              <a href="/contact" className="text-[#5cb85c] font-semibold underline underline-offset-2 hover:text-[#4cae4c] transition-colors">
                advice
              </a>
              ?
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-3 gap-4">
            {adventureCategories.map((cat) => {
              const Icon = CatIcons[cat.key];
              return (
                <a
                  key={cat.key}
                  href="/tours"
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 hover:shadow-md transition-shadow group"
                >
                  {/* Icon box */}
                  <div className="w-[56px] h-[56px] rounded-lg bg-[#f0fdf4] flex items-center justify-center shrink-0 group-hover:bg-[#dcfce7] transition-colors">
                    <Icon />
                  </div>
                  {/* Text */}
                  <div>
                    <p className="text-gray-900 font-semibold text-[15px] leading-snug group-hover:text-[#5cb85c] transition-colors">
                      {cat.label}
                    </p>
                    <p className="text-gray-400 text-[12.5px] mt-0.5">{cat.tours} tours</p>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════
          2. START EXPLORING CTA  ·  dark teal bg
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0e3d55]">
        <div className="max-w-[1200px] mx-auto px-8 py-24 flex flex-col items-center text-center gap-7">
          <p className="text-white/70 text-[11px] font-bold tracking-[4px] uppercase">
            START EXPLORING
          </p>
          <h2 className="text-white font-bold text-[40px] leading-tight max-w-[640px]">
            Are you ready for adventures to Moliva?
          </h2>
          <div className="flex items-center gap-4 mt-2">
            {/* BOOK TOURS — green filled */}
            <a
              href="/tours"
              className="inline-flex items-center gap-2.5 bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-[12px] tracking-[2px] uppercase px-7 py-4 rounded-[6px] transition-colors"
            >
              <IcoCalendar /> BOOK TOURS
            </a>
            {/* CONTACT US — outlined white */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 border border-white text-white hover:bg-white hover:text-[#0e3d55] font-bold text-[12px] tracking-[2px] uppercase px-7 py-4 rounded-[6px] transition-colors"
            >
              <IcoEnvelope /> CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          3. GENUINE REVIEWS  ·  bg-[#f0f2f0]
      ══════════════════════════════════════════════ */}
      <div className="bg-[#f0f2f0]">
        <div className="max-w-[1200px] mx-auto px-8 py-20">

          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#5cb85c] text-[11px] font-bold tracking-[4px] uppercase mb-2">
                GENUINE REVIEWS
              </p>
              <h2 className="text-gray-900 font-bold text-[36px] leading-tight">
                Tourists talk about us
              </h2>
            </div>

            {/* Right: stats + arrows */}
            <div className="flex items-center gap-6">
              {/* +95K */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-gray-900 font-extrabold text-[22px]">+95K</span>
                <span className="text-gray-500 text-[13px]">Tour bookings</span>
              </div>
              {/* 4.9 + stars */}
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-extrabold text-[22px]">4.9</span>
                <StarRow rating={5} />
                <span className="text-gray-400 text-[13px]">(+85K reviews)</span>
              </div>
              {/* Nav arrows */}
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-9 h-9 rounded-lg bg-[#1e2d3d] hover:bg-[#2d3f52] text-white flex items-center justify-center transition-colors"
                >
                  <IcoArrowLeft />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-9 h-9 rounded-lg bg-[#1e2d3d] hover:bg-[#2d3f52] text-white flex items-center justify-center transition-colors"
                >
                  <IcoArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Review cards slider — 2 visible at a time */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shrink-0 w-[570px] flex flex-col gap-5 shadow-sm"
              >
                {/* Top: avatar + name + quote mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={profile1}
                      alt={r.name}
                      className="w-[52px] h-[52px] rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="text-gray-900 font-bold text-[15px]">{r.name}</p>
                      <p className="text-gray-400 text-[13px]">{r.location}</p>
                    </div>
                  </div>
                  {/* Large decorative quote mark */}
                  <svg viewBox="0 0 24 24" fill="#e5e7eb" width="40" height="40">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-[13.5px] leading-[1.75] italic flex-1">
                  {r.text}
                </p>

                {/* Bottom: stars + date badge */}
                <div className="flex items-center justify-between">
                  <StarRow rating={r.rating} />
                  <span className="bg-[#5cb85c] text-white text-[11px] font-bold px-3 py-1 rounded-md">
                    {r.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-7">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  trackRef.current?.scrollTo({ left: i * STEP, behavior: "smooth" });
                  setActiveDot(i);
                }}
                className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300
                  ${i === activeDot
                    ? "w-8 bg-[#5cb85c] outline-2 outline-offset-2 outline-[#5cb85c]/30"
                    : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}