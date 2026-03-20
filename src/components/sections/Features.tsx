import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "../ui/Button";
import { IconImage } from "../ui/IconImage";
import { FEATURES } from "../../constants";
import CalendarIcon from "../../assets/calendar-icon.png";

export const Features = () => (
  <section
    className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    aria-labelledby="features-heading"
  >
    {/* Image */}
    <div className="relative order-2 lg:order-1">
      <img
        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800"
        alt="Joueurs de football en action sur le terrain"
        className="rounded-2xl sm:rounded-[2.5rem] shadow-2xl object-cover w-full aspect-3/4 sm:aspect-auto sm:h-125 lg:h-125"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="order-1 lg:order-2">
      <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
        <IoIosCheckmarkCircleOutline aria-hidden="true" />
        Solution complète
      </span>

      <h2
        id="features-heading"
        className="text-3xl sm:text-4xl font-bold mt-6 text-slate-900 leading-tight"
      >
        Le terrain de jeu digital de votre marque
      </h2>

      <p className="mt-4 sm:mt-6 text-gray-500 text-base sm:text-lg leading-relaxed">
        YouCanWin transforme vos produits en expériences interactives. Chaque
        achat devient une opportunité d'engagement avec vos consommateurs.
      </p>

      <ul className="mt-8 sm:mt-10 space-y-6 sm:space-y-8" role="list">
        {FEATURES.map((feature) => (
          <li key={feature.title} className="flex gap-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg shrink-0 flex items-center justify-center">
              <IconImage src={feature.icon} alt="" size="sm" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <Button variant="danger" className="mt-8 sm:mt-10">
        Planifier une démo
        <img src={CalendarIcon} alt="" aria-hidden="true" className="w-5 h-5" />
      </Button>
    </div>
  </section>
);
