"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/atoms/common/container";
import { Section } from "@/components/atoms/common/section";
import { SectionHeading } from "@/components/atoms/typography/section-heading";
import { TestimonialCard } from "@/components/molecules/cards/testimonial-card";
import { CarouselArrow } from "@/components/atoms/common/carousel-arrow";
import { Reveal } from "@/components/atoms/common/reveal";

type TestimonialItem = {
  _id: string;
  quote: string;
  author: string;
};

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[];
};

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [start, setStart] = useState(0);

  const visibleItems = useMemo(() => {
    if (!testimonials.length) return [];
    const items = [];
    for (let i = 0; i < Math.min(3, testimonials.length); i++) {
      items.push(testimonials[(start + i) % testimonials.length]);
    }
    return items;
  }, [start, testimonials]);

  const next = () => {
    if (!testimonials.length) return;
    setStart((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    if (!testimonials.length) return;
    setStart((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section cream>
      <Container>
        <Reveal>
          <SectionHeading
            title="Real People, Real Shifts in Therapy and Counseling"
            subtitle="Honest words from people who found support, steadiness, and space to begin again."
          />
        </Reveal>

        {!testimonials.length ? (
          <div className="mt-10 border border-dashed border-[var(--text-dark)]/15 bg-white/40 p-8 text-center">
            <h3 className="text-lg font-semibold text-[var(--text-dark)]">
              Testimonials will appear here
            </h3>
            <p className="mt-3 text-sm text-[var(--text-dark)]/65">
              Seed or add testimonial records to populate this section.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-10 flex items-center justify-between">
              <div />
              <div className="flex gap-3">
                <CarouselArrow direction="left" onClick={prev} dark />
                <CarouselArrow direction="right" onClick={next} dark />
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {visibleItems.map((item, index) => (
                <Reveal key={item._id} delay={index * 0.08}>
                  <TestimonialCard
                    quote={item.quote}
                    author={item.author}
                    active={index === 1}
                  />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}