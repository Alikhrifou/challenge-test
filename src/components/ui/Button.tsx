import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly children: ReactNode;
}

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50 disabled:cursor-not-allowed";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
  secondary:
    "bg-white text-slate-900 border border-gray-200 hover:bg-gray-50 active:bg-gray-100",
  outline:
    "bg-transparent border border-white text-white hover:bg-white/10 active:bg-white/20",
  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => (
  <button
    className={`${BASE_STYLES} ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
    {...props}
  >
    {children}
  </button>
);