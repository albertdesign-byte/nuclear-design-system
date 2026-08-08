"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { PatientsFlowContinueButton } from "@/components/docs/userflow/patients/patients-flow-buttons";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
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
import { Textarea } from "@/components/textarea";
import { cn } from "@/lib/utils";

function AvailabilityDetailsBackButton({ onClick }: { onClick: () => void }) {
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

function AvailabilityDetailsIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Add availability details
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        Share anything we should know about your schedule. For example: specific times,
        locations, or requests.
      </p>
      <p className="text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
        If you do not have more details, you can continue.
      </p>
    </div>
  );
}

type AvailabilityDetailsFieldProps = {
  details: string;
  onDetailsChange: (value: string) => void;
};

function AvailabilityDetailsField({ details, onDetailsChange }: AvailabilityDetailsFieldProps) {
  return (
    <div className={cn(patientsFieldGroupClassName)}>
      <Label htmlFor="patients-availability-details">Availability details (optional)</Label>
      <Textarea
        id="patients-availability-details"
        value={details}
        placeholder="E.g. I am also available on Tuesdays from 12 PM to 1:30 PM"
        onChange={(event) => onDetailsChange(event.target.value)}
        aria-label="Availability details"
      />
    </div>
  );
}

type AvailabilityDetailsScreenProps = {
  onBack: () => void;
  details: string;
  onDetailsChange: (value: string) => void;
  onContinue: () => void;
};

function PatientsAvailabilityDetailsMobileScreen({
  onBack,
  details,
  onDetailsChange,
  onContinue,
}: AvailabilityDetailsScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <AvailabilityDetailsBackButton onClick={onBack} />
          <AvailabilityDetailsIntro />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <AvailabilityDetailsField details={details} onDetailsChange={onDetailsChange} />
        </PatientsShellInputPanel>

        <PatientsFlowContinueButton onClick={onContinue}>
          Continue
        </PatientsFlowContinueButton>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsAvailabilityDetailsDesktopScreen({
  onBack,
  details,
  onDetailsChange,
  onContinue,
}: AvailabilityDetailsScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.75} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <AvailabilityDetailsBackButton onClick={onBack} />
            <AvailabilityDetailsIntro />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <AvailabilityDetailsField details={details} onDetailsChange={onDetailsChange} />
          </PatientsShellInputPanel>

          <PatientsFlowContinueButton onClick={onContinue}>
            Continue
          </PatientsFlowContinueButton>
        </div>
      </PatientsShellMainDesktop>
    </PatientsShell>
  );
}

export function PatientsAvailabilityDetailsScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [details, setDetails] = useState("");

  function handleBack() {
    router.push("/docs/userflow/patients/availability");
  }

  function handleContinue() {
    router.push("/docs/userflow/patients/covid");
  }

  const screenProps = {
    onBack: handleBack,
    details,
    onDetailsChange: setDetails,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsAvailabilityDetailsDesktopScreen {...screenProps} />
          ) : (
            <PatientsAvailabilityDetailsMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
