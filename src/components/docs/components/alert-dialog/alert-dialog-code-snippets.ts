import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const alertDialogImport = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog";
import { Button } from "@/components/button";`;

export const alertDialogInstallationUiSnippet = tsxSnippet(`${alertDialogImport}

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Delete record
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`);

export const alertDialogRealScreenSnippet = tsxSnippet(`${alertDialogImport}

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button intent="danger" variant="outline" />}>
        Delete record
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete clinical record?</AlertDialogTitle>
          <AlertDialogDescription>
            This permanently removes the progress note from Maria Gonzalez's
            chart. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction intent="danger">Delete record</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`);

export const alertDialogUsageSnippet = exampleSnippet(
  `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>
    Delete record
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete clinical record?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction intent="danger">Delete record</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  { imports: [alertDialogImport] }
);

function destructiveAlertDialogSnippet({
  trigger,
  title,
  description,
  actionLabel,
}: {
  trigger: string;
  title: string;
  description: string;
  actionLabel: string;
}) {
  return exampleSnippet(
    `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" intent="danger" />}>
    ${trigger}
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>${title}</AlertDialogTitle>
      <AlertDialogDescription>
        ${description}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction intent="danger">${actionLabel}</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    { imports: [alertDialogImport] }
  );
}

export const deletePatientAlertDialogSnippet = destructiveAlertDialogSnippet({
  trigger: "Delete patient",
  title: "Delete Elena Morales?",
  description:
    "This permanently removes the patient profile and disconnects associated referrals. This action cannot be undone.",
  actionLabel: "Delete patient",
});

export const deleteStudyAlertDialogSnippet = destructiveAlertDialogSnippet({
  trigger: "Delete study",
  title: "Delete MRI brain study?",
  description:
    "This permanently removes the DICOM files and radiology report from the patient record.",
  actionLabel: "Delete study",
});

export const removeUserAccessAlertDialogSnippet = destructiveAlertDialogSnippet({
  trigger: "Remove user access",
  title: "Remove Dr. Aisha Patel's access?",
  description:
    "The user will immediately lose access to Medmo Admin and assigned patient records.",
  actionLabel: "Remove access",
});

export const archiveRecordAlertDialogSnippet = destructiveAlertDialogSnippet({
  trigger: "Archive record",
  title: "Archive referral record REC-18420?",
  description:
    "The record will leave active workflows and move to the archive. Restore it from Records if needed.",
  actionLabel: "Archive record",
});
