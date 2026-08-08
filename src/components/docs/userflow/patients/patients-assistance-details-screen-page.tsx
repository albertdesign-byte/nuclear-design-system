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

function AssistanceDetailsBackButton({ onClick }: { onClick: () => void }) {
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

function AssistanceDetailsIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Add assistance details
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        Share anything we should know about your needs during the appointment.
      </p>
      <p className="text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
        If you do not have more details, you can continue.
      </p>
    </div>
  );
}

type AssistanceDetailsFieldProps = {
  details: string;
  onDetailsChange: (value: string) => void;
};

function AssistanceDetailsField({ details, onDetailsChange }: AssistanceDetailsFieldProps) {
  return (
    <div className={cn(patientsFieldGroupClassName)}>
      <Label htmlFor="patients-assistance-details">Assistance details (optional)</Label>
      <Textarea
        id="patients-assistance-details"
        value={details}
        placeholder="E.g. I need Spanish interpreter"
        onChange={(event) => onDetailsChange(event.target.value)}
        aria-label="Assistance details"
      />
    </div>
  );
}

type AssistanceDetailsScreenProps = {
  onBack: () => void;
  details: string;
  onDetailsChange: (value: string) => void;
  onContinue: () => void;
};

function PatientsAssistanceDetailsMobileScreen({
  onBack,
  details,
  onDetailsChange,
  onContinue,
}: AssistanceDetailsScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <AssistanceDetailsBackButton onClick={onBack} />
          <AssistanceDetailsIntro />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <AssistanceDetailsField details={details} onDetailsChange={onDetailsChange} />
        </PatientsShellInputPanel>

        <PatientsFlowContinueButton onClick={onContinue}>
          Continue
        </PatientsFlowContinueButton>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsAssistanceDetailsDesktopScreen({
  onBack,
  details,
  onDetailsChange,
  onContinue,
}: AssistanceDetailsScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.88} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <AssistanceDetailsBackButton onClick={onBack} />
            <AssistanceDetailsIntro />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <AssistanceDetailsField details={details} onDetailsChange={onDetailsChange} />
          </PatientsShellInputPanel>

          <PatientsFlowContinueButton onClick={onContinue}>
            Continue
          </PatientsFlowContinueButton>
        </div>
      </PatientsShellMainDesktop>
    </PatientsShell>
  );
}

export function PatientsAssistanceDetailsScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [details, setDetails] = useState("");

  function handleBack() {
    router.push("/docs/userflow/patients/assistance");
  }

  function handleContinue() {
    router.push("/docs/userflow/patients/mammogram");
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
            <PatientsAssistanceDetailsDesktopScreen {...screenProps} />
          ) : (
            <PatientsAssistanceDetailsMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
