import { SiteNavbar } from "@/components/molecules/navigation/site-navbar";
import { Container } from "@/components/atoms/common/container";
import { SiteButton } from "@/components/atoms/buttons/site-button";
import { SITE_CONFIG } from "@/lib/constants/site";
import { HeroArt } from "./hero-art";

export function HeroSection() {
  return (
    <section className="section-dark relative overflow-hidden pt-28 md:pt-36">
      <HeroArt />
      <SiteNavbar />

      <Container className="relative z-10 pb-24 pt-10 md:pb-32">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/55">
            Therapy and counselling support
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            You do not have to carry everything alone.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-black">Let&apos;s take it together</span>
              <span className="absolute bottom-1 left-0 right-0 z-0 h-[0.65em] bg-[var(--yellow)]/95 md:bottom-2" />
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
            Thoughtful therapy, counselling, and emotional support that meets
            you where you are and helps you move with more clarity, steadiness,
            and care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <SiteButton
              href={SITE_CONFIG.bookingUrl}
              external={SITE_CONFIG.bookingUrl.startsWith("http")}
              variant="primary"
            >
              Book a Session
            </SiteButton>

            <SiteButton
              href={SITE_CONFIG.contactUrl}
              variant="secondary"
            >
              Contact Us
            </SiteButton>
          </div>
        </div>
      </Container>
    </section>
  );
}