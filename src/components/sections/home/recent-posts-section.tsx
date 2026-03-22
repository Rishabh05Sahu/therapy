import { Container } from "@/components/atoms/common/container";
import { Section } from "@/components/atoms/common/section";
import { SectionHeading } from "@/components/atoms/typography/section-heading";
import { BlogCard } from "@/components/molecules/cards/blog-card";
import { Reveal } from "@/components/atoms/common/reveal";
import { EmptyState } from "@/components/atoms/common/empty-state";
import { getBlogs } from "@/services/blog.service";

export async function RecentPostsSection() {
  const recentPosts = await getBlogs({ limit: 3 });

  return (
    <Section dark className="pt-8">
      <Container>
        <Reveal>
          <SectionHeading
            title="Recent Insights"
            subtitle="Thoughtful writing on emotional wellness, relationships, healing, and everyday care."
            light
          />
        </Reveal>

        {recentPosts.length ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {recentPosts.map((post: any, index: number) => (
              <Reveal key={String(post._id)} delay={index * 0.08}>
                <BlogCard
                  title={post.title}
                  date={post.date}
                  image={post.coverImage}
                  slug={post.slug}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <EmptyState
              title="No posts available yet"
              description="Recent articles will appear here once blog content is added."
            />
          </div>
        )}
      </Container>
    </Section>
  );
}