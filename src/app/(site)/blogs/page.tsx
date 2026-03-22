import { SiteNavbar } from "@/components/molecules/navigation/site-navbar";
import { BlogHeroSection } from "@/components/sections/blogs/blog-hero-section";
import { BlogFilterSection } from "@/components/sections/blogs/blog-filter-section";
import { FooterCtaSection } from "@/components/sections/shared/footer-cta-section";
import { getBlogs } from "@/services/blog.service";

export default async function BlogsPage() {
  const posts = await getBlogs();

  return (
    <main>
      <div className="relative">
        <SiteNavbar />
        <BlogHeroSection />
      </div>
      <BlogFilterSection initialPosts={posts as any} />
      <FooterCtaSection />
    </main>
  );
}