import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const datePickerImport = `import { DatePicker } from "@/components/date-picker";`;
const datePickerFieldImports = `import { DatePicker } from "@/components/date-picker";
import { Label } from "@/components/label";`;

export const datePickerInstallationUiSnippet = tsxSnippet(`${datePickerImport}
import { useState } from "react";

export function Example() {
  const [date, setDate] = useState(null);

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="MM/DD/YYYY"
    />
  );
}`);

export const datePickerRealScreenSnippet = tsxSnippet(`${datePickerFieldImports}
import { useState } from "react";

export function Example() {
  const [dateOfBirth, setDateOfBirth] = useState(null);

  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="date-of-birth">Date of birth</Label>
      <DatePicker
        id="date-of-birth"
        value={dateOfBirth}
        onChange={setDateOfBirth}
        placeholder="MM/DD/YYYY"
      />
    </div>
  );
}`);

export const datePickerUsageSnippet = exampleSnippet(
  `<DatePicker
  value={date}
  onChange={setDate}
  placeholder="MM/DD/YYYY"
/>`,
  { imports: [datePickerImport, 'import { useState } from "react";'] }
);

export const datePickerControlledSnippet = exampleSnippet(
  `<DatePicker
  value={date}
  onChange={setDate}
  placeholder="MM/DD/YYYY"
/>`,
  { imports: [datePickerImport, 'import { useState } from "react";'] }
);
