import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const cardImport = `import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";`;

export const cardInstallationUiSnippet = tsxSnippet(`${cardImport}

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen del paciente</CardTitle>
        <CardDescription>Última actualización hace 2 horas</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Signos vitales dentro de rangos normales.</p>
      </CardContent>
    </Card>
  );
}`);

export const cardRealScreenSnippet = tsxSnippet(`${cardImport}
import { Badge } from "@/components/badge";

export function Example() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>María González</CardTitle>
        <CardDescription>ID #48291 · 58 años</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Estado</span>
          <Badge variant="secondary">Estable</Badge>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Próxima cita</span>
          <span>18 Jul 2026</span>
        </div>
      </CardContent>
      <CardFooter>
        <button className="text-sm text-primary">Ver expediente</button>
      </CardFooter>
    </Card>
  );
}`);

export const cardUsageSnippet = exampleSnippet(
  `<Card>
  <CardHeader>
    <CardTitle>Resumen del paciente</CardTitle>
    <CardDescription>Última actualización hace 2 horas</CardDescription>
  </CardHeader>
  <CardContent>Signos vitales dentro de rangos normales.</CardContent>
</Card>`,
  { imports: [cardImport] }
);

export const cardSizeSnippet = exampleSnippet(
  `<div className="grid gap-4 sm:grid-cols-2">
  <Card size="default">
    <CardHeader>
      <CardTitle>Default</CardTitle>
    </CardHeader>
    <CardContent>Padding estándar con --space-card.</CardContent>
  </Card>
  <Card size="sm">
    <CardHeader>
      <CardTitle>Small</CardTitle>
    </CardHeader>
    <CardContent>Padding compacto para paneles densos.</CardContent>
  </Card>
</div>`,
  { imports: [cardImport] }
);

export const cardHeaderSnippet = exampleSnippet(
  `<CardHeader>
  <CardTitle>Resumen del paciente</CardTitle>
  <CardDescription>Última actualización hace 2 horas</CardDescription>
</CardHeader>`,
  { imports: [cardImport] }
);

export const cardContentSnippet = exampleSnippet(
  `<CardContent>
  <p>Signos vitales dentro de rangos normales.</p>
</CardContent>`,
  { imports: [cardImport] }
);

export const cardFooterSnippet = exampleSnippet(
  `<CardFooter>
  <button className="text-sm">Ver expediente</button>
</CardFooter>`,
  { imports: [cardImport] }
);

export const cardActionSnippet = tsxSnippet(`${cardImport}
import { Button } from "@/components/button";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen del paciente</CardTitle>
        <CardDescription>Última actualización hace 2 horas</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Editar
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}`);
