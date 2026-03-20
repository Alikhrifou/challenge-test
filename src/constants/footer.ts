import type { FooterLinkGroup, SocialLink } from "../types";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { LiaLinkedinIn } from "react-icons/lia";

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { icon: GrFacebookOption, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { icon: RxInstagramLogo, href: "#", label: "Instagram" },
  { icon: LiaLinkedinIn, href: "#", label: "LinkedIn" },
] as const;

export const FOOTER_LINK_GROUPS: readonly FooterLinkGroup[] = [
  {
    title: "Liens rapides",
    links: [
      { label: "Nos offres", href: "#offres" },
      { label: "Nos jeux", href: "#jeux" },
      { label: "Album 2025", href: "#album" },
      { label: "À propos", href: "#apropos" },
    ],
  },
  {
    title: "Contact & Légal",
    links: [
      { label: "games@agency.africa", href: "mailto:games@agency.africa" },
      { label: "Mentions légales", href: "#mentions" },
      { label: "Protection des données (CNDP)", href: "#cndp", isExternal: true },
      { label: "Conditions d'utilisation", href: "#cgu" },
    ],
  },
] as const;
