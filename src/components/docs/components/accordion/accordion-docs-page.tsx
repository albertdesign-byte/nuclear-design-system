"use client";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import {
  accordionInstallationUiSnippet,
  accordionRealScreenSnippet,
  accordionUsageSnippet,
} from "@/components/docs/components/accordion/accordion-code-snippets";
import { AccordionRealScreenPreview } from "@/components/docs/components/accordion/accordion-real-screen-preview";
import { accordionTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const accordionApiRows = [
  { prop: "defaultValue", type: "string[]", defaultValue: "undefined" },
  { prop: "multiple", type: "boolean", defaultValue: "false" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
];

export function AccordionDocsPage() {
  return (
    <DocsComponentPage
      title="Accordion"
      description="Vertically stacked sections that expand and collapse."
      tocItems={accordionTocItems}
      realScreen={{
        preview: <AccordionRealScreenPreview />,
        code: accordionRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={accordionInstallationUiSnippet}>
              <Accordion defaultValue={["item-1"]} className="max-w-lg">
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      What imaging requires prior auth?
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    MRI, PET/CT, and advanced nuclear studies typically require
                    authorization before scheduling.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/accordion</DocsInlineCode>. Compose
                with{" "}
                <DocsInlineCode>AccordionItem</DocsInlineCode>,{" "}
                <DocsInlineCode>AccordionTrigger</DocsInlineCode>, and{" "}
                <DocsInlineCode>AccordionContent</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={accordionUsageSnippet}>
              <Accordion defaultValue={["item-1"]} className="max-w-lg">
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      What imaging requires prior auth?
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    MRI, PET/CT, and advanced nuclear studies typically require
                    authorization before scheduling.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Accordion
            </h3>
            <DocsApiTable rows={accordionApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
