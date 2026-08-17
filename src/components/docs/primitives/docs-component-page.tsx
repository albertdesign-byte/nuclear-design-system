"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/tabs";
import {
  getComponentEntry,
  getComponentNeighbors,
} from "@/components/docs/config/components-registry";
import { DocsPageHeader } from "@/components/docs/layout/docs-page-header";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import {
  type DocsPreviewMode,
  docsPreviewModeTabs,
} from "@/components/docs/primitives/docs-preview-mode";
import { DocsPreviewModeProvider } from "@/components/docs/primitives/docs-preview-mode-context";

export type DocsTocItem = {
  id: string;
  label: string;
};

export function DocsComponentPage({
  title,
  description,
  realScreen,
  uiDesign,
}: {
  title: string;
  description: string;
  /** @deprecated Table of contents removed from docs layout */
  tocItems?: DocsTocItem[];
  realScreen: {
    preview: ReactNode;
    code: CodeLine[];
  };
  uiDesign: ReactNode;
  /** @deprecated Previous/next is derived from the components registry. */
  footer?: ReactNode;
}) {
  const pathname = usePathname();
  const [previewTab, setPreviewTab] = useState<DocsPreviewMode>("ui-design");
  const isRealScreen = previewTab === "real-screen";
  const entry = getComponentEntry(pathname);
  const { previous, next } = getComponentNeighbors(pathname);

  return (
    <div className="flex min-w-0 flex-1">
      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-[var(--docs-main-max-width)] px-[var(--space-page)] py-[var(--space-page)]">
          <header className="mb-[var(--space-stack-lg)]">
            <DocsPageHeader
              title={entry?.title ?? title}
              description={entry?.description ?? description}
            />
          </header>

          <Tabs
            value={previewTab}
            onValueChange={(value) => setPreviewTab(value as DocsPreviewMode)}
          >
            <TabsList variant="line" className="h-auto w-full justify-start bg-transparent">
              {docsPreviewModeTabs.map((item) => (
                <TabsTrigger key={item.value} value={item.value}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <DocsPreviewModeProvider mode={previewTab}>
            {isRealScreen ? (
              <div className="mt-[var(--space-stack-md)]">
                <section id="real-screen" className="scroll-mt-24">
                  <DocsPreview code={realScreen.code}>
                    {realScreen.preview}
                  </DocsPreview>
                </section>
              </div>
            ) : (
              <div className="mt-[var(--space-stack-md)] flex flex-col gap-[var(--space-section)]">
                {uiDesign}
              </div>
            )}
          </DocsPreviewModeProvider>

          <nav
            aria-label="Components pagination"
            className="mt-[var(--space-section)] flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-lg)]"
          >
            {previous ? (
              <Button
                variant="ghost"
                size="sm"
                render={<Link href={previous.href} />}
                aria-label={`Previous component: ${previous.title}`}
              >
                Previous: {previous.title}
              </Button>
            ) : (
              <span aria-hidden />
            )}

            {next ? (
              <Button
                variant="ghost"
                size="sm"
                render={<Link href={next.href} />}
                aria-label={`Next component: ${next.title}`}
              >
                Next: {next.title}
              </Button>
            ) : (
              <span aria-hidden />
            )}
          </nav>
        </div>
      </main>
    </div>
  );
}
