import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const badgeImport = 'import { Badge } from "@/components/badge";';

export const badgeInstallationUiSnippet = tsxSnippet(`${badgeImport}

export function Example() {
  return (
    <>
      <Badge>Activo</Badge>
      <Badge variant="secondary">En revisión</Badge>
    </>
  );
}`);

export const badgeRealScreenSnippet = tsxSnippet(`${badgeImport}

export function Example() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
      <div>
        <p className="text-sm font-medium">María González</p>
        <p className="text-xs text-muted-foreground">ID #48291 · Cardiología</p>
      </div>
      <Badge variant="secondary">Estable</Badge>
    </div>
  );
}`);

export const badgeUsageSnippet = exampleSnippet('<Badge>Pendiente</Badge>', {
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

export const badgeDefaultSnippet = exampleSnippet('<Badge>Activo</Badge>', {
  imports: [badgeImport],
});

export const badgeSecondarySnippet = exampleSnippet(
  '<Badge variant="secondary">En revisión</Badge>',
  { imports: [badgeImport] }
);

export const badgeDestructiveSnippet = exampleSnippet(
  '<Badge variant="destructive">Crítico</Badge>',
  { imports: [badgeImport] }
);

export const badgeOutlineSnippet = exampleSnippet(
  '<Badge variant="outline">Observación</Badge>',
  { imports: [badgeImport] }
);

export const badgeGhostSnippet = exampleSnippet(
  '<Badge variant="ghost">Archivado</Badge>',
  { imports: [badgeImport] }
);

export const badgeLinkSnippet = exampleSnippet(
  '<Badge variant="link">Ver historial</Badge>',
  { imports: [badgeImport] }
);
