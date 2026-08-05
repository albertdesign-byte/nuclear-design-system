"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DocsUserflowPreviewFrame } from "@/components/docs/userflow/docs-userflow-preview-frame";
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

const assistanceOptions = [
  { value: "wheelchair", label: "Wheelchair" },
  { value: "walker", label: "Walker" },
  { value: "interpreter", label: "Interpreter" },
  { value: "other", label: "Other" },
  { value: "none", label: "None of the above" },
] as const;

type AssistanceNeed = (typeof assistanceOptions)[number]["value"];

const checkboxOptionClassName =
  "flex items-start gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

function toggleAssistanceNeed(
  current: AssistanceNeed[],
  need: AssistanceNeed
): AssistanceNeed[] {
  if (need === "none") {
    return current.includes("none") ? [] : ["none"];
  }

  const withoutNone = current.filter((value) => value !== "none");

  if (withoutNone.includes(need)) {
    return withoutNone.filter((value) => value !== need);
  }

  return [...withoutNone, need];
}

function AssistanceBackButton({ onClick }: { onClick: () => void }) {
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

function AssistanceIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Do you need any help during your visit?
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        Select all that apply.
      </p>
    </div>
  );
}

function AssistanceOptions({
  selectedNeeds,
  onSelectedNeedsChange,
}: {
  selectedNeeds: AssistanceNeed[];
  onSelectedNeedsChange: (needs: AssistanceNeed[]) => void;
}) {
  return (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      {assistanceOptions.map((option) => {
        const checked = selectedNeeds.includes(option.value);

        return (
          <label key={option.value} className={checkboxOptionClassName}>
            <Checkbox
              id={`patients-assistance-${option.value}`}
              checked={checked}
              onCheckedChange={() =>
                onSelectedNeedsChange(toggleAssistanceNeed(selectedNeeds, option.value))
              }
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

type AssistanceScreenProps = {
  onBack: () => void;
  selectedNeeds: AssistanceNeed[];
  onSelectedNeedsChange: (needs: AssistanceNeed[]) => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsAssistanceMobileScreen({
  onBack,
  selectedNeeds,
  onSelectedNeedsChange,
  canContinue,
  onContinue,
}: AssistanceScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <AssistanceBackButton onClick={onBack} />
          <AssistanceIntro />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <AssistanceOptions
            selectedNeeds={selectedNeeds}
            onSelectedNeedsChange={onSelectedNeedsChange}
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

function PatientsAssistanceDesktopScreen({
  onBack,
  selectedNeeds,
  onSelectedNeedsChange,
  canContinue,
  onContinue,
}: AssistanceScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.85} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <AssistanceBackButton onClick={onBack} />
            <AssistanceIntro />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <AssistanceOptions
              selectedNeeds={selectedNeeds}
              onSelectedNeedsChange={onSelectedNeedsChange}
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

export function PatientsAssistanceScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [selectedNeeds, setSelectedNeeds] = useState<AssistanceNeed[]>([]);

  const canContinue = useMemo(() => selectedNeeds.length > 0, [selectedNeeds]);

  function handleBack() {
    router.push("/docs/userflow/patients/covid");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/assistance-details");
  }

  const screenProps = {
    onBack: handleBack,
    selectedNeeds,
    onSelectedNeedsChange: setSelectedNeeds,
    canContinue,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsAssistanceDesktopScreen {...screenProps} />
          ) : (
            <PatientsAssistanceMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
