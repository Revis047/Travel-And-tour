import demoImage from "../assets/demo.png";

const IcoCheckCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#5cb85c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IcoTag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#5cb85c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const IcoCalendarCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#5cb85c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <polyline points="9 16 11 18 15 14" />
  </svg>
);

const IcoAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#5cb85c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const IcoArrowRight = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="13" height="13">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L234.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

// ─── Feature list data ────────────────────────────────────────────────────────

const features = [
  { icon: <IcoCheckCircle />,  label: "Great travel experiences" },
  { icon: <IcoTag />,          label: "Competitive pricing offers" },
  { icon: <IcoCalendarCheck />,label: "Flexible itinerary options" },
  { icon: <IcoAward />,        label: "Leading industry reputation" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f0f2f0] py-20 font-['Outfit',sans-serif]">
      <div className="max-w-[1200px] mx-auto px-8 flex items-center gap-16">

        {/* ══ LEFT — Image block ══ */}
        <div className="relative shrink-0 flex items-center">

          {/* Rotated "SINCE 1993 – 31 YEARS OF EXPERIENCE" vertical text — far left */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <span
              className="text-[#5cb85c] font-bold text-[10px] tracking-[3px] uppercase whitespace-nowrap"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              SINCE 1993 – 31 YEARS OF EXPERIENCE
            </span>
          </div>

          {/* Main image */}
          <div className="relative w-[420px] h-[430px] rounded-2xl ml-6 shadow-lg">
            <img
              src={demoImage}
              alt="Moliva"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Tripadvisor badge — bottom-right, overlapping image */}
            <div className="absolute bottom-50 right-0 translate-x-[30%] translate-y-[0%] z-10">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden w-[150px]">
                {/* White top: 2024 Travelers' Choice + owl logo */}
                <div className="bg-white px-4 pt-4 pb-2 flex flex-col items-center">
                  <p className="text-[11px] font-semibold text-gray-500 mb-0.5">2024</p>
                  <p className="text-[13px] font-bold text-gray-800 text-center leading-tight mb-2">
                    Travelers'<br />Choice
                    <span className="text-[#5cb85c]">®</span>
                  </p>
                  {/* Tripadvisor owl SVG */}
                  <svg viewBox="0 0 100 70" width="64" height="44">
                    {/* Eyes */}
                    <circle cx="28" cy="35" r="18" fill="#34e0a1" />
                    <circle cx="72" cy="35" r="18" fill="#34e0a1" />
                    <circle cx="28" cy="35" r="10" fill="white" />
                    <circle cx="72" cy="35" r="10" fill="white" />
                    <circle cx="28" cy="35" r="5" fill="#191919" />
                    <circle cx="72" cy="35" r="5" fill="#191919" />
                    {/* Nose */}
                    <ellipse cx="50" cy="46" rx="5" ry="3" fill="#ff6600" />
                    {/* Ears */}
                    <polygon points="14,10 8,24 20,24" fill="#34e0a1" />
                    <polygon points="86,10 80,24 92,24" fill="#34e0a1" />
                  </svg>
                </div>
                {/* Green bottom: Tripadvisor label */}
                <div className="bg-[#00aa6c] px-3 py-2 text-center">
                  <p className="text-white font-bold text-[12px] tracking-wide">Tripadvisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ RIGHT — Text content ══ */}
        <div className="flex-1 min-w-0">

          {/* "ABOUT US" label */}
          <p className="text-[#5cb85c] text-[11px] font-bold tracking-[4px] uppercase mb-3">
            ABOUT US
          </p>

          {/* Heading */}
          <h2 className="text-gray-900 font-bold text-[36px] leading-tight mb-5">
            Moliva Travel Agency
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[15px] leading-[1.75] mb-8 max-w-[540px]">
            Moliva Travel Agency offers unique and memorable tours, providing rich
            experiences in the beautiful country of Moliva. With a professional and
            dedicated team, we are committed to bringing you wonderful, safe, and
            exciting journeys, helping you explore the beauty of the world.
          </p>

          {/* Feature grid — 2 columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="shrink-0">{f.icon}</span>
                <span className="text-gray-800 font-semibold text-[14px]">{f.label}</span>
              </div>
            ))}
          </div>

          {/* READ MORE button */}
          <a
            href="/about"
            className="inline-flex items-center gap-3 bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-[12px] tracking-[2px] uppercase px-8 py-4 rounded-[6px] transition-colors"
          >
            READ MORE <IcoArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
}