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
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutHeader,
  MultiStepFlowLayoutInputPanel,
  MultiStepFlowLayoutLocale,
  MultiStepFlowLayoutMain,
  MultiStepFlowLayoutMainDesktop,
  MultiStepFlowLayoutProgress,
  multiStepFlowFieldGroupClassName,
  multiStepFlowLayoutDesktopContentClassName,
} from "@/components/multi-step-flow-layout";
import { cn } from "@/lib/utils";

const inputSuffixClassName =
  "shrink-0 text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]";

const heightInputsRowClassName =
  "flex gap-[var(--space-inline-sm)] [&>*]:min-w-0 [&>*]:flex-1";

type HeightWeightErrors = {
  inches?: string;
  weight?: string;
};

function getHeightWeightValidation(feet: string, inches: string, weight: string) {
  const errors: HeightWeightErrors = {};
  const allFilled = feet.trim() !== "" && inches.trim() !== "" && weight.trim() !== "";

  if (inches.trim() !== "") {
    const inchesValue = Number(inches);

    if (Number.isNaN(inchesValue) || inchesValue < 0 || inchesValue >= 12) {
      errors.inches = "Inches must be less than 12";
    }
  }

  if (weight.trim() !== "") {
    const weightValue = Number(weight);

    if (Number.isNaN(weightValue) || weightValue <= 0) {
      errors.weight = "Enter a weight greater than 0";
    }
  }

  const hasErrors = Boolean(errors.inches || errors.weight);

  return {
    errors,
    canContinue: allFilled && !hasErrors,
  };
}

function HeightWeightBackButton({ onClick }: { onClick: () => void }) {
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

function HeightWeightIntro() {
  return (
    <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
      What is your height and weight?
    </h1>
  );
}

type SuffixInputProps = {
  id: string;
  suffix: string;
  value: string;
  invalid?: boolean;
  describedBy?: string;
  onChange: (value: string) => void;
};

function SuffixInput({
  id,
  suffix,
  value,
  invalid = false,
  describedBy,
  onChange,
}: SuffixInputProps) {
  return (
    <div className="flex items-center gap-[var(--space-inline-sm)]">
      <Input
        id={id}
        inputMode="numeric"
        value={value}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onChange={(event) => onChange(event.target.value.replace(/\D/g, ""))}
      />
      <span className={inputSuffixClassName}>{suffix}</span>
    </div>
  );
}

type HeightWeightFormFieldsProps = {
  feet: string;
  inches: string;
  weight: string;
  errors: HeightWeightErrors;
  onFeetChange: (value: string) => void;
  onInchesChange: (value: string) => void;
  onWeightChange: (value: string) => void;
};

function HeightWeightFormFields({
  feet,
  inches,
  weight,
  errors,
  onFeetChange,
  onInchesChange,
  onWeightChange,
}: HeightWeightFormFieldsProps) {
  const inchesInvalid = Boolean(errors.inches);
  const weightInvalid = Boolean(errors.weight);

  return (
    <>
      <div className={cn(multiStepFlowFieldGroupClassName)}>
        <Label htmlFor="patients-height-feet" invalid={inchesInvalid}>
          Height
        </Label>
        <div className={heightInputsRowClassName}>
          <SuffixInput
            id="patients-height-feet"
            suffix="ft"
            value={feet}
            onChange={onFeetChange}
          />
          <SuffixInput
            id="patients-height-inches"
            suffix="in"
            value={inches}
            invalid={inchesInvalid}
            describedBy={inchesInvalid ? "patients-height-inches-error" : undefined}
            onChange={onInchesChange}
          />
        </div>
        {inchesInvalid ? (
          <FieldError id="patients-height-inches-error" showIcon>
            {errors.inches}
          </FieldError>
        ) : null}
      </div>

      <div className={cn(multiStepFlowFieldGroupClassName)}>
        <Label htmlFor="patients-weight" invalid={weightInvalid}>
          Weight
        </Label>
        <SuffixInput
          id="patients-weight"
          suffix="lb"
          value={weight}
          invalid={weightInvalid}
          describedBy={weightInvalid ? "patients-weight-error" : undefined}
          onChange={onWeightChange}
        />
        {weightInvalid ? (
          <FieldError id="patients-weight-error" showIcon>
            {errors.weight}
          </FieldError>
        ) : null}
      </div>
    </>
  );
}

type HeightWeightScreenProps = {
  onBack: () => void;
  feet: string;
  inches: string;
  weight: string;
  errors: HeightWeightErrors;
  canContinue: boolean;
  onFeetChange: (value: string) => void;
  onInchesChange: (value: string) => void;
  onWeightChange: (value: string) => void;
  onContinue: () => void;
};

function PatientsHeightWeightMobileScreen({
  onBack,
  feet,
  inches,
  weight,
  errors,
  canContinue,
  onFeetChange,
  onInchesChange,
  onWeightChange,
  onContinue,
}: HeightWeightScreenProps) {
  return (
    <MultiStepFlowLayout className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <MultiStepFlowLayoutHeader>
        <MedmoLogoLockup />
        <MultiStepFlowLayoutLocale />
      </MultiStepFlowLayoutHeader>

      <MultiStepFlowLayoutMain className="flex-1 gap-[var(--space-stack-md)]">
        <MultiStepFlowLayoutCard>
          <HeightWeightBackButton onClick={onBack} />
          <HeightWeightIntro />
        </MultiStepFlowLayoutCard>

        <MultiStepFlowLayoutInputPanel>
          <HeightWeightFormFields
            feet={feet}
            inches={inches}
            weight={weight}
            errors={errors}
            onFeetChange={onFeetChange}
            onInchesChange={onInchesChange}
            onWeightChange={onWeightChange}
          />
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

function PatientsHeightWeightDesktopScreen({
  onBack,
  feet,
  inches,
  weight,
  errors,
  canContinue,
  onFeetChange,
  onInchesChange,
  onWeightChange,
  onContinue,
}: HeightWeightScreenProps) {
  return (
    <MultiStepFlowLayout className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <MultiStepFlowLayoutHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <MultiStepFlowLayoutLocale showGlobe />
        </MultiStepFlowLayoutHeader>
        <MultiStepFlowLayoutProgress value={0.95} />
      </div>

      <MultiStepFlowLayoutMainDesktop className="flex-1">
        <div className={multiStepFlowLayoutDesktopContentClassName}>
          <MultiStepFlowLayoutCard>
            <HeightWeightBackButton onClick={onBack} />
            <HeightWeightIntro />
          </MultiStepFlowLayoutCard>

          <MultiStepFlowLayoutInputPanel>
            <HeightWeightFormFields
              feet={feet}
              inches={inches}
              weight={weight}
              errors={errors}
              onFeetChange={onFeetChange}
              onInchesChange={onInchesChange}
              onWeightChange={onWeightChange}
            />
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

export function PatientsHeightWeightScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");

  const { errors, canContinue } = useMemo(
    () => getHeightWeightValidation(feet, inches, weight),
    [feet, inches, weight]
  );

  function handleBack() {
    router.push("/docs/userflow/patients/share-results");
  }

  function handleContinue() {
    if (!canContinue) {
      return;
    }

    router.push("/docs/userflow/patients/prescription");
  }

  const screenProps = {
    onBack: handleBack,
    feet,
    inches,
    weight,
    errors,
    canContinue,
    onFeetChange: setFeet,
    onInchesChange: setInches,
    onWeightChange: setWeight,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsHeightWeightDesktopScreen {...screenProps} />
          ) : (
            <PatientsHeightWeightMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
