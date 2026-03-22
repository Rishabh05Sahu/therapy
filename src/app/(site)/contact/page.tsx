import type { Metadata } from "next";
import { SiteNavbar } from "@/components/molecules/navigation/site-navbar";
import { Container } from "@/components/atoms/common/container";
import { SiteButton } from "@/components/atoms/buttons/site-button";
import { SITE_CONFIG } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch for therapy, counselling, availability, and session booking support.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-dark relative min-h-[70vh] pt-28 md:pt-36">
        <SiteNavbar />

        <Container className="pb-20 pt-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/55">
              Contact Us
            </p>

            <h1 className="mt-6 text-4xl font-semibold text-white md:text-6xl">
              Let&apos;s start the conversation
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
              Whether you are looking for therapy, counselling, or just want to
              know which service may fit you best, reach out and we’ll help you
              take the next step.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/55">
                  Email
                </p>
                <p className="mt-3 text-lg text-white">hello@therapy.com</p>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Best for general questions, availability, and service
                  guidance.
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/55">
                  Phone
                </p>
                <p className="mt-3 text-lg text-white">+91 98765 43210</p>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Available Monday to Saturday, 9:00 AM to 7:00 PM.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <SiteButton
                href={SITE_CONFIG.bookingUrl}
                external={SITE_CONFIG.bookingUrl.startsWith("http")}
                variant="primary"
              >
                Book a Session
              </SiteButton>

              <a
                href="mailto:hello@therapy.com"
                className="inline-flex items-center justify-center border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}