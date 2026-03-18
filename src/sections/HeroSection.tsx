import { useState, useEffect, useCallback, useRef } from "react";
import { slides, stats, categories, tourDates } from "../Data/heroData";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IcoArrowLeft = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="18" height="18">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
  </svg>
);
const IcoArrowRight = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="18" height="18">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L234.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);
const IcoPlay = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" width="15" height="15">
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
  </svg>
);
const IcoBtnArrow = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="13" height="13">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L234.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);
const IcoMapPin = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" width="16" height="16" className="text-gray-400 shrink-0">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
  </svg>
);
const IcoCalendar = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="16" height="16" className="text-gray-400 shrink-0">
    <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0z" />
  </svg>
);
const IcoGrid = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="16" height="16" className="text-gray-400 shrink-0">
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);
const IcoChevDown = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="13" height="13" className="text-gray-400 shrink-0">
    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
  </svg>
);
const IcoSearch = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="15" height="15">
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
  </svg>
);
const IcoStar = () => (
  <svg viewBox="0 0 576 512" fill="#f59e0b" width="16" height="16">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
);

// ─── Reusable sub-components ──────────────────────────────────────────────────

const InputBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2.5 border border-gray-200 rounded-lg px-3.5 py-[11px] bg-white flex-1">
    {children}
  </div>
);

const DropItem = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-2.5 text-[13px] font-['Outfit',sans-serif] border-none cursor-pointer transition-colors
      ${active ? "bg-green-50 text-green-700 font-semibold" : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-700"}`}
  >
    {label}
  </button>
);

