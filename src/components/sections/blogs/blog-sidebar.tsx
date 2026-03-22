"use client";

import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "@/components/organisms/forms/newsletter-form";

type BlogSidebarProps = {
  post: any;
  featuredPosts: any[];
};

export function BlogSidebar({ post, featuredPosts }: BlogSidebarProps) {
  return (
    <aside className="space-y-6">
      <div className="border border-[var(--text-dark)]/15 bg-white/60 p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-dark)]/60">
          Author
        </p>
        <h3 className="mt-3 text-xl font-semibold text-[var(--text-dark)]">
          {post.author.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--text-dark)]/65">
          {post.author.role}
        </p>
        <p className="mt-4 text-sm leading-7 text-[var(--text-dark)]/75">
          {post.author.bio}
        </p>

        <div className="mt-5 flex gap-3 text-sm text-[var(--text-dark)]/70">
          <span>Share</span>
          <span>•</span>
          <span>FB</span>
          <span>IG</span>
          <span>LN</span>
        </div>
      </div>

      <div className="border border-white/10 bg-[#17182b] p-5 text-white">
        <p className="text-xs uppercase tracking-[0.22em] text-white/60">
          Newsletter
        </p>
        <h3 className="mt-3 text-xl font-semibold">Stay in the loop</h3>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Get thoughtful updates, reflections, and new articles in your inbox.
        </p>

        <NewsletterForm />
      </div>

      <div className="border border-[var(--text-dark)]/15 bg-white/60 p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-dark)]/60">
          Featured Posts
        </p>

        <div className="mt-5 space-y-4">
          {featuredPosts.map((item) => (
            <Link
              key={String(item._id)}
              href={`/blogs/${item.slug}`}
              className="flex gap-3"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="line-clamp-2 text-sm font-medium text-[var(--text-dark)]">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-[var(--text-dark)]/55">
                  {item.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}