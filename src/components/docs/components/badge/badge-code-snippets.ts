import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const badgeImport = 'import { Badge } from "@/components/badge";';

export const badgeInstallationUiSnippet = tsxSnippet(`${badgeImport}

export function Example() {
  return (
    <>
      <Badge>Active</Badge>
      <Badge variant="secondary">Under review</Badge>
    </>
  );
}`);

export const badgeRealScreenSnippet = tsxSnippet(`${badgeImport}

export function Example() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
      <div>
        <p className="text-sm font-medium">Maria Gonzalez</p>
        <p className="text-xs text-muted-foreground">ID #48291 · Cardiology</p>
      </div>
      <Badge variant="secondary">Stable</Badge>
    </div>
  );
}`);

export const badgeUsageSnippet = exampleSnippet('<Badge>Pending</Badge>', {
  imports: [badgeImport],
});

export const badgeSizeSnippet = exampleSnippet(
  `<div className="flex items-center gap-2">
  <Badge size="sm">SM</Badge>
  <Badge size="md">MD</Badge>
  <Badge size="lg">LG</Badge>
</div>`,
  { imports: [badgeImport] }
);

export const badgeDefaultSnippet = exampleSnippet('<Badge>Active</Badge>', {
  imports: [badgeImport],
});

export const badgeSecondarySnippet = exampleSnippet(
  '<Badge variant="secondary">Under review</Badge>',
  { imports: [badgeImport] }
);

export const badgeDestructiveSnippet = exampleSnippet(
  '<Badge variant="destructive">Critical</Badge>',
  { imports: [badgeImport] }
);

export const badgeOutlineSnippet = exampleSnippet(
  '<Badge variant="outline">Observation</Badge>',
  { imports: [badgeImport] }
);

export const badgeGhostSnippet = exampleSnippet(
  '<Badge variant="ghost">Archived</Badge>',
  { imports: [badgeImport] }
);

export const badgeLinkSnippet = exampleSnippet(
  '<Badge variant="link">View history</Badge>',
  { imports: [badgeImport] }
);
