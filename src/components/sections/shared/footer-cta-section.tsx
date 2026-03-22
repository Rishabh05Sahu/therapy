import { Container } from "@/components/atoms/common/container";
import { NewsletterForm } from "@/components/organisms/forms/newsletter-form";
import { FooterCtaIllustration } from "./footer-cta-illustration";

export function FooterCtaSection() {
  return (
    <section className="section-dark border-t border-white/10 py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/55">
              Stay connected
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Support, reflections, and new insights in your inbox
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              Subscribe for thoughtful articles, emotional wellness resources,
              and occasional updates from our therapy and counselling practice.
            </p>

            <div className="max-w-md">
              <NewsletterForm />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <FooterCtaIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}