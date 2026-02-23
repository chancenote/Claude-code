import type { Metadata } from "next";
import CaseCard from "@/components/cases/CaseCard";
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

const mockCases = [
  {
    slug: "samsung-corporate-gift",
    client: "삼성전자",
    title: "삼성 임직원 설 선물 세트",
    summary: "한국 전통 매듭과 현대적 디자인의 조화. 2,000세트 납품 완료.",
    coverColor: "from-blue-100 to-blue-50",
  },
  {
    slug: "oliveyoung-collab",
    client: "올리브영",
    title: "올리브영 × LEESLE 한정 컬렉션",
    summary: "전통 문양 뷰티 파우치·거울 세트. 전 매장 인기 품목 등극.",
    coverColor: "from-green-100 to-green-50",
  },
  {
    slug: "kia-special-edition",
    client: "기아자동차",
    title: "기아 EV6 오너 웰컴 기프트",
    summary: "전통 자수 키링·카드홀더. 프리미엄 차주 만족도 97%.",
    coverColor: "from-red-100 to-red-50",
  },
  {
    slug: "eland-staff-uniform",
    client: "이랜드",
    title: "이랜드 그룹 20주년 기념품",
    summary: "한복 모티프 스카프·브로치. 임직원 3,000명에게 전달.",
    coverColor: "from-purple-100 to-purple-50",
  },
  {
    slug: "michelin-dining",
    client: "미슐랭 레스토랑",
    title: "미슐랭 파인다이닝 테이블웨어",
    summary: "한국 도자기 감성의 커스텀 코스터·냅킨링 세트.",
    coverColor: "from-amber-100 to-amber-50",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = messages[locale] ?? messages.ko;

  const path = "/cases";

  return {
    title: m.Cases.metaTitle,
    description: m.Cases.metaDescription,
    openGraph: {
      title: m.Cases.metaTitle,
      description: m.Cases.metaDescription,
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

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="section-gap">
      <div className="container-site">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
            협업 사례
          </h1>
          <p className="mt-3 text-brand-gray text-lg">
            기업의 스토리를 한국적 감성으로 전합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCases.map((c) => (
            <CaseCard key={c.slug} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
