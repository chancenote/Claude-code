"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "cta";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed",
  secondary:
    "border border-gray-light text-charcoal hover:bg-gray-lighter",
  cta: "bg-gold text-white hover:bg-gold/90 disabled:opacity-40 disabled:cursor-not-allowed",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-8 py-3 font-heading font-bold rounded-lg transition flex items-center justify-center gap-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
