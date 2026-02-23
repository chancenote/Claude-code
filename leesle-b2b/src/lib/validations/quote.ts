import { z } from "zod";

/** Phone: Korean mobile/landline formats */
const phoneRegex = /^(010|011|016|017|018|019|02|031|032|033|041|042|043|044|051|052|053|054|055|061|062|063|064)-?\d{3,4}-?\d{4}$/;

/** Email: standard email format */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const quoteFormSchema = z.object({
  // Required fields
  companyName: z
    .string()
    .min(1, "회사명을 입력해주세요.")
    .max(100, "회사명은 100자 이하로 입력해주세요."),
  contactName: z
    .string()
    .min(1, "담당자명을 입력해주세요.")
    .max(50, "담당자명은 50자 이하로 입력해주세요."),
  contact: z
    .string()
    .min(1, "연락처를 입력해주세요.")
    .refine(
      (val) => phoneRegex.test(val) || emailRegex.test(val),
      "올바른 전화번호 또는 이메일 형식으로 입력해주세요."
    ),

  // Optional fields
  category: z.array(z.string()).default([]),
  quantity: z.string().optional().default(""),
  purpose: z.string().optional().default(""),
  deadline: z.string().optional().default(""),
  notes: z
    .string()
    .max(2000, "추가 요청사항은 2000자 이하로 입력해주세요.")
    .optional()
    .default(""),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

/** Category options for multi-select */
export const categoryOptions = [
  { value: "goods", label: "굿즈" },
  { value: "accessory", label: "액세서리" },
  { value: "seasonal", label: "시즌 한정" },
  { value: "corporate-gift", label: "기업 선물" },
  { value: "custom", label: "맞춤 제작" },
] as const;

/** Quantity range options */
export const quantityOptions = [
  { value: "", label: "수량 선택 (선택)" },
  { value: "50-100", label: "50-100개" },
  { value: "100-500", label: "100-500개" },
  { value: "500-1000", label: "500-1,000개" },
  { value: "1000-5000", label: "1,000-5,000개" },
  { value: "5000+", label: "5,000개 이상" },
] as const;

/** Purpose options */
export const purposeOptions = [
  { value: "", label: "용도 선택 (선택)" },
  { value: "corporate-gift", label: "기업 선물/판촉물" },
  { value: "event", label: "행사/이벤트" },
  { value: "collab", label: "브랜드 콜라보" },
  { value: "retail", label: "유통/리테일 납품" },
  { value: "other", label: "기타" },
] as const;
