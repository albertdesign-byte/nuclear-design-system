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

const GENERAL_QUESTION_PLACEHOLDER = "{{Question}}";

function GeneralQuestionBackButton({ onClick }: { onClick: () => void }) {
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

function GeneralQuestionPrompt({ question }: { question: string }) {
  return (
    <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
      {question}
    </h1>
  );
}

type GeneralQuestionAnswerFieldProps = {
  answer: string;
  onAnswerChange: (value: string) => void;
};

function GeneralQuestionAnswerField({ answer, onAnswerChange }: GeneralQuestionAnswerFieldProps) {
  return (
    <div className={cn(patientsFieldGroupClassName)}>
      <Label htmlFor="patients-general-question-answer">Your answer</Label>
      <Textarea
        id="patients-general-question-answer"
        value={answer}
        onChange={(event) => onAnswerChange(event.target.value)}
        aria-label="Your answer"
      />
    </div>
  );
}

type GeneralQuestionScreenProps = {
  question: string;
  onBack: () => void;
  answer: string;
  onAnswerChange: (value: string) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsGeneralQuestionMobileScreen({
  question,
  onBack,
  answer,
  onAnswerChange,
  canContinue,
  onContinue,
}: GeneralQuestionScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <GeneralQuestionBackButton onClick={onBack} />
          <GeneralQuestionPrompt question={question} />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <GeneralQuestionAnswerField answer={answer} onAnswerChange={onAnswerChange} />
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

function PatientsGeneralQuestionDesktopScreen({
  question,
  onBack,
  answer,
  onAnswerChange,
  canContinue,
  onContinue,
}: GeneralQuestionScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.99} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <GeneralQuestionBackButton onClick={onBack} />
            <GeneralQuestionPrompt question={question} />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <GeneralQuestionAnswerField answer={answer} onAnswerChange={onAnswerChange} />
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

export function PatientsGeneralQuestionScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [answer, setAnswer] = useState("");
  const canContinue = answer.trim().length > 0;

  function handleBack() {
    router.push("/docs/userflow/patients/prescription");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/home-address");
  }

  const screenProps = {
    question: GENERAL_QUESTION_PLACEHOLDER,
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
            <PatientsGeneralQuestionDesktopScreen {...screenProps} />
          ) : (
            <PatientsGeneralQuestionMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
