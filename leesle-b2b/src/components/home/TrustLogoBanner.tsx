const partners = [
  "삼성",
  "올리브영",
  "기아자동차",
  "이랜드",
  "미슐랭",
  "현대백화점",
  "CJ",
  "롯데",
];

export default function TrustLogoBanner() {
  return (
    <section
      className="section-gap bg-brand-beige/50 overflow-hidden"
      aria-label="협업 파트너 브랜드"
    >
      <p className="text-center text-sm text-brand-gray mb-8 tracking-widest uppercase">
        함께한 브랜드
      </p>

      {/* Marquee container */}
      <div className="relative group">
        <div
          className="flex gap-12 group-hover:[animation-play-state:paused]"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-8 py-3 bg-brand-white/60 rounded-lg border border-brand-beige"
            >
              <span className="text-brand-gray font-medium text-sm whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
