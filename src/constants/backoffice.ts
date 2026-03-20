import type { FeatureItem } from "../types";

import QrCode from "../assets/Qrcode-icon.png";
import Users from "../assets/greenUser-icon.png";
import Settings from "../assets/settings-icon.png";
import Chart from "../assets/barChart-icon.png";
import Gift from "../assets/gift-icon.png";
import BellIcon from "../assets/greenBell-icon.png";
import DownloadIcon from "../assets/greenCloud-icon.png";
import LayersIcon from "../assets/layers-icon.png";

export const BACKOFFICE_TOOLS: readonly FeatureItem[] = [
  {
    icon: QrCode,
    title: "Générateur QR Codes",
    description: "Créez et téléchargez vos QR codes uniques en masse",
  },
  {
    icon: Users,
    title: "CRM Participants",
    description: "Collectez et gérez vos participants avec segmentation avancée",
  },
  {
    icon: Settings,
    title: "Configuration jeux",
    description: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels",
  },
  {
    icon: Chart,
    title: "Analytics temps réel",
    description: "Suivez vos KPIs : scans, conversions, engagement, ROI",
  },
  {
    icon: Gift,
    title: "Gestion des lots",
    description: "Définissez vos récompenses et gérez les tirages au sort",
  },
  {
    icon: BellIcon,
    title: "Notifications",
    description: "Envoyez des push, emails et SMS à vos participants",
  },
  {
    icon: DownloadIcon,
    title: "Export données",
    description: "Téléchargez vos données en CSV, Excel ou via API",
  },
  {
    icon: LayersIcon,
    title: "Multi-campagnes",
    description: "Gérez plusieurs campagnes simultanément",
  },
] as const;
