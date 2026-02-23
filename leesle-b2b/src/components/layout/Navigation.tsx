"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const navItems = [
  { labelKey: "catalog" as const, href: "/products" as const },
  { labelKey: "cases" as const, href: "/cases" as const },
  { labelKey: "custom" as const, href: "/custom" as const },
  { labelKey: "brand" as const, href: "/brand" as const },
  { labelKey: "resources" as const, href: "/resources" as const },
  { labelKey: "faq" as const, href: "/faq" as const },
];

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function Navigation({
  mobile = false,
  onNavigate,
}: NavigationProps) {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`
              transition-colors duration-200
              ${
                mobile
                  ? "text-lg py-2 border-b border-brand-beige"
                  : "text-sm"
              }
              ${
                isActive
                  ? "text-brand-gold font-semibold"
                  : "text-brand-dark hover:text-brand-gold"
              }
            `}
          >
            {t(item.labelKey)}
          </Link>
        );
      })}
    </>
  );
}
