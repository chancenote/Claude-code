"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function Header() {
  const { lang, toggle } = useTranslation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-light">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <a
          href="https://www.leesle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading font-bold text-xl tracking-wider"
        >
          LEESLE
        </a>
        <button
          onClick={toggle}
          className="px-3 py-1 text-sm border border-gray-light rounded-full hover:border-gold transition font-medium"
        >
          {lang === "en" ? "KO" : "EN"}
        </button>
      </div>
    </header>
  );
}
