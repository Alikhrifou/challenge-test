import { Button } from '../ui/Button';

import HeroImage from '../../assets/collection.svg';
import ProductWord from '../../assets/Product-word.svg';
import { BiChevronRight } from 'react-icons/bi';
import lightIconSrc from '../../assets/light-icon.png';

const LightIcon = ({ className = '' }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`inline-block bg-contain bg-center bg-no-repeat ${className}`}
    style={{ backgroundImage: `url(${lightIconSrc})` }}
  />
);

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#0F172A]">
            Transformez chaque <img src={ProductWord} alt="Produit" className="inline-block align-middle"/> en expérience de jeu
          </h1>
          <p className="mt-8 text-xl text-[#475569] leading-relaxed max-w-xl">
            YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes. <b className='text-black'>Codes QR, cartes digitales, défis et récompenses.</b>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="bg-[#0B6B3A]">Voir la démo <BiChevronRight size={18}/></Button>
            <Button variant="secondary"><LightIcon className="h-4.5 w-4.5" /> Comment ça marche</Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t pt-8 border-gray-200">
            <div>
              <div className="text-3xl font-bold text-[#0B6B3A]">500K+</div>
              <div className="text-sm text-gray-500">Interactions/mois</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#B01219]">50+</div>
              <div className="text-sm text-gray-500">Marques actives</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0B6B3A]">x3.5</div>
              <div className="text-sm text-gray-500">ROI moyen</div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Mockup Container */}
        <img src={HeroImage}/>
        </div>
      </div>
    </section>
  );
};