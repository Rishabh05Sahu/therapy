import { Container } from "@/components/atoms/common/container";
import { Section } from "@/components/atoms/common/section";
import { SectionHeading } from "@/components/atoms/typography/section-heading";
import { therapySteps } from "@/data/home";

export function TherapyStepsSection() {
  return (
    <Section cream>
      <Container>
        <SectionHeading
          title="Where Therapy and Counselling Begins With the Healer"
          subtitle="The first real step in care is often a small and honest one, made with enough safety to begin."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {therapySteps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--text-dark)]/15 bg-[var(--yellow)]/25">
                <div className="h-10 w-10 rounded-full border border-[var(--text-dark)]/20" />
              </div>
              <h3 className="text-sm font-semibold tracking-[0.2em] text-[var(--text-dark)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-dark)]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}