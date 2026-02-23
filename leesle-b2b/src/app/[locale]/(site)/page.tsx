import HeroSection from "@/components/home/HeroSection";
import TrustLogoBanner from "@/components/home/TrustLogoBanner";
import CategoryQuickLinks from "@/components/home/CategoryQuickLinks";
import FeaturedCases from "@/components/home/FeaturedCases";
import StatsCounter from "@/components/home/StatsCounter";
import BottomCTA from "@/components/home/BottomCTA";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrustLogoBanner />
      <CategoryQuickLinks />
      <FeaturedCases />
      <StatsCounter />
      <BottomCTA />
    </>
  );
}
