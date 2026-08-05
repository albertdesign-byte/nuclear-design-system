import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const alertImport = `import { Alert, AlertDescription, AlertTitle } from "@/components/alert";`;

export const alertInstallationUiSnippet = tsxSnippet(`${alertImport}

export function Example() {
  return (
    <Alert>
      <AlertTitle>Follow-up scheduled</AlertTitle>
      <AlertDescription>
        Cardiology consult confirmed for Monday at 09:00.
      </AlertDescription>
    </Alert>
  );
}`);

export const alertRealScreenSnippet = tsxSnippet(`${alertImport}
import { AlertTriangleIcon } from "lucide-react";

export function Example() {
  return (
    <Alert variant="destructive">
      <AlertTriangleIcon />
      <AlertTitle>Potassium critically high — 6.8 mEq/L</AlertTitle>
      <AlertDescription>
        Result exceeds critical threshold. Notify attending physician
        immediately and repeat stat draw to confirm.
      </AlertDescription>
    </Alert>
  );
}`);

export const alertUsageSnippet = exampleSnippet(
  `<Alert>
  <AlertTitle>Follow-up scheduled</AlertTitle>
  <AlertDescription>
    Cardiology consult confirmed for Monday at 09:00.
  </AlertDescription>
</Alert>`,
  { imports: [alertImport] }
);

export const alertDestructiveSnippet = exampleSnippet(
  `<Alert variant="destructive">
  <AlertTriangleIcon />
  <AlertTitle>Potassium critically high — 6.8 mEq/L</AlertTitle>
  <AlertDescription>
    Notify attending physician immediately.
  </AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\nimport { AlertTriangleIcon } from "lucide-react";`] }
);

export const alertSuccessSnippet = exampleSnippet(
  `<Alert variant="success">
  <InfoIcon />
  <AlertTitle>Cancelation policy.</AlertTitle>
  <AlertDescription>
    Cancel at least 24 hours before your appointment for a full refund.
  </AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\nimport { InfoIcon } from "lucide-react";`] }
);
