"use client";

import { Chip } from "@/components/chip";
import {
  chipInstallationUiSnippet,
  chipRealScreenSnippet,
  chipUsageSnippet,
} from "@/components/docs/components/chip/chip-code-snippets";
import { ChipRealScreenPreview } from "@/components/docs/components/chip/chip-real-screen-preview";
import { ChipVsBadgeSection } from "@/components/docs/shared/chip-vs-badge-section";
import { chipTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const chipApiRows = [
  {
    prop: "variant",
    type: '"default" | "outline" | "muted"',
    defaultValue: '"default"',
  },
  { prop: "onRemove", type: "() => void", defaultValue: "undefined" },
  { prop: "removeLabel", type: "string", defaultValue: '"Remove"' },
];

export function ChipDocsPage() {
  return (
    <DocsComponentPage
      title="Chip"
      description="Compact labels for filters, tags, and selections."
      tocItems={chipTocItems}
      realScreen={{
        preview: <ChipRealScreenPreview />,
        code: chipRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={chipInstallationUiSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
                <Chip>MRI Brain</Chip>
                <Chip variant="outline">Prior Auth</Chip>
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/chip</DocsInlineCode>.
                Pass <DocsInlineCode>onRemove</DocsInlineCode> to render a
                dismiss control.
              </>
            }
          >
            <DocsPreview code={chipUsageSnippet}>
              <Chip>MRI Brain</Chip>
            </DocsPreview>
          </DocsSection>

          <ChipVsBadgeSection />

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Chip
            </h3>
            <DocsApiTable rows={chipApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
