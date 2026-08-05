"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button";
import { DateRangePicker } from "@/components/date-range-picker";
import {
  dateRangePickerControlledSnippet,
  dateRangePickerInstallationUiSnippet,
  dateRangePickerRealScreenSnippet,
  dateRangePickerUsageSnippet,
} from "@/components/docs/components/date-range-picker/date-range-picker-code-snippets";
import { DateRangePickerRealScreenPreview } from "@/components/docs/components/date-range-picker/date-range-picker-real-screen-preview";
import { dateRangePickerTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const dateRangePickerApiRows = [
  { prop: "from", type: "Date | null", defaultValue: "null" },
  { prop: "to", type: "Date | null", defaultValue: "null" },
  { prop: "onRangeChange", type: "(range) => void", defaultValue: "—" },
  { prop: "fromLabel", type: "string", defaultValue: '"From:"' },
  { prop: "toLabel", type: "string", defaultValue: '"To:"' },
  { prop: "locale", type: "string", defaultValue: '"es-ES"' },
  { prop: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
];

export function DateRangePickerDocsPage() {
  const [range, setRange] = useState<{ from: Date | null; to: Date | null }>({
    from: new Date(2026, 6, 20),
    to: null,
  });

  return (
    <DocsComponentPage
      title="Date Range Picker"
      description="Input fields with calendar popover for selecting a start and end date."
      tocItems={dateRangePickerTocItems}
      realScreen={{
        preview: <DateRangePickerRealScreenPreview />,
        code: dateRangePickerRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/checkbox" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Checkbox
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/input" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Input
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dateRangePickerInstallationUiSnippet}>
              <DateRangePicker from={range.from} to={range.to} onRangeChange={setRange} />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description="Use two linked inputs with calendar icons. Pick a start date first, then an end date."
          >
            <DocsPreview code={dateRangePickerUsageSnippet}>
              <DateRangePicker from={range.from} to={range.to} onRangeChange={setRange} />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="controlled"
            title="Controlled"
            description="Control the selected range from the parent component."
          >
            <DocsPreview code={dateRangePickerControlledSnippet}>
              <DateRangePicker from={range.from} to={range.to} onRangeChange={setRange} />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={dateRangePickerApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
