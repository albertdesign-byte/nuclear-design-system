import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const accordionImport = `import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";`;

export const accordionInstallationUiSnippet = tsxSnippet(`${accordionImport}

export function Example() {
  return (
    <Accordion defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>What imaging requires prior auth?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          MRI, PET/CT, and advanced nuclear studies typically require
          authorization before scheduling.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`);

export const accordionRealScreenSnippet = tsxSnippet(`${accordionImport}

export function Example() {
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
          Standard reviews complete within 24–48 hours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`);

export const accordionUsageSnippet = exampleSnippet(
  `<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionHeader>
      <AccordionTrigger>What imaging requires prior auth?</AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      MRI, PET/CT, and advanced nuclear studies typically require
      authorization before scheduling.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  { imports: [accordionImport] }
);
