import type { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

// Direct message imports for static metadata generation
import koMessages from "../../../../../messages/ko.json";
import enMessages from "../../../../../messages/en.json";

const messages: Record<string, typeof koMessages> = { ko: koMessages, en: enMessages };
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://b2b.leesle.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = messages[locale] ?? messages.ko;
  const path = "/resources";

  return {
    title: m.Resources.pageTitle,
    description: m.Resources.pageDescription,
    openGraph: {
      title: m.Resources.pageTitle,
      description: m.Resources.pageDescription,
      url: `${BASE_URL}/${locale}${path}`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}${path}`,
      languages: {
        ko: `${BASE_URL}/ko${path}`,
        en: `${BASE_URL}/en${path}`,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ResourcesPageClient />;
}
