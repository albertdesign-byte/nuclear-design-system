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
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import {
  PatientsShell,
  PatientsShellCard,
  PatientsShellHeader,
  PatientsShellInputPanel,
  PatientsShellLocale,
  PatientsShellMain,
  PatientsShellMainDesktop,
  PatientsShellProgress,
  patientsShellDesktopContentClassName,
} from "@/components/patients-shell";

type CovidSymptomsAnswer = "yes" | "no" | "prefer-not-to-answer";

const radioOptionClassName =
  "flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

function CovidBackButton({ onClick }: { onClick: () => void }) {
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

function CovidIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Have you had COVID-19 symptoms in the past 7 days?
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        Some radiology centers need this before your visit.
      </p>
    </div>
  );
}

function CovidSymptomsOptions({
  answer,
  onAnswerChange,
}: {
  answer: CovidSymptomsAnswer | null;
  onAnswerChange: (value: CovidSymptomsAnswer) => void;
}) {
  return (
    <RadioGroup
      value={answer ?? undefined}
      onValueChange={(value) => onAnswerChange(value as CovidSymptomsAnswer)}
      aria-label="COVID-19 symptoms in the past 7 days"
    >
      <label className={radioOptionClassName}>
        <RadioGroupItem value="yes" id="covid-symptoms-yes" />
        <span>Yes</span>
      </label>
      <label className={radioOptionClassName}>
        <RadioGroupItem value="no" id="covid-symptoms-no" />
        <span>No</span>
      </label>
      <label className={radioOptionClassName}>
        <RadioGroupItem value="prefer-not-to-answer" id="covid-symptoms-prefer-not" />
        <span>Prefer not to answer</span>
      </label>
    </RadioGroup>
  );
}

type CovidScreenProps = {
  onBack: () => void;
  answer: CovidSymptomsAnswer | null;
  onAnswerChange: (value: CovidSymptomsAnswer) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsCovidMobileScreen({
  onBack,
  answer,
  onAnswerChange,
  canContinue,
  onContinue,
}: CovidScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <CovidBackButton onClick={onBack} />
          <CovidIntro />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <CovidSymptomsOptions answer={answer} onAnswerChange={onAnswerChange} />
        </PatientsShellInputPanel>

        <PatientsFlowContinueButton
                    disabled={!canContinue}
          onClick={onContinue}
        >
          Continue
        </PatientsFlowContinueButton>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsCovidDesktopScreen({
  onBack,
  answer,
  onAnswerChange,
  canContinue,
  onContinue,
}: CovidScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.8} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <CovidBackButton onClick={onBack} />
            <CovidIntro />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <CovidSymptomsOptions answer={answer} onAnswerChange={onAnswerChange} />
          </PatientsShellInputPanel>

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

export function PatientsCovidScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [answer, setAnswer] = useState<CovidSymptomsAnswer | null>(null);
  const canContinue = answer !== null;

  function handleBack() {
    router.push("/docs/userflow/patients/availability-details");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/assistance");
  }

  const screenProps = {
    onBack: handleBack,
    answer,
    onAnswerChange: setAnswer,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsCovidDesktopScreen {...screenProps} />
          ) : (
            <PatientsCovidMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
