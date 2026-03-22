"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/atoms/common/container";
import { Section } from "@/components/atoms/common/section";
import { SectionHeading } from "@/components/atoms/typography/section-heading";
import { CarouselArrow } from "@/components/atoms/common/carousel-arrow";
import { TeamCard } from "@/components/molecules/cards/team-card";
import { Reveal } from "@/components/atoms/common/reveal";

type TeamMemberItem = {
  _id: string;
  name: string;
  role: string;
  availability: string;
  image: string;
};

type TeamSectionProps = {
  members: TeamMemberItem[];
};

export function TeamSection({ members }: TeamSectionProps) {
  const [start, setStart] = useState(0);

  const visibleItems = useMemo(() => {
    if (!members.length) return [];
    const items = [];
    for (let i = 0; i < Math.min(3, members.length); i++) {
      items.push(members[(start + i) % members.length]);
    }
    return items;
  }, [start, members]);

  const next = () => {
    if (!members.length) return;
    setStart((prev) => (prev + 1) % members.length);
  };

  const prev = () => {
    if (!members.length) return;
    setStart((prev) => (prev - 1 + members.length) % members.length);
  };

  return (
    <Section dark>
      <Container>
        <Reveal>
          <SectionHeading
            title="Meet The Team"
            subtitle="A caring group of therapists with different strengths, styles, and areas of support."
            light
          />
        </Reveal>

        {!members.length ? (
          <div className="mt-10 border border-dashed border-white/15 bg-white/5 p-8 text-center">
            <h3 className="text-lg font-semibold text-white">
              Team members will appear here
            </h3>
            <p className="mt-3 text-sm text-white/65">
              Add team records in MongoDB or seed the database to populate this
              section.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-10 flex items-center justify-between">
              <div />
              <div className="flex gap-3">
                <CarouselArrow direction="left" onClick={prev} />
                <CarouselArrow direction="right" onClick={next} />
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {visibleItems.map((member, index) => (
                <Reveal key={member._id} delay={index * 0.08}>
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    availability={member.availability}
                    image={member.image}
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