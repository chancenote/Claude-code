import { Link } from "@/i18n/navigation";

export default function BottomCTA() {
  return (
    <section className="bg-brand-gold py-20 md:py-24">
      <div className="container-site text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-white">
          지금 맞춤 견적을 시작해보세요
        </h2>
        <p className="mt-4 text-brand-white/80">
          24시간 내 전담 매니저가 연락드립니다
        </p>
        <Link
          href="/quote"
          className="mt-8 inline-flex items-center justify-center px-10 py-4 border-2 border-brand-white text-brand-white font-medium rounded-lg hover:bg-brand-white hover:text-brand-gold transition-all text-lg"
        >
          무료 견적 받기
        </Link>
      </div>
    </section>
  );
}
