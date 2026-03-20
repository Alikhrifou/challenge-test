import { IconImage } from "../ui/IconImage";
import ZapIcon from "../../assets/zap-icon.png";
import HeartIcon from "../../assets/heart-icon.png";
import ShareIcon from "../../assets/organic-icon.png";
import type { FeatureItem } from "../../types";

const CALLOUT_CARDS: readonly FeatureItem[] = [
  {
    icon: ZapIcon,
    title: "Engagement immédiat",
    description: "Chaque produit devient une opportunité de jeu",
  },
  {
    icon: HeartIcon,
    title: "Fidélisation naturelle",
    description: "Les clients reviennent pour compléter leur collection",
  },
  {
    icon: ShareIcon,
    title: "Viralité organique",
    description: "Les fans partagent et échangent entre eux",
  },
] as const;

export const GreenCallout = () => (
  <section
    className="bg-gradient-to-r from-green-600 to-green-800 py-16 sm:py-24 px-4 sm:px-6"
    aria-labelledby="callout-heading"
  >
    <div className="max-w-7xl mx-auto text-center text-white">
      <h2
        id="callout-heading"
        className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6"
      >
        Transformez vos ventes en expérience mémorable
      </h2>
      <p className="max-w-2xl mx-auto opacity-80 mb-10 sm:mb-16 text-sm sm:text-base">
        YouCanWin offre à vos clients plus qu'un produit : une expérience
        interactive complète autour du football
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {CALLOUT_CARDS.map((card) => (
          <article
            key={card.title}
            className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <IconImage src={card.icon} alt="" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              {card.title}
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
