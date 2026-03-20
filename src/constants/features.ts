import type { FeatureItem } from "../types";

import PhoneIcon from "../assets/phone-icon.png";
import LayerIcon from "../assets/layers-icon.png";
import GiftIcon from "../assets/gift-icon.png";
import ChartBarIcon from "../assets/barChart-icon.png";

export const FEATURES: readonly FeatureItem[] = [
  {
    icon: PhoneIcon,
    title: "Activation instantanée",
    description: "QR codes uniques sur chaque produit",
  },
  {
    icon: LayerIcon,
    title: "Collection digitale",
    description: "Cartes de joueurs, raretés, échanges",
  },
  {
    icon: GiftIcon,
    title: "Récompenses exclusives",
    description: "Tirages au sort, lots partenaires, expériences VIP",
  },
  {
    icon: ChartBarIcon,
    title: "Analytics avancés",
    description: "Dashboard temps réel, insights consommateurs",
  },
] as const;
