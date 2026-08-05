"use client";

import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { cn } from "@/lib/utils";

import {
  type PatientsPreviewDevice,
  usePatientsDevice,
} from "./patients-device-context";

const deviceOptions: { value: PatientsPreviewDevice; label: string }[] = [
  { value: "mobile", label: "Mobile" },
  { value: "desktop", label: "Desktop" },
];

export function DocsPatientsDeviceDropdown() {
  const { device, setDevice } = usePatientsDevice();
  const activeLabel =
    deviceOptions.find((option) => option.value === device)?.label ?? "Mobile";

  return (
    <DropdownMenu>
      <div className="flex overflow-hidden rounded-[var(--radius-button)] border border-[var(--docs-chrome-border)] bg-card">
        <span
          className={cn(
            "inline-flex h-[var(--spacing-32)] items-center px-[0.625rem]",
            "text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)] text-foreground"
          )}
        >
          {activeLabel}
        </span>
        <div className="w-px self-stretch bg-[var(--docs-chrome-border)]" />
        <DropdownMenuTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="rounded-none border-0"
              aria-label="Select device preview"
            />
          }
        >
          <ChevronDownIcon />
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align="end" className="min-w-[9rem]">
        {deviceOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setDevice(option.value)}
            className="justify-between"
          >
            {option.label}
            {device === option.value ? <CheckIcon aria-hidden className="size-4" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
