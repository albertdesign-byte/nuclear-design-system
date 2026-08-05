"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
import { setMammogramLocationBackTarget } from "@/components/docs/userflow/patients/patients-mammogram-location-screen-page";
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

type MammogramAnswer = "know-date" | "first" | "dont-remember";

const radioOptionClassName =
  "flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

function MammogramBackButton({ onClick }: { onClick: () => void }) {
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

function MammogramIntro() {
  return (
    <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
      When was your last mammogram?
    </h1>
  );
}

function MammogramOptions({
  answer,
  onAnswerChange,
}: {
  answer: MammogramAnswer | null;
  onAnswerChange: (value: MammogramAnswer) => void;
}) {
  return (
    <RadioGroup
      value={answer ?? undefined}
      onValueChange={(value) => onAnswerChange(value as MammogramAnswer)}
      aria-label="Last mammogram timing"
    >
      <label className={radioOptionClassName}>
        <RadioGroupItem value="know-date" id="mammogram-know-date" />
        <span>I know the date</span>
      </label>
      <label className={radioOptionClassName}>
        <RadioGroupItem value="first" id="mammogram-first" />
        <span>This is my first mammogram</span>
      </label>
      <label className={radioOptionClassName}>
        <RadioGroupItem value="dont-remember" id="mammogram-dont-remember" />
        <span>I don&apos;t remember</span>
      </label>
    </RadioGroup>
  );
}

type MammogramScreenProps = {
  onBack: () => void;
  answer: MammogramAnswer | null;
  onAnswerChange: (value: MammogramAnswer) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsMammogramMobileScreen({
  onBack,
  answer,
  onAnswerChange,
  canContinue,
  onContinue,
}: MammogramScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <MammogramBackButton onClick={onBack} />
          <MammogramIntro />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <MammogramOptions answer={answer} onAnswerChange={onAnswerChange} />
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

function PatientsMammogramDesktopScreen({
  onBack,
  answer,
  onAnswerChange,
  canContinue,
  onContinue,
}: MammogramScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.9} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <MammogramBackButton onClick={onBack} />
            <MammogramIntro />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <MammogramOptions answer={answer} onAnswerChange={onAnswerChange} />
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

export function PatientsMammogramScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [answer, setAnswer] = useState<MammogramAnswer | null>(null);
  const canContinue = answer !== null;

  function handleBack() {
    router.push("/docs/userflow/patients/assistance-details");
  }

  function handleContinue() {
    if (!canContinue || !answer) {
      return;
    }

    if (answer === "know-date") {
      router.push("/docs/userflow/patients/mammogram-date");
      return;
    }

    setMammogramLocationBackTarget("selection");
    router.push("/docs/userflow/patients/mammogram-location");
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
            <PatientsMammogramDesktopScreen {...screenProps} />
          ) : (
            <PatientsMammogramMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
