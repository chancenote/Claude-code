import { notFound } from "next/navigation";
import CaseDetail from "@/components/cases/CaseDetail";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const revalidate = 60;

const mockCaseData: Record<
  string,
  {
    client: string;
    title: string;
    summary: string;
    story: string[];
    testimonial?: { quote: string; author: string; role: string };
  }
> = {
  "samsung-corporate-gift": {
    client: "삼성전자",
    title: "삼성 임직원 설 선물 세트",
    summary: "한국 전통 매듭과 현대적 디자인의 조화로 2,000세트를 납품했습니다.",
    story: [
      "삼성전자 HR팀에서 임직원을 위한 설 선물 세트를 의뢰했습니다. 한국적인 감성을 살리면서도 실용적인 선물이 되어야 한다는 조건이었습니다.",
      "LEESLE는 전통 매듭 장식을 활용한 키홀더, 한지 패턴 텀블러 슬리브, 전통 향 파우치를 세트로 구성했습니다.",
      "2,000세트 전량을 4주 내 납품 완료했으며, 임직원 만족도 설문에서 94%의 긍정 응답을 받았습니다.",
    ],
    testimonial: {
      quote:
        "단순한 기업 선물이 아닌, 우리 회사의 한국적 정체성을 담을 수 있어 특별했습니다.",
      author: "김지영",
      role: "삼성전자 HR팀 매니저",
    },
  },
  "oliveyoung-collab": {
    client: "올리브영",
    title: "올리브영 × LEESLE 한정 컬렉션",
    summary: "전통 문양 뷰티 파우치·거울 세트로 전 매장 인기 품목에 등극했습니다.",
    story: [
      "올리브영과의 협업은 MZ세대가 공감할 수 있는 한국 전통 감성을 뷰티 아이템에 녹여내는 프로젝트였습니다.",
      "단청 문양을 현대적으로 재해석한 파우치와 자개 느낌의 손거울을 한정 수량으로 제작했습니다.",
      "출시 2주 만에 전 매장 품절을 기록하며 재주문이 이어졌습니다.",
    ],
    testimonial: {
      quote: "한국적 감성이 이렇게 트렌디할 수 있다는 걸 LEESLE를 통해 알게 됐어요.",
      author: "박서연",
      role: "올리브영 MD",
    },
  },
  "kia-special-edition": {
    client: "기아자동차",
    title: "기아 EV6 오너 웰컴 기프트",
    summary: "전통 자수 키링·카드홀더로 프리미엄 차주 만족도 97%를 달성했습니다.",
    story: [
      "기아자동차 EV6 출시를 기념하여, 프리미엄 오너에게 전달할 웰컴 기프트를 제작했습니다.",
      "전통 자수 기법을 활용한 가죽 키링과 카드홀더를 세트로 구성, 차량의 프리미엄 이미지와 한국적 감성을 결합했습니다.",
      "500세트 한정 제작하여, 차주 만족도 설문에서 97%의 '매우 만족' 응답을 이끌어냈습니다.",
    ],
    testimonial: {
      quote: "차량 이상으로 기프트에 감동했다는 차주분들이 많았습니다. 브랜드 로열티에 크게 기여했어요.",
      author: "이준혁",
      role: "기아자동차 마케팅팀 팀장",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(mockCaseData).map((slug) => ({ locale, slug }))
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  return {
    title: "협업 사례 상세 | LEESLE B2B",
    description: "LEESLE B2B 협업 사례를 확인하세요.",
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  // Enable static rendering for next-intl
  setRequestLocale(locale);

  const caseData = mockCaseData[slug];

  if (!caseData) {
    notFound();
  }

  return (
    <div className="section-gap">
      <div className="container-site max-w-4xl">
        <CaseDetail {...caseData} />
      </div>
    </div>
  );
}
