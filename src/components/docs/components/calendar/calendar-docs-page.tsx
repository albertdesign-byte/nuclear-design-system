"use client";

import { useState } from "react";

import { Calendar } from "@/components/calendar";
import { DatePicker } from "@/components/date-picker";
import {
  calendarDatePickerSnippet,
  calendarDisabledSnippet,
  calendarInstallationUiSnippet,
  calendarRealScreenSnippet,
  calendarSelectedSnippet,
  calendarTodaySnippet,
  calendarUsageSnippet,
} from "@/components/docs/components/calendar/calendar-code-snippets";
import { CalendarPreviewFrame } from "@/components/docs/components/calendar/calendar-preview-frame";
import { CalendarRealScreenPreview } from "@/components/docs/components/calendar/calendar-real-screen-preview";
import { calendarTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { Label } from "@/components/label";

const juneView = new Date(2024, 5, 1);
const juneSelected = new Date(2024, 5, 12);

const calendarApiRows = [
  { prop: "value", type: "Date | null", defaultValue: "null" },
  { prop: "onSelect", type: "(date: Date) => void", defaultValue: "—" },
  { prop: "locale", type: "string", defaultValue: '"en-US"' },
  { prop: "viewDate", type: "Date", defaultValue: "current month" },
  { prop: "defaultViewDate", type: "Date", defaultValue: "undefined" },
  { prop: "onViewDateChange", type: "(date: Date) => void", defaultValue: "—" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "from", type: "Date | null", defaultValue: "null" },
  { prop: "to", type: "Date | null", defaultValue: "null" },
  { prop: "showFooter", type: "boolean", defaultValue: "true" },
  { prop: "onClear", type: "() => void", defaultValue: "—" },
  { prop: "onToday", type: "() => void", defaultValue: "selects today" },
];

export function CalendarDocsPage() {
  const [date, setDate] = useState<Date | null>(juneSelected);
  const [usageDate, setUsageDate] = useState<Date | null>(null);
  const [todayDate, setTodayDate] = useState<Date | null>(null);
  const [pickerDate, setPickerDate] = useState<Date | null>(juneSelected);

  return (
    <DocsComponentPage
      title="Calendar"
      description="Standalone month grid for selecting a date. DatePicker and DateRangePicker use this calendar in a popover."
      tocItems={calendarTocItems}
      realScreen={{
        preview: <CalendarRealScreenPreview />,
        code: calendarRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={calendarInstallationUiSnippet}>
              <CalendarPreviewFrame>
                <Calendar
                  value={date}
                  defaultViewDate={juneView}
                  onSelect={setDate}
                  onClear={() => setDate(null)}
                />
              </CalendarPreviewFrame>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Render <DocsInlineCode>Calendar</DocsInlineCode> when the month
                grid is the primary surface. Use{" "}
                <DocsInlineCode>DatePicker</DocsInlineCode> when the date is
                typed as <DocsInlineCode>MM/DD/YYYY</DocsInlineCode> or opened
                from a field.
              </>
            }
          >
            <DocsPreview code={calendarUsageSnippet}>
              <CalendarPreviewFrame>
                <Calendar
                  value={usageDate}
                  defaultViewDate={juneView}
                  onSelect={setUsageDate}
                  onClear={() => setUsageDate(null)}
                />
              </CalendarPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="default"
            title="Default"
            description="Month name and year, weekday row, days of the month, and adjacent-month days. Hover uses the surface hover token."
          >
            <DocsPreview code={calendarUsageSnippet}>
              <CalendarPreviewFrame>
                <Calendar
                  value={null}
                  defaultViewDate={juneView}
                  onSelect={() => {}}
                />
              </CalendarPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="selected"
            title="Selected"
            description="The selected day uses the primary action fill. Click a day to select it."
          >
            <DocsPreview code={calendarSelectedSnippet}>
              <CalendarPreviewFrame>
                <Calendar
                  value={juneSelected}
                  defaultViewDate={juneView}
                  onSelect={() => {}}
                />
              </CalendarPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="today"
            title="Today"
            description="The current day keeps a primary border when it is not selected. Today in the footer jumps to and selects the current date."
          >
            <DocsPreview code={calendarTodaySnippet}>
              <CalendarPreviewFrame>
                <Calendar
                  value={todayDate}
                  onSelect={setTodayDate}
                  onClear={() => setTodayDate(null)}
                />
              </CalendarPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="disabled"
            title="Disabled"
            description="Disable the entire calendar when the date cannot be edited. Navigation, days, and footer actions are inert."
          >
            <DocsPreview code={calendarDisabledSnippet}>
              <CalendarPreviewFrame>
                <Calendar disabled value={juneSelected} defaultViewDate={juneView} />
              </CalendarPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="with-date-picker"
            title="With Date Picker"
            description={
              <>
                <DocsInlineCode>DatePicker</DocsInlineCode> composes this
                calendar inside a popover. Do not nest{" "}
                <DocsInlineCode>Calendar</DocsInlineCode> as a child of{" "}
                <DocsInlineCode>DatePicker</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={calendarDatePickerSnippet}>
              <div className="flex w-full max-w-xs flex-col gap-[var(--space-stack-xs)]">
                <Label htmlFor="calendar-docs-date-picker">Date of birth</Label>
                <DatePicker
                  id="calendar-docs-date-picker"
                  value={pickerDate}
                  onChange={setPickerDate}
                  placeholder="MM/DD/YYYY"
                />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Guidelines"
            description="Calendar is the date grid. DatePicker and DateRangePicker are the form controls that host it."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Use <DocsInlineCode>Calendar</DocsInlineCode> when the month
                grid is always visible — scheduling panels, inline date
                selection.
              </li>
              <li>
                Use <DocsInlineCode>DatePicker</DocsInlineCode> for a single
                typed date (date of birth, mammogram date).
              </li>
              <li>
                Use <DocsInlineCode>DateRangePicker</DocsInlineCode> for a start
                and end date. It highlights the range on the same calendar.
              </li>
              <li>
                Click the month/year title to switch between days, months, and
                years. Adjacent-month days remain selectable.
              </li>
            </ul>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Keyboard and screen reader support for the month grid."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Tab moves through the title, month navigation, each day, Clear,
                and Today.
              </li>
              <li>
                Focus rings use <DocsInlineCode>--focus-ring-width</DocsInlineCode>{" "}
                and <DocsInlineCode>--color-focus-ring</DocsInlineCode>.
              </li>
              <li>
                Each day exposes a full date name. The current day includes{" "}
                <DocsInlineCode>aria-current=&quot;date&quot;</DocsInlineCode>.
                The selected day uses{" "}
                <DocsInlineCode>aria-pressed</DocsInlineCode>.
              </li>
              <li>
                Disabled calendars set{" "}
                <DocsInlineCode>disabled</DocsInlineCode> on every control and{" "}
                <DocsInlineCode>aria-disabled</DocsInlineCode> on the group.
              </li>
            </ul>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={calendarApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
