"use client";

import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
} from "lucide-react";
import { useState } from "react";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/components/alert";
import { Button } from "@/components/button";

export function AlertAuditPreview() {
  return (
    <div className="flex w-full flex-col gap-[var(--space-stack-md)]">
      <div className="flex flex-col gap-[var(--space-stack-sm)]">
        <span className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
          Current Patient Alert
        </span>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-success-border)] bg-[var(--color-success-background)] p-[var(--space-inline-sm)] text-[var(--color-success-text)]">
          <div className="flex items-start gap-[var(--space-inline-sm)]">
            <InfoIcon className="mt-[var(--spacing-2)] size-[var(--icon-sm)] shrink-0" aria-hidden />
            <div>
              <p className="font-medium">Cancelation policy.</p>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)]">
                Cancel at least 24 hours before your appointment for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[var(--space-stack-sm)]">
        <span className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
          Current Admin Alert
        </span>
        <div className="rounded-lg border border-[var(--color-error-border)] bg-[var(--color-error-background)] p-4 text-[var(--color-error-text)]">
          <p className="font-semibold">Danger zone</p>
          <p className="mt-1 text-[length:var(--text-body-small-size)]">
            Deleting this record is permanent and cannot be undone.
          </p>
          <Button className="mt-3" size="sm" variant="outline" intent="danger">
            Delete record
          </Button>
        </div>
      </div>
    </div>
  );
}

export function UnifiedAlertPreview() {
  return (
    <Alert variant="info">
      <AlertIcon><InfoIcon /></AlertIcon>
      <AlertTitle>New imaging results available</AlertTitle>
      <AlertDescription>
        The radiology report is ready for review in the patient record.
      </AlertDescription>
    </Alert>
  );
}

export function AlertSuccessPreview() {
  return (
    <Alert variant="success">
      <AlertIcon><CheckCircle2Icon /></AlertIcon>
      <AlertTitle>Results uploaded successfully</AlertTitle>
      <AlertDescription>
        The imaging study and report are now available in the patient record.
      </AlertDescription>
    </Alert>
  );
}

export function AlertWarningPreview() {
  return (
    <Alert variant="warning">
      <AlertIcon><AlertTriangleIcon /></AlertIcon>
      <AlertTitle>Missing patient information</AlertTitle>
      <AlertDescription>
        Add the patient&apos;s date of birth and insurance member ID before scheduling.
      </AlertDescription>
    </Alert>
  );
}

export function AlertErrorPreview() {
  return (
    <Alert variant="error">
      <AlertIcon><AlertCircleIcon /></AlertIcon>
      <AlertTitle>Failed to upload study</AlertTitle>
      <AlertDescription>
        The DICOM files could not be uploaded. Check the connection and try again.
      </AlertDescription>
    </Alert>
  );
}

export function AlertInfoPreview() {
  return (
    <Alert variant="info">
      <AlertIcon><InfoIcon /></AlertIcon>
      <AlertTitle>New imaging results available</AlertTitle>
      <AlertDescription>
        A new MRI report is ready for review in the patient record.
      </AlertDescription>
    </Alert>
  );
}

export function BasicAlertPreview() {
  return (
    <Alert variant="info">
      <AlertDescription>
        The appointment time was updated by the imaging facility.
      </AlertDescription>
    </Alert>
  );
}

export function AlertWithIconPreview() {
  return (
    <Alert variant="warning">
      <AlertIcon><AlertTriangleIcon /></AlertIcon>
      <AlertDescription>
        Insurance verification is still pending.
      </AlertDescription>
    </Alert>
  );
}

export function AlertWithTitlePreview() {
  return (
    <Alert variant="success">
      <AlertTitle>Referral received</AlertTitle>
    </Alert>
  );
}

export function AlertWithDescriptionPreview() {
  return (
    <Alert variant="info">
      <AlertTitle>Preparation instructions</AlertTitle>
      <AlertDescription>
        Do not eat or drink for four hours before the imaging appointment.
      </AlertDescription>
    </Alert>
  );
}

export function DismissibleAlertPreview() {
  const [key, setKey] = useState(0);
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <Button size="sm" variant="outline" onClick={() => {
        setKey((current) => current + 1);
        setVisible(true);
      }}>
        Show alert again
      </Button>
    );
  }

  return (
    <Alert
      key={key}
      variant="info"
      dismissible
      onDismiss={() => setVisible(false)}
    >
      <AlertIcon><InfoIcon /></AlertIcon>
      <AlertTitle>New imaging results available</AlertTitle>
      <AlertDescription>
        Review the report when it is convenient.
      </AlertDescription>
    </Alert>
  );
}

export function AlertWithActionPreview() {
  return (
    <Alert variant="warning">
      <AlertIcon><AlertTriangleIcon /></AlertIcon>
      <AlertTitle>Missing patient information</AlertTitle>
      <AlertDescription>
        Complete the required demographic fields before scheduling.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">Review patient</Button>
      </AlertAction>
    </Alert>
  );
}

export function PersistentAlertPreview() {
  return (
    <Alert variant="error">
      <AlertIcon><AlertCircleIcon /></AlertIcon>
      <AlertTitle>Failed to upload study</AlertTitle>
      <AlertDescription>
        This alert remains visible until the upload succeeds or the issue is resolved.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">Try again</Button>
      </AlertAction>
    </Alert>
  );
}
