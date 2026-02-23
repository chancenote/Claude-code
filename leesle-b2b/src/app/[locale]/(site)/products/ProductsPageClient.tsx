"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductFilter from "@/components/products/ProductFilter";
import ProductGrid from "@/components/products/ProductGrid";

// Mock product data until Sanity CMS is connected
const mockProducts = [
  {
    slug: "traditional-knot-keyring",
    title: "전통 매듭 키링",
    category: "굿즈",
    categorySlug: "goods",
    moq: 100,
    customizable: true,
    specs: { material: "실크 혼방", size: "8cm × 3cm" },
  },
  {
    slug: "hanji-tumbler-sleeve",
    title: "한지 패턴 텀블러 슬리브",
    category: "액세서리",
    categorySlug: "accessory",
    moq: 200,
    customizable: true,
    specs: { material: "네오프렌 + 한지 코팅", size: "Free (350-500ml)" },
  },
  {
    slug: "dancheong-pouch",
    title: "단청 문양 파우치",
    category: "굿즈",
    categorySlug: "goods",
    moq: 300,
    customizable: false,
    specs: { material: "캔버스", size: "22cm × 15cm" },
  },
  {
    slug: "mother-of-pearl-mirror",
    title: "자개 느낌 손거울",
    category: "액세서리",
    categorySlug: "accessory",
    moq: 500,
    customizable: true,
    specs: { material: "스테인리스 + 자개 필름", size: "Ø 7cm" },
  },
  {
    slug: "embroidered-leather-keyring",
    title: "전통 자수 가죽 키링",
    category: "굿즈",
    categorySlug: "goods",
    moq: 100,
    customizable: true,
    specs: { material: "천연 가죽 + 자수", size: "10cm × 4cm" },
  },
  {
    slug: "seasonal-gift-set-2025",
    title: "2025 설 선물 세트",
    category: "시즌 한정",
    categorySlug: "seasonal",
    moq: 50,
    customizable: true,
    specs: { material: "혼합", size: "세트 박스 25cm × 20cm × 8cm" },
  },
  {
    slug: "traditional-scent-sachet",
    title: "전통 향 주머니",
    category: "굿즈",
    categorySlug: "goods",
    moq: 200,
    customizable: false,
    specs: { material: "면 + 천연 향료", size: "6cm × 8cm" },
  },
  {
    slug: "card-holder-embroidered",
    title: "자수 카드홀더",
    category: "액세서리",
    categorySlug: "accessory",
    moq: 100,
    customizable: true,
    specs: { material: "천연 가죽", size: "10cm × 7cm" },
  },
];

// Map filter values to display category names
const categoryMap: Record<string, string> = {
  goods: "굿즈",
  accessory: "액세서리",
  seasonal: "시즌 한정",
};

function ProductListContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category") ?? "";
  const customFilter = searchParams.get("customizable") ?? "";

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((p) => {
      if (categoryFilter && p.categorySlug !== categoryFilter) return false;
      if (customFilter === "true" && !p.customizable) return false;
      if (customFilter === "false" && p.customizable) return false;
      return true;
    });
  }, [categoryFilter, customFilter]);

  const activeLabel = categoryFilter
    ? categoryMap[categoryFilter] || categoryFilter
    : "전체";

  return (
    <>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
          제품 카탈로그
        </h1>
        <p className="mt-3 text-lg text-brand-gray">
          LEESLE의 B2B 제품을 둘러보세요. 맞춤 커스텀 제작도 가능합니다.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 p-4 bg-brand-white rounded-xl border border-brand-beige/50">
        <ProductFilter />
      </div>

      {/* Results count */}
      <p className="mb-4 text-sm text-brand-gray">
        {activeLabel} · {filteredProducts.length}개 제품
      </p>

      {/* Product grid */}
      <ProductGrid products={filteredProducts} />
    </>
  );
}

export default function ProductsPageClient() {
  return (
    <div className="section-gap">
      <div className="container-site">
        <Suspense
          fallback={
            <div className="text-center py-12 text-brand-gray">
              로딩 중...
            </div>
          }
        >
          <ProductListContent />
        </Suspense>
      </div>
    </div>
  );
}
