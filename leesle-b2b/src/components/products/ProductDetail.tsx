"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface ProductDetailProps {
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  specs: {
    material?: string;
    size?: string;
    colorOptions?: string[];
  };
  moq: number;
  customizable: boolean;
  productionDays: number;
  galleryCount?: number;
}

export default function ProductDetail({
  title,
  description,
  category,
  categorySlug,
  specs,
  moq,
  customizable,
  productionDays,
  galleryCount = 4,
}: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Image gallery */}
      <div>
        {/* Main image */}
        <div className="aspect-square bg-gradient-to-br from-brand-beige to-brand-cream rounded-xl flex items-center justify-center mb-4">
          <span className="text-brand-gray/40">
            제품 이미지 {activeImage + 1}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: galleryCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImage(i)}
              className={`aspect-square rounded-lg flex items-center justify-center text-xs transition-all ${
                activeImage === i
                  ? "ring-2 ring-brand-gold bg-brand-beige"
                  : "bg-brand-beige/50 hover:bg-brand-beige"
              }`}
            >
              <span className="text-brand-gray/40">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product info */}
      <div>
        {/* Category + Badges */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-brand-beige text-brand-dark text-sm font-medium rounded-full">
            {category}
          </span>
          {customizable && (
            <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full">
              커스텀 가능
            </span>
          )}
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-brand-dark">
          {title}
        </h1>

        <p className="mt-4 text-brand-gray leading-relaxed">{description}</p>

        {/* Specs table */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-brand-dark mb-4">
            제품 사양
          </h2>
          <dl className="divide-y divide-brand-beige">
            {specs.material && (
              <div className="py-3 flex justify-between">
                <dt className="text-brand-gray">소재</dt>
                <dd className="font-medium text-brand-dark">{specs.material}</dd>
              </div>
            )}
            {specs.size && (
              <div className="py-3 flex justify-between">
                <dt className="text-brand-gray">사이즈</dt>
                <dd className="font-medium text-brand-dark">{specs.size}</dd>
              </div>
            )}
            {specs.colorOptions && specs.colorOptions.length > 0 && (
              <div className="py-3 flex justify-between">
                <dt className="text-brand-gray">색상</dt>
                <dd className="font-medium text-brand-dark">
                  {specs.colorOptions.join(", ")}
                </dd>
              </div>
            )}
            <div className="py-3 flex justify-between">
              <dt className="text-brand-gray">최소 주문 수량 (MOQ)</dt>
              <dd className="font-medium text-brand-dark">
                {moq.toLocaleString()}개
              </dd>
            </div>
            <div className="py-3 flex justify-between">
              <dt className="text-brand-gray">제작 기간</dt>
              <dd className="font-medium text-brand-dark">
                약 {productionDays}일
              </dd>
            </div>
          </dl>
        </div>

        {/* CTA */}
        <div className="mt-8 space-y-3">
          <Button
            href={`/quote?category=${categorySlug}&product=${encodeURIComponent(title)}`}
            size="lg"
            className="w-full"
          >
            견적 문의하기
          </Button>
          <p className="text-center text-sm text-brand-gray">
            24시간 내 담당자가 회신드립니다
          </p>
        </div>
      </div>
    </div>
  );
}
