import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const labelImport = `import { Input } from "@/components/input";
import { Label } from "@/components/label";`;

export const labelInstallationUiSnippet = tsxSnippet(`${labelImport}

export function Example() {
  return (
    <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-sm)]">
      <Label htmlFor="name">Patient name</Label>
      <Input id="name" placeholder="Enter full legal name" />
    </div>
  );
}`);

export const labelRealScreenSnippet = tsxSnippet(`${labelImport}

export function Example() {
  return (
    <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-sm)]">
      <Label htmlFor="patient-name">Patient name</Label>
      <Input id="patient-name" placeholder="Enter full legal name" defaultValue="Maria Gonzalez" />
    </div>
  );
}`);

export const labelUsageSnippet = exampleSnippet(
  `<div className="flex flex-col gap-[var(--space-stack-sm)]">
  <Label htmlFor="patient-name">Patient name</Label>
  <Input id="patient-name" placeholder="Enter full legal name" />
</div>`,
  { imports: [labelImport] }
);

export const labelInvalidSnippet = exampleSnippet(
  `<div className="flex flex-col gap-[var(--space-stack-xs)]">
  <Label htmlFor="email" invalid>
    Email
  </Label>
  <Input id="email" aria-invalid aria-describedby="email-error" />
  <FieldError id="email-error">Enter a valid email address.</FieldError>
</div>`,
  {
    imports: [
      labelImport,
      'import { FieldError } from "@/components/field-error";',
    ],
  }
);

export const labelDisabledSnippet = exampleSnippet(
  `<div className="group flex flex-col gap-[var(--space-stack-sm)]" data-disabled="true">
  <Label htmlFor="mrn">Medical record number</Label>
  <Input id="mrn" disabled defaultValue="MRN-48291" />
</div>`,
  { imports: [labelImport] }
);
