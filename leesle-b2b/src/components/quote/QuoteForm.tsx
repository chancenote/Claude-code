"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  quoteFormSchema,
  categoryOptions,
  quantityOptions,
  purposeOptions,
  type QuoteFormData,
} from "@/lib/validations/quote";

interface QuoteFormProps {
  /** Pre-fill category from URL param */
  initialCategory?: string;
  /** Pre-fill product name in notes from URL param */
  initialProduct?: string;
  onSuccess: () => void;
}

interface FormErrors {
  companyName?: string[];
  contactName?: string[];
  contact?: string[];
  notes?: string[];
}

export default function QuoteForm({
  initialCategory,
  initialProduct,
  onSuccess,
}: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState("");

  // Form state
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [quantity, setQuantity] = useState("");
  const [purpose, setPurpose] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState(
    initialProduct ? `관심 제품: ${initialProduct}\n\n` : ""
  );

  function toggleCategory(value: string) {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const formData: QuoteFormData = {
      companyName,
      contactName,
      contact,
      category: selectedCategories,
      quantity,
      purpose,
      deadline,
      notes,
    };

    // Client-side validation
    const parsed = quoteFormSchema.safeParse(formData);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors as FormErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setServerError(
            result.message || "오류가 발생했습니다. 다시 시도해주세요."
          );
        }
        return;
      }

      onSuccess();
    } catch {
      setServerError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg border border-brand-beige bg-brand-white text-brand-dark placeholder:text-brand-gray/60 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-colors";
  const labelBase = "block text-sm font-medium text-brand-dark mb-1.5";
  const errorText = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Required Fields */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-brand-dark">
          필수 정보 <span className="text-red-500">*</span>
        </h3>

        <div>
          <label htmlFor="companyName" className={labelBase}>
            회사명 <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="예) 삼성전자"
            className={`${inputBase} ${errors.companyName ? "border-red-400 focus:ring-red-300" : ""}`}
            required
          />
          {errors.companyName && (
            <p className={errorText}>{errors.companyName[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="contactName" className={labelBase}>
            담당자명 <span className="text-red-500">*</span>
          </label>
          <input
            id="contactName"
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="예) 김지영"
            className={`${inputBase} ${errors.contactName ? "border-red-400 focus:ring-red-300" : ""}`}
            required
          />
          {errors.contactName && (
            <p className={errorText}>{errors.contactName[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact" className={labelBase}>
            연락처 (전화번호 또는 이메일) <span className="text-red-500">*</span>
          </label>
          <input
            id="contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="예) 010-1234-5678 또는 b2b@company.com"
            className={`${inputBase} ${errors.contact ? "border-red-400 focus:ring-red-300" : ""}`}
            required
          />
          {errors.contact && (
            <p className={errorText}>{errors.contact[0]}</p>
          )}
        </div>
      </div>

      {/* Optional Fields */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-brand-dark">
          추가 정보 <span className="text-brand-gray text-sm font-normal">(선택)</span>
        </h3>

        {/* Category multi-select */}
        <div>
          <label className={labelBase}>관심 카테고리</label>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleCategory(opt.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selectedCategories.includes(opt.value)
                    ? "bg-brand-gold text-brand-white border-brand-gold"
                    : "bg-brand-white text-brand-dark border-brand-beige hover:border-brand-gold"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quantity" className={labelBase}>
              수량
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={inputBase}
            >
              {quantityOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="purpose" className={labelBase}>
              용도
            </label>
            <select
              id="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className={inputBase}
            >
              {purposeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="deadline" className={labelBase}>
            희망 납기일
          </label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className={inputBase}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div>
          <label htmlFor="notes" className={labelBase}>
            추가 요청사항
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="원하시는 제품, 디자인 컨셉, 커스텀 요구사항 등을 자유롭게 작성해주세요."
            rows={4}
            className={`${inputBase} resize-y`}
            maxLength={2000}
          />
          <p className="text-xs text-brand-gray mt-1 text-right">
            {notes.length}/2,000
          </p>
          {errors.notes && <p className={errorText}>{errors.notes[0]}</p>}
        </div>
      </div>

      {/* Server error */}
      {serverError && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
          {serverError}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "접수 중..." : "견적 문의하기"}
      </Button>

      <p className="text-center text-sm text-brand-gray">
        문의 접수 후 24시간 내 담당자가 회신드립니다.
      </p>
    </form>
  );
}
