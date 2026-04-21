import { NextResponse } from "next/server";

type InquiryType = "general" | "press" | "adaptation" | "speaking" | "bookclub";

const inquiryLabels: Record<InquiryType, string> = {
  general: "General Inquiry",
  press: "Press / Interview",
  adaptation: "Film / TV Adaptation",
  speaking: "Speaking / Panels",
  bookclub: "Book Club Appearance",
};

const OWNER_EMAIL = "reigningwordspublishing@gmail.com";
const FROM_EMAIL = "LeRenyae Watkins <contact@lerenyaewatkins.com>";
const REPLY_FROM = "LeRenyae Watkins <noreply@lerenyaewatkins.com>";

export async function POST(req: Request) {
  try {
    const { name, email, type, message } = await req.json();

    if (!name || !email || !type || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    if (!(type in inquiryLabels)) {
      return NextResponse.json({ error: "Invalid inquiry type" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const label = inquiryLabels[type as InquiryType];

    // 1. Notification to owner
    const notifyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        reply_to: email,
        subject: `[${label}] ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nType: ${label}\n\n${message}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
            <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #999; margin: 0 0 16px;">New Inquiry — ${label}</p>
            <h2 style="font-weight: 300; font-size: 20px; margin: 0 0 24px; color: #111;">${name}</h2>
            <p style="margin: 0 0 6px; font-size: 13px; color: #666;"><strong style="color: #111;">Email:</strong> <a href="mailto:${email}" style="color: #8a6d3b;">${email}</a></p>
            <p style="margin: 0 0 24px; font-size: 13px; color: #666;"><strong style="color: #111;">Type:</strong> ${label}</p>
            <div style="border-top: 1px solid #e5e5e5; padding-top: 20px; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>
        `,
      }),
    });

    if (!notifyRes.ok) {
      const err = await notifyRes.text();
      console.error("Resend notify error:", err);
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }

    // 2. Auto-reply to sender (non-blocking: log but don't fail request if this errors)
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: REPLY_FROM,
          to: email,
          subject: "Received — LeRenyae Watkins",
          text: `${name},\n\nYour message is on the record. I read every one personally and will respond when appropriate.\n\nIn the meantime, Contempt releases June 2026. You can pre-order when it goes live.\n\n— LeRenyae Watkins\nlerenyaewatkins.com`,
          html: `
            <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 520px; margin: 0 auto; padding: 40px 24px; color: #222;">
              <p style="font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: #8a6d3b; margin: 0 0 32px;">On the Record</p>
              <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">${escapeHtml(name)},</p>
              <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">Your message is on the record. I read every one personally and will respond when appropriate.</p>
              <p style="font-size: 16px; line-height: 1.8; margin: 0 0 32px;">In the meantime, <em>Contempt</em> releases June 2026.</p>
              <p style="font-size: 14px; line-height: 1.8; margin: 0; color: #555;">— LeRenyae Watkins<br/><a href="https://lerenyaewatkins.com" style="color: #8a6d3b; text-decoration: none;">lerenyaewatkins.com</a></p>
            </div>
          `,
        }),
      });
    } catch (e) {
      console.error("Auto-reply failed (non-fatal):", e);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact route error:", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
