import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/atoms/common/container";
import { SiteNavbar } from "@/components/molecules/navigation/site-navbar";
import { BlogSidebar } from "@/components/sections/blogs/blog-sidebar";
import { RelatedPostsSection } from "@/components/sections/blogs/related-posts-section";
import {
  getBlogBySlug,
  getFeaturedBlogs,
  getRelatedBlogs,
} from "@/services/blog.service";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;

  const [post, relatedPosts, featuredPosts] = await Promise.all([
    getBlogBySlug(slug),
    getRelatedBlogs(slug),
    getFeaturedBlogs(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="relative section-dark grid-pattern pb-16 pt-32 md:pt-40">
        <SiteNavbar />

        <Container>
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/75"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-6 text-4xl font-semibold text-white md:text-6xl">
              {post.title}
            </h1>

            <p className="mt-5 text-sm text-white/65">
              {post.date} • By {post.author.name}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </div>

      <section className="section-cream cream-grid-pattern py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <article>
              <div className="relative h-[300px] w-full overflow-hidden md:h-[460px]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-10">
                {post.content.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="mb-6 text-base leading-8 text-[var(--text-dark)]/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <BlogSidebar post={post} featuredPosts={featuredPosts} />
          </div>
        </Container>
      </section>

      <RelatedPostsSection posts={relatedPosts} />
    </main>
  );
}