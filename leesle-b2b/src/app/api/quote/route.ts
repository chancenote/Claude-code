import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations/quote";
import { sendQuoteNotificationEmail } from "@/lib/email";
import { notifySlack, notifyKakao } from "@/lib/notifications";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate input
    const parsed = quoteFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 2. Save to Sanity CMS (placeholder — requires Sanity write token)
    // In production:
    // await sanityClient.create({
    //   _type: 'quoteInquiry',
    //   ...data,
    //   submittedAt: new Date().toISOString(),
    // });
    console.log("[quote] New inquiry received:", {
      company: data.companyName,
      contact: data.contactName,
      submittedAt: new Date().toISOString(),
    });

    // 3. Fire notifications in parallel (best-effort, non-blocking)
    const [emailResult, slackResult, kakaoResult] = await Promise.allSettled([
      sendQuoteNotificationEmail(data),
      notifySlack(data),
      notifyKakao(data),
    ]);

    // Log notification results for debugging
    console.log("[quote] Notification results:", {
      email:
        emailResult.status === "fulfilled"
          ? emailResult.value
          : { error: emailResult.reason },
      slack:
        slackResult.status === "fulfilled"
          ? slackResult.value
          : { error: slackResult.reason },
      kakao:
        kakaoResult.status === "fulfilled"
          ? kakaoResult.value
          : { error: kakaoResult.reason },
    });

    return NextResponse.json({
      success: true,
      message: "견적 문의가 접수되었습니다. 24시간 내 회신드리겠습니다.",
    });
  } catch (error) {
    console.error("[quote] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      },
      { status: 500 }
    );
  }
}
