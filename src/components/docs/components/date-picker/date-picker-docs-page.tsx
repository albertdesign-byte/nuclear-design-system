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
      description="Single-date field. Type MM/DD/YYYY or open the calendar. DateRangePicker covers ranges."
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
            description="Clicking or focusing the field opens the calendar. The user can type, browse months and years, or pick a day. Incomplete values are not treated as errors."
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
            description="Control the date from the parent component."
          >
            <DocsPreview code={datePickerControlledSnippet}>
              <DatePicker value={date} onChange={setDate} />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Guidelines"
            description="DatePicker is the single-date control. DateRangePicker is the same family for a range."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Format <DocsInlineCode>MM/DD/YYYY</DocsInlineCode>. The mask
                formats as you type: <DocsInlineCode>9/</DocsInlineCode> becomes{" "}
                <DocsInlineCode>09/</DocsInlineCode>;{" "}
                <DocsInlineCode>09</DocsInlineCode> is kept; slashes appear when
                month or day is complete.
              </li>
              <li>
                Calendar and keyboard coexist.{" "}
                <DocsInlineCode>inputMode=&quot;numeric&quot;</DocsInlineCode>{" "}
                covers physical and phone keyboards.
              </li>
              <li>
                Date of birth and Mammogram date use this DatePicker, not a
                standalone <DocsInlineCode>Input</DocsInlineCode>.
              </li>
              <li>
                For a range, use{" "}
                <DocsInlineCode>DateRangePicker</DocsInlineCode>. Do not use a
                second DatePicker.
              </li>
              <li>
                There is no <DocsInlineCode>DatePickerField</DocsInlineCode>.
                Compose <DocsInlineCode>Label</DocsInlineCode> +{" "}
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
