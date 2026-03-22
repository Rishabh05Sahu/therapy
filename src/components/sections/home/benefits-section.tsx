"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/atoms/common/container";
import { Section } from "@/components/atoms/common/section";
import { benefitSlides } from "@/data/home";
import { BenefitIllustration } from "./benefit-illustration";
import { BookSessionButton } from "@/components/atoms/buttons/book-session-button";

export function BenefitsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Section dark className="overflow-hidden py-0">
      <Container className="py-16 md:py-24">
        <h2 className="text-center text-3xl font-semibold text-white md:text-5xl">
          The Real Benefits of Therapy and Counseling With Us
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/65 md:text-base">
          Most counselling and mental health services treat symptoms, we work on
          the person carrying them.
        </p>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {benefitSlides.map((slide) => (
              <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="order-2 max-w-md lg:order-1">
                    <h3 className="text-3xl font-medium leading-tight text-white md:text-5xl">
                      {slide.title}
                    </h3>

                    <p className="mt-6 text-sm leading-7 text-white/75 md:text-base">
                      {slide.description}
                    </p>

                    <div className="mt-8">
                      <BookSessionButton className="inline-flex border border-[var(--yellow)] bg-[var(--yellow)] px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
                        Book a Session
                      </BookSessionButton>
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                      {benefitSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => emblaApi?.scrollTo(index)}
                          className={`h-3 w-3 rounded-full transition ${
                            index === selectedIndex
                              ? "bg-[var(--lavender)]"
                              : "bg-white/30"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="order-1 flex items-center justify-center lg:order-2">
                    <BenefitIllustration
                      type={slide.illustration as "tree" | "stones" | "brain"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}