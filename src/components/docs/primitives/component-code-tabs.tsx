"use client";

import { Card, CardContent } from "@/components/card";
import { Separator } from "@/components/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { docsChromeFontClassName } from "@/components/docs/layout/docs-nav-styles";
import { cn } from "@/lib/utils";

import type { ComponentCodeExample } from "./component-code-example";
import { DocsCodeBlock, DocsCopyableCode } from "./docs-code-block";
import { codeLinesToText, type CodeLine } from "./docs-code-types";
import { useDocsPreviewMode } from "./docs-preview-mode-context";

const htmlCssTodoMessage: CodeLine[] = [
  {
    tokens: [
      {
        text: "/* TODO: Add HTML + CSS snippets using Foundation tokens for this example. */",
        className: "text-muted-foreground",
      },
    ],
  },
];

export function ComponentCodeTabs({
  children,
  code,
  className,
}: {
  children: React.ReactNode;
  code: ComponentCodeExample;
  className?: string;
}) {
  const previewMode = useDocsPreviewMode();
  const showCodeTabs = previewMode === "ui-design";
  const hasHtmlCss = Boolean(code.html?.length && code.css?.length);
  const reactSource = codeLinesToText(code.react);
  const htmlCssSource = hasHtmlCss
    ? `${codeLinesToText(code.html!)}\n\n${codeLinesToText(code.css!)}`
    : codeLinesToText(htmlCssTodoMessage);

  return (
    <Card
      className={cn(
        "min-w-0 isolate overflow-hidden rounded-[var(--docs-preview-radius)] border-[var(--docs-chrome-border)] py-0 shadow-none",
        className
      )}
    >
      <CardContent className="flex min-h-[var(--docs-preview-min-height)] items-center justify-center p-[var(--spacing-40)]">
        {children}
      </CardContent>

      <div className="bg-[var(--docs-code-bg)]">
        {showCodeTabs ? (
          <Tabs defaultValue="react">
            <div className="border-b border-[var(--docs-chrome-border)] px-[var(--space-inline-md)]">
              <TabsList
                variant="line"
                className={cn(
                  "h-9 w-full justify-start bg-transparent",
                  docsChromeFontClassName
                )}
              >
                <TabsTrigger value="react" className={docsChromeFontClassName}>
                  React (TSX)
                </TabsTrigger>
                <TabsTrigger
                  value="html-css"
                  className={docsChromeFontClassName}
                >
                  HTML + CSS
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="react" className="mt-0">
              <DocsCopyableCode text={reactSource}>
                <DocsCodeBlock lines={code.react} />
              </DocsCopyableCode>
            </TabsContent>

            <TabsContent value="html-css" className="mt-0">
              <DocsCopyableCode text={htmlCssSource}>
                {hasHtmlCss ? (
                  <div className="flex flex-col">
                    <div className="border-b border-[var(--docs-chrome-border)] px-[var(--space-inline-md)] py-[var(--space-inline-xs)]">
                      <span className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                        HTML
                      </span>
                    </div>
                    <DocsCodeBlock lines={code.html!} />

                    <Separator />

                    <div className="border-b border-[var(--docs-chrome-border)] px-[var(--space-inline-md)] py-[var(--space-inline-xs)]">
                      <span className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                        CSS
                      </span>
                    </div>
                    <DocsCodeBlock lines={code.css!} />
                  </div>
                ) : (
                  <DocsCodeBlock lines={htmlCssTodoMessage} />
                )}
              </DocsCopyableCode>
            </TabsContent>
          </Tabs>
        ) : (
          <DocsCopyableCode text={reactSource}>
            <DocsCodeBlock lines={code.react} />
          </DocsCopyableCode>
        )}
      </div>
    </Card>
  );
}
