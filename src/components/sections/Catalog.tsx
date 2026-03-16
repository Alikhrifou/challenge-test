import { MdChevronRight } from 'react-icons/md';
import CatalogueImage1 from '../../assets/catalogueImage1.png';
import CatalogueImage2 from '../../assets/catalogueImage2.png';
import CatalogueImage3 from '../../assets/catalogueImage3.png';
import CatalogueImage4 from '../../assets/catalogueImage4.png';

const games = [
  { title: "Album Digital 2025", desc: "Collection de cartes avec échanges et défis.", label: "STAR", img: CatalogueImage1 },
  { title: "Quiz Football", desc: "Questions sur l'actualité et l'histoire du foot.", label: "BIENTÔT", img: CatalogueImage2 },
  { title: "Tombola digitale", desc: "Tirages au sort avec lots sponsorisés.", img: CatalogueImage3 },
  { title: "Pronostics", desc: "Prédictions de matchs et classements.", img: CatalogueImage4 },
];

export const Catalog = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Catalogue de jeux</h2>
        <p className="text-gray-500">Des mécaniques éprouvées pour engager vos audiences</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((g, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img src={g.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={g.title} />
              {g.label && (
                <span className={`absolute -top-1 right-0 text-[10px]  px-2 py-1 rounded-md text-white ${g.label === 'STAR' ? 'bg-[#0B6B3A]' : 'bg-slate-800'}`}>
                  {g.label}
                </span>
              )}
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2">{g.title}</h4>
              <p className="text-sm text-gray-400 mb-6">{g.desc}</p>
              {i === 0 && (
                <a href="#" className="text-[#0B6B3A] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Découvrir <MdChevronRight  size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};