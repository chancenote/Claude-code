"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/quote/QuoteForm";
import QuoteConfirmation from "@/components/quote/QuoteConfirmation";

function QuotePageContent() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill from URL params (e.g., /quote?category=goods&product=전통매듭키링)
  const initialCategory = searchParams.get("category") ?? undefined;
  const initialProduct = searchParams.get("product") ?? undefined;

  if (isSubmitted) {
    return <QuoteConfirmation />;
  }

  return (
    <>
      {/* Page header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
          견적 문의
        </h1>
        <p className="mt-3 text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
          LEESLE의 B2B 맞춤 제작 서비스에 대해 문의해주세요.
          <br className="hidden md:inline" />
          24시간 내 담당자가 회신드립니다.
        </p>
      </div>

      {/* Form card */}
      <div className="bg-brand-white rounded-2xl shadow-sm border border-brand-beige/50 p-6 md:p-10">
        <QuoteForm
          initialCategory={initialCategory}
          initialProduct={initialProduct}
          onSuccess={() => setIsSubmitted(true)}
        />
      </div>

      {/* Trust signals */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4">
          <p className="text-2xl font-bold text-brand-gold">100+</p>
          <p className="text-sm text-brand-gray mt-1">누적 파트너사</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-brand-gold">24시간</p>
          <p className="text-sm text-brand-gray mt-1">내 회신 보장</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-brand-gold">97%</p>
          <p className="text-sm text-brand-gray mt-1">고객 만족도</p>
        </div>
      </div>
    </>
  );
}

export default function QuotePageClient() {
  return (
    <div className="section-gap">
      <div className="container-site max-w-2xl">
        <Suspense
          fallback={
            <div className="text-center py-12 text-brand-gray">
              로딩 중...
            </div>
          }
        >
          <QuotePageContent />
        </Suspense>
      </div>
    </div>
  );
}
