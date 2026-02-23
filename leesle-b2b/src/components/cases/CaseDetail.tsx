import Testimonial from "./Testimonial";
import Button from "@/components/ui/Button";

interface CaseDetailProps {
  client: string;
  title: string;
  summary: string;
  story: string[];
  testimonial?: { quote: string; author: string; role: string };
  galleryCount?: number;
}

export default function CaseDetail({
  client,
  title,
  summary,
  story,
  testimonial,
  galleryCount = 3,
}: CaseDetailProps) {
  return (
    <article>
      {/* Hero */}
      <div className="h-64 md:h-96 bg-gradient-to-br from-brand-beige to-brand-cream flex items-center justify-center rounded-xl mb-8">
        <span className="text-brand-gray/40">커버 이미지</span>
      </div>

      {/* Client badge + title */}
      <span className="inline-block px-4 py-1.5 bg-brand-beige text-brand-dark text-sm font-medium rounded-full mb-4">
        {client}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg text-brand-gray leading-relaxed">{summary}</p>

      {/* Story */}
      <div className="mt-10 space-y-4">
        {story.map((paragraph, i) => (
          <p key={i} className="text-brand-dark leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-brand-dark mb-4">
          프로젝트 갤러리
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: galleryCount }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-brand-beige/50 rounded-lg flex items-center justify-center"
            >
              <span className="text-brand-gray/40 text-sm">이미지 {i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      {testimonial && (
        <Testimonial
          quote={testimonial.quote}
          author={testimonial.author}
          role={testimonial.role}
        />
      )}

      {/* Quote CTA */}
      <div className="mt-12 bg-brand-beige/30 rounded-xl p-8 text-center">
        <h2 className="text-xl font-semibold text-brand-dark">
          이런 프로젝트를 함께 만들고 싶으신가요?
        </h2>
        <p className="mt-2 text-brand-gray">
          맞춤 견적을 받아보세요. 24시간 내 회신드립니다.
        </p>
        <div className="mt-6">
          <Button href="/quote">견적 문의하기</Button>
        </div>
      </div>
    </article>
  );
}
