import { BsShieldCheck } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import { RxInstagramLogo } from "react-icons/rx";


export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0B6B3A] rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🏆</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                You<span className="text-[#DC2626]">canwin</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.
            </p>
            <div className="flex gap-3">
              {[GrFacebookOption , FaXTwitter , RxInstagramLogo , LiaLinkedinIn ].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-[#0B6B3A] hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Liens rapides</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#0B6B3A] transition-colors">Nos offres</a></li>
              <li><a href="#" className="hover:text-[#0B6B3A] transition-colors">Nos jeux</a></li>
              <li><a href="#" className="hover:text-[#0B6B3A] transition-colors">Album 2025</a></li>
              <li><a href="#" className="hover:text-[#0B6B3A] transition-colors">À propos</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact & Légal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="mailto:games@agency.africa" className="hover:text-[#0B6B3A] transition-colors">games@agency.africa</a></li>
              <li><a href="#" className="hover:text-[#0B6B3A] transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-[#0B6B3A] transition-colors flex items-center gap-1">Protection des données (CNDP) <span className="text-[10px]">↗</span></a></li>
              <li><a href="#" className="hover:text-[#0B6B3A] transition-colors">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
          <p>© 2025 Youcanwin. Tous droits réservés.</p>
          
          <div className="flex items-center gap-1">
            Un service de <span className="font-bold text-slate-900 ml-1">Agency.Africa</span> 
            <span className="mx-2">—</span> 
            <span className="text-gray-400">games.agency.africa</span>
          </div>
        </div>

        {/* Compliance Badge */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-xl text-[#0B6B3A] text-[11px] font-semibold">
            <BsShieldCheck size={14} />
            Site conforme CNDP Maroc
          </div>
        </div>
      </div>
    </footer>
  );
};