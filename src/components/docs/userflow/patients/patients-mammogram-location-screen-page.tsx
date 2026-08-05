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

const MAMMOGRAM_LOCATION_BACK_KEY = "patients-mammogram-location-back";

export function setMammogramLocationBackTarget(target: "selection" | "date") {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(MAMMOGRAM_LOCATION_BACK_KEY, target);
}

function getMammogramLocationBackTarget(): "selection" | "date" {
  if (typeof window === "undefined") {
    return "selection";
  }

  const target = sessionStorage.getItem(MAMMOGRAM_LOCATION_BACK_KEY);
  return target === "date" ? "date" : "selection";
}

function MammogramLocationBackButton({ onClick }: { onClick: () => void }) {
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

function MammogramLocationIntro() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-xs)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
        Where was your last mammogram?
      </h1>
      <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
        Enter the name or address of the place. If you do not have the location, you can
        continue.
      </p>
    </div>
  );
}

type MammogramLocationFieldProps = {
  location: string;
  onLocationChange: (value: string) => void;
};

function MammogramLocationField({ location, onLocationChange }: MammogramLocationFieldProps) {
  return (
    <div className={cn(patientsFieldGroupClassName)}>
      <Label htmlFor="patients-mammogram-location">Last mammogram location (optional)</Label>
      <Textarea
        id="patients-mammogram-location"
        value={location}
        placeholder="E.g. It was at East River Mammography in East 87th Street."
        onChange={(event) => onLocationChange(event.target.value)}
        aria-label="Last mammogram location"
      />
    </div>
  );
}

type MammogramLocationScreenProps = {
  onBack: () => void;
  location: string;
  onLocationChange: (value: string) => void;
  onContinue: () => void;
};

function PatientsMammogramLocationMobileScreen({
  onBack,
  location,
  onLocationChange,
  onContinue,
}: MammogramLocationScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <PatientsShellHeader>
        <MedmoLogoLockup />
        <PatientsShellLocale />
      </PatientsShellHeader>

      <PatientsShellMain className="flex-1 gap-[var(--space-stack-md)]">
        <PatientsShellCard>
          <MammogramLocationBackButton onClick={onBack} />
          <MammogramLocationIntro />
        </PatientsShellCard>

        <PatientsShellInputPanel>
          <MammogramLocationField location={location} onLocationChange={onLocationChange} />
        </PatientsShellInputPanel>

        <Button className="w-full" variant="primary" onClick={onContinue}>
          Continue
        </Button>
      </PatientsShellMain>
    </PatientsShell>
  );
}

function PatientsMammogramLocationDesktopScreen({
  onBack,
  location,
  onLocationChange,
  onContinue,
}: MammogramLocationScreenProps) {
  return (
    <PatientsShell className="min-h-[calc(100vh-var(--docs-header-height)-var(--space-page)*2)]">
      <div className="bg-[var(--color-surface)]">
        <PatientsShellHeader className="pb-[var(--space-stack-sm)]">
          <MedmoLogoLockup />
          <PatientsShellLocale showGlobe />
        </PatientsShellHeader>
        <PatientsShellProgress value={0.95} />
      </div>

      <PatientsShellMainDesktop className="flex-1">
        <div className={patientsShellDesktopContentClassName}>
          <PatientsShellCard>
            <MammogramLocationBackButton onClick={onBack} />
            <MammogramLocationIntro />
          </PatientsShellCard>

          <PatientsShellInputPanel>
            <MammogramLocationField location={location} onLocationChange={onLocationChange} />
          </PatientsShellInputPanel>

          <Button className="w-full" variant="primary" onClick={onContinue}>
            Continue
          </Button>
        </div>
      </PatientsShellMainDesktop>
    </PatientsShell>
  );
}

export function PatientsMammogramLocationScreenPage() {
  const router = useRouter();
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const [location, setLocation] = useState("");

  function handleBack() {
    if (getMammogramLocationBackTarget() === "date") {
      router.push("/docs/userflow/patients/mammogram-date");
      return;
    }

    router.push("/docs/userflow/patients/mammogram");
  }

  function handleContinue() {
    // Next step coming soon.
  }

  const screenProps = {
    onBack: handleBack,
    location,
    onLocationChange: setLocation,
    onContinue: handleContinue,
  };

  return (
    <DocsUserflowPage>
      <DocsUserflowPreviewFrame device={device}>
        <div className="flex min-h-full flex-col overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
          {device === "desktop" ? (
            <PatientsMammogramLocationDesktopScreen {...screenProps} />
          ) : (
            <PatientsMammogramLocationMobileScreen {...screenProps} />
          )}
          <AppFooter variant="patients" device={device} />
        </div>
      </DocsUserflowPreviewFrame>
    </DocsUserflowPage>
  );
}
