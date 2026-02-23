"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type ResourceType = "catalog" | "brandbook" | "lookbook";

interface MockResource {
  id: string;
  title: string;
  type: ResourceType;
  gated: boolean;
  description: string;
}

const mockResources: MockResource[] = [
  {
    id: "1",
    title: "LEESLE B2B 제품 카탈로그 2025",
    type: "catalog",
    gated: true,
    description: "전체 B2B 제품 라인업, 사양, MOQ 정보가 포함된 종합 카탈로그",
  },
  {
    id: "2",
    title: "LEESLE 브랜드북",
    type: "brandbook",
    gated: true,
    description: "LEESLE의 브랜드 철학, 디자인 원칙, 비전을 담은 브랜드북",
  },
  {
    id: "3",
    title: "2025 S/S 룩북",
    type: "lookbook",
    gated: false,
    description: "2025 봄/여름 시즌 신제품 컬렉션 룩북",
  },
  {
    id: "4",
    title: "기업 선물 가이드",
    type: "catalog",
    gated: true,
    description: "기업 맞춤 선물 세트 구성 가이드 및 사례 모음",
  },
];

const typeLabels: Record<ResourceType, string> = {
  catalog: "카탈로그",
  brandbook: "브랜드북",
  lookbook: "룩북",
};

const typeColors: Record<ResourceType, string> = {
  catalog: "bg-brand-gold/10 text-brand-gold",
  brandbook: "bg-blue-50 text-blue-600",
  lookbook: "bg-emerald-50 text-emerald-600",
};

export default function ResourcesPageClient() {
  const [activeFilter, setActiveFilter] = useState<ResourceType | "">("");
  const [gateEmail, setGateEmail] = useState("");
  const [gateTarget, setGateTarget] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filtered = activeFilter
    ? mockResources.filter((r) => r.type === activeFilter)
    : mockResources;

  async function handleGatedDownload(resourceId: string) {
    if (!gateEmail || !gateEmail.includes("@")) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: gateEmail, resourceId }),
      });

      if (response.ok) {
        setDownloadSuccess(resourceId);
        setGateTarget(null);
        setGateEmail("");
      }
    } catch {
      // Handle silently
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="section-gap">
      <div className="container-site max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
            자료실
          </h1>
          <p className="mt-3 text-lg text-brand-gray">
            LEESLE B2B 카탈로그, 브랜드북, 룩북을 다운로드하세요.
          </p>
        </div>

        {/* Type filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(["", "catalog", "brandbook", "lookbook"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveFilter(type as ResourceType | "")}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeFilter === type
                  ? "bg-brand-gold text-brand-white border-brand-gold"
                  : "bg-brand-white text-brand-dark border-brand-beige hover:border-brand-gold"
              }`}
            >
              {type === "" ? "전체" : typeLabels[type as ResourceType]}
            </button>
          ))}
        </div>

        {/* Resource grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((resource) => (
            <div
              key={resource.id}
              className="bg-brand-white rounded-xl border border-brand-beige/50 overflow-hidden"
            >
              {/* Thumbnail placeholder */}
              <div className="h-40 bg-gradient-to-br from-brand-beige to-brand-cream flex items-center justify-center">
                <span className="text-brand-gray/40 text-sm">
                  {resource.title}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${typeColors[resource.type]}`}
                  >
                    {typeLabels[resource.type]}
                  </span>
                  {resource.gated && (
                    <span className="text-xs text-brand-gray">🔒 이메일 필요</span>
                  )}
                </div>

                <h3 className="font-semibold text-brand-dark">{resource.title}</h3>
                <p className="mt-1 text-sm text-brand-gray">{resource.description}</p>

                <div className="mt-4">
                  {downloadSuccess === resource.id ? (
                    <p className="text-sm text-brand-gold font-medium">
                      ✓ 다운로드 링크가 이메일로 전송되었습니다
                    </p>
                  ) : resource.gated && gateTarget === resource.id ? (
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={gateEmail}
                        onChange={(e) => setGateEmail(e.target.value)}
                        placeholder="이메일 입력"
                        className="flex-1 px-3 py-2 text-sm rounded-lg border border-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
                      />
                      <Button
                        size="sm"
                        onClick={() => handleGatedDownload(resource.id)}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "..." : "받기"}
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() =>
                        resource.gated
                          ? setGateTarget(resource.id)
                          : setDownloadSuccess(resource.id)
                      }
                    >
                      다운로드
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
