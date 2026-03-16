import { Button } from "../ui/Button";
import { BiChevronRight } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

import QrCode from '../../assets/Qrcode-icon.png';
import Users from '../../assets/greenUser-icon.png';
import Settings from '../../assets/settings-icon.png';
import Chart from '../../assets/barChart-icon.png';
import Gift from '../../assets/gift-icon.png';
import BellIcon from '../../assets/greenBell-icon.png';
import DownloadIcon from '../../assets/greenCloud-icon.png';
import LayersIcon from '../../assets/layers-icon.png';

const tools = [
  {
    icon: QrCode,
    title: "Générateur QR Codes",
    desc: "Créez et téléchargez vos QR codes uniques en masse",
  },
  {
    icon: Users,
    title: "CRM Participants",
    desc: "Collectez et gérez vos participants avec segmentation avancée",
  },
  {
    icon: Settings,
    title: "Configuration jeux",
    desc: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels",
  },
  {
    icon: Chart,
    title: "Analytics temps réel",
    desc: "Suivez vos KPIs : scans, conversions, engagement, ROI",
  },
  {
    icon: Gift,
    title: "Gestion des lots",
    desc: "Définissez vos récompenses et gérez les tirages au sort",
  },
  {
    icon: BellIcon,
    title: "Notifications",
    desc: "Envoyez des push, emails et SMS à vos participants",
  },
  {
    icon: DownloadIcon,
    title: "Export données",
    desc: "Téléchargez vos données en CSV, Excel ou via API",
  },
  {
    icon: LayersIcon,
    title: "Multi-campagnes",
    desc: "Gérez plusieurs campagnes simultanément",
  },
];

export const Backoffice = () => {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="flex justify-center mb-6">

      <span className="flex w-52 justify-center items-center gap-3 bg-[#DCFCE7] text-[#0B6B3A] text-xs font-bold px-3 py-1  rounded-full">
        <IoSettingsOutline size={15} />
        <p>Backoffice tout-en-un</p>
      </span>
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mt-4 mb-6">
          Gérez tout depuis une interface unique
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Notre backoffice intuitif vous permet de créer, configurer et piloter
          vos campagnes en toute autonomie
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-gray-100 text-left hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center text-[#0B6B3A] mb-4 bg-[#F0FDF4] pl-3 w-12 h-10 text-center rounded-md">
                <img src={t.icon} alt={t.title} className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2 text-slate-900">{t.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <Button className="mt-12 mx-auto">
          Demander un accès au backoffice <BiChevronRight size={18} />
        </Button>
      </div>
    </section>
  );
};
