import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const skeletonImport = 'import { Skeleton } from "@/components/skeleton";';

export const skeletonInstallationUiSnippet = tsxSnippet(`${skeletonImport}

export function Example() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-3/5" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
}`);

export const skeletonRealScreenSnippet = tsxSnippet(`${skeletonImport}

export function Example() {
  return (
    <div className="flex items-start gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-3/5" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-2/5" />
      </div>
    </div>
  );
}`);

export const skeletonUsageSnippet = exampleSnippet(
  `<div className="space-y-2">
  <Skeleton className="h-4 w-32" />
  <Skeleton className="h-10 w-full" />
</div>`,
  { imports: [skeletonImport] }
);

export const skeletonCardSnippet = exampleSnippet(
  `<div className="rounded-lg border p-4">
  <Skeleton className="mb-3 h-5 w-2/5" />
  <Skeleton className="mb-2 h-3 w-full" />
  <Skeleton className="h-3 w-4/5" />
</div>`,
  { imports: [skeletonImport] }
);
