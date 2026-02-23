import { Link } from "@/i18n/navigation";

const categories = [
  {
    title: "기업선물",
    slug: "corporate-gifts",
    emoji: "🎁",
    description: "VIP 고객·임직원을 위한 프리미엄 선물 세트",
  },
  {
    title: "판촉굿즈",
    slug: "promotional",
    emoji: "🏷️",
    description: "브랜드 각인 가능한 맞춤 판촉물",
  },
  {
    title: "커스텀 액세서리",
    slug: "custom-accessories",
    emoji: "✨",
    description: "한국적 감성의 유니크한 액세서리 라인",
  },
  {
    title: "시즌 한정",
    slug: "seasonal",
    emoji: "🌸",
    description: "설·추석·크리스마스 시즌 특별 기획",
  },
];

export default function CategoryQuickLinks() {
  return (
    <section className="section-gap">
      <div className="container-site">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-dark mb-12">
          카테고리별 상품 보기
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group bg-brand-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <span className="text-4xl block mb-4">{cat.emoji}</span>
              <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-brand-gray leading-relaxed hidden md:block">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
