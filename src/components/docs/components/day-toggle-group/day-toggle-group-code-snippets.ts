import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dayToggleGroupImport = `import { DayToggleGroup } from "@/components/day-toggle-group";`;

export const dayToggleGroupInstallationUiSnippet = tsxSnippet(`${dayToggleGroupImport}
import { useState } from "react";

export function Example() {
  const [days, setDays] = useState(["tue", "fri"]);

  return (
    <DayToggleGroup value={days} onValueChange={setDays} aria-label="Choose days" />
  );
}`);

export const dayToggleGroupRealScreenSnippet = tsxSnippet(`${dayToggleGroupImport}
import { Label } from "@/components/label";
import { useState } from "react";

export function Example() {
  const [days, setDays] = useState(["tue", "fri"]);

  return (
    <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-xs)]">
      <Label>Choose days</Label>
      <DayToggleGroup value={days} onValueChange={setDays} aria-label="Choose days" />
    </div>
  );
}`);

export const dayToggleGroupUsageSnippet = exampleSnippet(
  `<DayToggleGroup
  value={days}
  onValueChange={setDays}
  aria-label="Choose days"
/>`,
  { imports: [dayToggleGroupImport, 'import { useState } from "react";'] }
);

export const dayToggleGroupDisabledSnippet = exampleSnippet(
  `<DayToggleGroup
  value={["mon", "wed"]}
  onValueChange={() => {}}
  disabled
  aria-label="Choose days"
/>`,
  { imports: [dayToggleGroupImport] }
);

export const dayToggleGroupCustomDaysSnippet = exampleSnippet(
  `<DayToggleGroup
  value={days}
  onValueChange={setDays}
  days={[
    { value: "mon", label: "Mo" },
    { value: "wed", label: "We" },
    { value: "fri", label: "Fr" },
  ]}
  aria-label="Choose weekdays"
/>`,
  { imports: [dayToggleGroupImport] }
);
