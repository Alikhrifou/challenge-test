import { useState, useCallback } from "react";
import { CgChevronRight } from "react-icons/cg";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Button } from "../ui/Button";
import { NAV_LINKS } from "../../constants";
import LogoIcon from "../../assets/Logo.svg";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="YouCanWin — Accueil">
          <img src={LogoIcon} alt="YouCanWin logo" className="h-8" />
          <span className="bg-green-700 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
            Games
          </span>
        </a>

        {/* Desktop Navigation + CTA grouped on the right */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-green-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button size="sm">
            Demander une démo <CgChevronRight size={18} aria-hidden="true" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? (
            <HiX size={24} aria-hidden="true" />
          ) : (
            <HiOutlineMenuAlt3 size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md animate-in slide-in-from-top"
          role="menu"
        >
          <ul className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  className="block py-3 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-lg px-3 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <Button className="w-full" size="sm" onClick={closeMenu}>
              Demander une démo <CgChevronRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};