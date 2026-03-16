import { BiCheck } from "react-icons/bi";
import { Button } from "../ui/Button";


import UsersIconSrc from "../../assets/greenUser-icon.png";
import QrIconSrc from "../../assets/Qrcode-icon.png";
import EarthIconSrc from "../../assets/earthIcon.png";
import AlbumIconSrc from "../../assets/puzzl-icon.png";
import CloudIconSrc from "../../assets/normalCloud-icon.png";


import ZapIconSrc from "../../assets/greenZapIcon.png";
import FlashIconSrc from "../../assets/redFlashIcon.png";
import EarthPlanIconSrc from "../../assets/earthIcon.png";

const IconWrapper = ({ src, className = "" }: { src: string; className?: string }) => (
  <span
    aria-hidden="true"
    className={`inline-block bg-contain bg-center bg-no-repeat ${className}`}
    style={{ backgroundImage: `url(${src})` }}
  />
);

export const Pricing = () => {
  const topStats = [
    { icon: UsersIconSrc, title: "Utilisateurs", desc: "De 1K � illimit�" },
    { icon: QrIconSrc, title: "QR Codes", desc: "Volume adapt�" },
    { icon: EarthIconSrc, title: "Couverture", desc: "Local � mondial" },
    { icon: AlbumIconSrc, title: "Albums", desc: "Standard ou custom" },
    { icon: CloudIconSrc, title: "Infrastructure", desc: "Cloud ou On-Premise" },
  ];

  const plans = [
    {
      icon: ZapIconSrc,
      name: "Starter",
      subtitle: "Campagne locale",
      desc: "Idéal pour tester sur un marché",
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
      variant: "secondary" as const,
    },
    {
      icon: FlashIconSrc,
      name: "Scale",
      subtitle: "Expansion nationale",
      desc: "Pour des campagnes d'envergure",
      popular: true,
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
      variant: "danger" as const,
    },
    {
      icon: EarthPlanIconSrc,
      name: "Enterprise",
      subtitle: "Solution globale",
      desc: "Pour les groupes internationaux",
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
      variant: "secondary" as const,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Info Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-20  pb-16">
          {topStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-lg flex items-center justify-center mb-4">
                <IconWrapper src={stat.icon} className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{stat.title}</h4>
              <p className="text-xs text-slate-50">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">
          Des formules adaptées à votre échelle
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
           Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-[2rem] p-8 border transition-all flex flex-col ${
                plan.popular
                  ? "border-[#FCA5A5] shadow-xl relative z-10 lg:scale-105"
                  : "border-slate-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DC2626] text-white px-6 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                  Populaire
                </span>
              )}

              <div className="mb-8">
                <IconWrapper src={plan.icon} className="w-8 h-8 mb-4 ml-1" />
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p
                  className={`text-sm font-semibold mt-1 ${
                    plan.popular ? "text-[#DC2626]" : "text-[#16A34A]"
                  }`}
                >
                  {plan.subtitle}
                </p>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="border-t border-slate-100 pt-8 mb-8 flex-grow">
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#475569]">
                      <BiCheck
                        size={18}
                        className={`${
                          plan.popular ? "text-[#DC2626]" : "text-[#16A34A]"
                        } shrink-0`}
                      />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant={plan.variant}
                  className={`w-full py-4 rounded-xl border ${
                    plan.popular
                      ? "bg-[#DC2626] text-white border-transparent"
                      : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
