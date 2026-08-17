"use client";

import { ScrollArea } from "@/components/scroll-area";
import {
  scrollAreaHorizontalSnippet,
  scrollAreaInstallationUiSnippet,
  scrollAreaRealScreenSnippet,
  scrollAreaUsageSnippet,
} from "@/components/docs/components/scroll-area/scroll-area-code-snippets";
import { ScrollAreaRealScreenPreview } from "@/components/docs/components/scroll-area/scroll-area-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const scrollAreaTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "horizontal", label: "Horizontal" },
  { id: "api-reference", label: "API Reference" },
];

const scrollAreaApiRows = [
  { prop: "className", type: "string", defaultValue: "—" },
  { prop: "children", type: "ReactNode", defaultValue: "—" },
];

const demoItems = Array.from({ length: 8 }, (_, index) => `Item ${index + 1}`);

export function ScrollAreaDocsPage() {
  return (
    <DocsComponentPage
      title="Scroll Area"
      description="Custom scrollbars for overflow content within a fixed region."
      tocItems={scrollAreaTocItems}
      realScreen={{
        preview: <ScrollAreaRealScreenPreview />,
        code: scrollAreaRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={scrollAreaInstallationUiSnippet}>
              <ScrollArea className="h-32 w-full max-w-sm rounded-[var(--radius-md)] border border-[var(--color-border)]">
                <div className="space-y-[var(--space-stack-sm)] p-[var(--space-inline-sm)]">
                  {demoItems.map((item) => (
                    <p
                      key={item}
                      className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/scroll-area</DocsInlineCode> and
                set a fixed height or width on the root.
              </>
            }
          >
            <DocsPreview code={scrollAreaUsageSnippet}>
              <ScrollArea className="h-48 w-full max-w-sm rounded-[var(--radius-md)] border border-[var(--color-border)]">
                <div className="p-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  Long content…
                </div>
              </ScrollArea>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="horizontal" title="Horizontal">
            <DocsPreview code={scrollAreaHorizontalSnippet}>
              <ScrollArea className="w-full max-w-sm whitespace-nowrap">
                <div className="flex w-max gap-[var(--space-inline-md)] p-[var(--space-inline-sm)]">
                  {["Item A", "Item B", "Item C", "Item D"].map((item) => (
                    <span
                      key={item}
                      className="rounded-[var(--radius-md)] bg-[var(--color-surface-muted)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </ScrollArea>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              ScrollArea
            </h3>
            <DocsApiTable rows={scrollAreaApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
