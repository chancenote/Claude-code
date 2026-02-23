import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요."),
  resourceId: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, resourceId } = parsed.data;

    // Save to Sanity CMS (placeholder)
    console.log("[lead] New lead captured:", { email, resourceId });

    // TODO: Send download link via email
    // TODO: Sync to newsletter service (Stibee/Mailchimp)

    return NextResponse.json({
      success: true,
      message: "다운로드 링크가 이메일로 전송되었습니다.",
    });
  } catch (error) {
    console.error("[lead] Error:", error);
    return NextResponse.json(
      { success: false, message: "오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
