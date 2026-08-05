import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const checkboxImport = 'import { Checkbox } from "@/components/checkbox";';

export const checkboxInstallationUiSnippet = tsxSnippet(`${checkboxImport}

export function Example() {
  return (
    <>
      <Checkbox defaultChecked aria-label="Accept terms" />
      <Checkbox aria-label="Enable notifications" />
    </>
  );
}`);

export const checkboxRealScreenSnippet = tsxSnippet(`${checkboxImport}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Consentimiento informado</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Confirma las autorizaciones requeridas antes de continuar el registro.
      </p>
      <label className="mt-4 flex items-start gap-2 text-sm">
        <Checkbox id="consent" defaultChecked />
        <span>
          Acepto el tratamiento de datos clínicos según la política del centro.
        </span>
      </label>
    </div>
  );
}`);

export const checkboxUsageSnippet = exampleSnippet(
  '<Checkbox defaultChecked aria-label="Accept terms" />',
  { imports: [checkboxImport] }
);

export const checkboxSizeSnippet = exampleSnippet(
  `<div className="flex items-center gap-3">
  <Checkbox size="sm" defaultChecked aria-label="Small" />
  <Checkbox size="md" defaultChecked aria-label="Medium" />
  <Checkbox size="lg" defaultChecked aria-label="Large" />
</div>`,
  { imports: [checkboxImport] }
);

export const checkboxDisabledSnippet = exampleSnippet(
  '<Checkbox disabled defaultChecked aria-label="Disabled" />',
  { imports: [checkboxImport] }
);

export const checkboxInvalidSnippet = exampleSnippet(
  '<Checkbox aria-invalid aria-label="Invalid" />',
  { imports: [checkboxImport] }
);

export const checkboxCheckedSnippet = exampleSnippet(
  `<div className="flex items-center gap-3">
  <Checkbox aria-label="Unchecked" />
  <Checkbox defaultChecked aria-label="Checked" />
</div>`,
  { imports: [checkboxImport] }
);

export const checkboxIndeterminateSnippet = exampleSnippet(
  '<Checkbox indeterminate aria-label="Indeterminate" />',
  { imports: [checkboxImport] }
);

export const checkboxWithLabelSnippet = tsxSnippet(`${checkboxImport}

export function Example() {
  return (
    <label className="flex items-start gap-2 text-sm">
      <Checkbox id="lab-results" defaultChecked />
      <span>Compartir resultados de laboratorio con el equipo tratante</span>
    </label>
  );
}`);
