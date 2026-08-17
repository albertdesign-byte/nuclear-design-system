"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { PatientsFlowContinueButton } from "@/components/docs/userflow/patients/patients-flow-buttons";
import { DatePicker } from "@/components/date-picker";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
import { Label } from "@/components/label";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutHeader,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutLocale,
  MultiStepFlowLayoutMain,
  MultiStepFlowLayoutMainDesktop,
  MultiStepFlowLayoutProgress,
  multiStepFlowFieldGroupClassName,
  multiStepFlowLayoutDesktopContentClassName,
} from "@/components/multi-step-flow-layout";
import { cn } from "@/lib/utils";

type DateOfBirthFormProps = {
  dateOfBirth: Date | null;
  onDateOfBirthChange: (value: Date | null) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function DateOfBirthField({
  dateOfBirth,
  onDateOfBirthChange,
}: Pick<DateOfBirthFormProps, "dateOfBirth" | "onDateOfBirthChange">) {
  return (
    <div className={cn(multiStepFlowFieldGroupClassName)}>
      <Label htmlFor="patients-dob">Date of birth</Label>
      <DatePicker
        id="patients-dob"
        value={dateOfBirth}
        onChange={onDateOfBirthChange}
        placeholder="MM/DD/YYYY"
        aria-label="Date of birth"
      />
    </div>
  );
}

function PatientsDateOfBirthMobileScreen({
  dateOfBirth,
  onDateOfBirthChange,
  canContinue,
  onContinue,
}: DateOfBirthFormProps) {
  return (
    <MultiStepFlowLayout className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <MultiStepFlowLayoutHeader>
        <MedmoLogoLockup />
        <MultiStepFlowLayoutLocale />
      </MultiStepFlowLayoutHeader>

      <MultiStepFlowLayoutMain className="flex-1">
        <MultiStepFlowLayoutCard>
          <div className="flex flex-col gap-[var(--space-stack-xs)]">
            <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
              Confirm your date of birth
            </h1>
            <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
              We use this to verify your identity before continuing.
            </p>
          </div>

          <DateOfBirthField
            dateOfBirth={dateOfBirth}
            onDateOfBirthChange={onDateOfBirthChange}
          />
          <PatientsFlowContinueButton
                        disabled={!canContinue}
            onClick={onContinue}
          >
            Continue
          </PatientsFlowContinueButton>
        </MultiStepFlowLayoutCard>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  );
}

function PatientsDateOfBirthDesktopScreen({
  dateOfBirth,
  onDateOfBirthChange,
  canContinue,
  onContinue,
}: DateOfBirthFormProps) {
  return (
    <MultiStepFlowLayout className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <MultiStepFlowLayoutHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <MultiStepFlowLayoutLocale showGlobe />
        </MultiStepFlowLayoutHeader>
        <MultiStepFlowLayoutProgress value={0.33} />
      </div>

      <MultiStepFlowLayoutMainDesktop className="flex-1">
        <div className={multiStepFlowLayoutDesktopContentClassName}>
          <MultiStepFlowLayoutCard className="gap-[var(--space-stack-sm)]">
            <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
              Confirm your identity
            </h1>
            <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
              To keep your information safe, please enter your date of birth.
            </p>
          </MultiStepFlowLayoutCard>

          <MultiStepFlowLayoutInputPanel>
            <DateOfBirthField
              dateOfBirth={dateOfBirth}
              onDateOfBirthChange={onDateOfBirthChange}
            />
          </MultiStepFlowLayoutInputPanel>

          <PatientsFlowContinueButton
                        disabled={!canContinue}
            onClick={onContinue}
          >
            Continue
          </PatientsFlowContinueButton>
        </div>
      </MultiStepFlowLayoutMainDesktop>
    </MultiStepFlowLayout>
  );
}

export function PatientsDateOfBirthScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const canContinue = dateOfBirth !== null;

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/welcome");
  }

  const formProps = {
    dateOfBirth,
    onDateOfBirthChange: setDateOfBirth,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsDateOfBirthDesktopScreen {...formProps} />
          ) : (
            <PatientsDateOfBirthMobileScreen {...formProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
