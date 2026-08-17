import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const cardImport = `import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/components/card";`;

export const cardInstallationUiSnippet = tsxSnippet(`${cardImport}

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3>Patient summary</h3>
        </CardTitle>
        <CardDescription>Last updated 2 hours ago</CardDescription>
      </CardHeader>
      <CardContent>Vital signs within normal ranges.</CardContent>
    </Card>
  );
}`);

export const cardRealScreenSnippet = tsxSnippet(`${cardImport}
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

export function Example() {
  return (
    <Card role="region" aria-labelledby="patient-summary-title">
      <CardHeader>
        <CardTitle>
          <h3 id="patient-summary-title">Maria Gonzalez</h3>
        </CardTitle>
        <CardDescription>MRN 48291 · 58 years</CardDescription>
        <CardAction>
          <Badge variant="secondary">Stable</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-[var(--space-stack-sm)]">
        <p>Cardiology · Next appointment 18 Aug 2026</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">View record</Button>
      </CardFooter>
    </Card>
  );
}`);

export const cardUsageSnippet = exampleSnippet(
  `<Card>
  <CardHeader>
    <CardTitle>
      <h3>Patient summary</h3>
    </CardTitle>
    <CardDescription>Last updated 2 hours ago</CardDescription>
  </CardHeader>
  <CardContent>Vital signs within normal ranges.</CardContent>
</Card>`,
  { imports: [cardImport] }
);

export const cardVariantsSnippet = exampleSnippet(
  `<Card>
  <CardHeader>
    <CardTitle><h3>Card with Header</h3></CardTitle>
  </CardHeader>
  <CardContent>Flexible content</CardContent>
  <CardFooter>Responsive actions</CardFooter>
</Card>`,
  { imports: [cardImport] }
);

export const cardImageSnippet = exampleSnippet(
  `<Card>
  <CardMedia>
    <img
      src="/study-preview.jpg"
      alt="Axial CT study preview"
      className="aspect-video w-full object-cover"
    />
  </CardMedia>
  <CardHeader>
    <CardTitle><h3>Chest CT</h3></CardTitle>
    <CardDescription>246 images</CardDescription>
  </CardHeader>
</Card>`,
  { imports: [cardImport] }
);

export const cardFlexibilitySnippet = exampleSnippet(
  `<Card>
  <CardHeader>
    <CardTitle>
      <h3>A long title wraps instead of being truncated</h3>
    </CardTitle>
    <CardDescription>
      Descriptions remain visible as content grows.
    </CardDescription>
  </CardHeader>
  <CardContent>{dynamicContent}</CardContent>
  <CardFooter className="justify-end">
    <Button variant="ghost">Cancel</Button>
    <Button variant="outline">Save draft</Button>
    <Button>Finalize</Button>
  </CardFooter>
</Card>`,
  {
    imports: [
      cardImport,
      `import { Button } from "@/components/button";`,
    ],
  }
);

export const cardResponsiveSnippet = exampleSnippet(
  `<div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <Card key={item.id} className="min-w-0">
      <CardHeader>
        <CardTitle><h3>{item.title}</h3></CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>{item.content}</CardContent>
    </Card>
  ))}
</div>`,
  { imports: [cardImport] }
);

export const cardHealthcareSnippet = exampleSnippet(
  `<Card role="region" aria-labelledby="study-card-title">
  <CardHeader>
    <CardTitle>
      <h3 id="study-card-title">Study Card</h3>
    </CardTitle>
    <CardDescription>Chest CT with contrast</CardDescription>
  </CardHeader>
  <CardContent>246 images · Acquired today at 09:42</CardContent>
</Card>`,
  { imports: [cardImport] }
);

export const cardAccessibilitySnippet = tsxSnippet(`${cardImport}

export function AccessibleCard() {
  return (
    <Card role="region" aria-labelledby="report-card-title">
      <CardHeader>
        <CardTitle>
          <h3 id="report-card-title">Report Card</h3>
        </CardTitle>
        <CardDescription>Radiology findings</CardDescription>
      </CardHeader>
      <CardContent>Draft updated 12 minutes ago.</CardContent>
    </Card>
  );
}`);
