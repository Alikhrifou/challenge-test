
import { Button } from '../ui/Button';
import Users from '../../assets/UsersIcon.svg';
import TechIcon from '../../assets/techIcon.svg';
import StartIcon from '../../assets/startIcon.svg';
import FlashIcon from '../../assets/greenFlash.svg';
import RedCalendar from '../../assets/redCalendar.svg';
import { FaRegEnvelope } from 'react-icons/fa6';
export const FinalCTA = () => {
  return (
    <section>
      {/* Stats row */}
      <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <img src={FlashIcon} className="mx-auto text-[#16A34A] mb-8"  />
          <div className="text-3xl font-bold">500K+</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Interactions mensuelles</div>
        </div>
        <div>
          <img src={Users} className="mx-auto text-[#16A34A] mb-4" />
          <div className="text-3xl font-bold">50+</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Marques partenaires</div>
        </div>
        <div>
          <img src={StartIcon}  className="mx-auto text-[#16A34A] mb-4" />
          <div className="text-3xl font-bold">98%</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Taux de satisfaction</div>
        </div>
        <div>
          <img src={TechIcon}  className="mx-auto text-[#16A34A] mb-4" />
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Support technique</div>
        </div>
      </div>

      {/* Red Banner */}
      <div className="bg-[#DC2626] py-24 px-4 text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Prêt à transformer votre marketing ?</h2>
        <p className="opacity-90 text-lg mb-10">Rejoignez les marques qui engagent leurs fans avec YouCanWin</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-3 bg-white rounded-lg text-[#B01219] px-8 py-4">
            <img src={RedCalendar} /> Planifier une démo gratuite
          </button>
          <Button variant="outline" className="px-8 py-4">
            <FaRegEnvelope   size={18} /> Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};
