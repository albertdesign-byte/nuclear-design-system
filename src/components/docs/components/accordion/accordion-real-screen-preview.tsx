import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

export function AccordionRealScreenPreview() {
  return (
    <Accordion defaultValue={["coverage"]} className="max-w-lg">
      <AccordionItem value="coverage">
        <AccordionHeader>
          <AccordionTrigger>What imaging requires prior auth?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          MRI, PET/CT, and advanced nuclear studies typically require
          authorization before scheduling.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="timeline">
        <AccordionHeader>
          <AccordionTrigger>How long does review take?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Standard reviews complete within 24–48 hours. Stat requests are
          escalated to the MS1 queue.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
