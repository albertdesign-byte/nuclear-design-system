import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const switchImport = 'import { Switch } from "@/components/switch";';
const switchFieldImports = `import { Label } from "@/components/label";
import { Switch } from "@/components/switch";`;

export const switchInstallationUiSnippet = tsxSnippet(`${switchImport}

export function Example() {
  return (
    <>
      <Switch defaultChecked aria-label="Enable reminders" />
      <Switch aria-label="Enable notifications" />
    </>
  );
}`);

export const switchRealScreenSnippet = tsxSnippet(`${switchFieldImports}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Patient preferences</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Configure automatic reminders for the treatment plan.
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Label htmlFor="medication-reminders">Medication reminders</Label>
        <Switch id="medication-reminders" defaultChecked />
      </div>
    </div>
  );
}`);

export const switchUsageSnippet = exampleSnippet(
  '<Switch defaultChecked aria-label="Enable reminders" />',
  { imports: [switchImport] }
);

export const switchSizeSnippet = exampleSnippet(
  `<div className="flex items-center gap-3">
  <Switch size="sm" defaultChecked aria-label="Small" />
  <Switch size="md" defaultChecked aria-label="Medium" />
  <Switch size="lg" defaultChecked aria-label="Large" />
</div>`,
  { imports: [switchImport] }
);

export const switchCheckedSnippet = exampleSnippet(
  `<div className="flex items-center gap-3">
  <Switch aria-label="Off" />
  <Switch defaultChecked aria-label="On" />
</div>`,
  { imports: [switchImport] }
);

export const switchDisabledSnippet = exampleSnippet(
  `<div className="flex items-center gap-3">
  <Switch disabled aria-label="Disabled off" />
  <Switch disabled defaultChecked aria-label="Disabled on" />
</div>`,
  { imports: [switchImport] }
);

export const switchInvalidSnippet = exampleSnippet(
  '<Switch aria-invalid aria-label="Invalid" />',
  { imports: [switchImport] }
);

export const switchWithLabelSnippet = tsxSnippet(`${switchFieldImports}

export function Example() {
  return (
    <div className="flex max-w-md items-center justify-between gap-[var(--space-inline-md)]">
      <Label htmlFor="lab-alerts">Critical results alerts</Label>
      <Switch id="lab-alerts" defaultChecked />
    </div>
  );
}`);
