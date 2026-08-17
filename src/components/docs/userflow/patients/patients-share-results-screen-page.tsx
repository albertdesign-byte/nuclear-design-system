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
import { ShareResultsConsentDialog } from "@/components/docs/userflow/patients/share-results-consent-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutHeader,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutLocale,
  MultiStepFlowLayoutMain,
  MultiStepFlowLayoutMainDesktop,
  MultiStepFlowLayoutProgress,
  multiStepFlowLayoutDesktopContentClassName,
} from "@/components/multi-step-flow-layout";

type ShareResultsConsent = "agree" | "disagree";

const radioOptionClassName =
  "flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

function ShareResultsBackButton({ onClick }: { onClick: () => void }) {
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

function ShareResultsIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Share your radiology results with your doctor
      </h1>
      <div className="flex flex-col gap-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        <p>
          This lets Medmo receive your imaging results and reports. Your doctor can review them
          and provide care.
        </p>
        <p>
          You can say no, but your doctor will not receive your results automatically.
        </p>
      </div>
      <ShareResultsConsentDialog />
    </div>
  );
}

function ShareResultsConsentOptions({
  consent,
  onConsentChange,
}: {
  consent: ShareResultsConsent | null;
  onConsentChange: (value: ShareResultsConsent) => void;
}) {
  return (
    <RadioGroup
      value={consent ?? undefined}
      onValueChange={(value) => onConsentChange(value as ShareResultsConsent)}
      aria-label="Share radiology results consent"
    >
      <label className={radioOptionClassName}>
        <RadioGroupItem value="agree" id="share-results-agree" />
        <span>I agree</span>
      </label>
      <label className={radioOptionClassName}>
        <RadioGroupItem value="disagree" id="share-results-disagree" />
        <span>I do not agree</span>
      </label>
    </RadioGroup>
  );
}

type ShareResultsScreenProps = {
  onBack: () => void;
  consent: ShareResultsConsent | null;
  onConsentChange: (value: ShareResultsConsent) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsShareResultsMobileScreen({
  onBack,
  consent,
  onConsentChange,
  canContinue,
  onContinue,
}: ShareResultsScreenProps) {
  return (
    <MultiStepFlowLayout className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <MultiStepFlowLayoutHeader>
        <MedmoLogoLockup />
        <MultiStepFlowLayoutLocale />
      </MultiStepFlowLayoutHeader>

      <MultiStepFlowLayoutMain className="flex-1 gap-[var(--space-stack-md)]">
        <MultiStepFlowLayoutCard>
          <ShareResultsBackButton onClick={onBack} />
          <ShareResultsIntro />
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <ShareResultsConsentOptions consent={consent} onConsentChange={onConsentChange} />
        </MultiStepFlowLayoutInputPanel>

        <PatientsFlowContinueButton
                    disabled={!canContinue}
          onClick={onContinue}
        >
          Continue
        </PatientsFlowContinueButton>
      </MultiStepFlowLayoutMain>
    </MultiStepFlowLayout>
  );
}

function PatientsShareResultsDesktopScreen({
  onBack,
  consent,
  onConsentChange,
  canContinue,
  onContinue,
}: ShareResultsScreenProps) {
  return (
    <MultiStepFlowLayout className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <MultiStepFlowLayoutHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <MultiStepFlowLayoutLocale showGlobe />
        </MultiStepFlowLayoutHeader>
        <MultiStepFlowLayoutProgress value={0.9} />
      </div>

      <MultiStepFlowLayoutMainDesktop className="flex-1">
        <div className={multiStepFlowLayoutDesktopContentClassName}>
          <MultiStepFlowLayoutCard>
            <ShareResultsBackButton onClick={onBack} />
            <ShareResultsIntro />
          </MultiStepFlowLayoutCard>

          <MultiStepFlowLayoutInputPanel>
            <ShareResultsConsentOptions consent={consent} onConsentChange={onConsentChange} />
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

export function PatientsShareResultsScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [consent, setConsent] = useState<ShareResultsConsent | null>(null);
  const canContinue = consent !== null;

  function handleBack() {
    router.push("/docs/userflow/patients/insurance-card");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/height-weight");
  }

  const screenProps = {
    onBack: handleBack,
    consent,
    onConsentChange: setConsent,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsShareResultsDesktopScreen {...screenProps} />
          ) : (
            <PatientsShareResultsMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
