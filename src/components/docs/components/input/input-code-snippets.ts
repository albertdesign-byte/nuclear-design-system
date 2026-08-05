import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const inputImport = 'import { Input } from "@/components/input";';

export const inputInstallationUiSnippet = tsxSnippet(`${inputImport}

export function Example() {
  return (
    <>
      <Input placeholder="Search patients…" className="max-w-xs" />
      <Input defaultValue="Elena Morales" className="max-w-xs" />
    </>
  );
}`);

export const inputRealScreenSnippet = tsxSnippet(`${inputImport}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Información de contacto</h3>
      <div className="mt-4 grid gap-3">
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium">
            Teléfono
          </label>
          <Input id="phone" defaultValue="+1 (555) 014-2098" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" defaultValue="elena.morales@email.com" />
        </div>
      </div>
    </div>
  );
}`);

export const inputUsageSnippet = exampleSnippet(
  '<Input placeholder="Patient name" />',
  { imports: [inputImport] }
);

export const inputSizeSnippet = exampleSnippet(
  `<div className="flex max-w-md flex-col gap-2">
  <Input size="sm" placeholder="Small" />
  <Input size="md" placeholder="Medium" />
  <Input size="lg" placeholder="Large" />
</div>`,
  { imports: [inputImport] }
);

export const inputDisabledSnippet = exampleSnippet(
  '<Input disabled placeholder="Disabled" />',
  { imports: [inputImport] }
);

export const inputInvalidSnippet = exampleSnippet(
  '<Input aria-invalid placeholder="Invalid value" />',
  { imports: [inputImport] }
);

export const inputFullWidthSnippet = exampleSnippet(
  `<div className="w-full max-w-md">
  <Input fullWidth placeholder="Full width field" />
</div>`,
  { imports: [inputImport] }
);

export const inputFileSnippet = exampleSnippet(
  '<Input type="file" />',
  { imports: [inputImport] }
);

export const inputFieldGroupSnippet = exampleSnippet(
  `<div className="flex flex-col gap-[var(--space-stack-xs)]">
  <Label htmlFor="email" invalid>
    Email
  </Label>
  <Input id="email" aria-invalid aria-describedby="email-error" />
  <FieldError id="email-error">Enter a valid email address.</FieldError>
</div>`,
  {
    imports: [
      inputImport,
      'import { Label } from "@/components/label";',
      'import { FieldError } from "@/components/field-error";',
    ],
  }
);

export const inputPlaceholderSnippet = exampleSnippet(
  '<Input placeholder="Search by MRN or patient name" />',
  { imports: [inputImport] }
);
