import { useState } from "react";
import logo from "../../assets/logo.png"
import {
  Heart,
  ShoppingBag,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    title: "Home",
    dropdown: ["Home 1", "Home 2", "Home 3"],
  },
  {
    title: "Destinations",
    dropdown: ["Destinations 1", "Destinations 2", "Destinations 3"],
  },
  {
    title: "Moliva Tours",
    dropdown: [
      "Tour packages 1",
      "Tour packages 2",
      "Tour packages 3",
      "Single Tour 1",
      "Single Tour 2",
      "Single Tour 3",
    ],
  },
  {
    title: "Travel Insight",
    dropdown: ["Post List", "Single Post"],
  },
];

const pagesMegaMenu = [
  {
    title: "My Account",
    items: [
      "Dashboard",
      "Booking",
      "Wishlist",
      "Settings",
      "Security",
      "Login",
      "Register",
      "Forgot Password",
      "New Password",
    ],
  },
  {
    title: "Booking",
    items: ["Cart", "Checkout", "Completed"],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | string | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO FIX */}
        <div className=" items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Moliva"
            className="h-10 w-auto"
          />
         
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center text-lg gap-8 font-medium">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => setActiveMenu(i)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-500 transition">
                {item.title}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    activeMenu === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* DROPDOWN */}
              <ul
                className={`absolute left-0 mt-4 w-56 bg-white rounded-xl shadow-xl border overflow-hidden transition-all duration-300
                ${
                  activeMenu === i
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {item.dropdown.map((sub, j) => (
                  <li
                    key={j}
                    className="px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* MEGA MENU */}
          <li
            className="relative"
            onMouseEnter={() => setActiveMenu("pages")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-green-500 transition">
              Pages
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  activeMenu === "pages" ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`absolute left-0 mt-4 bg-white shadow-2xl rounded-2xl p-8 flex gap-12 border transition-all duration-300
              ${
                activeMenu === "pages"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              {pagesMegaMenu.map((section, i) => (
                <div key={i} className="min-w-[200px]">
                  <h2 className="font-semibold mb-4 text-lg">
                    {section.title}
                  </h2>

                  {section.items.map((item, j) => (
                    <p
                      key={j}
                      className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 transition cursor-pointer py-1"
                    >
                      {item}
                    </p>
                  ))}

                  {section.title === "Booking" && (
                    <div className="mt-5 pt-4 border-t">
                      <h3 className="text-xs font-semibold mb-2 uppercase text-gray-400">
                        Other Pages
                      </h3>

                      {["About", "Contact", "Coming Soon", "404 Page"].map(
                        (item, k) => (
                          <p
                            key={k}
                            className="text-sm text-gray-600 hover:text-green-600 hover:translate-x-1 transition cursor-pointer py-1"
                          >
                            {item}
                          </p>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex items-center gap-5">
          {[{ icon: ShoppingBag, count: 2 }, { icon: Heart, count: 3 }].map(
            (item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative">
                  <Icon className="w-10 h-10 p-2 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition cursor-pointer" />
                  <span className="absolute -top-1 -right-1 text-xs bg-green-500 text-white px-1.5 rounded-full">
                    {item.count}
                  </span>
                </div>
              );
            }
          )}

          <User className="w-10 h-10 p-2 rounded-full bg-green-500 text-white cursor-pointer" />
        </div>

        {/* MOBILE BTN */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 text-lg animate-fadeIn">
          {[...navItems.map((i) => i.title), "Pages"].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 border-b"
            >
              <span>{item}</span>
              <ChevronDown size={18} />
            </div>
          ))}

          <div className="flex gap-6 pt-4 items-center">
            <Search />

            {[{ icon: Heart, count: 2 }, { icon: ShoppingBag, count: 3 }].map(
              (item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="relative">
                    <Icon />
                    <span className="absolute -top-2 -right-2 text-xs bg-green-500 text-white px-1 rounded-full">
                      {item.count}
                    </span>
                  </div>
                );
              }
            )}

            <User />
          </div>
        </div>
      )}
    </nav>
  );
}