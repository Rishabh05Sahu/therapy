import { connectDB } from "@/lib/db/connect";
import Blog from "@/models/Blog";

export async function getBlogs(options?: {
  tag?: string;
  limit?: number;
  featured?: boolean;
}) {
  await connectDB();

  const query: Record<string, unknown> = {};

  if (options?.tag && options.tag !== "All") {
    query.tags = options.tag;
  }

  if (typeof options?.featured === "boolean") {
    query.featured = options.featured;
  }

  let dbQuery = Blog.find(query).sort({ date: -1, createdAt: -1 }).lean();

  if (options?.limit) {
    dbQuery = dbQuery.limit(options.limit);
  }

  return dbQuery;
}

export async function getBlogBySlug(slug: string) {
  await connectDB();
  return Blog.findOne({ slug }).lean();
}

export async function getRelatedBlogs(slug: string) {
  await connectDB();

  const currentPost = await Blog.findOne({ slug }).lean();
  if (!currentPost) return [];

  return Blog.find({
    slug: { $ne: slug },
    tags: { $in: currentPost.tags },
  })
    .sort({ date: -1, createdAt: -1 })
    .limit(3)
    .lean();
}

export async function getFeaturedBlogs(limit = 3) {
  await connectDB();
  return Blog.find({ featured: true })
    .sort({ date: -1, createdAt: -1 })
    .limit(limit)
    .lean();
}