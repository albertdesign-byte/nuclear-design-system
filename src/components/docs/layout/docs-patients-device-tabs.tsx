"use client";

import { cn } from "@/lib/utils";

import {
  type PatientsPreviewDevice,
  usePatientsDeviceOptional,
} from "./patients-device-context";

const deviceOptions: { value: PatientsPreviewDevice; label: string }[] = [
  { value: "mobile", label: "Mobile" },
  { value: "desktop", label: "Desktop" },
];

export function DocsPatientsDeviceTabs({ className }: { className?: string }) {
  const patientsDevice = usePatientsDeviceOptional();

  if (!patientsDevice) {
    return null;
  }

  const { device, setDevice } = patientsDevice;

  return (
    <div
      role="tablist"
      aria-label="Device preview"
      className={cn(
        "inline-flex overflow-hidden rounded-[var(--radius-button)] border border-[var(--docs-chrome-border)] bg-card p-[0.125rem]",
        className
      )}
    >
      {deviceOptions.map((option) => {
        const isActive = device === option.value;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setDevice(option.value)}
            className={cn(
              "inline-flex h-[calc(var(--spacing-32)-0.25rem)] min-w-[5.5rem] items-center justify-center rounded-[var(--radius-md)] px-[0.75rem]",
              "text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)] transition-[var(--motion-hover)]",
              isActive
                ? "bg-[var(--docs-nav-active-bg)] text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
