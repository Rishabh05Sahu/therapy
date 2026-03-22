import { Container } from "@/components/atoms/common/container";
import { Section } from "@/components/atoms/common/section";
import { SectionHeading } from "@/components/atoms/typography/section-heading";
import { ServiceCard } from "@/components/molecules/cards/service-card";
import { serviceItems } from "@/data/home";

export function ServicesSection() {
  return (
    <Section dark>
      <Container>
        <SectionHeading
          title="Counselling and Mental Health Services Built for Real Life."
          subtitle="Support that adapts to different seasons of life, relationships, and emotional needs."
          light
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              className={index === 1 ? "bg-[var(--lavender)]/15" : ""}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}