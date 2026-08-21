"use client";

import { Spinner } from "@/components/spinner";
import {
  spinnerInlineSnippet,
  spinnerInstallationUiSnippet,
  spinnerRealScreenSnippet,
  spinnerSizeSnippet,
  spinnerUsageSnippet,
} from "@/components/docs/components/spinner/spinner-code-snippets";
import { SpinnerRealScreenPreview } from "@/components/docs/components/spinner/spinner-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const spinnerTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "size", label: "Size" },
  { id: "inline", label: "Inline" },
  { id: "api-reference", label: "API Reference" },
];

const spinnerApiRows = [
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
  },
];

export function SpinnerDocsPage() {
  return (
    <DocsComponentPage
      title="Spinner"
      description="Indicates an in-progress operation with iconography tokens."
      tocItems={spinnerTocItems}
      realScreen={{
        preview: <SpinnerRealScreenPreview />,
        code: spinnerRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={spinnerInstallationUiSnippet}>
              <Spinner />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/spinner</DocsInlineCode>. Default
                size maps to <DocsInlineCode>--icon-md</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={spinnerUsageSnippet}>
              <Spinner />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="size" title="Size">
            <DocsPreview code={spinnerSizeSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="inline" title="Inline">
            <DocsPreview code={spinnerInlineSnippet}>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]"
              >
                <Spinner size="sm" aria-hidden />
                Processing…
              </button>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Spinner
            </h3>
            <DocsApiTable rows={spinnerApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
