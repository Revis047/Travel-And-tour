import demoImage from "../assets/demo.png"
export interface Tour {
  id: number;
  title: string;
  days: number;
  destinations: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  image: string;
  href: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "Explore the castle and ancient village in Karda",
    days: 3,
    destinations: 3,
    rating: 4.9,
    reviews: 231,
    price: 195.80,
    originalPrice: 230.00,
    image: demoImage,
    href: "/tours/1",
  },
  {
    id: 2,
    title: "Bathing and Kayaking at Noriva Beach",
    days: 3,
    destinations: 3,
    rating: 4.9,
    reviews: 231,
    price: 195.80,
    originalPrice: 230.00,
    image: demoImage,
    href: "/tours/2",
  },
  {
    id: 3,
    title: "Visit Valiba swamp and primeval forest",
    days: 3,
    destinations: 3,
    rating: 4.9,
    reviews: 231,
    price: 195.80,
    originalPrice: 230.00,
    image: demoImage,
    href: "/tours/3",
  },
  {
    id: 4,
    title: "Visit and boat ride on the beach in Satifo",
    days: 3,
    destinations: 3,
    rating: 4.9,
    reviews: 231,
    price: 195.80,
    originalPrice: 230.00,
    image: demoImage,
    href: "/tours/4",
  },
  {
    id: 5,
    title: "Climbing and experiencing life in Fruska",
    days: 3,
    destinations: 3,
    rating: 4.9,
    reviews: 231,
    price: 195.80,
    originalPrice: 230.00,
    image: demoImage,
    href: "/tours/5",
  },
  {
    id: 6,
    title: "Discover the hidden waterfalls of Noriva",
    days: 4,
    destinations: 4,
    rating: 4.8,
    reviews: 189,
    price: 245.00,
    originalPrice: 290.00,
    image: demoImage,
    href: "/tours/6",
  },
  {
    id: 7,
    title: "Explore Zolmir hill and ancient ruins",
    days: 2,
    destinations: 2,
    rating: 4.7,
    reviews: 156,
    price: 145.00,
    originalPrice: 175.00,
    image: demoImage,
    href: "/tours/7",
  },
  {
    id: 8,
    title: "Malota beach luxury resort experience",
    days: 5,
    destinations: 3,
    rating: 4.9,
    reviews: 312,
    price: 380.00,
    originalPrice: 450.00,
    image: demoImage,
    href: "/tours/8",
  },
];

export const whyChooseUs = [
  {
    title: "Leading travel agency in Moliva",
    description:
      "Top-rated agency in Moliva is renowned for exceptional service and unforgettable travel experiences.",
  },
  {
    title: "Years of experience in tour operations",
    description:
      "With years of expertise, we excel at organizing seamless, enjoyable, and memorable tours for every traveler.",
  },
  {
    title: "Flexible tour packages and bookings",
    description:
      "We offer customizable trips with flexible packages and convenient booking options tailored to your needs.",
  },
  {
    title: "Best prices with attractive Offers",
    description:
      "Enjoy unbeatable prices and exclusive offers, ensuring you receive great value and memorable vacation experiences.",
  },
];