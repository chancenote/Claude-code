import { notFound } from "next/navigation";
import JsonLd, { buildProductJsonLd } from "@/components/seo/JsonLd";
import ProductDetail from "@/components/products/ProductDetail";
import RelatedProducts from "@/components/products/RelatedProducts";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const revalidate = 60;

// Mock product detail data
const mockProductDetails: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    categorySlug: string;
    specs: {
      material?: string;
      size?: string;
      colorOptions?: string[];
    };
    moq: number;
    customizable: boolean;
    productionDays: number;
  }
> = {
  "traditional-knot-keyring": {
    title: "전통 매듭 키링",
    description:
      "한국 전통 매듭 기법을 활용한 프리미엄 키링입니다. 실크 혼방 소재로 고급스러운 질감을 구현했으며, 기업 로고 각인이 가능합니다. 선물용 패키지도 커스텀으로 제작할 수 있습니다.",
    category: "굿즈",
    categorySlug: "goods",
    specs: {
      material: "실크 혼방",
      size: "8cm × 3cm",
      colorOptions: ["골드", "레드", "네이비", "블랙"],
    },
    moq: 100,
    customizable: true,
    productionDays: 14,
  },
  "hanji-tumbler-sleeve": {
    title: "한지 패턴 텀블러 슬리브",
    description:
      "한지의 자연스러운 질감을 네오프렌 슬리브에 담았습니다. 350ml~500ml 텀블러에 호환되며, 기업 브랜딩 프린트가 가능합니다.",
    category: "액세서리",
    categorySlug: "accessory",
    specs: {
      material: "네오프렌 + 한지 코팅",
      size: "Free (350-500ml)",
      colorOptions: ["내추럴", "아이보리", "연회색"],
    },
    moq: 200,
    customizable: true,
    productionDays: 10,
  },
  "dancheong-pouch": {
    title: "단청 문양 파우치",
    description:
      "궁궐 단청의 화려한 색감을 현대적으로 재해석한 캔버스 파우치입니다. 화장품 파우치, 문구 파우치 등 다목적으로 활용 가능합니다.",
    category: "굿즈",
    categorySlug: "goods",
    specs: {
      material: "캔버스",
      size: "22cm × 15cm",
      colorOptions: ["단청 레드", "단청 블루", "단청 그린"],
    },
    moq: 300,
    customizable: false,
    productionDays: 7,
  },
};

// Mock related products
const mockRelated = [
  {
    slug: "hanji-tumbler-sleeve",
    title: "한지 패턴 텀블러 슬리브",
    category: "액세서리",
    categorySlug: "accessory",
    moq: 200,
    customizable: true,
  },
  {
    slug: "dancheong-pouch",
    title: "단청 문양 파우치",
    category: "굿즈",
    categorySlug: "goods",
    moq: 300,
    customizable: false,
  },
  {
    slug: "traditional-scent-sachet",
    title: "전통 향 주머니",
    category: "굿즈",
    categorySlug: "goods",
    moq: 200,
    customizable: false,
  },
];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(mockProductDetails).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = mockProductDetails[slug];

  if (!product) {
    return { title: "제품 | LEESLE B2B" };
  }

  return {
    title: `${product.title} | LEESLE B2B`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  // Enable static rendering for next-intl
  setRequestLocale(locale);

  const product = mockProductDetails[slug];

  if (!product) {
    notFound();
  }

  // Filter related products to exclude the current one
  const related = mockRelated.filter((p) => p.slug !== slug);

  return (
    <>
      <JsonLd data={buildProductJsonLd({ title: product.title, description: product.description, slug, moq: product.moq })} />
      <div className="section-gap">
        <div className="container-site">
          <ProductDetail {...product} />
          <RelatedProducts products={related} />
        </div>
      </div>
    </>
  );
}
