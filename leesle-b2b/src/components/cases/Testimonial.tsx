interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <blockquote className="bg-brand-beige/30 border-l-4 border-brand-gold rounded-r-xl p-8 my-8">
      <p className="text-lg text-brand-dark leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
          <span className="text-brand-gold text-sm font-bold">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <cite className="not-italic font-semibold text-brand-dark text-sm">
            {author}
          </cite>
          <p className="text-xs text-brand-gray">{role}</p>
        </div>
      </footer>
    </blockquote>
  );
}
