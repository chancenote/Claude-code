import ProductCard from "./ProductCard";

interface ProductItem {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  moq: number;
  customizable: boolean;
  specs?: {
    material?: string;
    size?: string;
  };
}

interface ProductGridProps {
  products: ProductItem[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-brand-gray">
          해당 조건의 제품이 없습니다.
        </p>
        <p className="mt-2 text-sm text-brand-gray/60">
          필터를 변경하거나 전체 제품을 확인해보세요.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.slug} {...product} />
      ))}
    </div>
  );
}
