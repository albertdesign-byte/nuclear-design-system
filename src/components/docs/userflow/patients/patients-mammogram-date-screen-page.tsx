"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { DatePicker } from "@/components/date-picker";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
import { setMammogramLocationBackTarget } from "@/components/docs/userflow/patients/patients-mammogram-location-screen-page";
import { Label } from "@/components/label";
import {
  PatientsShell,
  PatientsShellCard,
  PatientsShellHeader,
  PatientsShellInputPanel,
  PatientsShellLocale,
  PatientsShellMain,
  PatientsShellMainDesktop,
  PatientsShellProgress,
  patientsFieldGroupClassName,
  patientsShellDesktopContentClassName,
} from "@/components/patients-shell";
import { cn } from "@/lib/utils";

function MammogramDateBackButton({ onClick }: { onClick: () => void }) {
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

function MammogramDateIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        What was the date of your last mammogram?
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        Enter a date. It can be approximate.
      </p>
    </div>
  );
}

type MammogramDateFieldProps = {
  lastMammogramDate: Date | null;
  onLastMammogramDateChange: (value: Date | null) => void;
};

function MammogramDateField({
  lastMammogramDate,
  onLastMammogramDateChange,
}: MammogramDateFieldProps) {
  return (
    <div className={cn(patientsFieldGroupClassName)}>
      <Label htmlFor="patients-mammogram-date">Last mammogram</Label>
      <DatePicker
        id="patients-mammogram-date"
        value={lastMammogramDate}
        onChange={onLastMammogramDateChange}
        placeholder="MM/DD/YYYY"
        aria-label="Last mammogram date"
      />
    </div>
  );
}

type MammogramDateScreenProps = {
  onBack: () => void;
  lastMammogramDate: Date | null;
  onLastMammogramDateChange: (value: Date | null) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsMammogramDateMobileScreen({
  onBack,
  lastMammogramDate,
  onLastMammogramDateChange,
  canContinue,
  onContinue,
}: MammogramDateScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <MammogramDateBackButton onClick={onBack} />
          <MammogramDateIntro />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <MammogramDateField
            lastMammogramDate={lastMammogramDate}
            onLastMammogramDateChange={onLastMammogramDateChange}
          />
        </PatientsShellInputPanel>

        <Button
          className="w-full"
          variant="primary"
          disabled={!canContinue}
          onClick={onContinue}
        >
          Continue
        </Button>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsMammogramDateDesktopScreen({
  onBack,
  lastMammogramDate,
  onLastMammogramDateChange,
  canContinue,
  onContinue,
}: MammogramDateScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.92} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <MammogramDateBackButton onClick={onBack} />
            <MammogramDateIntro />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <MammogramDateField
              lastMammogramDate={lastMammogramDate}
              onLastMammogramDateChange={onLastMammogramDateChange}
            />
          </PatientsShellInputPanel>

          <Button
            className="w-full"
            variant="primary"
            disabled={!canContinue}
            onClick={onContinue}
          >
            Continue
          </Button>
        </div>
      </PatientsShellMainDesktop>
    </PatientsShell>
  );
}

export function PatientsMammogramDateScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [lastMammogramDate, setLastMammogramDate] = useState<Date | null>(null);
  const canContinue = lastMammogramDate !== null;

  function handleBack() {
    router.push("/docs/userflow/patients/mammogram");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    setMammogramLocationBackTarget("date");
    router.push("/docs/userflow/patients/mammogram-location");
  }

  const screenProps = {
    onBack: handleBack,
    lastMammogramDate,
    onLastMammogramDateChange: setLastMammogramDate,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsMammogramDateDesktopScreen {...screenProps} />
          ) : (
            <PatientsMammogramDateMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
