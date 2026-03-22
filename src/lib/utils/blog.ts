import { blogPosts } from "@/data/blogs";

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts() {
  return blogPosts.filter((post) => post.featured).slice(0, 3);
}

export function getRelatedPosts(slug: string) {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter(
      (post) =>
        post.slug !== slug &&
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, 3);
}