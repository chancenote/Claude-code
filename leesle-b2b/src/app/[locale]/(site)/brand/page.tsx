import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import JsonLd, { organizationJsonLd } from "@/components/seo/JsonLd";
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

  const path = "/brand";

  return {
    title: `${m.Brand.headline1} LEESLE | LEESLE B2B`,
    description: m.Brand.description,
    openGraph: {
      title: "브랜드 스토리 | LEESLE B2B",
      description: m.Brand.description,
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

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={organizationJsonLd} />
    <div className="section-gap">
      <div className="container-site max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
            한국의 멋을 일상으로,
            <br />
            <span className="text-brand-gold">LEESLE</span>
          </h1>
          <p className="mt-6 text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            LEESLE는 한국 전통 미학을 현대적으로 재해석하여,
            기업과 브랜드에 특별한 가치를 전달합니다.
          </p>
        </div>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            브랜드 철학
          </h2>
          <div className="space-y-4 text-brand-dark leading-relaxed">
            <p>
              우리는 한국의 전통 공예와 미학이 가진 고유한 아름다움이
              현대인의 일상에서도 충분히 빛날 수 있다고 믿습니다.
            </p>
            <p>
              LEESLE의 모든 제품은 전통과 현대의 조화를 추구합니다.
              매듭, 자수, 한지, 단청 등 한국 고유의 소재와 기법을 활용하면서도,
              현대적 감각의 디자인과 실용성을 겸비합니다.
            </p>
            <p>
              기업 파트너에게는 단순한 제품이 아닌,
              한국적 정체성을 담은 브랜드 경험을 함께 만들어갑니다.
            </p>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            디자인 프로세스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "리서치",
                description: "한국 전통 미학과 현대 트렌드를 깊이 연구하여 디자인의 근거를 마련합니다.",
              },
              {
                title: "디자인",
                description: "전통 요소를 현대적으로 재해석한 디자인을 제안하고, 파트너와 함께 완성합니다.",
              },
              {
                title: "제작",
                description: "숙련된 장인과 최신 기술을 결합하여 높은 품질의 제품을 만듭니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-brand-white rounded-xl p-6 border border-brand-beige/50"
              >
                <h3 className="font-semibold text-brand-dark text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Media & Awards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            미디어 & 수상
          </h2>
          <div className="space-y-4">
            {[
              { year: "2024", title: "대한민국 전통문화 혁신 대상 수상" },
              { year: "2024", title: "서울디자인어워드 라이프스타일 부문 선정" },
              { year: "2023", title: "KBS 한국의 미 특집 방영" },
              { year: "2023", title: "Forbes Korea 주목할 한국 브랜드 30선" },
              { year: "2022", title: "한국공예디자인문화진흥원 지원사업 선정" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-brand-white rounded-lg p-4 border border-brand-beige/50"
              >
                <span className="text-sm font-bold text-brand-gold min-w-[4rem]">
                  {item.year}
                </span>
                <p className="text-brand-dark">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-brand-gold/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-brand-dark">
            LEESLE와 함께 특별한 프로젝트를 시작하세요
          </h2>
          <p className="mt-3 text-brand-gray">
            한국의 멋을 담은 B2B 맞춤 제작, 지금 상담하세요.
          </p>
          <div className="mt-6">
            <Button href="/quote" size="lg">
              견적 문의하기
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
