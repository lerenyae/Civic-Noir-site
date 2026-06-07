import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, campaign } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const pubId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !pubId) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          reactivate_existing: true,
          utm_source: "lerenyaewatkins.com",
          utm_medium: "organic",
          utm_campaign:
            typeof campaign === "string" && campaign.trim()
              ? campaign.trim().slice(0, 64)
              : "site",
        }),
      }
    );

    // Treat 2xx as success
    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    // Parse the error body
    let errText = "";
    try {
      errText = await res.text();
    } catch {
      errText = "";
    }

    // Log the full error for server-side debugging
    console.error("Beehiiv API error:", res.status, errText);

    // If the subscriber already exists, treat it as success from the user's POV
    const lower = errText.toLowerCase();
    if (
      res.status === 400 &&
      (lower.includes("already") ||
        lower.includes("exists") ||
        lower.includes("duplicate"))
    ) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    // Otherwise surface a clean error to the client
    return NextResponse.json(
      { error: "Subscription failed" },
      { status: 502 }
    );
  } catch (e) {
    console.error("Subscribe route error:", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
