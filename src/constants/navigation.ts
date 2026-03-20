import type { NavLink } from "../types";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Nos offres", href: "#offres" },
  { label: "Nos jeux", href: "#jeux" },
  { label: "Album 2025", href: "#album" },
  { label: "À propos", href: "#apropos" },
] as const;
