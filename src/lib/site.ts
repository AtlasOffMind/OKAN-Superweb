export type NavKey =
  | "about"
  | "programs"
  | "okanEnAccion"
  | "bitacora"
  | "admissions"
  | "contact";

export interface NavChild {
  key: string;
  path: string;
}

export interface NavLink {
  key: NavKey;
  path?: string;
  children?: NavChild[];
}

// "life" (Vida estudiantil) ya no aparece en el nav, pero la página /life sigue existiendo.
export const navLinks: NavLink[] = [
  { key: "about", path: "/about" },
  { key: "programs", path: "/programs" },
  {
    key: "okanEnAccion",
    children: [
      { key: "agora", path: "/okan-en-accion/agora" },
      { key: "laboratorio", path: "/okan-en-accion/laboratorio" },
      { key: "espectaculos", path: "/okan-en-accion/espectaculos" },
    ],
  },
  { key: "bitacora", path: "/bitacora" },
  { key: "admissions", path: "/admissions" },
  { key: "contact", path: "/contact" },
];

