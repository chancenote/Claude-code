"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const quickLinkKeys = [
  { labelKey: "catalog" as const, href: "/products" as const },
  { labelKey: "cases" as const, href: "/cases" as const },
  { labelKey: "custom" as const, href: "/custom" as const },
  { labelKey: "brand" as const, href: "/brand" as const },
  { labelKey: "resources" as const, href: "/resources" as const },
  { labelKey: "faq" as const, href: "/faq" as const },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");

  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              LEESLE
            </Link>
            <p className="mt-3 text-sm text-brand-gray leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-gray hover:text-brand-gold transition-colors"
                  >
                    {tNav(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("contact")}
            </h3>
            <p className="text-sm text-brand-gray mb-2">
              {t("email")}
            </p>
            <p className="text-sm text-brand-gray mb-6">
              {t("phone")}
            </p>
            <Link
              href="/quote"
              className="inline-block px-6 py-3 border border-brand-gold text-brand-gold text-sm font-medium rounded-lg hover:bg-brand-gold hover:text-brand-white transition-all"
            >
              {t("quoteInquiry")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-gray/20">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray">
            © {new Date().getFullYear()} LEESLE. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-gray">
            <Link href="#" className="hover:text-brand-cream transition-colors">
              {t("privacy")}
            </Link>
            <Link href="#" className="hover:text-brand-cream transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
