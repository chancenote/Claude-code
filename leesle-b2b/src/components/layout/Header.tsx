"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "@/components/ui/Button";

export default function Header() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-brand-dark"
        >
          LEESLE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Navigation />
        </nav>

        {/* Desktop CTA + Language */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button href="/quote" size="sm">
            {t("quote")}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
          aria-label={t("openMenu")}
        >
          <span className="block w-6 h-0.5 bg-brand-dark" />
          <span className="block w-6 h-0.5 bg-brand-dark" />
          <span className="block w-6 h-0.5 bg-brand-dark" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-dark/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-brand-cream shadow-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <LanguageSwitcher />
              <button
                type="button"
                className="p-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label={t("closeMenu")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <Navigation
                mobile
                onNavigate={() => setMobileMenuOpen(false)}
              />
            </nav>
            <div className="mt-auto pt-6">
              <Button
                href="/quote"
                size="lg"
                className="w-full"
              >
                {t("quote")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
