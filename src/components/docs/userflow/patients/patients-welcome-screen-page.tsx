"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { PatientsFlowContinueButton } from "@/components/docs/userflow/patients/patients-flow-buttons";
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

const checklistItems = [
  "Your availability",
  "Your insurance",
  "Your medical information",
] as const;

function WelcomeBackButton({ onClick }: { onClick: () => void }) {
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

function WelcomeContent() {
  return (
    <>
      <div className="flex flex-col gap-[var(--space-stack-xs)]">
        <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
          Hi {"{{PatientFirstName}}"}, let&apos;s schedule your radiology visit
        </h1>
        <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          We will ask a few questions to schedule your radiology visit from Dr.{" "}
          {"{{ProviderLastName}}"}. This will take about 5 minutes.
        </p>
      </div>

      <div className="flex flex-col gap-[var(--space-stack-xs)]">
        <p className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
          Please have this ready:
        </p>
        <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          {checklistItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "flex flex-col gap-[var(--space-stack-xs)]",
          "rounded-[var(--radius-card)] p-[var(--space-stack-md)]",
          "ring-1 ring-[var(--color-border-subtle)]"
        )}
      >
        <p className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
          Scans ordered for you:
        </p>
        <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          <li>Ultrasound Joint (Scan ID: 9181)</li>
        </ul>
      </div>
    </>
  );
}

function PatientsWelcomeMobileScreen({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1">
        <PatientsShellCard>
          <WelcomeBackButton onClick={onBack} />
          <WelcomeContent />
          <PatientsFlowContinueButton onClick={onContinue}>
            Start
          </PatientsFlowContinueButton>
        </PatientsShellCard>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsWelcomeDesktopScreen({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.5} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <WelcomeBackButton onClick={onBack} />
            <WelcomeContent />
          </PatientsShellCard>

          <PatientsFlowContinueButton onClick={onContinue}>
            Continue
          </PatientsFlowContinueButton>
        </div>
      </PatientsShellMainDesktop>
    </PatientsShell>
  );
}

export function PatientsWelcomeScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";

  function handleBack() {
    router.push("/docs/userflow/patients/date-of-birth");
  }

  function handleContinue() {
    router.push("/docs/userflow/patients/deposit");
  }

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsWelcomeDesktopScreen onBack={handleBack} onContinue={handleContinue} />
          ) : (
            <PatientsWelcomeMobileScreen onBack={handleBack} onContinue={handleContinue} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
