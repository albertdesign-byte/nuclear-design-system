"use client";

import { FieldDescription } from "@/components/field-description";
import { Label } from "@/components/label";
import { Switch } from "@/components/switch";
import {
  switchCheckedSnippet,
  switchDisabledSnippet,
  switchInstallationUiSnippet,
  switchInvalidSnippet,
  switchRealScreenSnippet,
  switchSizeSnippet,
  switchUsageSnippet,
  switchWithLabelSnippet,
} from "@/components/docs/components/switch/switch-code-snippets";
import { SwitchRealScreenPreview } from "@/components/docs/components/switch/switch-real-screen-preview";
import { switchTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const switchApiRows = [
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
  },
  {
    prop: "checked",
    type: "boolean",
    defaultValue: "false",
  },
  {
    prop: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
  },
  {
    prop: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    prop: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
  },
];

export function SwitchDocsPage() {
  return (
    <DocsComponentPage
      title="Switch"
      description="A control that toggles between two states."
      tocItems={switchTocItems}
      realScreen={{
        preview: <SwitchRealScreenPreview />,
        code: switchRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={switchInstallationUiSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
                <Switch defaultChecked aria-label="Enable reminders" />
                <Switch aria-label="Enable notifications" />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Switch from{" "}
                <DocsInlineCode>@/components/switch</DocsInlineCode>.
                Standalone switches require an{" "}
                <DocsInlineCode>aria-label</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={switchUsageSnippet}>
              <Switch defaultChecked aria-label="Enable reminders" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                Use the <DocsInlineCode>size</DocsInlineCode> prop to match
                surrounding control density.
              </>
            }
          >
            <DocsPreview code={switchSizeSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
                <Switch size="sm" defaultChecked aria-label="Small" />
                <Switch size="md" defaultChecked aria-label="Medium" />
                <Switch size="lg" defaultChecked aria-label="Large" />
              </div>
            </DocsPreview>
          </DocsSection>

          <StateSection
            id="checked"
            title="Checked"
            code={switchCheckedSnippet}
            preview={
              <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
                <Switch aria-label="Off" />
                <Switch defaultChecked aria-label="On" />
              </div>
            }
          />

          <StateSection
            id="disabled"
            title="Disabled"
            code={switchDisabledSnippet}
            preview={
              <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
                <Switch disabled aria-label="Disabled off" />
                <Switch disabled defaultChecked aria-label="Disabled on" />
              </div>
            }
          />

          <StateSection
            id="invalid"
            title="Invalid"
            description={
              <>
                Set <DocsInlineCode>aria-invalid</DocsInlineCode> when validation
                fails.
              </>
            }
            code={switchInvalidSnippet}
            preview={<Switch aria-invalid aria-label="Invalid" />}
          />

          <DocsSection
            id="with-label"
            title="With Label"
            description="En filas de settings, el Label queda a la izquierda y el Switch a la derecha, unidos con htmlFor e id."
          >
            <DocsPreview code={switchWithLabelSnippet}>
              <div className="flex max-w-md items-center justify-between gap-[var(--space-inline-md)]">
                <Label htmlFor="lab-alerts-docs">Critical results alerts</Label>
                <Switch id="lab-alerts-docs" defaultChecked />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Guidelines"
            description="No existe SwitchField. Switch se compone con Label. Preferir Field solo cuando exista un Field correspondiente para ese control."
          >
            <div className="flex flex-col gap-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">
                  Cuándo usar Label con Switch
                </h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>
                    Usa <DocsInlineCode>Label</DocsInlineCode> visible siempre
                    que el Switch represente un ajuste con nombre (notificaciones,
                    recordatorios, preferencias).
                  </li>
                  <li>
                    Un Switch sin texto visible necesita{" "}
                    <DocsInlineCode>aria-label</DocsInlineCode>. No combines
                    aria-label con un Label visible que diga lo mismo.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">
                  Colocación
                </h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>
                    En filas de settings, el Label va a la izquierda y el Switch
                    a la derecha, alineados en el eje vertical y con{" "}
                    <DocsInlineCode>justify-between</DocsInlineCode>.
                  </li>
                  <li>
                    Relación visual: el texto nombra el ajuste; el control
                    queda al final de la fila como la acción on/off.
                  </li>
                  <li>
                    Spacing:{" "}
                    <DocsInlineCode>gap-[var(--space-inline-md)]</DocsInlineCode>{" "}
                    entre Label y Switch. No apiles un Label encima y otro al
                    lado del mismo Switch.
                  </li>
                  <li>
                    Conecta <DocsInlineCode>Label htmlFor</DocsInlineCode> con el{" "}
                    <DocsInlineCode>id</DocsInlineCode> del Switch.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">
                  Texto auxiliar
                </h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>
                    El texto auxiliar (ayuda o descripción) va debajo del Label,
                    a la izquierda, con{" "}
                    <DocsInlineCode>FieldDescription</DocsInlineCode>. El Switch
                    permanece a la derecha de toda la columna de texto.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-[var(--space-stack-md)] flex max-w-md items-center justify-between gap-[var(--space-inline-md)]">
              <div className="flex min-w-0 flex-col gap-[var(--space-stack-xs)]">
                <Label htmlFor="switch-guidelines-helper">
                  Critical results alerts
                </Label>
                <FieldDescription>
                  Notify the ordering physician when a lab result is marked
                  critical.
                </FieldDescription>
              </div>
              <Switch id="switch-guidelines-helper" defaultChecked />
            </div>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Switch
            </h3>
            <DocsApiTable rows={switchApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function StateSection({
  id,
  title,
  code,
  preview,
  description,
}: {
  id: string;
  title: string;
  code: CodeLine[];
  preview: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <DocsSection id={id} title={title} description={description}>
      <DocsPreview code={code}>{preview}</DocsPreview>
    </DocsSection>
  );
}
