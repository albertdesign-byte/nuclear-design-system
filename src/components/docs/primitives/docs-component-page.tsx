"use client";

import { useState, type ReactNode } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/tabs";
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
  footer,
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
  footer?: ReactNode;
}) {
  const [previewTab, setPreviewTab] = useState<DocsPreviewMode>("ui-design");
  const isRealScreen = previewTab === "real-screen";

  return (
    <div className="flex min-w-0 flex-1">
      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-[var(--docs-main-max-width)] px-[var(--space-page)] py-[var(--space-page)]">
          <header className="mb-[var(--space-stack-lg)]">
            <DocsPageHeader title={title} description={description} />
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
                {footer}
              </div>
            )}
          </DocsPreviewModeProvider>
        </div>
      </main>
    </div>
  );
}
