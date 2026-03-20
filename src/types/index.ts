/** Reusable types for the application */

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly icon?: string;
  readonly color?: string;
}

export interface FeatureItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface StepItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly step: number;
  readonly variant: "green" | "red";
}

export interface PricingPlan {
  readonly icon: string;
  readonly name: string;
  readonly subtitle: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly buttonText: string;
  readonly variant: "secondary" | "danger";
  readonly isPopular?: boolean;
}

export interface PricingStat {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface GameItem {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly label?: string;
}

export interface SocialLink {
  readonly icon: React.ComponentType<{ size?: number }>;
  readonly href: string;
  readonly label: string;
}

export interface FooterLinkGroup {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}
