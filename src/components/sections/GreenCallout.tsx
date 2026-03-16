
import ZapIcon from '../../assets/zap-icon.png';
import HeartIcon from '../../assets/heart-icon.png';
import ShareIcon from '../../assets/organic-icon.png';


export const GreenCallout = () => {
  const cards = [
    { icon: ZapIcon, title: "Engagement immédiat", desc: "Chaque produit devient une opportunité de jeu" },
    { icon: HeartIcon, title: "Fidélisation naturelle", desc: "Les clients reviennent pour compléter leur collection" },
    { icon: ShareIcon, title: "Viralité organique", desc: "Les fans partagent et échangent entre eux" },
  ];

  return (
    <section className="bg-linear-to-r from-[#16A34A] to-[#0B6B3A] py-24 px-4">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Transformez vos ventes en expérience mémorable</h2>
        <p className="max-w-2xl mx-auto opacity-80 mb-16">
          YouCanWin offre à vos clients plus qu’un produit : une expérience interactive complète autour du football
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src={c.icon} alt={c.title} className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">{c.title}</h4>
              <p className="text-sm opacity-70 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};