export type NavKey =
  "programs" | "admissions" | "life" | "about" | "news" | "contact";

export const navLinks: { key: NavKey; path: string }[] = [
  { key: "programs", path: "/programs" },
  { key: "admissions", path: "/admissions" },
  { key: "life", path: "/life" },
  { key: "about", path: "/about" },
  { key: "news", path: "/news" },
  { key: "contact", path: "/contact" },
];
