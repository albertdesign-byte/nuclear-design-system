import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const alertImport = `import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/components/alert";`;

const iconImports =
  'import { AlertCircleIcon, AlertTriangleIcon, CheckCircle2Icon, InfoIcon } from "lucide-react";';

export const alertInstallationUiSnippet = tsxSnippet(`${alertImport}
${iconImports}

export function Example() {
  return (
    <Alert variant="info">
      <AlertIcon><InfoIcon /></AlertIcon>
      <AlertTitle>New imaging results available</AlertTitle>
      <AlertDescription>
        The radiology report is ready for review in the patient record.
      </AlertDescription>
    </Alert>
  );
}`);

export const alertRealScreenSnippet = tsxSnippet(`${alertImport}
${iconImports}

export function Example() {
  return (
    <Alert variant="error">
      <AlertIcon><AlertCircleIcon /></AlertIcon>
      <AlertTitle>Failed to upload study</AlertTitle>
      <AlertDescription>
        The DICOM files could not be uploaded. Check the connection and try again.
      </AlertDescription>
    </Alert>
  );
}`);

export const alertUsageSnippet = exampleSnippet(
  `<Alert variant="info">
  <AlertIcon><InfoIcon /></AlertIcon>
  <AlertTitle>New imaging results available</AlertTitle>
  <AlertDescription>
    The radiology report is ready for review in the patient record.
  </AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\n${iconImports}`] }
);

export const alertSuccessSnippet = exampleSnippet(
  `<Alert variant="success">
  <AlertIcon><CheckCircle2Icon /></AlertIcon>
  <AlertTitle>Results uploaded successfully</AlertTitle>
  <AlertDescription>
    The imaging study and report are now available in the patient record.
  </AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\n${iconImports}`] }
);

export const alertWarningSnippet = exampleSnippet(
  `<Alert variant="warning">
  <AlertIcon><AlertTriangleIcon /></AlertIcon>
  <AlertTitle>Missing patient information</AlertTitle>
  <AlertDescription>
    Add the patient's date of birth and insurance member ID before scheduling.
  </AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\n${iconImports}`] }
);

export const alertErrorSnippet = exampleSnippet(
  `<Alert variant="error">
  <AlertIcon><AlertCircleIcon /></AlertIcon>
  <AlertTitle>Failed to upload study</AlertTitle>
  <AlertDescription>
    The DICOM files could not be uploaded. Check the connection and try again.
  </AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\n${iconImports}`] }
);

/** @deprecated Use alertErrorSnippet. */
export const alertDestructiveSnippet = alertErrorSnippet;

export const alertInfoSnippet = exampleSnippet(
  `<Alert variant="info">
  <AlertIcon><InfoIcon /></AlertIcon>
  <AlertTitle>New imaging results available</AlertTitle>
  <AlertDescription>
    A new MRI report is ready for review in the patient record.
  </AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\n${iconImports}`] }
);

export const alertBasicSnippet = exampleSnippet(
  `<Alert variant="info">
  <AlertDescription>
    The appointment time was updated by the imaging facility.
  </AlertDescription>
</Alert>`,
  { imports: [alertImport] }
);

export const alertWithIconSnippet = exampleSnippet(
  `<Alert variant="warning">
  <AlertIcon><AlertTriangleIcon /></AlertIcon>
  <AlertDescription>Insurance verification is still pending.</AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\n${iconImports}`] }
);

export const alertWithTitleSnippet = exampleSnippet(
  `<Alert variant="success">
  <AlertTitle>Referral received</AlertTitle>
</Alert>`,
  { imports: [alertImport] }
);

export const alertWithDescriptionSnippet = exampleSnippet(
  `<Alert variant="info">
  <AlertTitle>Preparation instructions</AlertTitle>
  <AlertDescription>
    Do not eat or drink for four hours before the imaging appointment.
  </AlertDescription>
</Alert>`,
  { imports: [alertImport] }
);

export const alertDismissibleSnippet = exampleSnippet(
  `<Alert variant="info" dismissible>
  <AlertIcon><InfoIcon /></AlertIcon>
  <AlertTitle>New imaging results available</AlertTitle>
  <AlertDescription>Review the report when it is convenient.</AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\n${iconImports}`] }
);

export const alertWithActionSnippet = exampleSnippet(
  `<Alert variant="warning">
  <AlertIcon><AlertTriangleIcon /></AlertIcon>
  <AlertTitle>Missing patient information</AlertTitle>
  <AlertDescription>
    Complete the required demographic fields before scheduling.
  </AlertDescription>
  <AlertAction>
    <Button size="sm" variant="outline">Review patient</Button>
  </AlertAction>
</Alert>`,
  {
    imports: [
      `${alertImport}\n${iconImports}\nimport { Button } from "@/components/button";`,
    ],
  }
);

export const alertPersistentSnippet = exampleSnippet(
  `<Alert variant="error">
  <AlertIcon><AlertCircleIcon /></AlertIcon>
  <AlertTitle>Failed to upload study</AlertTitle>
  <AlertDescription>
    This alert remains visible until the upload succeeds or the issue is resolved.
  </AlertDescription>
</Alert>`,
  { imports: [`${alertImport}\n${iconImports}`] }
);

export const alertAccessibilitySnippet = alertWarningSnippet;
