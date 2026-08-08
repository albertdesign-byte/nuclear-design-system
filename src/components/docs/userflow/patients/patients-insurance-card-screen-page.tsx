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
import { cn } from "@/lib/utils";

const FILE_ACCEPT = ".pdf,.jpeg,.jpg,.png";
const FILE_TYPE_ERROR = "Use file in .pdf, .jpeg or .png";

function InsuranceCardBackButton({ onClick }: { onClick: () => void }) {
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

type InsuranceCardFormProps = {
  onBack: () => void;
  frontFile: File | null;
  backFile: File | null;
  frontFileError?: string;
  backFileError?: string;
  onFrontFileChange: (file: File | null) => void;
  onBackFileChange: (file: File | null) => void;
  onSkip: () => void;
  canContinue: boolean;
  onContinue: () => void;
};

function InsuranceCardIntro({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Add your insurance
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        We use this to find radiology centers that accept your insurance.
      </p>
      <p className="text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
        If you do not have it,{" "}
        <button
          type="button"
          className={cn(
            "font-semibold text-[var(--color-text-link)] underline-offset-[3px]",
            "transition-[var(--motion-hover)] hover:text-[var(--color-text-link-hover)] hover:underline",
            "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
          )}
          onClick={onSkip}
        >
          you can continue
        </button>
        .
      </p>
    </div>
  );
}

function InsuranceCardForm({
  frontFile,
  backFile,
  frontFileError,
  backFileError,
  onFrontFileChange,
  onBackFileChange,
  onSkip,
}: Pick<
  InsuranceCardFormProps,
  | "frontFile"
  | "backFile"
  | "frontFileError"
  | "backFileError"
  | "onFrontFileChange"
  | "onBackFileChange"
  | "onSkip"
>) {
  return (
    <>
      <InsuranceCardIntro onSkip={onSkip} />
      <Dropzone
        id="patients-insurance-card-front"
        label="Upload front of card"
        file={frontFile}
        accept={FILE_ACCEPT}
        error={frontFileError}
        onFileChange={onFrontFileChange}
      />
      <Dropzone
        id="patients-insurance-card-back"
        label="Upload back of card"
        file={backFile}
        accept={FILE_ACCEPT}
        error={backFileError}
        onFileChange={onBackFileChange}
      />
    </>
  );
}

function PatientsInsuranceCardMobileScreen({
  onBack,
  frontFile,
  backFile,
  frontFileError,
  backFileError,
  onFrontFileChange,
  onBackFileChange,
  onSkip,
  canContinue,
  onContinue,
}: InsuranceCardFormProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1">
        <PatientsShellCard>
          <InsuranceCardBackButton onClick={onBack} />
          <InsuranceCardForm
            frontFile={frontFile}
            backFile={backFile}
            frontFileError={frontFileError}
            backFileError={backFileError}
            onFrontFileChange={onFrontFileChange}
            onBackFileChange={onBackFileChange}
            onSkip={onSkip}
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

function PatientsInsuranceCardDesktopScreen({
  onBack,
  frontFile,
  backFile,
  frontFileError,
  backFileError,
  onFrontFileChange,
  onBackFileChange,
  onSkip,
  canContinue,
  onContinue,
}: InsuranceCardFormProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.85} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <InsuranceCardBackButton onClick={onBack} />
            <InsuranceCardForm
              frontFile={frontFile}
              backFile={backFile}
              frontFileError={frontFileError}
              backFileError={backFileError}
              onFrontFileChange={onFrontFileChange}
              onBackFileChange={onBackFileChange}
              onSkip={onSkip}
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

export function PatientsInsuranceCardScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);

  const frontFileError = getFileValidationError(frontFile);
  const backFileError = getFileValidationError(backFile);

  const canContinue = useMemo(
    () => !frontFileError && !backFileError,
    [frontFileError, backFileError]
  );

  function handleBack() {
    router.push("/docs/userflow/patients/insurance");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/share-results");
  }

  const screenProps = {
    onBack: handleBack,
    frontFile,
    backFile,
    frontFileError,
    backFileError,
    onFrontFileChange: setFrontFile,
    onBackFileChange: setBackFile,
    onSkip: handleContinue,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsInsuranceCardDesktopScreen {...screenProps} />
          ) : (
            <PatientsInsuranceCardMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
