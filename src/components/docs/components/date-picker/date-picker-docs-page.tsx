"use client";

import { useState } from "react";

import { DatePicker } from "@/components/date-picker";
import {
  datePickerControlledSnippet,
  datePickerInstallationUiSnippet,
  datePickerRealScreenSnippet,
  datePickerUsageSnippet,
} from "@/components/docs/components/date-picker/date-picker-code-snippets";
import { DatePickerRealScreenPreview } from "@/components/docs/components/date-picker/date-picker-real-screen-preview";
import { datePickerTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { Label } from "@/components/label";

const datePickerApiRows = [
  { prop: "value", type: "Date | null", defaultValue: "null" },
  { prop: "onChange", type: "(date: Date | null) => void", defaultValue: "—" },
  { prop: "placeholder", type: "string", defaultValue: '"MM/DD/YYYY"' },
  { prop: "locale", type: "string", defaultValue: '"en-US"' },
  { prop: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "error", type: "string", defaultValue: "undefined" },
  { prop: "id", type: "string", defaultValue: "undefined" },
  { prop: '"aria-label"', type: "string", defaultValue: "undefined" },
];

export function DatePickerDocsPage() {
  const [date, setDate] = useState<Date | null>(new Date(2024, 5, 12));

  return (
    <DocsComponentPage
      title="Date Picker"
      description="Campo de fecha única. Escribe MM/DD/YYYY o abre el calendario. DateRangePicker cubre rangos."
      tocItems={datePickerTocItems}
      realScreen={{
        preview: <DatePickerRealScreenPreview />,
        code: datePickerRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={datePickerInstallationUiSnippet}>
              <DatePicker value={date} onChange={setDate} />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description="Al hacer clic o enfocar el campo se abre el calendario. El usuario puede escribir, navegar meses y años, o elegir un día. Los valores incompletos no son error."
          >
            <DocsPreview code={datePickerUsageSnippet}>
              <div className="flex w-full max-w-xs flex-col gap-[var(--space-stack-xs)]">
                <Label htmlFor="date-picker-docs-usage">Date of birth</Label>
                <DatePicker
                  id="date-picker-docs-usage"
                  value={date}
                  onChange={setDate}
                  placeholder="MM/DD/YYYY"
                />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="controlled"
            title="Controlled"
            description="Controla la fecha desde el componente padre."
          >
            <DocsPreview code={datePickerControlledSnippet}>
              <DatePicker value={date} onChange={setDate} />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Guidelines"
            description="DatePicker es el control de fecha única. DateRangePicker es la misma familia para un rango."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Formato <DocsInlineCode>MM/DD/YYYY</DocsInlineCode>. La máscara
                formatea al escribir: <DocsInlineCode>9/</DocsInlineCode> pasa a{" "}
                <DocsInlineCode>09/</DocsInlineCode>;{" "}
                <DocsInlineCode>09</DocsInlineCode> se respeta; las barras
                aparecen al completar mes o día.
              </li>
              <li>
                Calendario y teclado coexisten.{" "}
                <DocsInlineCode>inputMode=&quot;numeric&quot;</DocsInlineCode>{" "}
                cubre teclado físico y de teléfono.
              </li>
              <li>
                Date of birth y Mammogram date usan este DatePicker, no un{" "}
                <DocsInlineCode>Input</DocsInlineCode> suelto.
              </li>
              <li>
                Para un intervalo, usa{" "}
                <DocsInlineCode>DateRangePicker</DocsInlineCode>. No hay un
                segundo DatePicker.
              </li>
              <li>
                No existe <DocsInlineCode>DatePickerField</DocsInlineCode>.
                Compón <DocsInlineCode>Label</DocsInlineCode> +{" "}
                <DocsInlineCode>DatePicker</DocsInlineCode>.
              </li>
            </ul>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={datePickerApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
