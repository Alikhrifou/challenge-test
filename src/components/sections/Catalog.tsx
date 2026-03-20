import { MdChevronRight } from "react-icons/md";
import { SectionHeader } from "../ui/SectionHeader";
import { GAMES } from "../../constants";
import type { GameItem } from "../../types";

const LABEL_STYLES: Record<string, string> = {
  STAR: "bg-green-700",
  BIENTÔT: "bg-slate-800",
};

const GameCard = ({
  game,
  showLink,
}: {
  game: GameItem;
  showLink: boolean;
}) => (
  <article className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
    <div className="relative h-40 sm:h-48 overflow-hidden">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {game.label && (
        <span
          className={`absolute top-0 right-0 text-[10px] px-2.5 py-1 rounded-bl-md text-white font-semibold ${
            LABEL_STYLES[game.label] ?? "bg-slate-800"
          }`}
        >
          {game.label}
        </span>
      )}
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="font-bold text-base sm:text-lg mb-2">{game.title}</h3>
      <p className="text-sm text-gray-400 mb-4 sm:mb-6">{game.description}</p>
      {showLink && (
        <a
          href="#album"
          className="text-green-700 text-sm font-bold inline-flex items-center gap-1 hover:gap-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 rounded"
        >
          Découvrir
          <MdChevronRight size={16} aria-hidden="true" />
        </a>
      )}
    </div>
  </article>
);

export const Catalog = () => (
  <section
    className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    aria-labelledby="catalog-heading"
  >
    <SectionHeader
      title="Catalogue de jeux"
      subtitle="Des mécaniques éprouvées pour engager vos audiences"
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {GAMES.map((game, index) => (
        <GameCard key={game.title} game={game} showLink={index === 0} />
      ))}
    </div>
  </section>
);
