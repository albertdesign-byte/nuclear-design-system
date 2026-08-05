"use client";

import { AppFooter } from "@/components/app-footer";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export function AppFooterRealScreenPreview() {
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";
  const frameClass = device === "desktop" ? "w-full" : "max-w-sm";

  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm",
        frameClass
      )}
    >
      <div className="flex flex-col gap-[var(--space-stack-md)] p-[var(--space-card)]">
        <div className="flex flex-col gap-[var(--space-stack-xs)]">
          <h2 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)]">
            Confirm your date of birth
          </h2>
          <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
            We use this to verify your identity before continuing.
          </p>
        </div>
        <div className="flex flex-col gap-[var(--space-stack-xs)]">
          <Label htmlFor="dob-preview">Date of birth</Label>
          <Input id="dob-preview" placeholder="MM / DD / YYYY" />
        </div>
        <Button className="w-full">Continue</Button>
      </div>
      <AppFooter
        variant="patients"
        device={device}
        className="rounded-b-[var(--radius-card)]"
      />
    </div>
  );
}
