"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="pt-24 pb-10 bg-gradient-to-b from-gray-lighter to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
          {t("hero_title")}
        </h1>
        <p
          className="text-charcoal/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          dangerouslySetInnerHTML={{ __html: t("hero_desc") }}
        />
      </div>
    </section>
  );
}
