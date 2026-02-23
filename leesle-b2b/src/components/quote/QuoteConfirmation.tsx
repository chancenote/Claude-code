import Button from "@/components/ui/Button";

export default function QuoteConfirmation() {
  return (
    <div className="text-center py-12">
      {/* Success icon */}
      <div className="mx-auto w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-brand-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
        견적 문의가 접수되었습니다
      </h2>

      <p className="mt-4 text-lg text-brand-gray leading-relaxed max-w-md mx-auto">
        <strong className="text-brand-dark">24시간 내</strong>에 담당자가
        회신드리겠습니다. 감사합니다.
      </p>

      {/* Alternative contact methods */}
      <div className="mt-8 p-6 bg-brand-beige/30 rounded-xl max-w-md mx-auto">
        <p className="text-sm font-medium text-brand-dark mb-3">
          급한 문의는 아래로 연락해주세요
        </p>
        <div className="space-y-2 text-sm text-brand-gray">
          <p>
            📞 전화:{" "}
            <a href="tel:02-1234-5678" className="text-brand-gold hover:underline">
              02-1234-5678
            </a>
          </p>
          <p>
            💬 카카오톡:{" "}
            <a
              href="https://pf.kakao.com/_LEESLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              @LEESLE
            </a>
          </p>
          <p>
            ✉️ 이메일:{" "}
            <a href="mailto:b2b@leesle.com" className="text-brand-gold hover:underline">
              b2b@leesle.com
            </a>
          </p>
        </div>
      </div>

      {/* Back to home */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Button href="/" variant="secondary">
          홈으로 돌아가기
        </Button>
        <Button href="/cases">
          협업 사례 둘러보기
        </Button>
      </div>
    </div>
  );
}
