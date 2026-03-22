import { NextResponse } from "next/server";
import { getTestimonials } from "@/services/testimonial.service";

export async function GET() {
  try {
    const testimonials = await getTestimonials();

    return NextResponse.json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.error("GET /api/testimonials error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch testimonials." },
      { status: 500 }
    );
  }
}