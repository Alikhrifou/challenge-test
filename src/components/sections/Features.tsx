
import { Button } from '../ui/Button';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import PhoneIcon from '../../assets/phone-icon.png';
import LayerIcon from '../../assets/layers-icon.png';
import GiftIcon from '../../assets/gift-icon.png';
import ChartBarIcon from '../../assets/barChart-icon.png';
import CalendarIcon from '../../assets/calendar-icon.png';

const features = [
  { icon: PhoneIcon, title: "Activation instantanée", desc: "QR codes uniques sur chaque produit" },
  { icon: LayerIcon, title: "Collection digitale", desc: "Cartes de joueurs, raretés, échanges" },
  { icon: GiftIcon , title: "Récompenses exclusives", desc: "Tirages au sort, lots partenaires, expériences VIP" },
  { icon: ChartBarIcon , title: "Analytics avancés", desc: "Dashboard temps réel, insights consommateurs" },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800" 
          alt="Football action" 
          className="rounded-[2.5rem] shadow-2xl object-cover h-125 w-full"
        />
      </div>
      <div>
        <span className="bg-green-100 text-[#0B6B3A] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2 w-fit">
          <IoIosCheckmarkCircleOutline /> Solution complète
        </span>
        <h2 className="text-4xl font-bold mt-6 text-[#0F172A] leading-tight">
          Le terrain de jeu digital de votre marque
        </h2>
        <p className="mt-6 text-gray-500 text-lg">
          YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d’engagement avec vos consommateurs.
        </p>
        
        <div className="mt-10 space-y-8">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-lg shrink-0 flex items-center justify-center text-[#0B6B3A]">
                <img src={f.icon} alt={f.title} className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{f.title}</h4>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Button variant="danger" className="mt-10">
         Planifier une démo <img src={CalendarIcon} alt="Calendar"  /> 
        </Button>
      </div>
    </section>
  );
};