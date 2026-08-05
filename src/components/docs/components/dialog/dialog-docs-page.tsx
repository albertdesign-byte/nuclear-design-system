"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import {
  dialogFooterSnippet,
  dialogInstallationUiSnippet,
  dialogRealScreenSnippet,
  dialogUsageSnippet,
  dialogWithoutCloseSnippet,
} from "@/components/docs/components/dialog/dialog-code-snippets";
import { DialogRealScreenPreview } from "@/components/docs/components/dialog/dialog-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

/** Sync with navigation.ts when Dialog is added to docs nav. */
export const dialogTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "with-footer", label: "With Footer" },
  { id: "without-close", label: "Without Close" },
  { id: "api-reference", label: "API Reference" },
];

const dialogApiRows = [
  {
    prop: "showCloseButton",
    type: "boolean",
    defaultValue: "true",
  },
  {
    prop: "open",
    type: "boolean",
    defaultValue: "—",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "—",
  },
];

function DialogDemo({
  showCloseButton = true,
  showFooterClose = false,
}: {
  showCloseButton?: boolean;
  showFooterClose?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" size="sm" />}>
        {showFooterClose ? "Abrir diálogo" : "Cancelar cita"}
      </DialogTrigger>
      <DialogContent showCloseButton={showCloseButton}>
        <DialogHeader>
          <DialogTitle>
            {showFooterClose ? "Sin botón de cierre" : "¿Cancelar cita?"}
          </DialogTitle>
          <DialogDescription>
            {showFooterClose
              ? "Usa acciones del footer para cerrar."
              : "La cita del 18 de julio a las 10:30 se marcará como cancelada."}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton={showFooterClose}>
          {!showFooterClose && (
            <>
              <Button variant="outline">Mantener cita</Button>
              <Button intent="danger">Confirmar cancelación</Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogDocsPage() {
  return (
    <DocsComponentPage
      title="Dialog"
      description="A modal overlay for focused tasks and confirmations."
      tocItems={dialogTocItems}
      realScreen={{
        preview: <DialogRealScreenPreview />,
        code: dialogRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/tabs" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Tabs
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
            <DocsPreview code={dialogInstallationUiSnippet}>
              <Dialog>
                <DialogTrigger render={<Button variant="outline" size="sm" />}>
                  Abrir diálogo
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Título</DialogTitle>
                    <DialogDescription>
                      Descripción del diálogo.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Dialog from{" "}
                <DocsInlineCode>@/components/dialog</DocsInlineCode>. The
                backdrop uses <DocsInlineCode>--color-overlay</DocsInlineCode>,
                content uses <DocsInlineCode>--radius-card</DocsInlineCode> and{" "}
                <DocsInlineCode>--z-modal</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={dialogUsageSnippet}>
              <Dialog>
                <DialogTrigger render={<Button variant="outline" size="sm" />}>
                  Abrir diálogo
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Título</DialogTitle>
                    <DialogDescription>
                      Descripción del diálogo.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="with-footer"
            title="With Footer"
            description="Pair DialogFooter with Medmo Button actions."
          >
            <DocsPreview code={dialogFooterSnippet}>
              <DialogDemo />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="without-close"
            title="Without Close"
            description={
              <>
                Set <DocsInlineCode>showCloseButton={false}</DocsInlineCode> on{" "}
                <DocsInlineCode>DialogContent</DocsInlineCode> to hide the
                default close button.
              </>
            }
          >
            <DocsPreview code={dialogWithoutCloseSnippet}>
              <DialogDemo showCloseButton={false} showFooterClose />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              DialogContent
            </h3>
            <DocsApiTable rows={dialogApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
