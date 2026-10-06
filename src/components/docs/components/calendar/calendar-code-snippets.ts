import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const calendarImport = `import { Calendar } from "@/components/calendar";`;

export const calendarInstallationUiSnippet = tsxSnippet(`${calendarImport}
import { useState } from "react";

export function Example() {
  const [date, setDate] = useState(null);

  return (
    <Calendar
      value={date}
      onSelect={setDate}
      onClear={() => setDate(null)}
    />
  );
}`);

export const calendarRealScreenSnippet = tsxSnippet(`${calendarImport}
import { useState } from "react";

export function Example() {
  const [date, setDate] = useState(null);

  return (
    <Calendar
      value={date}
      onSelect={setDate}
      onClear={() => setDate(null)}
    />
  );
}`);

export const calendarUsageSnippet = exampleSnippet(
  `<Calendar
  value={date}
  onSelect={setDate}
  onClear={() => setDate(null)}
/>`,
  { imports: [calendarImport, 'import { useState } from "react";'] }
);

export const calendarSelectedSnippet = exampleSnippet(
  `<Calendar
  value={new Date(2024, 5, 12)}
  defaultViewDate={new Date(2024, 5, 1)}
  onSelect={setDate}
/>`,
  { imports: [calendarImport] }
);

export const calendarTodaySnippet = exampleSnippet(
  `<Calendar
  value={date}
  onSelect={setDate}
  onClear={() => setDate(null)}
/>`,
  { imports: [calendarImport, 'import { useState } from "react";'] }
);

export const calendarDisabledSnippet = exampleSnippet(
  `<Calendar
  disabled
  value={new Date(2024, 5, 12)}
  defaultViewDate={new Date(2024, 5, 1)}
/>`,
  { imports: [calendarImport] }
);

export const calendarDatePickerSnippet = exampleSnippet(
  `<DatePicker
  value={date}
  onChange={setDate}
  placeholder="MM/DD/YYYY"
/>`,
  {
    imports: [
      'import { DatePicker } from "@/components/date-picker";',
      'import { useState } from "react";',
    ],
  }
);
