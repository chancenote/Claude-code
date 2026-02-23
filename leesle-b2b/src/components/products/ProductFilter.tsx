"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function ProductFilter() {
  const t = useTranslations("Products");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") ?? "";
  const activeCustom = searchParams.get("customizable") ?? "";

  const categoryFilters = [
    { value: "", label: t("filterAll") },
    { value: "goods", label: t("goods") },
    { value: "accessory", label: t("accessory") },
    { value: "seasonal", label: t("seasonal") },
  ];

  const customFilters = [
    { value: "", label: t("filterAll") },
    { value: "true", label: t("filterCustomizableYes") },
    { value: "false", label: t("filterCustomizableNo") },
  ];

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
      {/* Category filter */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-2 md:hidden">
          {t("filterAll")}
        </label>
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => updateFilter("category", opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === opt.value
                  ? "bg-brand-gold text-brand-white border-brand-gold"
                  : "bg-brand-white text-brand-dark border-brand-beige hover:border-brand-gold"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom filter */}
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-2 md:hidden">
          {t("customizableLabel")}
        </label>
        <div className="flex flex-wrap gap-2">
          {customFilters.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => updateFilter("customizable", opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCustom === opt.value
                  ? "bg-brand-gold text-brand-white border-brand-gold"
                  : "bg-brand-white text-brand-dark border-brand-beige hover:border-brand-gold"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
