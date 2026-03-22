import { Container } from "@/components/atoms/common/container";
import { BlogCard } from "@/components/molecules/cards/blog-card";
import { BlogPost } from "@/types/blog";

type RelatedPostsSectionProps = {
  posts: BlogPost[];
};

export function RelatedPostsSection({ posts }: RelatedPostsSectionProps) {
  if (!posts.length) return null;

  return (
    <section className="section-cream cream-grid-pattern py-16 md:py-20">
      <Container>
        <h2 className="text-3xl font-semibold text-[var(--text-dark)]">
          Other Posts for your Reference
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post: any) => (
            <BlogCard
              key={String(post._id ?? post.id)}
              title={post.title}
              date={post.date}
              image={post.coverImage}
              slug={post.slug}
              dark={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}