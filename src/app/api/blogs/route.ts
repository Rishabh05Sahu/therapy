import { NextRequest, NextResponse } from "next/server";
import { getBlogs } from "@/services/blog.service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const tag = searchParams.get("tag") || undefined;
    const featuredParam = searchParams.get("featured");
    const limitParam = searchParams.get("limit");

    const featured =
      featuredParam === null ? undefined : featuredParam === "true";

    const limit = limitParam ? Number(limitParam) : undefined;

    const blogs = await getBlogs({ tag, featured, limit });

    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs." },
      { status: 500 }
    );
  }
}