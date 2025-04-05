import { nanoid } from "nanoid";

export type Link = {
  id: string;
  href: string;
  text: string;
};

export const links: Link[] = [
  {
    id: nanoid(),
    href: "#home",
    text: "home",
  },
  {
    id: nanoid(),
    href: "#about",
    text: "about",
  },
  {
    id: nanoid(),
    href: "#skills",
    text: "skills",
  },
  {
    id: nanoid(),
    href: "#projects",
    text: "projects",
  },
  {
    id: nanoid(),
    href: "#experiences",
    text: "experiences",
  },
];
