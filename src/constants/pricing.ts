import type { PricingPlan, PricingStat } from "../types";

import UsersIconSrc from "../assets/greenUser-icon.png";
import QrIconSrc from "../assets/Qrcode-icon.png";
import EarthIconSrc from "../assets/earthIcon.png";
import AlbumIconSrc from "../assets/puzzl-icon.png";
import CloudIconSrc from "../assets/normalCloud-icon.png";
import ZapIconSrc from "../assets/greenZapIcon.png";
import FlashIconSrc from "../assets/redFlashIcon.png";

export const PRICING_STATS: readonly PricingStat[] = [
  { icon: UsersIconSrc, title: "Utilisateurs", description: "De 1K à illimité" },
  { icon: QrIconSrc, title: "QR Codes", description: "Volume adapté" },
  { icon: EarthIconSrc, title: "Couverture", description: "Local à mondial" },
  { icon: AlbumIconSrc, title: "Albums", description: "Standard ou custom" },
  { icon: CloudIconSrc, title: "Infrastructure", description: "Cloud ou On-Premise" },
] as const;

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    icon: ZapIconSrc,
    name: "Starter",
    subtitle: "Campagne locale",
    description: "Idéal pour tester sur un marché",
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      "1 pays / région",
      "Album standard (équipe nationale)",
      "Hébergement Cloud sécurisé",
      "Backoffice simplifié",
      "Support par email",
      "1 marque",
    ],
    buttonText: "Demander un devis",
    variant: "secondary",
  },
  {
    icon: FlashIconSrc,
    name: "Scale",
    subtitle: "Expansion nationale",
    description: "Pour des campagnes d'envergure",
    isPopular: true,
    features: [
      "Jusqu'à 50 000 utilisateurs",
      "QR codes illimités",
      "Multi-pays (jusqu'à 5)",
      "Album complet (toutes les équipes)",
      "Cloud ou On-Premise",
      "Backoffice avancé avec analytics",
      "Support prioritaire 24/7",
      "Jusqu'à 3 marques",
      "API REST disponible",
    ],
    buttonText: "Planifier une démo",
    variant: "danger",
  },
  {
    icon: EarthIconSrc,
    name: "Enterprise",
    subtitle: "Solution globale",
    description: "Pour les groupes internationaux",
    features: [
      "Utilisateurs illimités",
      "QR codes illimités",
      "Déploiement mondial",
      "Albums personnalisés par région",
      "Infrastructure dédiée (On-Premise)",
      "Multi-marques illimité",
      "Développements sur-mesure",
      "Account manager dédié",
      "SLA garanti 99.9%",
      "Formation et onboarding complet",
    ],
    buttonText: "Contactez-nous",
    variant: "secondary",
  },
] as const;
