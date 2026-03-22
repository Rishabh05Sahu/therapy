import { SiteNavbar } from "@/components/molecules/navigation/site-navbar";
import { BlogFilterSection } from "@/components/sections/blogs/blog-filter-section";
import { getBlogs } from "@/services/blog.service";

export default async function BlogsPage() {
  const posts = await getBlogs();

  return (
    <main>
      <div className="section-dark pb-16 pt-28 md:pt-36">
        <SiteNavbar />
        <div className="container-custom pt-10">
          <h1 className="text-4xl font-semibold text-white md:text-6xl">
            Blogs
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Insights, reflections, and practical support for emotional wellness.
          </p>
        </div>
      </div>

      <BlogFilterSection initialPosts={posts} />
    </main>
  );
}