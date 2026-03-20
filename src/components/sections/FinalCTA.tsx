import { FaRegEnvelope } from "react-icons/fa6";
import { Button } from "../ui/Button";
import { FINAL_STATS } from "../../constants";
import RedCalendar from "../../assets/redCalendar.svg";

export const FinalCTA = () => (
  <section aria-label="Statistiques et appel à l'action">
    {/* Stats Row */}
    <div className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
      {FINAL_STATS.map((stat) => (
        <div key={stat.label}>
          {stat.icon && (
            <img
              src={stat.icon}
              alt=""
              aria-hidden="true"
              className="mx-auto mb-4 sm:mb-6 h-4 sm:h-5"
              loading="lazy"
            />
          )}
          <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
          <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>

    {/* Red Banner CTA */}
    <div className="bg-red-600 py-16 sm:py-24 px-4 sm:px-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        Prêt à transformer votre marketing ?
      </h2>
      <p className="opacity-90 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
        Rejoignez les marques qui engagent leurs fans avec YouCanWin
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        <Button variant="secondary" size="lg">
          <img
            src={RedCalendar}
            alt=""
            aria-hidden="true"
            className="w-5 h-5"
          />
          Planifier une démo gratuite
        </Button>
        <Button variant="outline" size="lg">
          <FaRegEnvelope size={18} aria-hidden="true" />
          Nous contacter
        </Button>
      </div>
    </div>
  </section>
);
