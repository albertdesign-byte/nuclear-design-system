"use client";

import { Skeleton } from "@/components/skeleton";
import {
  skeletonCardSnippet,
  skeletonInstallationUiSnippet,
  skeletonRealScreenSnippet,
  skeletonUsageSnippet,
} from "@/components/docs/components/skeleton/skeleton-code-snippets";
import { SkeletonRealScreenPreview } from "@/components/docs/components/skeleton/skeleton-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const skeletonTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "card", label: "Card" },
  { id: "api-reference", label: "API Reference" },
];

const skeletonApiRows = [
  { prop: "className", type: "string", defaultValue: "—" },
];

export function SkeletonDocsPage() {
  return (
    <DocsComponentPage
      title="Skeleton"
      description="Placeholder shimmer for content that is still loading."
      tocItems={skeletonTocItems}
      realScreen={{
        preview: <SkeletonRealScreenPreview />,
        code: skeletonRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={skeletonInstallationUiSnippet}>
              <div className="w-full max-w-sm space-y-[var(--space-stack-sm)]">
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-3 w-full" />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/skeleton</DocsInlineCode>. Uses{" "}
                <DocsInlineCode>--color-surface-muted</DocsInlineCode> and{" "}
                <DocsInlineCode>--motion-skeleton-cycle</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={skeletonUsageSnippet}>
              <div className="w-full max-w-sm space-y-[var(--space-stack-sm)]">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="card" title="Card">
            <DocsPreview code={skeletonCardSnippet}>
              <div className="w-full max-w-sm rounded-[var(--radius-card)] border border-[var(--color-border)] p-[var(--space-card)]">
                <Skeleton className="mb-[var(--space-stack-sm)] h-5 w-2/5" />
                <Skeleton className="mb-[var(--space-stack-xs)] h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Skeleton
            </h3>
            <DocsApiTable rows={skeletonApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
