"use client";

import { useState, type ReactNode } from "react";

import {
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
import { Button } from "@/components/button";
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
import { Dropzone } from "@/components/dropzone";
import { InputField } from "@/components/input";

type DialogFormExampleProps = {
  trigger: string;
  title: string;
  description: string;
  submitLabel: string;
  children: ReactNode;
};

function DialogFormExample({
  trigger,
  title,
  description,
  submitLabel,
  children,
}: DialogFormExampleProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" size="sm" />}>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-[var(--space-stack-md)] py-[var(--space-stack-xs)]">
          {children}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>{submitLabel}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function EditPatientDialogPreview() {
  return (
    <DialogFormExample
      trigger="Edit patient"
      title="Edit patient"
      description="Update demographic information for Elena Morales."
      submitLabel="Save changes"
    >
      <InputField id="edit-patient-name" label="Patient name" defaultValue="Elena Morales" />
      <InputField id="edit-patient-dob" label="Date of birth" type="date" defaultValue="1987-04-16" />
    </DialogFormExample>
  );
}

export function CreatePatientDialogPreview() {
  return (
    <DialogFormExample
      trigger="Create patient"
      title="Create patient"
      description="Add a patient before creating a referral or scheduling a study."
      submitLabel="Create patient"
    >
      <InputField id="create-patient-name" label="Patient name" placeholder="Enter full name" required />
      <InputField id="create-patient-mrn" label="Medical record number" placeholder="Enter MRN" required />
    </DialogFormExample>
  );
}

export function EditProfileDialogPreview() {
  return (
    <DialogFormExample
      trigger="Edit profile"
      title="Edit profile"
      description="Update your contact information and notification details."
      submitLabel="Save profile"
    >
      <InputField id="edit-profile-email" label="Email address" type="email" defaultValue="aisha.patel@medmo.com" />
      <InputField id="edit-profile-phone" label="Phone number" type="tel" defaultValue="(212) 555-0184" />
    </DialogFormExample>
  );
}

export function UploadStudyDialogPreview() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <DialogFormExample
      trigger="Upload study"
      title="Upload imaging study"
      description="Add DICOM files and associate them with the patient record."
      submitLabel="Upload study"
    >
      <InputField id="upload-study-patient" label="Patient" defaultValue="Elena Morales · MRN 104829" readOnly />
      <Dropzone
        id="upload-study-files"
        label="Study files"
        file={file}
        onFileChange={setFile}
        accept=".pdf,.jpeg,.jpg,.png"
        maxSize={10 * 1024 * 1024}
      />
    </DialogFormExample>
  );
}

type DestructiveDialogExampleProps = {
  trigger: string;
  title: string;
  description: string;
  actionLabel: string;
};

function DestructiveDialogExample({
  trigger,
  title,
  description,
  actionLabel,
}: DestructiveDialogExampleProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline" intent="danger" size="sm" />}
      >
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction intent="danger">{actionLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function DeletePatientAlertDialogPreview() {
  return (
    <DestructiveDialogExample
      trigger="Delete patient"
      title="Delete Elena Morales?"
      description="This permanently removes the patient profile and disconnects associated referrals. This action cannot be undone."
      actionLabel="Delete patient"
    />
  );
}

export function DeleteStudyAlertDialogPreview() {
  return (
    <DestructiveDialogExample
      trigger="Delete study"
      title="Delete MRI brain study?"
      description="This permanently removes the DICOM files and radiology report from the patient record."
      actionLabel="Delete study"
    />
  );
}

export function RemoveUserAccessAlertDialogPreview() {
  return (
    <DestructiveDialogExample
      trigger="Remove user access"
      title="Remove Dr. Aisha Patel&apos;s access?"
      description="The user will immediately lose access to Medmo Admin and assigned patient records."
      actionLabel="Remove access"
    />
  );
}

export function ArchiveRecordAlertDialogPreview() {
  return (
    <DestructiveDialogExample
      trigger="Archive record"
      title="Archive referral record REC-18420?"
      description="The record will leave active workflows and move to the archive. Restore it from Records if needed."
      actionLabel="Archive record"
    />
  );
}

export function DialogComparisonTable() {
  const rows = [
    ["Purpose", "Complete a focused task", "Confirm a consequential decision"],
    ["User Input", "Multiple fields or controls", "Usually confirm or cancel only"],
    ["Confirmation Required", "Not inherently", "Always"],
    ["Complex Forms", "Supported and recommended", "Do not use"],
    ["Destructive Actions", "Do not use for final confirmation", "Primary use case"],
  ];

  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)]">
      <table className="w-full border-collapse text-left text-[length:var(--text-body-small-size)]">
        <thead className="bg-[var(--color-surface-muted)] text-[var(--color-text-primary)]">
          <tr>
            <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium">Criteria</th>
            <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium">Dialog</th>
            <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium">Alert Dialog</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([criterion, dialog, alertDialog]) => (
            <tr key={criterion} className="border-t border-[var(--color-border-subtle)]">
              <th className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] font-medium text-[var(--color-text-primary)]">{criterion}</th>
              <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] text-[var(--color-text-secondary)]">{dialog}</td>
              <td className="px-[var(--space-inline-md)] py-[var(--space-stack-sm)] text-[var(--color-text-secondary)]">{alertDialog}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
