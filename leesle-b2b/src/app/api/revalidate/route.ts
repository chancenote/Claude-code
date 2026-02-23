import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    // Validate webhook secret
    const secret = request.headers.get("x-sanity-webhook-secret");
    if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await request.json();
    const { _type, slug } = body;

    // Revalidate based on document type
    switch (_type) {
      case "product":
        revalidatePath("/[locale]/(site)/products", "page");
        if (slug?.current) {
          revalidatePath(`/[locale]/(site)/products/${slug.current}`, "page");
        }
        break;
      case "collaborationCase":
        revalidatePath("/[locale]/(site)/cases", "page");
        if (slug?.current) {
          revalidatePath(`/[locale]/(site)/cases/${slug.current}`, "page");
        }
        break;
      case "heroContent":
      case "siteStats":
      case "partnerLogo":
        revalidatePath("/[locale]/(site)", "page");
        break;
      case "faqItem":
        revalidatePath("/[locale]/(site)/faq", "page");
        break;
      case "resource":
        revalidatePath("/[locale]/(site)/resources", "page");
        break;
      default:
        // Revalidate homepage as fallback
        revalidatePath("/[locale]/(site)", "page");
    }

    return NextResponse.json({ revalidated: true, type: _type });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
