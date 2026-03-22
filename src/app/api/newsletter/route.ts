import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import NewsletterSubscriber from "@/models/NewsletterSubscriber";

async function subscribeToMailchimp(email: string) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !serverPrefix) {
    return {
      success: false,
      skipped: true,
      message: "Mailchimp is not configured.",
    };
  }

  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");

  const response = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
    {
      method: "PUT",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        status: "subscribed",
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    return {
      success: false,
      skipped: false,
      message: errorData?.detail || "Failed to subscribe to Mailchimp.",
    };
  }

  return {
    success: true,
    skipped: false,
    message: "Subscribed in Mailchimp.",
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body?.email?.trim()?.toLowerCase();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await connectDB();

    const existingSubscriber = await NewsletterSubscriber.findOne({ email });

    if (!existingSubscriber) {
      await NewsletterSubscriber.create({
        email,
        source: "website",
      });
    }

    const mailchimpResult = await subscribeToMailchimp(email);

    if (!mailchimpResult.success && !mailchimpResult.skipped) {
      return NextResponse.json(
        {
          success: false,
          message: mailchimpResult.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: mailchimpResult.skipped
        ? "Subscribed successfully. Stored locally; Mailchimp not configured yet."
        : "Subscribed successfully.",
    });
  } catch (error) {
    console.error("POST /api/newsletter error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to subscribe." },
      { status: 500 }
    );
  }
}