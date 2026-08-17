import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dialogImport = `import { Button } from "@/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { InputField } from "@/components/input";`;

export const dialogInstallationUiSnippet = tsxSnippet(`${dialogImport}

export function Example() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Dialog description.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`);

export const dialogRealScreenSnippet = tsxSnippet(`${dialogImport}

export function Example() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Edit patient
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit patient</DialogTitle>
          <DialogDescription>
            Update demographic information for Elena Morales.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-1">
          <InputField id="patient-name" label="Patient name" defaultValue="Elena Morales" />
          <InputField id="patient-dob" label="Date of birth" type="date" defaultValue="1987-04-16" />
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Save changes</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`);

export const dialogUsageSnippet = exampleSnippet(
  `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Open dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Dialog description.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  { imports: [dialogImport] }
);

export const dialogFooterSnippet = exampleSnippet(
  `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Cancel appointment
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Cancel appointment?</DialogTitle>
      <DialogDescription>
        The appointment will be marked as canceled.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Keep appointment</Button>
      <Button intent="danger">Confirm cancellation</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  { imports: [dialogImport] }
);

export const dialogWithoutCloseSnippet = exampleSnippet(
  `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Open dialog
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>No close button</DialogTitle>
      <DialogDescription>
        Use footer actions to close.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button variant="outline">Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  { imports: [dialogImport] }
);

function dialogFormSnippet({
  trigger,
  title,
  description,
  fields,
  submitLabel,
}: {
  trigger: string;
  title: string;
  description: string;
  fields: string;
  submitLabel: string;
}) {
  return exampleSnippet(
    `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    ${trigger}
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>${title}</DialogTitle>
      <DialogDescription>${description}</DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-1">
      ${fields}
    </div>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
      <DialogClose render={<Button />}>${submitLabel}</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    { imports: [dialogImport] }
  );
}

export const editPatientDialogSnippet = dialogFormSnippet({
  trigger: "Edit patient",
  title: "Edit patient",
  description: "Update demographic information for Elena Morales.",
  fields: `<InputField id="patient-name" label="Patient name" defaultValue="Elena Morales" />
      <InputField id="patient-dob" label="Date of birth" type="date" defaultValue="1987-04-16" />`,
  submitLabel: "Save changes",
});

export const createPatientDialogSnippet = dialogFormSnippet({
  trigger: "Create patient",
  title: "Create patient",
  description: "Add a patient before creating a referral or scheduling a study.",
  fields: `<InputField id="patient-name" label="Patient name" required />
      <InputField id="patient-mrn" label="Medical record number" required />`,
  submitLabel: "Create patient",
});

export const editProfileDialogSnippet = dialogFormSnippet({
  trigger: "Edit profile",
  title: "Edit profile",
  description: "Update your contact information and notification details.",
  fields: `<InputField id="profile-email" label="Email address" type="email" />
      <InputField id="profile-phone" label="Phone number" type="tel" />`,
  submitLabel: "Save profile",
});

export const uploadStudyDialogSnippet = dialogFormSnippet({
  trigger: "Upload study",
  title: "Upload imaging study",
  description: "Add DICOM files and associate them with the patient record.",
  fields: `<InputField id="study-patient" label="Patient" readOnly />
      <InputField id="study-files" label="Study files" type="file" required />`,
  submitLabel: "Upload study",
});
