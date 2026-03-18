import { useState } from "react";

// ─── Social Icons ─────────────────────────────────────────────────────────────

const IcoFacebook = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="15" height="15">
    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
  </svg>
);
const IcoTwitterX = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="15" height="15">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);
const IcoYoutube = () => (
  <svg viewBox="0 0 576 512" fill="currentColor" width="15" height="15">
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
  </svg>
);
const IcoPinterest = () => (
  <svg viewBox="0 0 496 512" fill="currentColor" width="15" height="15">
    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
  </svg>
);
const IcoTripadvisor = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="17" height="17">
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm192 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zM256 288c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-96-160c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />
  </svg>
);
const IcoChevDown = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" width="11" height="11">
    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
  </svg>
);

// ─── Moliva Logo ──────────────────────────────────────────────────────────────

const MolivaLogo = () => (
  <div className="flex items-center gap-2.5 mb-5">
    <svg viewBox="0 0 384 512" width="34" height="44">
      <defs>
        <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ed36e" />
          <stop offset="100%" stopColor="#3a9e3a" />
        </linearGradient>
      </defs>
      <path fill="url(#pinGrad)" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0z" />
      <circle cx="192" cy="192" r="76" fill="white" />
      <circle cx="192" cy="192" r="48" fill="url(#pinGrad)" />
      <circle cx="170" cy="172" r="14" fill="white" opacity="0.65" />
    </svg>
    <span className="text-white font-bold text-[28px] tracking-wide leading-none">
      Moliva
    </span>
  </div>
);

// ─── App Store Badges ─────────────────────────────────────────────────────────

const GooglePlayBadge = () => (
  <a href="#" className="flex items-center gap-2.5 bg-black border border-[#2e3e4e] rounded-xl px-3.5 py-2.5 hover:border-[#5cb85c] transition-colors w-[150px]">
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
      <path d="M3.18 1L13.39 12 3.18 23c-.37-.2-.63-.57-.63-1.01V2.01C2.55 1.57 2.81 1.2 3.18 1z" fill="#EA4335" />
      <path d="M16.54 8.83L4.9 1.83l9.32 5.37 2.32 1.63z" fill="#FBBC04" />
      <path d="M19.37 10.5c.38.23.63.63.63 1.07s-.25.84-.63 1.07l-2.83 1.63-2.71-2.7 2.71-2.7 2.83 1.63z" fill="#4285F4" />
      <path d="M4.83 22.21l11.71-6.67-2.54-2.54-9.31 5.36.14.08-.01 3.77z" fill="#34A853" />
    </svg>
    <div className="leading-none">
      <div className="text-[9px] text-[#999]">Get it on</div>
      <div className="text-white text-[13px] font-semibold">Google Play</div>
    </div>
  </a>
);

const AppStoreBadge = () => (
  <a href="#" className="flex items-center gap-2.5 bg-black border border-[#2e3e4e] rounded-xl px-3.5 py-2.5 hover:border-[#5cb85c] transition-colors w-[150px]">
    <svg viewBox="0 0 814 1000" fill="white" className="w-6 h-6 shrink-0">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.3-150.3-110.2c-52.3-80.5-96.2-199.2-96.2-313.3 0-210.3 137.5-321.3 273.8-321.3 70.5 0 128.9 46.4 172.3 46.4 41.6 0 106.5-49 187.3-49 30.5 0 135.9 2.6 198.4 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
    <div className="leading-none">
      <div className="text-[9px] text-[#999]">Download on the</div>
      <div className="text-white text-[13px] font-semibold">App Store</div>
    </div>
  </a>
);

// ─── Dropdowns ────────────────────────────────────────────────────────────────

