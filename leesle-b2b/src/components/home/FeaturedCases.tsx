import { Link } from "@/i18n/navigation";

const mockCases = [
  {
    slug: "samsung-corporate-gift",
    client: "삼성전자",
    title: "삼성 임직원 설 선물 세트",
    summary: "한국 전통 매듭과 현대적 디자인의 조화. 2,000세트 납품.",
    color: "from-blue-100 to-blue-50",
  },
  {
    slug: "oliveyoung-collab",
    client: "올리브영",
    title: "올리브영 × LEESLE 한정 컬렉션",
    summary: "전통 문양 뷰티 파우치·거울 세트. 전 매장 인기 품목.",
    color: "from-green-100 to-green-50",
  },
  {
    slug: "kia-special-edition",
    client: "기아자동차",
    title: "기아 EV6 오너 웰컴 기프트",
    summary: "전통 자수 키링·카드홀더. 프리미엄 차주 만족도 97%.",
    color: "from-red-100 to-red-50",
  },
];

export default function FeaturedCases() {
  return (
    <section className="section-gap bg-brand-beige/30">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
            대표 협업 사례
          </h2>
          <p className="mt-3 text-brand-gray">
            기업의 스토리를 한국적 감성으로 전합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockCases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              href={`/cases/${caseItem.slug}`}
              className="group bg-brand-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${caseItem.color} flex items-center justify-center`}
              >
                <span className="text-brand-gray/40 text-sm">
                  사례 이미지
                </span>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-brand-beige text-brand-dark text-xs font-medium rounded-full mb-3">
                  {caseItem.client}
                </span>
                <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">
                  {caseItem.title}
                </h3>
                <p className="mt-2 text-sm text-brand-gray leading-relaxed">
                  {caseItem.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/cases"
            className="inline-flex items-center text-brand-gold font-medium hover:underline underline-offset-4"
          >
            모든 사례 보기
            <svg
              className="ml-1 w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
