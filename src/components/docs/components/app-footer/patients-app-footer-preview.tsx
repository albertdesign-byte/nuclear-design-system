"use client";

import { AppFooter } from "@/components/app-footer";
import type { AppFooterDevice } from "@/components/app-footer";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { cn } from "@/lib/utils";

type PatientsAppFooterPreviewProps = {
  className?: string;
  device?: AppFooterDevice;
};

export function PatientsAppFooterPreview({
  className,
  device: deviceOverride,
}: PatientsAppFooterPreviewProps) {
  const patientsDevice = usePatientsDeviceOptional();
  const device = deviceOverride ?? patientsDevice?.device ?? "mobile";

  return (
    <AppFooter
      variant="patients"
      device={device}
      className={cn(
        device === "mobile"
          ? "max-w-sm"
          : device === "tablet"
            ? "max-w-3xl"
            : "w-full",
        "rounded-[var(--radius-card)]",
        className
      )}
    />
  );
}
