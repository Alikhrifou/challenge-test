import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#16A34A] text-white hover:bg-[#16A34A]",
    secondary: "bg-white text-[#0F172A] border border-gray-200 hover:bg-gray-50",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
    danger: "bg-[#DC2626] text-white hover:bg-[#b91c1c]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};