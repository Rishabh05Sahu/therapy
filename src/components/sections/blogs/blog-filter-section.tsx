"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/molecules/cards/blog-card";
import { Container } from "@/components/atoms/common/container";

type BlogItem = {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  date: string;
  tags: string[];
};

type BlogFilterSectionProps = {
  initialPosts: BlogItem[];
};

export function BlogFilterSection({ initialPosts }: BlogFilterSectionProps) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const tags = useMemo(() => {
    const uniqueTags = Array.from(
      new Set(initialPosts.flatMap((post) => post.tags || []))
    );
    return ["All", ...uniqueTags];
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    if (selectedTag === "All") return initialPosts;
    return initialPosts.filter((post) =>
      (post.tags || []).includes(selectedTag)
    );
  }, [selectedTag, initialPosts]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <section className="section-cream cream-grid-pattern py-14 md:py-20">
      <Container>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => {
            const active = selectedTag === tag;

            return (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setVisibleCount(6);
                }}
                className={`border px-4 py-2 text-sm transition ${
                  active
                    ? "border-[var(--text-dark)] bg-[var(--text-dark)] text-white"
                    : "border-[var(--text-dark)]/20 bg-white/50 text-[var(--text-dark)] hover:bg-white"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {visiblePosts.length ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visiblePosts.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                date={post.date}
                image={post.coverImage}
                slug={post.slug}
                dark={false}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-dashed border-[var(--text-dark)]/15 bg-white/50 p-8 text-center">
            <h3 className="text-lg font-semibold text-[var(--text-dark)]">
              No posts found for this tag
            </h3>
            <p className="mt-3 text-sm text-[var(--text-dark)]/65">
              Try another category or add more content to the database.
            </p>
          </div>
        )}

        {visibleCount < filteredPosts.length ? (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="border border-[var(--text-dark)] bg-[var(--text-dark)] px-5 py-3 text-sm text-white transition hover:opacity-90"
            >
              Load More
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}