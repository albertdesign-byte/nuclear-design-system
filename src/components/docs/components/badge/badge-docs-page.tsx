"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

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
import { badgeTocItems } from "@/components/docs/config/navigation";
import { Button } from "@/components/button";
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
  { id: "default", label: "Default", snippet: badgeDefaultSnippet, preview: <Badge>Activo</Badge> },
  {
    id: "secondary",
    label: "Secondary",
    snippet: badgeSecondarySnippet,
    preview: <Badge variant="secondary">En revisión</Badge>,
  },
  {
    id: "destructive",
    label: "Destructive",
    snippet: badgeDestructiveSnippet,
    preview: <Badge variant="destructive">Crítico</Badge>,
  },
  {
    id: "outline",
    label: "Outline",
    snippet: badgeOutlineSnippet,
    preview: <Badge variant="outline">Observación</Badge>,
  },
  {
    id: "ghost",
    label: "Ghost",
    snippet: badgeGhostSnippet,
    preview: <Badge variant="ghost">Archivado</Badge>,
  },
  {
    id: "link",
    label: "Link",
    snippet: badgeLinkSnippet,
    preview: <Badge variant="link">Ver historial</Badge>,
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
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/switch" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Switch
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/avatar" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Avatar
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={badgeInstallationUiSnippet}>
              <div className="flex flex-wrap items-center gap-[var(--space-inline-sm)]">
                <Badge>Activo</Badge>
                <Badge variant="secondary">En revisión</Badge>
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
              <Badge>Pendiente</Badge>
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
              <div className="flex flex-wrap items-center gap-[var(--space-inline-sm)]">
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
