import { BiChevronRight } from "react-icons/bi";
import { Button } from "../ui/Button";
import { HERO_STATS } from "../../constants";
import HeroImage from "../../assets/collection.svg";
import ProductWord from "../../assets/Product-word.svg";
import lightIconSrc from "../../assets/light-icon.png";

export const Hero = () => (
  <section
    className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-slate-50 overflow-hidden"
    aria-labelledby="hero-heading"
  >
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Content */}
      <div>
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-900"
        >
          Transformez chaque{" "}
          <img
            src={ProductWord}
            alt="Produit"
            className="inline-block align-middle"
          />{" "}
          en expérience de jeu
        </h1>

        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
          YouCanWin connecte vos marques aux fans de football à travers des
          mécaniques de gamification innovantes.{" "}
          <strong className="text-slate-900">
            Codes QR, cartes digitales, défis et récompenses.
          </strong>
        </p>

        {/* Stats */}
        <dl className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 border-t pt-6 sm:pt-8 border-gray-200">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <dd className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </dd>
              <dt className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</dt>
            </div>
          ))}
        </dl>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
          <Button>
            Voir la démo <BiChevronRight size={18} aria-hidden="true" />
          </Button>
          <Button variant="secondary">
            <img
              src={lightIconSrc}
              alt=""
              aria-hidden="true"
              className="h-4.5 w-4.5"
            />
            Comment ça marche
          </Button>
        </div>

        {/* Trust Bar */}
        <div className="mt-12 sm:mt-16 border-t border-gray-200 pt-6">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm font-medium text-gray-400">
            <span>Maroc Telecom</span>
            <span>Inwi</span>
            <span>Orange</span>
            <span>Carrefour</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={HeroImage}
          alt="Collection de cartes digitales YouCanWin"
          className="w-full h-auto"
          loading="eager"
        />
      </div>
    </div>
  </section>
);