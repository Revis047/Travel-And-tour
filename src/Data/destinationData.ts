import demoImage from "../assets/demo.png"
export interface Destination {
  id: number;
  name: string;
  tours: number;
  image: string;
  href: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Noriva",
    tours: 162,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 2,
    name: "Kardal",
    tours: 127,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 3,
    name: "Leront",
    tours: 155,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 4,
    name: "Fruska",
    tours: 210,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 5,
    name: "Sitafo",
    tours: 321,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 6,
    name: "Zolmir",
    tours: 176,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 7,
    name: "Panoda",
    tours: 278,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 8,
    name: "Malota",
    tours: 321,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 9,
    name: "Valiba",
    tours: 98,
    image: demoImage,
    href: "/tours",
  },
  {
    id: 10,
    name: "Satifo",
    tours: 143,
    image: demoImage,
    href: "/tours",
  },
];