import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import Blog from "@/models/Blog";
import TeamMember from "@/models/TeamMember";
import Testimonial from "@/models/Testimonial";
import { seedBlogs } from "@/data/seed-blogs";
import { seedTeamMembers } from "@/data/seed-team";
import { seedTestimonials } from "@/data/seed-testimonials";

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("x-seed-secret");
    const seedSecret = process.env.SEED_SECRET;

    if (!seedSecret || authHeader !== seedSecret) {
      return NextResponse.json(
        { success: false, message: "Unauthorized seed request." },
        { status: 401 }
      );
    }

    await connectDB();

    await Blog.deleteMany({});
    await TeamMember.deleteMany({});
    await Testimonial.deleteMany({});

    await Blog.insertMany(seedBlogs);
    await TeamMember.insertMany(seedTeamMembers);
    await Testimonial.insertMany(seedTestimonials);

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully.",
    });
  } catch (error) {
    console.error("POST /api/seed error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to seed database." },
      { status: 500 }
    );
  }
}