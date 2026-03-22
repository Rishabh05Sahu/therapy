import { Container } from "@/components/atoms/common/container";
import { Section } from "@/components/atoms/common/section";
import { SectionHeading } from "@/components/atoms/typography/section-heading";
import { commitmentItems } from "@/data/home";

export function CommitmentSection() {
  return (
    <Section cream className="relative overflow-hidden">
      <Container>
        <SectionHeading
          title="Our Commitment"
          subtitle="A way of working rooted in gentleness, thoughtful support, and care that meets real life."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitmentItems.map((item) => (
            <div
              key={item}
              className="relative border border-[var(--text-dark)]/15 bg-white/40 p-6 text-center"
            >
              <div className="mx-auto mb-4 h-14 w-14 rounded-full border border-[var(--text-dark)]/20" />
              <p className="text-sm font-medium text-[var(--text-dark)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}