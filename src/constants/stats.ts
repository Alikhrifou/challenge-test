import type { StatItem } from "../types";

import FlashIcon from "../assets/greenFlash.svg";
import Users from "../assets/UsersIcon.svg";
import StartIcon from "../assets/startIcon.svg";
import TechIcon from "../assets/techIcon.svg";

export const HERO_STATS: readonly StatItem[] = [
  { value: "500K+", label: "Interactions/mois", color: "text-green-600" },
  { value: "50+", label: "Marques actives", color: "text-red-600" },
  { value: "x3.5", label: "ROI moyen", color: "text-green-600" },
] as const;

export const FINAL_STATS: readonly StatItem[] = [
  { icon: FlashIcon, value: "500K+", label: "Interactions mensuelles" },
  { icon: Users, value: "50+", label: "Marques partenaires" },
  { icon: StartIcon, value: "98%", label: "Taux de satisfaction" },
  { icon: TechIcon, value: "24/7", label: "Support technique" },
] as const;
