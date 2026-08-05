import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const fieldErrorImport = 'import { FieldError } from "@/components/field-error";';

export const fieldErrorInstallationUiSnippet = tsxSnippet(`${fieldErrorImport}

export function Example() {
  return <FieldError id="email-error">Enter a valid email address.</FieldError>;
}`);

export const fieldErrorRealScreenSnippet = tsxSnippet(`${fieldErrorImport}
import { Input } from "@/components/input";
import { Label } from "@/components/label";

export function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-[var(--space-stack-xs)]">
      <Label htmlFor="email" invalid>
        Email
      </Label>
      <Input id="email" aria-invalid aria-describedby="email-error" defaultValue="not-an-email" />
      <FieldError id="email-error">Enter a valid email address.</FieldError>
    </div>
  );
}`);

export const fieldErrorUsageSnippet = exampleSnippet(
  `<FieldError id="email-error">Enter a valid email address.</FieldError>`,
  { imports: [fieldErrorImport] }
);

export const fieldErrorFieldGroupSnippet = exampleSnippet(
  `<div className="flex flex-col gap-[var(--space-stack-xs)]">
  <Label htmlFor="email" invalid>
    Email
  </Label>
  <Input id="email" aria-invalid aria-describedby="email-error" />
  <FieldError id="email-error">Enter a valid email address.</FieldError>
</div>`,
  {
    imports: [
      fieldErrorImport,
      'import { Input } from "@/components/input";',
      'import { Label } from "@/components/label";',
    ],
  }
);

export const fieldErrorIconSnippet = exampleSnippet(
  `<FieldError showIcon id="upload-error">
  Use file in .pdf, .jpeg or .png
</FieldError>`,
  { imports: [fieldErrorImport] }
);
