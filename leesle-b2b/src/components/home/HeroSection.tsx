import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
      {/* Background gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-beige via-brand-cream to-brand-beige" />
      <div className="absolute inset-0 bg-brand-dark/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight">
          한국의 감성을
          <br />
          기업의 가치로
        </h1>
        <p className="mt-6 text-lg md:text-xl text-brand-gray max-w-xl mx-auto leading-relaxed">
          삼성, 올리브영, 기아 등 50여 기업이 선택한
          <br className="hidden sm:block" />
          B2B 굿즈 파트너
        </p>

        {/* Dual CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-white font-medium rounded-lg hover:bg-brand-gold-dark transition-colors text-lg"
          >
            맞춤 견적 받기
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-gold text-brand-gold font-medium rounded-lg hover:bg-brand-gold hover:text-brand-white transition-colors text-lg"
          >
            카탈로그 보기
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-gray"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
