import { Button } from '../ui/Button';
import { CgChevronRight } from "react-icons/cg";
import LogoIcon from '../../assets/Logo.svg';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">       
              <img src={LogoIcon} alt="" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
          <a href="#" className="hover:text-[#0B6B3A]">Nos offres</a>
          <a href="#" className="hover:text-[#0B6B3A]">Nos jeux</a>
          <a href="#" className="hover:text-[#0B6B3A]">Album 2025</a>
          <a href="#" className="hover:text-[#0B6B3A]">À propos</a>
        </div>

        <Button className="hidden md:flex">
          Demander une démo <CgChevronRight  size={18} />
        </Button>
      </div>
    </nav>
  );
};