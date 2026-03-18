import demoImage from "../assets/demo.png";

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  comments: number;
  views: number;
  image: string;
  href: string;
}

export interface Topic {
  label: string;
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Must-Visit Tourist Spots in Moliva",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/1",
  },
  {
    id: 2,
    title: "5 Best Tips for an Amazing Moliva Trip",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/2",
  },
  {
    id: 3,
    title: "8 Key Essentials for Traveling to Moliva",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/3",
  },
  {
    id: 4,
    title: "Discover Beautiful Moliva: Nature's Paradise",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/4",
  },
  {
    id: 5,
    title: "Best Time Ever to Explore Moliva's Nature",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/5",
  },
  {
    id: 6,
    title: "10 Awesome Can't-Miss Check-in Spots in Moliva",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/6",
  },
  {
    id: 7,
    title: "6 Tips for Booking a Beach Resort in Moliva",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/7",
  },
  {
    id: 8,
    title: "5 reasons you should visit Fruska Swamp",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/8",
  },
  {
    id: 9,
    title: "4 ancient castles you should visit in Moliva",
    date: "Jun 30 2024",
    comments: 36,
    views: 754,
    image: demoImage,
    href: "/blog/9",
  },
];

export const popularTopics: Topic[] = [
  { label: "Travel guide",     href: "/topics/travel-guide" },
  { label: "Tours",            href: "/topics/tours" },
  { label: "Travel tips",      href: "/topics/travel-tips" },
  { label: "Travel",           href: "/topics/travel" },
  { label: "Activities",       href: "/topics/activities" },
  { label: "Noriva city",      href: "/topics/noriva-city" },
  { label: "Cuisine",          href: "/topics/cuisine" },
  { label: "Explore",          href: "/topics/explore" },
  { label: "Noriva tours",     href: "/topics/noriva-tours" },
  { label: "Destinations",     href: "/topics/destinations" },
  { label: "Moliva tours",     href: "/topics/moliva-tours" },
  { label: "Fruska Swamp",     href: "/topics/fruska-swamp" },
  { label: "Resort in Moliva", href: "/topics/resort" },
  { label: "Moliva's Nature",  href: "/topics/nature" },
  { label: "Nature's Paradise",href: "/topics/paradise" },
  { label: "Spots in Moliva",  href: "/topics/spots" },
  { label: "Moliva Trip",      href: "/topics/trip" },
  { label: "Ancient castles",  href: "/topics/castles" },
  { label: "Travel Insight",   href: "/topics/insight" },
  { label: "Kardal city",      href: "/topics/kardal" },
  { label: "Noriva Bay",       href: "/topics/noriva-bay" },
  { label: "Leront lake",      href: "/topics/leront" },
  { label: "Malota beach",     href: "/topics/malota" },
  { label: "Panoda mountain",  href: "/topics/panoda" },
  { label: "Zolmir hill",      href: "/topics/zolmir" },
  { label: "Sitafo bay",       href: "/topics/sitafo-bay" },
  { label: "Noriva castles",   href: "/topics/noriva-castles" },
  { label: "Sitafo city",      href: "/topics/sitafo-city" },
];