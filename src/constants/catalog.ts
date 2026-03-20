import type { GameItem } from "../types";

import CatalogueImage1 from "../assets/catalogueImage1.png";
import CatalogueImage2 from "../assets/catalogueImage2.png";
import CatalogueImage3 from "../assets/catalogueImage3.png";
import CatalogueImage4 from "../assets/catalogueImage4.png";

export const GAMES: readonly GameItem[] = [
  {
    title: "Album Digital 2025",
    description: "Collection de cartes avec échanges et défis.",
    label: "STAR",
    image: CatalogueImage1,
  },
  {
    title: "Quiz Football",
    description: "Questions sur l'actualité et l'histoire du foot.",
    label: "BIENTÔT",
    image: CatalogueImage2,
  },
  {
    title: "Tombola digitale",
    description: "Tirages au sort avec lots sponsorisés.",
    image: CatalogueImage3,
  },
  {
    title: "Pronostics",
    description: "Prédictions de matchs et classements.",
    image: CatalogueImage4,
  },
] as const;
