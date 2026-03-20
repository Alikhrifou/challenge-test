import type { ReactNode } from "react";

interface SectionHeaderProps {
  readonly badge?: ReactNode;
  readonly title: string;
  readonly subtitle?: string;
  readonly className?: string;
}

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) => (
  <header className={`text-center mb-16 ${className}`}>
    {badge && <div className="mb-4 flex justify-center">{badge}</div>}
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </header>
);
