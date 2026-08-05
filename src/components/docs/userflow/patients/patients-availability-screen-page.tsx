"use client";

import { ChevronLeftIcon, InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { AppFooter } from "@/components/app-footer";
import { MedmoLogoLockup } from "@/components/brand/medmo-logo";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { DayToggleGroup, type DayToggleValue } from "@/components/day-toggle-group";
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
import { cn } from "@/lib/utils";

const SCHEDULING_NOTE_PLACEHOLDER = "{{scheduling note}}";

const timeSlotOptions = [
  { value: "all-day", label: "All day" },
  { value: "morning", label: "Morning (8 AM - 11 AM)" },
  { value: "afternoon", label: "Afternoon (11 AM - 3 PM)" },
  { value: "evening", label: "Evening (3 PM - 6 PM)" },
] as const;

type AvailabilityTimeSlot = (typeof timeSlotOptions)[number]["value"];

const checkboxOptionClassName =
  "flex items-start gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

const timesHelperClassName =
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]";

function toggleTimeSlot(current: AvailabilityTimeSlot[], slot: AvailabilityTimeSlot) {
  if (current.includes(slot)) {
    return current.filter((value) => value !== slot);
  }

  return [...current, slot];
}

function AvailabilityBackButton({ onClick }: { onClick: () => void }) {
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

function AvailabilityIntro({ schedulingNote }: { schedulingNote: string }) {
  return (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <div className="flex flex-col gap-[var(--space-stack-xs)]">
        <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
          Add your availability
        </h1>
        <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
          Choose days and times that work for you in the next 3-4 weeks. More options help us
          schedule your radiology visit faster.
        </p>
      </div>

      <Alert variant="success">
        <InfoIcon />
        <AlertTitle>Note from Medmo Care Team:</AlertTitle>
        <AlertDescription>{schedulingNote}</AlertDescription>
      </Alert>
    </div>
  );
}

type AvailabilityFormFieldsProps = {
  selectedDays: DayToggleValue[];
  selectedTimes: AvailabilityTimeSlot[];
  onSelectedDaysChange: (days: DayToggleValue[]) => void;
  onSelectedTimesChange: (times: AvailabilityTimeSlot[]) => void;
};

function AvailabilityFormFields({
  selectedDays,
  selectedTimes,
  onSelectedDaysChange,
  onSelectedTimesChange,
}: AvailabilityFormFieldsProps) {
  return (
    <>
      <div className={cn(patientsFieldGroupClassName)}>
        <Label>Choose days</Label>
        <DayToggleGroup
          value={selectedDays}
          onValueChange={onSelectedDaysChange}
          aria-label="Choose days"
        />
      </div>

      <div className={cn(patientsFieldGroupClassName)}>
        <Label>Choose times</Label>
        <p className={timesHelperClassName}>
          Applies to all selected days. You can add more details later.
        </p>
        <div className="flex flex-col gap-[var(--space-stack-sm)]">
          {timeSlotOptions.map((option) => {
            const checked = selectedTimes.includes(option.value);

            return (
              <label key={option.value} className={checkboxOptionClassName}>
                <Checkbox
                  id={`patients-availability-time-${option.value}`}
                  checked={checked}
                  onCheckedChange={() =>
                    onSelectedTimesChange(toggleTimeSlot(selectedTimes, option.value))
                  }
                />
                <span>{option.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
}

type AvailabilityScreenProps = AvailabilityFormFieldsProps & {
  schedulingNote: string;
  onBack: () => void;
  canContinue: boolean;
  onContinue: () => void;
};

function PatientsAvailabilityMobileScreen({
  schedulingNote,
  onBack,
  canContinue,
  onContinue,
  ...formProps
}: AvailabilityScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <AvailabilityBackButton onClick={onBack} />
          <AvailabilityIntro schedulingNote={schedulingNote} />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <AvailabilityFormFields {...formProps} />
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

function PatientsAvailabilityDesktopScreen({
  schedulingNote,
  onBack,
  canContinue,
  onContinue,
  ...formProps
}: AvailabilityScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.7} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <AvailabilityBackButton onClick={onBack} />
            <AvailabilityIntro schedulingNote={schedulingNote} />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <AvailabilityFormFields {...formProps} />
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

export function PatientsAvailabilityScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [selectedDays, setSelectedDays] = useState<DayToggleValue[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<AvailabilityTimeSlot[]>([]);

  const canContinue = useMemo(
    () => selectedDays.length > 0 && selectedTimes.length > 0,
    [selectedDays, selectedTimes]
  );

  function handleBack() {
    router.push("/docs/userflow/patients/email");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/availability-details");
  }

  const formProps = {
    selectedDays,
    selectedTimes,
    onSelectedDaysChange: setSelectedDays,
    onSelectedTimesChange: setSelectedTimes,
  };

  const screenProps = {
    schedulingNote: SCHEDULING_NOTE_PLACEHOLDER,
    onBack: handleBack,
    canContinue,
    onContinue: handleContinue,
    ...formProps,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsAvailabilityDesktopScreen {...screenProps} />
          ) : (
            <PatientsAvailabilityMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
