import type { Metadata } from "next";
import Accordion from "@/components/common/Accordion";
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

const faqItems = [
  {
    id: "1",
    question: "최소 주문 수량(MOQ)은 얼마인가요?",
    answer:
      "제품에 따라 다르지만, 기성품 로고 각인은 50개부터, 맞춤 제작은 100개부터 가능합니다. 자세한 내용은 견적 문의를 통해 확인해주세요.",
  },
  {
    id: "2",
    question: "제작 기간은 얼마나 걸리나요?",
    answer:
      "기성품 로고 각인은 5-7일, 맞춤 제작은 14-21일 정도 소요됩니다. 수량과 난이도에 따라 변동될 수 있으며, 디자인 확정 후 기준입니다.",
  },
  {
    id: "3",
    question: "샘플 제작이 가능한가요?",
    answer:
      "네, 본 생산 전 샘플 제작이 가능합니다. 샘플 비용은 별도 청구되며, 본 생산 주문 시 차감됩니다. 샘플 제작은 약 5-7일 소요됩니다.",
  },
  {
    id: "4",
    question: "기업 로고 각인은 어떤 방식으로 하나요?",
    answer:
      "레이저 각인, 실크 프린팅, 자수, 엠보싱 등 제품 소재에 따라 최적의 방식을 제안합니다. AI 파일 또는 고해상도 PNG 로고를 제공해주시면 됩니다.",
  },
  {
    id: "5",
    question: "해외 배송도 가능한가요?",
    answer:
      "네, 해외 배송 가능합니다. DHL, FedEx 등 국제 특송 서비스를 이용하며, 배송비는 별도 청구됩니다. 대량 주문 시 해상 운송도 가능합니다.",
  },
  {
    id: "6",
    question: "결제 방식은 어떻게 되나요?",
    answer:
      "세금계산서 발행 후 무통장입금(30일 이내)이 기본이며, 법인카드 결제도 가능합니다. 대량 주문의 경우 분할 결제(계약금 50% + 잔금 50%)를 적용합니다.",
  },
  {
    id: "7",
    question: "A/S 정책은 어떻게 되나요?",
    answer:
      "납품 후 30일 이내 제품 불량 발견 시 무상 교환/수리를 제공합니다. 고객 과실에 의한 파손은 유상 수리가 가능합니다.",
  },
  {
    id: "8",
    question: "견적서와 계약서를 받을 수 있나요?",
    answer:
      "네, 견적 문의 후 상세 견적서를 이메일로 발송드립니다. 주문 확정 시 공급 계약서도 별도 체결합니다.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = messages[locale] ?? messages.ko;

  const path = "/faq";

  return {
    title: m.FAQ.pageTitle,
    description: m.FAQ.pageDescription,
    openGraph: {
      title: m.FAQ.pageTitle,
      description: m.FAQ.pageDescription,
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

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="section-gap">
      <div className="container-site max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
            자주 묻는 질문
          </h1>
          <p className="mt-3 text-lg text-brand-gray">
            B2B 주문과 관련하여 자주 묻는 질문들을 모았습니다.
          </p>
        </div>

        {/* FAQ accordion */}
        <Accordion items={faqItems} />

        {/* CTA */}
        <div className="mt-12 bg-brand-beige/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-brand-dark">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="mt-2 text-brand-gray">
            언제든 편하게 문의해주세요. 24시간 내 답변드립니다.
          </p>
          <div className="mt-6">
            <Button href="/quote">문의하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
