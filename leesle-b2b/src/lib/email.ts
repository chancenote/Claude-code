import type { QuoteFormData } from "@/lib/validations/quote";

/**
 * Send admin notification email via Resend.
 * Falls back gracefully if RESEND_API_KEY is not configured.
 */
export async function sendQuoteNotificationEmail(
  data: QuoteFormData
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || "b2b@leesle.com";

  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not configured — skipping email notification");
    return { success: false, error: "Email not configured" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "LEESLE B2B <noreply@leesle.com>",
        to: [adminEmail],
        subject: `[B2B 견적문의] ${data.companyName} - ${data.contactName}`,
        html: buildEmailHtml(data),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("[email] Resend API error:", response.status, errorBody);
      return { success: false, error: `Resend API ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    console.error("[email] Failed to send notification:", error);
    return { success: false, error: String(error) };
  }
}

function buildEmailHtml(data: QuoteFormData): string {
  const rows = [
    ["회사명", data.companyName],
    ["담당자명", data.contactName],
    ["연락처", data.contact],
    ["카테고리", data.category.length > 0 ? data.category.join(", ") : "-"],
    ["수량", data.quantity || "-"],
    ["용도", data.purpose || "-"],
    ["희망 납기", data.deadline || "-"],
    ["추가 요청사항", data.notes || "-"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;background:#f5f0eb;border:1px solid #e8dfd5;width:120px">${label}</td><td style="padding:8px 12px;border:1px solid #e8dfd5">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:'Pretendard',sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#C4A265;border-bottom:2px solid #C4A265;padding-bottom:8px">새로운 B2B 견적 문의</h2>
      <p style="color:#2c2c2c">새로운 견적 문의가 접수되었습니다.</p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">${tableRows}</table>
      <p style="color:#8c8c8c;font-size:12px">이 메일은 LEESLE B2B 웹사이트에서 자동 발송되었습니다.</p>
    </div>
  `;
}
