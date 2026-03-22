import { HeroSection } from "@/components/sections/home/hero-section";
import { CommitmentSection } from "@/components/sections/home/commitment-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { TherapyStepsSection } from "@/components/sections/home/therapy-steps-section";
import { BenefitsSection } from "@/components/sections/home/benefits-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { TeamSection } from "@/components/sections/home/team-section";
import { RecentPostsSection } from "@/components/sections/home/recent-posts-section";
import { FAQSection } from "@/components/sections/home/faq-section";
import { FooterCtaSection } from "@/components/sections/shared/footer-cta-section";
import { WaveDivider } from "@/components/atoms/common/wave-divider";
import { getTestimonials } from "@/services/testimonial.service";
import { getTeamMembers } from "@/services/team.service";

export default async function HomePage() {
  const [testimonials, teamMembers] = await Promise.all([
    getTestimonials(),
    getTeamMembers(),
  ]);

  return (
    <main>
      <HeroSection />
      <WaveDivider />
      <CommitmentSection />
      <ServicesSection />
      <TherapyStepsSection />
      <BenefitsSection />
      <TestimonialsSection testimonials={testimonials as any} />
      <TeamSection members={teamMembers as any} />
      <RecentPostsSection />
      <FAQSection />
      <FooterCtaSection />
    </main>
  );
}