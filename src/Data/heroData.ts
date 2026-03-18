// ─── Types ────────────────────────────────────────────────────────────────────

export interface Slide {
  image: string;
  label: string;
  heading: string;
  href: string;
}

export interface Stat {
  value: string;
  description: string;
  stars: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const slides: Slide[] = [
  {
    image: "https://moliva.themenix.com/assets/img/hero/h1.jpg",
    label: "EXPLORE MOLIVA",
    heading: "Experience the unique\nlocal culture",
    href: "/tours",
  },
  {
    image: "https://moliva.themenix.com/assets/img/hero/h2.jpg",
    label: "EXPLORE MOLIVA",
    heading: "Enjoy the beautiful and\nromantic nature",
    href: "/destinations",
  },
  {
    image: "https://moliva.themenix.com/assets/img/hero/h3.jpg",
    label: "EXPLORE MOLIVA",
    heading: "Explore majestic\nmountain ranges",
    href: "/tours",
  },
];

export const stats: Stat[] = [
  { value: "+250",  description: "Attractive tours\naround Moliva",  stars: false },
  { value: "+1.1M", description: "Clients from\naround the world",  stars: false },
  { value: "4.9",   description: "On Tripadvisor",                  stars: true  },
  { value: "+98%",  description: "Our clients\nare satisfied",       stars: false },
];

// plain string[] — no Category object, fixes all TS errors
export const categories: string[] = [
  "All categories",
  "Ecotourism & Resort",
  "Cultural & Foods",
  "Explorer & Adventure",
  "Festival & Events",
  "Museums & Exhibitions",
  "Hiking & Trekking",
  "Motor & Bicycles",
  "Ships & boats",
  "Family Activities",
];

export const tourDates: string[] = [
  "Any date",
  "Today",
  "This weekend",
  "This week",
  "This month",
  "Next month",
];