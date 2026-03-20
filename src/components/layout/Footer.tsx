import { BsShieldCheck } from "react-icons/bs";
import { SOCIAL_LINKS, FOOTER_LINK_GROUPS } from "../../constants";

export const Footer = () => (
  <footer
    className="bg-white pt-12 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 border-t border-gray-100"
    role="contentinfo"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 pb-10 sm:pb-16">
        {/* Brand Info */}
        <div className="space-y-5 sm:space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg" aria-hidden="true">
                🏆
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight">
              You<span className="text-red-600">canwin</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Plateforme de jeux digitaux pour engager vos communautés autour du
            football. Un service d'Agency.Africa.
          </p>
          <nav aria-label="Réseaux sociaux">
            <ul className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-green-700 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    <social.icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Link Groups */}
        {FOOTER_LINK_GROUPS.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="font-bold text-slate-900 mb-4 sm:mb-6">
              {group.title}
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-500">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-green-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 rounded inline-flex items-center gap-1"
                    {...(link.isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                    {link.isExternal && (
                      <span className="text-[10px]" aria-hidden="true">
                        ↗
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Youcanwin. Tous droits réservés.</p>

        <div className="flex items-center gap-1 text-center">
          Un service de{" "}
          <span className="font-bold text-slate-900 ml-1">Agency.Africa</span>
          <span className="mx-2">—</span>
          <span className="text-gray-400">games.agency.africa</span>
        </div>
      </div>

      {/* Compliance Badge */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-xl text-green-700 text-[11px] font-semibold">
          <BsShieldCheck size={14} aria-hidden="true" />
          Site conforme CNDP Maroc
        </div>
      </div>
    </div>
  </footer>
);
