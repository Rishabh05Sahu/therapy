import { NextResponse } from "next/server";
import { getBlogBySlug, getRelatedBlogs } from "@/services/blog.service";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_: Request, { params }: Props) {
  try {
    const { slug } = await params;

    const post = await getBlogBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 }
      );
    }

    const related = await getRelatedBlogs(slug);

    return NextResponse.json({
      success: true,
      data: {
        post,
        related,
      },
    });
  } catch (error) {
    console.error("GET /api/blogs/[slug] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blog." },
      { status: 500 }
    );
  }
}