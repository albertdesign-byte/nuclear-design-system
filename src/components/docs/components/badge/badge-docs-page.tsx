"use client";

import { Badge } from "@/components/badge";
import {
  badgeDefaultSnippet,
  badgeDestructiveSnippet,
  badgeGhostSnippet,
  badgeInstallationUiSnippet,
  badgeLinkSnippet,
  badgeOutlineSnippet,
  badgeRealScreenSnippet,
  badgeSecondarySnippet,
  badgeSizeSnippet,
  badgeUsageSnippet,
} from "@/components/docs/components/badge/badge-code-snippets";
import { BadgeRealScreenPreview } from "@/components/docs/components/badge/badge-real-screen-preview";
import { ChipVsBadgeSection } from "@/components/docs/shared/chip-vs-badge-section";
import { badgeTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const badgeApiRows = [
  {
    prop: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
    defaultValue: '"default"',
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
  },
  {
    prop: "render",
    type: "RenderProp",
    defaultValue: "undefined",
  },
  {
    prop: "className",
    type: "string",
    defaultValue: "undefined",
  },
];

const badgeVariants = [
  { id: "default", label: "Default", snippet: badgeDefaultSnippet, preview: <Badge>Active</Badge> },
  {
    id: "secondary",
    label: "Secondary",
    snippet: badgeSecondarySnippet,
    preview: <Badge variant="secondary">Under review</Badge>,
  },
  {
    id: "destructive",
    label: "Destructive",
    snippet: badgeDestructiveSnippet,
    preview: <Badge variant="destructive">Critical</Badge>,
  },
  {
    id: "outline",
    label: "Outline",
    snippet: badgeOutlineSnippet,
    preview: <Badge variant="outline">Observation</Badge>,
  },
  {
    id: "ghost",
    label: "Ghost",
    snippet: badgeGhostSnippet,
    preview: <Badge variant="ghost">Archived</Badge>,
  },
  {
    id: "link",
    label: "Link",
    snippet: badgeLinkSnippet,
    preview: <Badge variant="link">View history</Badge>,
  },
] as const;

export function BadgeDocsPage() {
  return (
    <DocsComponentPage
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      tocItems={badgeTocItems}
      realScreen={{
        preview: <BadgeRealScreenPreview />,
        code: badgeRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={badgeInstallationUiSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
                <Badge>Active</Badge>
                <Badge variant="secondary">Under review</Badge>
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Badge from{" "}
                <DocsInlineCode>@/components/badge</DocsInlineCode>. Use badges
                for patient status, priority labels, and compact metadata.
              </>
            }
          >
            <DocsPreview code={badgeUsageSnippet}>
              <Badge>Pending</Badge>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                Use the <DocsInlineCode>size</DocsInlineCode> prop to match table
                density or header hierarchy.
              </>
            }
          >
            <DocsPreview code={badgeSizeSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
                <Badge size="sm">SM</Badge>
                <Badge size="md">MD</Badge>
                <Badge size="lg">LG</Badge>
              </div>
            </DocsPreview>
          </DocsSection>

          {badgeVariants.map(({ id, label, snippet, preview }) => (
            <VariantSection
              key={id}
              id={id}
              title={label}
              code={snippet}
              preview={preview}
            />
          ))}

          <ChipVsBadgeSection />

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Badge
            </h3>
            <DocsApiTable rows={badgeApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function VariantSection({
  id,
  title,
  code,
  preview,
}: {
  id: string;
  title: string;
  code: CodeLine[];
  preview: React.ReactNode;
}) {
  return (
    <DocsSection id={id} title={title}>
      <DocsPreview code={code}>{preview}</DocsPreview>
    </DocsSection>
  );
}
