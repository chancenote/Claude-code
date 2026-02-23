import ProductCard from "./ProductCard";

interface RelatedProduct {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  moq: number;
  customizable: boolean;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-brand-dark mb-6">
        관련 제품
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
}
