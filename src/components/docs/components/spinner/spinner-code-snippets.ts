import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const spinnerImport = 'import { Spinner } from "@/components/spinner";';

export const spinnerInstallationUiSnippet = tsxSnippet(`${spinnerImport}

export function Example() {
  return <Spinner />;
}`);

export const spinnerRealScreenSnippet = tsxSnippet(`${spinnerImport}

export function Example() {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground" aria-live="polite">
      <Spinner size="sm" aria-hidden />
      Saving record…
    </div>
  );
}`);

export const spinnerUsageSnippet = exampleSnippet("<Spinner />", {
  imports: [spinnerImport],
});

export const spinnerSizeSnippet = exampleSnippet(
  `<div className="flex items-center gap-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>`,
  { imports: [spinnerImport] }
);

export const spinnerInlineSnippet = exampleSnippet(
  `<button type="button" disabled className="inline-flex items-center gap-2">
  <Spinner size="sm" aria-hidden />
  Processing…
</button>`,
  { imports: [spinnerImport] }
);
