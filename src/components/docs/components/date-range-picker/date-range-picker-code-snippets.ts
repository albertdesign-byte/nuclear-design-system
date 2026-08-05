import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dateRangePickerImport = `import { DateRangePicker } from "@/components/date-range-picker";`;

export const dateRangePickerInstallationUiSnippet = tsxSnippet(`${dateRangePickerImport}
import { useState } from "react";

export function Example() {
  const [range, setRange] = useState({ from: null, to: null });

  return (
    <DateRangePicker
      from={range.from}
      to={range.to}
      onRangeChange={setRange}
    />
  );
}`);

export const dateRangePickerRealScreenSnippet = tsxSnippet(`${dateRangePickerImport}
import { useState } from "react";

export function Example() {
  const [range, setRange] = useState({
    from: new Date(2026, 6, 20),
    to: null,
  });

  return (
    <DateRangePicker
      from={range.from}
      to={range.to}
      onRangeChange={setRange}
    />
  );
}`);

export const dateRangePickerUsageSnippet = exampleSnippet(
  `<DateRangePicker
  from={range.from}
  to={range.to}
  onRangeChange={setRange}
/>`,
  { imports: [dateRangePickerImport, 'import { useState } from "react";'] }
);

export const dateRangePickerControlledSnippet = exampleSnippet(
  `<DateRangePicker
  from={range.from}
  to={range.to}
  onRangeChange={setRange}
/>`,
  { imports: [dateRangePickerImport, 'import { useState } from "react";'] }
);
