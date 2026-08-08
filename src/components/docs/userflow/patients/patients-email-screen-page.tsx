"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { PatientsFlowContinueButton } from "@/components/docs/userflow/patients/patients-flow-buttons";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
import { FieldError } from "@/components/field-error";
import { Input } from "@/components/input";
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

const EMAIL_ERROR_MESSAGE = "Enter a valid email";

function getEmailValidationError(email: string) {
  if (email.trim() === "") {
    return undefined;
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  if (!isValidEmail) {
    return EMAIL_ERROR_MESSAGE;
  }

  return undefined;
}

function EmailBackButton({ onClick }: { onClick: () => void }) {
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

function EmailIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        What is your email?
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        We may send details about your radiology visit by email.
      </p>
      <p className="text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
        You can continue without adding one.
      </p>
    </div>
  );
}

type EmailFieldProps = {
  email: string;
  emailError?: string;
  onEmailChange: (value: string) => void;
};

function EmailField({ email, emailError, onEmailChange }: EmailFieldProps) {
  const isInvalid = Boolean(emailError);

  return (
    <div className={cn(patientsFieldGroupClassName)}>
      <Label htmlFor="patients-email" invalid={isInvalid}>
        Email
      </Label>
      <Input
        id="patients-email"
        type="email"
        value={email}
        placeholder="name@example.com"
        aria-invalid={isInvalid || undefined}
        aria-describedby={isInvalid ? "patients-email-error" : undefined}
        onChange={(event) => onEmailChange(event.target.value)}
      />
      {isInvalid ? (
        <FieldError id="patients-email-error" showIcon>
          {emailError}
        </FieldError>
      ) : null}
    </div>
  );
}

type EmailScreenProps = {
  onBack: () => void;
  email: string;
  emailError?: string;
  onEmailChange: (value: string) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsEmailMobileScreen({
  onBack,
  email,
  emailError,
  onEmailChange,
  canContinue,
  onContinue,
}: EmailScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <EmailBackButton onClick={onBack} />
          <EmailIntro />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <EmailField email={email} emailError={emailError} onEmailChange={onEmailChange} />
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

function PatientsEmailDesktopScreen({
  onBack,
  email,
  emailError,
  onEmailChange,
  canContinue,
  onContinue,
}: EmailScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.6} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <EmailBackButton onClick={onBack} />
            <EmailIntro />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <EmailField email={email} emailError={emailError} onEmailChange={onEmailChange} />
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

export function PatientsEmailScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [email, setEmail] = useState("");

  const emailError = getEmailValidationError(email);

  const canContinue = useMemo(() => !emailError, [emailError]);

  function handleBack() {
    router.push("/docs/userflow/patients/home-address");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/availability");
  }

  const screenProps = {
    onBack: handleBack,
    email,
    emailError,
    onEmailChange: setEmail,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsEmailDesktopScreen {...screenProps} />
          ) : (
            <PatientsEmailMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
