import type { QuoteFormData } from "@/lib/validations/quote";

/**
 * Send Slack notification to #b2b-inquiries channel.
 * Best-effort: failures are logged but never block the response.
 */
export async function notifySlack(
  data: QuoteFormData
): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("[slack] SLACK_WEBHOOK_URL not configured — skipping");
    return { success: false, error: "Slack not configured" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `🔔 새로운 B2B 견적 문의`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "🔔 새로운 B2B 견적 문의" },
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*회사명:*\n${data.companyName}` },
              { type: "mrkdwn", text: `*담당자:*\n${data.contactName}` },
              { type: "mrkdwn", text: `*연락처:*\n${data.contact}` },
              {
                type: "mrkdwn",
                text: `*카테고리:*\n${data.category.length > 0 ? data.category.join(", ") : "-"}`,
              },
              { type: "mrkdwn", text: `*수량:*\n${data.quantity || "-"}` },
              { type: "mrkdwn", text: `*용도:*\n${data.purpose || "-"}` },
            ],
          },
          ...(data.notes
            ? [
                {
                  type: "section",
                  text: {
                    type: "mrkdwn",
                    text: `*추가 요청:*\n${data.notes}`,
                  },
                },
              ]
            : []),
        ],
      }),
    });

    if (!response.ok) {
      console.error("[slack] Webhook error:", response.status);
      return { success: false, error: `Slack webhook ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    console.error("[slack] Failed to send notification:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Send KakaoTalk notification via Alimtalk API.
 * Best-effort: failures are logged but never block the response.
 */
export async function notifyKakao(
  data: QuoteFormData
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.KAKAO_ALIMTALK_API_KEY;

  if (!apiKey) {
    console.warn("[kakao] KAKAO_ALIMTALK_API_KEY not configured — skipping");
    return { success: false, error: "KakaoTalk not configured" };
  }

  // KakaoTalk Alimtalk integration placeholder
  // In production, this would call the actual Alimtalk API
  // (e.g., NHN Cloud, Solapi, or direct Kakao Business API)
  console.log("[kakao] Would send alimtalk for:", data.companyName);
  return { success: true };
}
