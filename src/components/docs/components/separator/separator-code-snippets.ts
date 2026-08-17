import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const separatorImport = 'import { Separator } from "@/components/separator";';

export const separatorInstallationUiSnippet = tsxSnippet(`${separatorImport}

export function Example() {
  return (
    <div className="space-y-4">
      <p className="text-sm">Section A</p>
      <Separator />
      <p className="text-sm">Section B</p>
    </div>
  );
}`);

export const separatorRealScreenSnippet = tsxSnippet(`${separatorImport}

export function Example() {
  return (
    <form className="space-y-4">
      <fieldset>
        <legend className="text-base font-semibold">Patient data</legend>
        <p className="text-sm text-muted-foreground">Name and identification.</p>
      </fieldset>
      <Separator />
      <fieldset>
        <legend className="text-base font-semibold">Clinical history</legend>
        <p className="text-sm text-muted-foreground">Allergies and comorbidities.</p>
      </fieldset>
    </form>
  );
}`);

export const separatorUsageSnippet = exampleSnippet(
  `<div className="space-y-4">
  <p>Section A</p>
  <Separator />
  <p>Section B</p>
</div>`,
  { imports: [separatorImport] }
);

export const separatorVerticalSnippet = exampleSnippet(
  `<div className="flex h-20 items-stretch gap-4">
  <div className="flex-1 rounded-md bg-muted" />
  <Separator orientation="vertical" />
  <div className="flex-1 rounded-md bg-muted" />
</div>`,
  { imports: [separatorImport] }
);
