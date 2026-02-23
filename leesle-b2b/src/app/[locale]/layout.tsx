import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";
import Hotjar from "@/components/analytics/Hotjar";

// Direct message imports for static metadata generation
import koMessages from "../../../messages/ko.json";
import enMessages from "../../../messages/en.json";

const allMessages: Record<string, typeof koMessages> = { ko: koMessages, en: enMessages };
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://b2b.leesle.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = allMessages[locale] ?? allMessages.ko;

  return {
    title: {
      default: m.Metadata.title,
      template: `%s | LEESLE B2B`,
    },
    description: m.Metadata.description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      siteName: "LEESLE B2B",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
    alternates: {
      languages: {
        ko: `${BASE_URL}/ko`,
        en: `${BASE_URL}/en`,
      },
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for next-intl
  setRequestLocale(locale);

  const localeMessages = allMessages[locale] ?? allMessages.ko;

  return (
    <NextIntlClientProvider locale={locale} messages={localeMessages}>
      <GoogleAnalytics />
      <MetaPixel />
      <Hotjar />
      {children}
    </NextIntlClientProvider>
  );
}
