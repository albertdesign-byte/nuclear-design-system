"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/button";
import { DayToggleGroup } from "@/components/day-toggle-group";
import {
  dayToggleGroupCustomDaysSnippet,
  dayToggleGroupDisabledSnippet,
  dayToggleGroupInstallationUiSnippet,
  dayToggleGroupRealScreenSnippet,
  dayToggleGroupUsageSnippet,
} from "@/components/docs/components/day-toggle-group/day-toggle-group-code-snippets";
import { DayToggleGroupRealScreenPreview } from "@/components/docs/components/day-toggle-group/day-toggle-group-real-screen-preview";
import { dayToggleGroupTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { Label } from "@/components/label";

const dayToggleGroupApiRows = [
  { prop: "value", type: "DayToggleValue[]", defaultValue: "—" },
  { prop: "onValueChange", type: "(value) => void", defaultValue: "—" },
  {
    prop: "days",
    type: "DayToggleOption[]",
    defaultValue: "Mon–Sat (Mo–Sa)",
  },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "aria-label", type: "string", defaultValue: '"Choose days"' },
  { prop: "className", type: "string", defaultValue: "undefined" },
];

export function DayToggleGroupDocsPage() {
  const [days, setDays] = useState<Array<"mon" | "tue" | "wed" | "thu" | "fri" | "sat">>([
    "tue",
    "fri",
  ]);

  return (
    <DocsComponentPage
      title="Day Toggle Group"
      description="Multi-select weekday toggles for patient availability and scheduling flows."
      tocItems={dayToggleGroupTocItems}
      realScreen={{
        preview: <DayToggleGroupRealScreenPreview />,
        code: dayToggleGroupRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/date-range-picker" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Date Range Picker
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/deposit-summary" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Deposit Summary
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dayToggleGroupInstallationUiSnippet}>
              <DayToggleGroup value={days} onValueChange={setDays} aria-label="Choose days" />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/day-toggle-group</DocsInlineCode>.
                Control selected days from the parent with{" "}
                <DocsInlineCode>value</DocsInlineCode> and{" "}
                <DocsInlineCode>onValueChange</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={dayToggleGroupUsageSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-xs)]">
                <Label>Choose days</Label>
                <DayToggleGroup value={days} onValueChange={setDays} aria-label="Choose days" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="disabled"
            title="Disabled"
            description="Disable the entire group when availability cannot be edited."
          >
            <DocsPreview code={dayToggleGroupDisabledSnippet}>
              <DayToggleGroup
                value={["mon", "wed"]}
                onValueChange={() => {}}
                disabled
                aria-label="Choose days"
              />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="custom-days"
            title="Custom Days"
            description="Pass a custom days array when the flow needs a subset of weekdays."
          >
            <DocsPreview code={dayToggleGroupCustomDaysSnippet}>
              <DayToggleGroup
                value={["mon", "fri"]}
                onValueChange={() => {}}
                days={[
                  { value: "mon", label: "Mo" },
                  { value: "wed", label: "We" },
                  { value: "fri", label: "Fr" },
                ]}
                aria-label="Choose weekdays"
              />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={dayToggleGroupApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
