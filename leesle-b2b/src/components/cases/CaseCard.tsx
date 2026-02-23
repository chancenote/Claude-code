import { Link } from "@/i18n/navigation";

interface CaseCardProps {
  slug: string;
  client: string;
  title: string;
  summary: string;
  coverColor?: string;
}

export default function CaseCard({
  slug,
  client,
  title,
  summary,
  coverColor = "from-brand-beige to-brand-cream",
}: CaseCardProps) {
  return (
    <Link
      href={`/cases/${slug}`}
      className="group bg-brand-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Cover image placeholder */}
      <div
        className={`h-56 bg-gradient-to-br ${coverColor} flex items-center justify-center`}
      >
        <span className="text-brand-gray/40 text-sm">사례 이미지</span>
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-brand-beige text-brand-dark text-xs font-medium rounded-full mb-3">
          {client}
        </span>
        <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-gold transition-colors leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-brand-gray leading-relaxed line-clamp-2">
          {summary}
        </p>
      </div>
    </Link>
  );
}
