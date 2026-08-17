import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const textareaImport = 'import { Textarea } from "@/components/textarea";';

export const textareaInstallationUiSnippet = tsxSnippet(`${textareaImport}

export function Example() {
  return (
    <>
      <Textarea placeholder="Clinical notes…" className="max-w-md" />
      <Textarea
        defaultValue="Patient reports mild discomfort. No acute symptoms."
        className="max-w-md"
      />
    </>
  );
}`);

export const textareaRealScreenSnippet = tsxSnippet(`${textareaImport}

export function Example() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Clinical notes</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Document relevant observations before closing the visit.
      </p>
      <div className="mt-4 grid gap-1.5">
        <label htmlFor="notes" className="text-sm font-medium">
          Observaciones
        </label>
        <Textarea
          id="notes"
          placeholder="Evaluation summary, follow-up plan…"
          defaultValue="Patient stable. Continue current treatment and follow-up in 30 days."
        />
      </div>
    </div>
  );
}`);

export const textareaUsageSnippet = exampleSnippet(
  '<Textarea placeholder="Clinical notes" />',
  { imports: [textareaImport] }
);

export const textareaSizeSnippet = exampleSnippet(
  `<div className="flex max-w-md flex-col gap-2">
  <Textarea size="sm" placeholder="Small" />
  <Textarea size="md" placeholder="Medium" />
  <Textarea size="lg" placeholder="Large" />
</div>`,
  { imports: [textareaImport] }
);

export const textareaDisabledSnippet = exampleSnippet(
  '<Textarea disabled placeholder="Disabled" />',
  { imports: [textareaImport] }
);

export const textareaInvalidSnippet = exampleSnippet(
  '<Textarea aria-invalid placeholder="Invalid value" />',
  { imports: [textareaImport] }
);

export const textareaFullWidthSnippet = exampleSnippet(
  `<div className="w-full max-w-md">
  <Textarea fullWidth placeholder="Full width field" />
</div>`,
  { imports: [textareaImport] }
);

export const textareaPlaceholderSnippet = exampleSnippet(
  '<Textarea placeholder="Describe symptoms, history, or follow-up plan" />',
  { imports: [textareaImport] }
);
