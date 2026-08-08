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
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  PatientsShell,
  PatientsShellCard,
  PatientsShellHeader,
  PatientsShellLocale,
  PatientsShellMain,
  PatientsShellMainDesktop,
  PatientsShellProgress,
  patientsFieldGroupClassName,
  patientsShellDesktopContentClassName,
} from "@/components/patients-shell";
import { cn } from "@/lib/utils";

function InsuranceBackButton({ onClick }: { onClick: () => void }) {
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

function InsuranceIntro({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Add your insurance
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        We&apos;ll use this to verify coverage and share accurate costs with you. If you do not
        have it,{" "}
        <button
          type="button"
          className={cn(
            "font-medium text-[var(--color-text-link)] underline-offset-[3px]",
            "transition-[var(--motion-hover)] hover:text-[var(--color-text-link-hover)] hover:underline",
            "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
          )}
          onClick={onSkip}
        >
          you can continue
        </button>
        .
      </p>
    </div>
  );
}

type InsuranceFormFieldsProps = {
  insuranceProvider: string;
  memberId: string;
  groupId: string;
  onInsuranceProviderChange: (value: string) => void;
  onMemberIdChange: (value: string) => void;
  onGroupIdChange: (value: string) => void;
  onSkip: () => void;
};

function InsuranceFormFields({
  insuranceProvider,
  memberId,
  groupId,
  onInsuranceProviderChange,
  onMemberIdChange,
  onGroupIdChange,
  onSkip,
}: InsuranceFormFieldsProps) {
  return (
    <>
      <InsuranceIntro onSkip={onSkip} />

      <div className={cn(patientsFieldGroupClassName)}>
        <Label htmlFor="patients-insurance-provider">Insurance provider</Label>
        <Input
          id="patients-insurance-provider"
          value={insuranceProvider}
          onChange={(event) => onInsuranceProviderChange(event.target.value)}
        />
      </div>

      <div className={cn(patientsFieldGroupClassName)}>
        <Label htmlFor="patients-member-id">Member ID</Label>
        <Input
          id="patients-member-id"
          value={memberId}
          onChange={(event) => onMemberIdChange(event.target.value)}
        />
      </div>

      <div className={cn(patientsFieldGroupClassName)}>
        <Label htmlFor="patients-group-id">Group ID (optional)</Label>
        <Input
          id="patients-group-id"
          value={groupId}
          onChange={(event) => onGroupIdChange(event.target.value)}
        />
      </div>
    </>
  );
}

type InsuranceScreenProps = InsuranceFormFieldsProps & {
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsInsuranceMobileScreen({
  onBack,
  canContinue,
  onContinue,
  ...formProps
}: InsuranceScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1">
        <PatientsShellCard>
          <InsuranceBackButton onClick={onBack} />
          <InsuranceFormFields {...formProps} />
          <PatientsFlowContinueButton
                        disabled={!canContinue}
            onClick={onContinue}
          >
            Continue
          </PatientsFlowContinueButton>
        </PatientsShellCard>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsInsuranceDesktopScreen({
  onBack,
  canContinue,
  onContinue,
  ...formProps
}: InsuranceScreenProps) {
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
            <InsuranceBackButton onClick={onBack} />
            <InsuranceFormFields {...formProps} />
          </PatientsShellCard>

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

function hasInsuranceDetails(values: {
  insuranceProvider: string;
  memberId: string;
  groupId: string;
}) {
  return (
    values.insuranceProvider.trim().length > 0 ||
    values.memberId.trim().length > 0 ||
    values.groupId.trim().length > 0
  );
}

export function PatientsInsuranceScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [memberId, setMemberId] = useState("");
  const [groupId, setGroupId] = useState("");

  const canContinue = useMemo(() => {
    const filled = hasInsuranceDetails({
      insuranceProvider,
      memberId,
      groupId,
    });

    if (!filled) {
      return true;
    }

    return insuranceProvider.trim().length > 0 && memberId.trim().length > 0;
  }, [groupId, insuranceProvider, memberId]);

  function handleBack() {
    router.push("/docs/userflow/patients/deposit");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/insurance-card");
  }

  const formProps = {
    insuranceProvider,
    memberId,
    groupId,
    onInsuranceProviderChange: setInsuranceProvider,
    onMemberIdChange: setMemberId,
    onGroupIdChange: setGroupId,
    onSkip: handleContinue,
  };

  const screenProps = {
    ...formProps,
    onBack: handleBack,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsInsuranceDesktopScreen {...screenProps} />
          ) : (
            <PatientsInsuranceMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
