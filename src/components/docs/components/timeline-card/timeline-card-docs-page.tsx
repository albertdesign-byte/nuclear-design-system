"use client";

import { ClipboardListIcon } from "lucide-react";

import {
  timelineCardInstallationUiSnippet,
  timelineCardRealScreenSnippet,
  timelineCardUsageSnippet,
} from "@/components/docs/components/timeline-card/timeline-card-code-snippets";
import { TimelineCardRealScreenPreview } from "@/components/docs/components/timeline-card/timeline-card-real-screen-preview";
import { timelineCardTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { TimelineCard } from "@/components/timeline-card";

const timelineCardApiRows = [
  { prop: "title", type: "ReactNode", defaultValue: "—" },
  { prop: "author", type: "ReactNode", defaultValue: "undefined" },
  { prop: "description", type: "ReactNode", defaultValue: "undefined" },
  { prop: "icon", type: "ReactNode", defaultValue: "undefined" },
  {
    prop: "priority",
    type: "ReactNode",
    defaultValue: "undefined",
  },
  {
    prop: "tags",
    type: "{ label: ReactNode; href?: string; onClick?: () => void }[]",
    defaultValue: "undefined",
  },
  {
    prop: "tone",
    type: '"default" | "priority"',
    defaultValue: '"default"',
  },
];

export function TimelineCardDocsPage() {
  return (
    <DocsComponentPage
      title="Timeline Card"
      description="PX_task event card for timeline columns — header bar, body copy, and linked entity tags."
      tocItems={timelineCardTocItems}
      realScreen={{
        preview: <TimelineCardRealScreenPreview />,
        code: timelineCardRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={timelineCardInstallationUiSnippet}>
              <TimelineCard
                icon={<ClipboardListIcon />}
                title="Px task created"
                author="Leslie Gonzales"
                description="Follow up - Authorization (3232293) created."
                tags={[{ label: "Patient", href: "#" }]}
              />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/timeline-card</DocsInlineCode>.
                Compose inside <DocsInlineCode>TimelineColumn</DocsInlineCode>{" "}
                with a separate time marker on the rail.
              </>
            }
          >
            <DocsPreview code={timelineCardUsageSnippet}>
              <TimelineCard
                title="Internal notes"
                author="Leslie Gonzales"
                description="Stage updated from Requested to Qualified by Leslie Gonzalez"
                tags={[{ label: "Patient", href: "#" }]}
              />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="priority"
            title="Priority"
            description="Pass priority to render the High badge and the red header treatment from Figma PX_task."
          >
            <DocsPreview code={timelineCardRealScreenSnippet}>
              <TimelineCardRealScreenPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={timelineCardApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
