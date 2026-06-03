import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { faqItems, sectionCopy } from "@/lib/content";
import { media } from "@/lib/media";

export function FAQ() {
  const copy = sectionCopy.faq;

  return (
    <Section
      id="faq"
      variant="warm"
      background={{ ...media.backgrounds.faq }}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <Accordion type="single" collapsible className="glass-card max-w-3xl rounded-2xl px-6">
        {faqItems.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
