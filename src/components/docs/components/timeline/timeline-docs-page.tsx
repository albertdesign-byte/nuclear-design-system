"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  timelineDeprecatedSnippet,
  timelineInstallationUiSnippet,
  timelineRealScreenSnippet,
  timelineUsageSnippet,
} from "@/components/docs/components/timeline/timeline-code-snippets";
import { TimelineRealScreenPreview } from "@/components/docs/components/timeline/timeline-real-screen-preview";
import { timelineTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const timelineApiRows = [
  { prop: "maxHeight", type: "string", defaultValue: '"24rem"' },
];

const timelineEntryApiRows = [
  { prop: "column", type: "TimelineColumnId", defaultValue: "required" },
  { prop: "time", type: "string", defaultValue: "undefined" },
  { prop: "children", type: "ReactNode", defaultValue: "required" },
];

const timelineTimeMarkerApiRows = [
  { prop: "time", type: "string", defaultValue: "required" },
  {
    prop: "align",
    type: '"start" | "end"',
    defaultValue: '"start"',
  },
];

export function TimelineDocsPage() {
  return (
    <DocsComponentPage
      title="Timeline"
      description="Three-column activity feed for system events, notes, and communications."
      tocItems={timelineTocItems}
      realScreen={{
        preview: <TimelineRealScreenPreview />,
        code: timelineRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/timeline-card" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Timeline Card
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/tooltip" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Tooltip
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={timelineInstallationUiSnippet}>
              <TimelineRealScreenPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import layout primitives from{" "}
                <DocsInlineCode>@/components/timeline</DocsInlineCode>. Wrap each{" "}
                <DocsInlineCode>TimelineCard</DocsInlineCode> in a{" "}
                <DocsInlineCode>TimelineEntry</DocsInlineCode> so the time marker
                sits on the column rail. Vertical dividers render automatically
                between columns.
              </>
            }
          >
            <DocsPreview code={timelineUsageSnippet}>
              <TimelineRealScreenPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="deprecated"
            title="Deprecated wrapper"
            description={
              <>
                <DocsInlineCode>TimelineEventCard</DocsInlineCode> remains for
                backward compatibility. It delegates to{" "}
                <DocsInlineCode>TimelineCard</DocsInlineCode> and inlines the
                time marker. Prefer explicit composition in new code.
              </>
            }
          >
            <DocsPreview code={timelineDeprecatedSnippet}>
              <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]">
                Code-only example — use TimelineCard in new implementations.
              </p>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              TimelineBody
            </h3>
            <DocsApiTable rows={timelineApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              TimelineEntry
            </h3>
            <DocsApiTable rows={timelineEntryApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              TimelineTimeMarker
            </h3>
            <DocsApiTable rows={timelineTimeMarkerApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