// DropMenu renders into a portal-like fixed position so it NEVER gets clipped
// by any parent overflow-hidden. Uses fixed positioning anchored by JS rect.
const DropMenu = ({ children }: {
  anchorRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  children: React.ReactNode;
}) => {


  return (
    <div
      className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,.15)] border border-gray-100 max-h-60 overflow-y-auto"
      style={{
        position: "absolute",
        top: `calc(100% + 6px)`,
        left: 0,
        width: "100%",
        zIndex: 99999,
      }}
    >
      {children}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection() {
  const [cur, setCur]           = useState<number>(0);
  const [cat, setCat]           = useState<string>("All categories");
  const [date, setDate]         = useState<string>("Tour date");
  const [where, setWhere]       = useState<string>("");
  const [catOpen, setCatOpen]   = useState<boolean>(false);
  const [dateOpen, setDateOpen] = useState<boolean>(false);

  const catRef  = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  // ── Search card ref — positioned outside overflow-hidden ──
  const searchCardRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (n: number) => setCur((n + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const t = setInterval(() => go(cur + 1), 5000);
    return () => clearInterval(t);
  }, [cur, go]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (catRef.current && !catRef.current.contains(e.target as Node))   setCatOpen(false);
      if (dateRef.current && !dateRef.current.contains(e.target as Node)) setDateOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    // KEY FIX: outer wrapper is `relative` but NOT overflow-hidden
    // so the search card and its dropdowns can bleed freely
    <section className="w-full font-['Outfit',sans-serif] relative">

      {/* ══════════════ CAROUSEL — overflow-hidden only on the image area ══════════════ */}
      <div className="relative w-full h-[580px] overflow-hidden">

        {/* Slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === cur ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img src={s.image} alt={s.heading} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-black/5" />
          </div>
        ))}

        {/* ── Text — bottom left ── */}
        <div className="absolute left-0 bottom-0 z-10 px-16 pb-24 max-w-[600px]">
          <p className="text-white/85 text-[11px] font-semibold tracking-[3.5px] uppercase mb-[18px]">
            {slides[cur].label}
          </p>
          <h1 className="text-white font-extrabold leading-[1.15] mb-9 text-[clamp(36px,4.5vw,58px)]">
            {slides[cur].heading.split("\n").map((line, li) => (
              <span key={li} className="block">{line}</span>
            ))}
          </h1>

          <div className="flex items-center gap-4 mb-10">
            <a
              href={slides[cur].href}
              className="inline-flex items-center gap-2.5 text-white border border-white text-[12px] font-bold tracking-[2px] uppercase px-7 py-[13px] rounded-[4px] hover:bg-white hover:text-gray-900 transition-colors"
            >
              EXPLORE <IcoBtnArrow />
            </a>
            <button className="w-[50px] h-[50px] rounded-full bg-[#5cb85c] hover:bg-[#4cae4c] text-white flex items-center justify-center shrink-0 border-none cursor-pointer transition-colors">
              <IcoPlay />
            </button>
          </div>

          {/* ← • • → */}
          <div className="flex items-center gap-2.5">
            <button onClick={() => go(cur - 1)} className="bg-transparent border-none text-white/60 hover:text-white cursor-pointer p-0 flex items-center transition-colors">
              <IcoArrowLeft />
            </button>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-[9px] rounded-full border-none cursor-pointer p-0 transition-all duration-300
                  ${i === cur ? "w-[30px] bg-[#5cb85c]" : "w-[9px] bg-white/45 hover:bg-white/70"}`}
              />
            ))}
            <button onClick={() => go(cur + 1)} className="bg-transparent border-none text-white/60 hover:text-white cursor-pointer p-0 flex items-center transition-colors">
              <IcoArrowRight />
            </button>
          </div>
        </div>

        {/* ── Vertical pill dots — right edge ── */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2 rounded-[4px] border-none cursor-pointer p-0 transition-all duration-300
                ${i === cur ? "h-[22px] bg-[#5cb85c]" : "h-2 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
      {/* ↑ overflow-hidden ends here — search card is OUTSIDE this div ↑ */}

      {/* ══ SEARCH CARD — sits on the section (not inside overflow-hidden carousel)
           Pulled up with negative margin-top to visually overlap the carousel bottom ══ */}
      <div
        ref={searchCardRef}
        className="absolute right-[60px] z-50"
        style={{ top: "580px", transform: "translateY(-50%)" }}
      >
        <div className="w-[560px] bg-white rounded-xl shadow-[0_8px_48px_rgba(0,0,0,.18)] p-4">

          {/* Row 1 */}
          <div className="flex gap-3 mb-3">

            <InputBox>
              <IcoMapPin />
              <input
                type="text"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                placeholder="Where are you going?"
                className="flex-1 border-none outline-none text-[13.5px] text-gray-700 placeholder-gray-400 bg-transparent min-w-0 font-['Outfit',sans-serif]"
              />
            </InputBox>

            {/* Tour date */}
            <div ref={dateRef} className="relative flex-1">
              <button
                onClick={() => { setDateOpen(!dateOpen); setCatOpen(false); }}
                className="w-full flex items-center gap-2.5 border border-gray-200 rounded-lg px-3.5 py-[11px] bg-white cursor-pointer font-['Outfit',sans-serif] text-left"
              >
                <IcoCalendar />
                <span className={`flex-1 text-[13.5px] text-left ${date === "Tour date" ? "text-gray-400" : "text-gray-700"}`}>
                  {date}
                </span>
                <IcoChevDown />
              </button>
              <DropMenu anchorRef={dateRef} open={dateOpen}>
                {tourDates.map((d) => (
                  <DropItem key={d} label={d} active={date === d} onClick={() => { setDate(d); setDateOpen(false); }} />
                ))}
              </DropMenu>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-3">

            {/* Categories */}
            <div ref={catRef} className="relative flex-1">
              <button
                onClick={() => { setCatOpen(!catOpen); setDateOpen(false); }}
                className="w-full flex items-center gap-2.5 border border-gray-200 rounded-lg px-3.5 py-[11px] bg-white cursor-pointer font-['Outfit',sans-serif] text-left"
              >
                <IcoGrid />
                <span className="flex-1 text-[13.5px] text-gray-700 text-left">{cat}</span>
                <IcoChevDown />
              </button>
              <DropMenu anchorRef={catRef} open={catOpen}>
                {categories.map((c) => (
                  <DropItem key={c} label={c} active={cat === c} onClick={() => { setCat(c); setCatOpen(false); }} />
                ))}
              </DropMenu>
            </div>

            {/* SEARCH */}
            <button className="shrink-0 flex items-center gap-2 bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-[13px] font-bold tracking-[1.5px] uppercase px-8 py-[11px] rounded-lg border-none cursor-pointer transition-colors font-['Outfit',sans-serif]">
              <IcoSearch />
              SEARCH
            </button>
          </div>

        </div>
      </div>

      {/* ══════════════ STATS BAR — WHITE ══════════════
           paddingTop pushes content below the half-overlapping search card ══ */}
      <div className="bg-white pt-[104px] pb-12 border-b border-gray-100 relative z-10">
        <div className="max-w-[1200px] mx-auto px-16 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-3.5
                ${i > 0 ? "pl-8" : "pl-0"}
                ${i < 3 ? "pr-8 border-r border-gray-200" : "pr-0"}`}
            >
              <span className="text-[clamp(28px,3vw,40px)] font-extrabold text-gray-900 leading-none shrink-0 font-['Outfit',sans-serif]">
                {s.value}
              </span>
              <div>
                {s.stars && (
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, si) => <IcoStar key={si} />)}
                  </div>
                )}
                <p className="text-[13px] text-gray-500 leading-[1.4] m-0 font-['Outfit',sans-serif]">
                  {s.description.split("\n").map((line, li) => (
                    <span key={li} className="block">{line}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}