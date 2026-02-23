import { Link } from "@/i18n/navigation";

interface ProductCardProps {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  imageAlt?: string;
  moq: number;
  customizable: boolean;
  specs?: {
    material?: string;
    size?: string;
  };
}

export default function ProductCard({
  slug,
  title,
  category,
  imageAlt,
  moq,
  customizable,
  specs,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block bg-brand-white rounded-xl overflow-hidden border border-brand-beige/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-brand-beige to-brand-cream flex items-center justify-center overflow-hidden">
        <span className="text-brand-gray/40 text-sm">
          {imageAlt || title}
        </span>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 bg-brand-white/90 backdrop-blur-sm text-xs font-medium text-brand-dark rounded-full">
            {category}
          </span>
          {customizable && (
            <span className="px-2.5 py-1 bg-brand-gold/90 text-xs font-medium text-brand-white rounded-full">
              커스텀 가능
            </span>
          )}
        </div>

        {/* Hover specs overlay */}
        {specs && (specs.material || specs.size) && (
          <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-sm text-brand-white space-y-1">
              {specs.material && <p>소재: {specs.material}</p>}
              {specs.size && <p>사이즈: {specs.size}</p>}
              <p>MOQ: {moq.toLocaleString()}개</p>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-brand-dark group-hover:text-brand-gold transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-1 text-sm text-brand-gray">
          최소 주문 {moq.toLocaleString()}개
        </p>
      </div>
    </Link>
  );
}
