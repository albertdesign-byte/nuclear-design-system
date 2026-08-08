"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { PatientsFlowContinueButton } from "@/components/docs/userflow/patients/patients-flow-buttons";
import { Dropzone } from "@/components/dropzone";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
import {
  PatientsShell,
  PatientsShellCard,
  PatientsShellHeader,
  PatientsShellLocale,
  PatientsShellMain,
  PatientsShellMainDesktop,
  PatientsShellProgress,
  patientsShellDesktopContentClassName,
} from "@/components/patients-shell";

const FILE_ACCEPT = ".pdf,.jpeg,.jpg,.png";
const FILE_TYPE_ERROR = "Use file in .pdf, .jpeg or .png";

function PrescriptionBackButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="-ml-[var(--space-inline-xs)] self-start px-[var(--space-inline-xs)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
      onClick={onClick}
    >
      <ChevronLeftIcon aria-hidden />
      Back
    </Button>
  );
}

function getFileValidationError(file: File | null) {
  if (!file) {
    return undefined;
  }

  const lowerName = file.name.toLowerCase();
  const hasValidExtension =
    lowerName.endsWith(".pdf") ||
    lowerName.endsWith(".jpeg") ||
    lowerName.endsWith(".jpg") ||
    lowerName.endsWith(".png");

  if (!hasValidExtension) {
    return FILE_TYPE_ERROR;
  }

  return undefined;
}

type PrescriptionFormProps = {
  onBack: () => void;
  prescriptionFile: File | null;
  prescriptionFileError?: string;
  onPrescriptionFileChange: (file: File | null) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PrescriptionIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Add your prescription
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        Upload your prescription or referral from your doctor.
      </p>
      <p className="text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
        This is required to schedule your radiology visit.
      </p>
    </div>
  );
}

function PrescriptionForm({
  prescriptionFile,
  prescriptionFileError,
  onPrescriptionFileChange,
}: Pick<
  PrescriptionFormProps,
  "prescriptionFile" | "prescriptionFileError" | "onPrescriptionFileChange"
>) {
  return (
    <>
      <PrescriptionIntro />
      <Dropzone
        id="patients-prescription-upload"
        label="Upload prescription"
        file={prescriptionFile}
        accept={FILE_ACCEPT}
        error={prescriptionFileError}
        onFileChange={onPrescriptionFileChange}
      />
    </>
  );
}

function PatientsPrescriptionMobileScreen({
  onBack,
  prescriptionFile,
  prescriptionFileError,
  onPrescriptionFileChange,
  canContinue,
  onContinue,
}: PrescriptionFormProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1">
        <PatientsShellCard>
          <PrescriptionBackButton onClick={onBack} />
          <PrescriptionForm
            prescriptionFile={prescriptionFile}
            prescriptionFileError={prescriptionFileError}
            onPrescriptionFileChange={onPrescriptionFileChange}
          />
          <PatientsFlowContinueButton
                        disabled={!canContinue}
            onClick={onContinue}
          >
            Continue
          </PatientsFlowContinueButton>
        </PatientsShellCard>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsPrescriptionDesktopScreen({
  onBack,
  prescriptionFile,
  prescriptionFileError,
  onPrescriptionFileChange,
  canContinue,
  onContinue,
}: PrescriptionFormProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.98} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <PrescriptionBackButton onClick={onBack} />
            <PrescriptionForm
              prescriptionFile={prescriptionFile}
              prescriptionFileError={prescriptionFileError}
              onPrescriptionFileChange={onPrescriptionFileChange}
            />
          </PatientsShellCard>

          <PatientsFlowContinueButton
                        disabled={!canContinue}
            onClick={onContinue}
          >
            Continue
          </PatientsFlowContinueButton>
        </div>
      </PatientsShellMainDesktop>
    </PatientsShell>
  );
}

export function PatientsPrescriptionScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);

  const prescriptionFileError = getFileValidationError(prescriptionFile);

  const canContinue = useMemo(
    () => prescriptionFile !== null && !prescriptionFileError,
    [prescriptionFile, prescriptionFileError]
  );

  function handleBack() {
    router.push("/docs/userflow/patients/height-weight");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/general-question");
  }

  const screenProps = {
    onBack: handleBack,
    prescriptionFile,
    prescriptionFileError,
    onPrescriptionFileChange: setPrescriptionFile,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsPrescriptionDesktopScreen {...screenProps} />
          ) : (
            <PatientsPrescriptionMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
