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
    text: "introduction",
  },
  {
    id: nanoid(),
    href: "#about",
    text: "about",
  },
  {
    id: nanoid(),
    href: "#contact",
    text: "contact",
  },
  {
    id: nanoid(),
    href: "#projects",
    text: "port",
  },
  {
    id: nanoid(),
    href: "#privacy",
    text: "privacy",
  },
  {
    id: nanoid(),
    href: "#term",
    text: "term of",
  },
];
