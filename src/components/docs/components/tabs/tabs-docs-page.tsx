"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  tabsFolderContentClassName,
  tabsSegmentedContentClassName,
} from "@/components/tabs";
import {
  tabsDefaultSnippet,
  tabsFolderSnippet,
  tabsInstallationUiSnippet,
  tabsLineSnippet,
  tabsRealScreenSnippet,
  tabsUsageSnippet,
  tabsVerticalSnippet,
} from "@/components/docs/components/tabs/tabs-code-snippets";
import { TabsRealScreenPreview } from "@/components/docs/components/tabs/tabs-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

/** Sync with navigation.ts when Tabs is added to docs nav. */
export const tabsTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "default", label: "Segmented" },
  { id: "line", label: "Line" },
  { id: "folder", label: "Folder" },
  { id: "vertical", label: "Vertical" },
  { id: "api-reference", label: "API Reference" },
];

const tabsApiRows = [
  {
    prop: "variant",
    type: '"default" | "line" | "folder"',
    defaultValue: '"default"',
  },
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
  },
];

function TabsDemo({
  variant = "default",
  orientation = "horizontal",
}: {
  variant?: "default" | "line" | "folder";
  orientation?: "horizontal" | "vertical";
}) {
  const isFolder = variant === "folder";

  return (
    <Tabs
      defaultValue="resumen"
      orientation={orientation}
      className={isFolder ? "gap-0" : undefined}
    >
      <TabsList variant={variant}>
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="labs">Labs</TabsTrigger>
        {isFolder ? <TabsTrigger value="notas">Notas</TabsTrigger> : null}
      </TabsList>
      <TabsContent
        value="resumen"
        className={
          isFolder
            ? tabsFolderContentClassName
            : tabsSegmentedContentClassName
        }
      >
        Resumen clínico.
      </TabsContent>
      <TabsContent
        value="labs"
        className={
          isFolder
            ? tabsFolderContentClassName
            : tabsSegmentedContentClassName
        }
      >
        Resultados de laboratorio.
      </TabsContent>
      {isFolder ? (
        <TabsContent value="notas" className={tabsFolderContentClassName}>
          Notas clínicas.
        </TabsContent>
      ) : null}
    </Tabs>
  );
}

export function TabsDocsPage() {
  return (
    <DocsComponentPage
      title="Tabs"
      description="Organize content into switchable sections."
      tocItems={tabsTocItems}
      realScreen={{
        preview: <TabsRealScreenPreview />,
        code: tabsRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/table" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Table
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/dialog" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Dialog
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={tabsInstallationUiSnippet}>
              <TabsDemo />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Tabs from{" "}
                <DocsInlineCode>@/components/tabs</DocsInlineCode>. Focus rings
                and list variants use Medmo tokens via{" "}
                <DocsInlineCode>tabsListVariants</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={tabsUsageSnippet}>
              <TabsDemo />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="default"
            title="Segmented"
            description={
              <>
                The default variant renders a muted track on{" "}
                <DocsInlineCode>TabsList</DocsInlineCode> with an elevated white
                pill for the active tab. Pair with{" "}
                <DocsInlineCode>tabsSegmentedContentClassName</DocsInlineCode>{" "}
                on <DocsInlineCode>TabsContent</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={tabsDefaultSnippet}>
              <TabsDemo variant="default" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="line"
            title="Line"
            description="The line variant shows an underline indicator on the active tab."
          >
            <DocsPreview code={tabsLineSnippet}>
              <TabsDemo variant="line" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="folder"
            title="Folder"
            description="Folder tabs for dashboard views — active tab connects to the content panel below. Use tabsFolderContentClassName on TabsContent."
          >
            <DocsPreview code={tabsFolderSnippet}>
              <TabsDemo variant="folder" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="vertical"
            title="Vertical"
            description={
              <>
                Set <DocsInlineCode>orientation="vertical"</DocsInlineCode> on{" "}
                <DocsInlineCode>Tabs</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={tabsVerticalSnippet}>
              <TabsDemo orientation="vertical" />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              TabsList
            </h3>
            <DocsApiTable rows={tabsApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
