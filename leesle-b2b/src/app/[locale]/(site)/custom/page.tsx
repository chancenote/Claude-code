import type { Metadata } from "next";
import Button from "@/components/ui/Button";
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

const steps = [
  {
    number: 1,
    title: "상담 및 기획",
    description: "브랜드 컨셉, 용도, 예산, 수량을 논의합니다. 담당 디자이너가 배정되어 맞춤 기획안을 제안합니다.",
    icon: "💬",
  },
  {
    number: 2,
    title: "디자인 시안",
    description: "기획안을 바탕으로 2-3가지 디자인 시안을 제작합니다. 피드백을 반영하여 최종 디자인을 확정합니다.",
    icon: "🎨",
  },
  {
    number: 3,
    title: "샘플 제작",
    description: "확정된 디자인으로 실물 샘플을 제작합니다. 소재, 색상, 마감을 직접 확인하실 수 있습니다.",
    icon: "📦",
  },
  {
    number: 4,
    title: "대량 생산",
    description: "샘플 승인 후 대량 생산에 들어갑니다. 품질 관리를 거쳐 약속된 일정에 맞춰 납품합니다.",
    icon: "🏭",
  },
  {
    number: 5,
    title: "납품 및 A/S",
    description: "안전 포장 후 지정 장소로 납품합니다. 납품 후에도 A/S와 재주문을 지원합니다.",
    icon: "✅",
  },
];

const customScopes = [
  {
    title: "로고 각인",
    description: "레이저 각인, 실크 프린팅, 자수 등 다양한 방식으로 기업 로고를 적용합니다.",
    examples: ["레이저 각인", "실크 프린팅", "자수", "엠보싱"],
  },
  {
    title: "색상 커스텀",
    description: "브랜드 컬러에 맞춘 색상 매칭이 가능합니다. Pantone 코드 기반으로 정확한 색상을 구현합니다.",
    examples: ["Pantone 매칭", "원단 염색", "인쇄 색상"],
  },
  {
    title: "패키지 커스텀",
    description: "선물 박스, 쇼핑백, 리본, 포장지 등 패키지 전체를 브랜드에 맞게 제작합니다.",
    examples: ["선물 박스", "쇼핑백", "리본/포장지", "인사 카드"],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = messages[locale] ?? messages.ko;

  const path = "/custom";

  return {
    title: m.Custom.pageTitle,
    description: m.Custom.pageDescription,
    openGraph: {
      title: m.Custom.pageTitle,
      description: m.Custom.pageDescription,
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

export default async function CustomProductionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="section-gap">
      <div className="container-site max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
            맞춤 제작 가이드
          </h1>
          <p className="mt-3 text-lg text-brand-gray max-w-2xl mx-auto">
            LEESLE는 기업의 브랜드 아이덴티티에 맞는 맞춤 제작 서비스를 제공합니다.
          </p>
        </div>

        {/* 5-Step Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
            제작 프로세스
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-4 md:gap-6 items-start bg-brand-white rounded-xl p-6 border border-brand-beige/50"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-brand-gold">
                      STEP {step.number}
                    </span>
                    <h3 className="font-semibold text-brand-dark text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-brand-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA mid-section */}
        <div className="mb-16 bg-brand-beige/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-brand-dark">
            맞춤 제작을 시작하고 싶으신가요?
          </h2>
          <p className="mt-2 text-brand-gray">
            아이디어만 있으면 충분합니다. 나머지는 LEESLE가 함께합니다.
          </p>
          <div className="mt-6">
            <Button href="/quote">견적 문의하기</Button>
          </div>
        </div>

        {/* Customization Scope */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
            커스텀 범위
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customScopes.map((scope) => (
              <div
                key={scope.title}
                className="bg-brand-white rounded-xl p-6 border border-brand-beige/50"
              >
                <h3 className="font-semibold text-brand-dark text-lg mb-2">
                  {scope.title}
                </h3>
                <p className="text-sm text-brand-gray mb-4">
                  {scope.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {scope.examples.map((ex) => (
                    <span
                      key={ex}
                      className="px-2.5 py-1 bg-brand-beige/50 text-brand-dark text-xs rounded-full"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MOQ & Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
            MOQ & 제작 기간
          </h2>
          <div className="bg-brand-white rounded-xl border border-brand-beige/50 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-beige/30">
                  <th className="px-6 py-4 text-sm font-semibold text-brand-dark">
                    제품 유형
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-brand-dark">
                    최소 수량
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-brand-dark">
                    제작 기간
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-beige/50">
                <tr>
                  <td className="px-6 py-4 text-brand-dark">기성품 + 로고 각인</td>
                  <td className="px-6 py-4 text-brand-gray">50개~</td>
                  <td className="px-6 py-4 text-brand-gray">5-7일</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-brand-dark">색상/소재 커스텀</td>
                  <td className="px-6 py-4 text-brand-gray">100개~</td>
                  <td className="px-6 py-4 text-brand-gray">10-14일</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-brand-dark">완전 맞춤 제작</td>
                  <td className="px-6 py-4 text-brand-gray">200개~</td>
                  <td className="px-6 py-4 text-brand-gray">14-21일</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-brand-dark">대량 생산 (1,000+)</td>
                  <td className="px-6 py-4 text-brand-gray">1,000개~</td>
                  <td className="px-6 py-4 text-brand-gray">21-30일</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-brand-gray text-center">
            * 제작 기간은 디자인 확정 후 기준이며, 수량과 난이도에 따라 변동될 수 있습니다.
          </p>
        </section>

        {/* Bottom CTA */}
        <div className="bg-brand-gold/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-brand-dark">
            지금 맞춤 제작을 시작하세요
          </h2>
          <p className="mt-3 text-brand-gray max-w-lg mx-auto">
            LEESLE의 전문 팀이 기획부터 납품까지 원스톱으로 지원합니다.
            24시간 내 회신드립니다.
          </p>
          <div className="mt-6">
            <Button href="/quote" size="lg">
              무료 상담 신청하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
