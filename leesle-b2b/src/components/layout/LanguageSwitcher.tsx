"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleSwitch(newLocale: string) {
    router.replace(pathname, { locale: newLocale as (typeof routing.locales)[number] });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => handleSwitch(loc)}
          className={`px-2 py-1 rounded transition-colors ${
            locale === loc
              ? "text-brand-gold font-semibold"
              : "text-brand-gray hover:text-brand-dark"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
