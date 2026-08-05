"use client";

import { AppFooter } from "@/components/app-footer";
import { usePatientsDeviceOptional } from "@/components/docs/layout/patients-device-context";
import { cn } from "@/lib/utils";

type PatientsAppFooterPreviewProps = {
  className?: string;
};

export function PatientsAppFooterPreview({
  className,
}: PatientsAppFooterPreviewProps) {
  const patientsDevice = usePatientsDeviceOptional();
  const device = patientsDevice?.device ?? "mobile";

  return (
    <AppFooter
      variant="patients"
      device={device}
      className={cn(
        device === "desktop" ? "w-full" : "max-w-sm",
        "rounded-[var(--radius-card)]",
        className
      )}
    />
  );
}
