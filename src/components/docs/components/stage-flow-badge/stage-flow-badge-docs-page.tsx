"use client";

import {
  stageFlowBadgeInstallationUiSnippet,
  stageFlowBadgeRealScreenSnippet,
  stageFlowBadgeUsageSnippet,
} from "@/components/docs/components/stage-flow-badge/stage-flow-badge-code-snippets";
import { StageFlowBadgeRealScreenPreview } from "@/components/docs/components/stage-flow-badge/stage-flow-badge-real-screen-preview";
import { stageFlowBadgeTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { StageFlowBadge } from "@/components/stage-flow-badge";

const stageFlowBadgeApiRows = [
  {
    prop: "variant",
    type: '"default" | "success" | "warning" | "neutral"',
    defaultValue: '"success"',
  },
  { prop: "hideArrow", type: "boolean", defaultValue: "false" },
];

export function StageFlowBadgeDocsPage() {
  return (
    <DocsComponentPage
      title="Stage Flow Badge"
      description="Pipeline stage labels with directional chevrons for workflow timelines."
      tocItems={stageFlowBadgeTocItems}
      realScreen={{
        preview: <StageFlowBadgeRealScreenPreview />,
        code: stageFlowBadgeRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={stageFlowBadgeInstallationUiSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
                <StageFlowBadge variant="success">Requested</StageFlowBadge>
                <StageFlowBadge variant="success">MS1 Approved</StageFlowBadge>
                <StageFlowBadge variant="warning">Pending payer</StageFlowBadge>
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/stage-flow-badge</DocsInlineCode>.
                Chain badges in a row to show pipeline progression. Set{" "}
                <DocsInlineCode>hideArrow</DocsInlineCode> on the final stage.
              </>
            }
          >
            <DocsPreview code={stageFlowBadgeUsageSnippet}>
              <StageFlowBadge variant="success">MS1 Approved</StageFlowBadge>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              StageFlowBadge
            </h3>
            <DocsApiTable rows={stageFlowBadgeApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