const LangDropdown = () => {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState("English");
  const langs = ["English", "Français", "Español", "Deutsch", "Italiano"];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-[#2a3d52] rounded-lg px-3 py-2 text-white/75 text-[13px] hover:border-[#5cb85c] transition-colors bg-transparent w-full"
      >
        <img src="https://moliva.themenix.com/assets/img/flags/en.svg" alt="EN" className="w-5 h-3.5 rounded-sm object-cover shrink-0" />
        <span className="flex-1 text-left">{sel}</span>
        <IcoChevDown />
      </button>
      {open && (
        <div className="absolute bottom-full mb-1 left-0 w-full bg-[#0d1e2e] border border-[#2a3d52] rounded-lg overflow-hidden z-50">
          {langs.map((l) => (
            <button key={l} onClick={() => { setSel(l); setOpen(false); }}
              className="w-full text-left px-4 py-2 text-[13px] text-white/70 hover:bg-[#1a2e40] hover:text-white transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const CurrencyDropdown = () => {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState("USD (US Dollar)");
  const currencies = ["USD (US Dollar)", "EUR (Euro)", "GBP (Pound)", "AUD (Dollar)", "JPY (Yen)"];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-[#2a3d52] rounded-lg px-3 py-2 text-white/75 text-[13px] hover:border-[#5cb85c] transition-colors bg-transparent w-full"
      >
        <span className="flex-1 text-left">{sel}</span>
        <IcoChevDown />
      </button>
      {open && (
        <div className="absolute bottom-full mb-1 left-0 w-full bg-[#0d1e2e] border border-[#2a3d52] rounded-lg overflow-hidden z-50">
          {currencies.map((c) => (
            <button key={c} onClick={() => { setSel(c); setOpen(false); }}
              className="w-full text-left px-4 py-2 text-[13px] text-white/70 hover:bg-[#1a2e40] hover:text-white transition-colors">
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
  const navLinks = [
    { label: "About us",       href: "/about" },
    { label: "Destinations",   href: "/destinations" },
    { label: "Moliva Tours",   href: "/tours" },
    { label: "Travel insight", href: "/blog" },
    { label: "Contact us",     href: "/contact" },
  ];

  const socials = [
    { Icon: IcoFacebook,    label: "Facebook" },
    { Icon: IcoTwitterX,    label: "Twitter" },
    { Icon: IcoYoutube,     label: "YouTube" },
    { Icon: IcoPinterest,   label: "Pinterest" },
    { Icon: IcoTripadvisor, label: "Tripadvisor" },
  ];

  return (
    <footer className="w-full bg-[#0d1e2e] font-['Outfit',sans-serif]">

      {/* ── Main grid ── */}
      <div className="max-w-[1200px] mx-auto px-8 pt-16 pb-12">
        <div className="grid grid-cols-4 gap-10">

          {/* ── Col 1: Logo + tagline + socials ── */}
          <div>
            <MolivaLogo />
            <p className="text-white/55 text-[13px] leading-[1.75] italic">
              Moliva Travel Agency offers unique and memorable tours, providing rich
              experiences in the beautiful country of Moliva.
            </p>
            <a href="/about" className="text-[#4da8d0] text-[13px] hover:text-white transition-colors inline-block mt-0.5 mb-6">
              [+]
            </a>
            <div className="flex items-center gap-3.5">
              {socials.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="text-white/45 hover:text-white transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Contact Info ── */}
          <div>
            <h4 className="text-white font-semibold text-[16px] mb-6">Contact Info</h4>
            <ul className="space-y-3.5 text-[13.5px] text-white/55">
              <li className="leading-snug">No 234, Placer Loquen Marsei Niriva, Moliva.</li>
              <li>
                <a href="tel:+33321654987" className="hover:text-white transition-colors">
                  +33 321-654-987 (Ext: 123).
                </a>
              </li>
              <li>
                <a href="mailto:Booking@example.com" className="hover:text-white transition-colors">
                  Booking@example.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  www.example.com
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 3: Moliva Travel nav ── */}
          <div>
            <h4 className="text-white font-semibold text-[16px] mb-6">Moliva Travel</h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-white/55 hover:text-white text-[13.5px] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Get the app + dropdowns ── */}
          <div>
            <h4 className="text-white font-semibold text-[16px] mb-6">Get the app</h4>
            <div className="flex flex-col gap-3 mb-7">
              <GooglePlayBadge />
              <AppStoreBadge />
            </div>
            <div className="flex flex-col gap-2.5">
              <LangDropdown />
              <CurrencyDropdown />
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#19304a]">
        <div className="max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between">
          <p className="text-white/45 text-[13px]">
            © 2024 Moliva Travel Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-white/45">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms"   className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  );
}