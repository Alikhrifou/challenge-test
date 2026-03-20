import type { StepItem } from "../types";

import ChariotIcon from "../assets/chariotIcon.png";
import QrIcon from "../assets/Qrcode-icon.png";
import LayerIcon from "../assets/layers-icon.png";
import PuzzleIcon from "../assets/puzzl-icon.png";
import GiftIcon from "../assets/redGidt-icon.png";

export const STEPS: readonly StepItem[] = [
  {
    icon: ChariotIcon,
    title: "Achat produit",
    description: "Le client achète votre produit en magasin",
    step: 1,
    variant: "green",
  },
  {
    icon: QrIcon,
    title: "Scan QR Code",
    description: "Il scanne le code sur l'emballage",
    step: 2,
    variant: "green",
  },
  {
    icon: LayerIcon,
    title: "Déblocage carte",
    description: "Une carte digitale est débloquée",
    step: 3,
    variant: "green",
  },
  {
    icon: PuzzleIcon,
    title: "Collection",
    description: "Il complète sa collection",
    step: 4,
    variant: "red",
  },
  {
    icon: GiftIcon,
    title: "Récompenses",
    description: "Participe aux tirages",
    step: 5,
    variant: "red",
  },
] as const;
