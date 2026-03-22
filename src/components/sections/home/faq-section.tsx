import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/atoms/common/container";
import { Section } from "@/components/atoms/common/section";
import { faqItems } from "@/data/home";

export function FAQSection() {
  return (
    <Section dark className="pt-8">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-white">FAQ's</h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.slice(0, 3).map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`left-${index}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left text-sm text-white/85">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-6 text-white/65">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.slice(3).map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`right-${index}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left text-sm text-white/85">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-6 text-white/65">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  );
}