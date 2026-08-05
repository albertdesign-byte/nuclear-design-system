"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import {
  cardActionSnippet,
  cardContentSnippet,
  cardFooterSnippet,
  cardHeaderSnippet,
  cardInstallationUiSnippet,
  cardRealScreenSnippet,
  cardSizeSnippet,
  cardUsageSnippet,
} from "@/components/docs/components/card/card-code-snippets";
import { CardRealScreenPreview } from "@/components/docs/components/card/card-real-screen-preview";
import { cardTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const cardApiRows = [
  {
    prop: "size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
  },
  {
    prop: "className",
    type: "string",
    defaultValue: "undefined",
  },
];

export function CardDocsPage() {
  return (
    <DocsComponentPage
      title="Card"
      description="Displays a card with header, content, and footer."
      tocItems={cardTocItems}
      realScreen={{
        preview: <CardRealScreenPreview />,
        code: cardRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/avatar" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Avatar
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/table" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Table
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={cardInstallationUiSnippet}>
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Resumen del paciente</CardTitle>
                  <CardDescription>
                    Última actualización hace 2 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Signos vitales dentro de rangos normales.
                </CardContent>
              </Card>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import compound parts from{" "}
                <DocsInlineCode>@/components/card</DocsInlineCode>. Cards group
                related clinical summary data with consistent spacing tokens.
              </>
            }
          >
            <DocsPreview code={cardUsageSnippet}>
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Resumen del paciente</CardTitle>
                  <CardDescription>
                    Última actualización hace 2 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Signos vitales dentro de rangos normales.
                </CardContent>
              </Card>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                <DocsInlineCode>default</DocsInlineCode> uses{" "}
                <DocsInlineCode>--space-card</DocsInlineCode>;{" "}
                <DocsInlineCode>sm</DocsInlineCode> uses compact padding for dense
                dashboards.
              </>
            }
          >
            <DocsPreview code={cardSizeSnippet}>
              <div className="grid w-full max-w-2xl gap-[var(--space-stack-md)] sm:grid-cols-2">
                <Card size="default">
                  <CardHeader>
                    <CardTitle>Default</CardTitle>
                  </CardHeader>
                  <CardContent>Padding estándar con --space-card.</CardContent>
                </Card>
                <Card size="sm">
                  <CardHeader>
                    <CardTitle>Small</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Padding compacto para paneles densos.
                  </CardContent>
                </Card>
              </div>
            </DocsPreview>
          </DocsSection>

          <PartSection
            id="header"
            title="Header"
            code={cardHeaderSnippet}
            preview={
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Resumen del paciente</CardTitle>
                  <CardDescription>
                    Última actualización hace 2 horas
                  </CardDescription>
                </CardHeader>
              </Card>
            }
          />

          <PartSection
            id="content"
            title="Content"
            code={cardContentSnippet}
            preview={
              <Card className="max-w-sm">
                <CardContent>
                  Signos vitales dentro de rangos normales.
                </CardContent>
              </Card>
            }
          />

          <PartSection
            id="footer"
            title="Footer"
            code={cardFooterSnippet}
            preview={
              <Card className="max-w-sm">
                <CardFooter>
                  <button
                    type="button"
                    className="text-[length:var(--text-body-small-size)] text-[var(--color-text-link)]"
                  >
                    Ver expediente
                  </button>
                </CardFooter>
              </Card>
            }
          />

          <PartSection
            id="action"
            title="Action"
            code={cardActionSnippet}
            preview={
              <Card className="max-w-sm">
                <CardHeader>
                  <CardTitle>Resumen del paciente</CardTitle>
                  <CardDescription>
                    Última actualización hace 2 horas
                  </CardDescription>
                  <CardAction>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </CardAction>
                </CardHeader>
              </Card>
            }
          />

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Card
            </h3>
            <DocsApiTable rows={cardApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function PartSection({
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
