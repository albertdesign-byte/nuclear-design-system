import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const switchImport = 'import { Switch } from "@/components/switch";';

export const switchInstallationUiSnippet = tsxSnippet(`${switchImport}

export function Example() {
  return (
    <>
      <Switch defaultChecked aria-label="Enable reminders" />
      <Switch aria-label="Enable notifications" />
    </>
  );
}`);

export const switchRealScreenSnippet = tsxSnippet(`${switchImport}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Preferencias del paciente</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Configura recordatorios automáticos para el plan de tratamiento.
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <label htmlFor="medication-reminders" className="text-sm">
          Recordatorios de medicación
        </label>
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

export const switchWithLabelSnippet = tsxSnippet(`${switchImport}

export function Example() {
  return (
    <div className="flex items-center justify-between gap-3">
      <label htmlFor="lab-alerts" className="text-sm">
        Alertas de resultados críticos
      </label>
      <Switch id="lab-alerts" defaultChecked />
    </div>
  );
}`);
