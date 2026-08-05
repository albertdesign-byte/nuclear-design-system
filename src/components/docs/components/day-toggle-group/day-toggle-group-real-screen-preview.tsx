"use client";

import { useState } from "react";

import { DayToggleGroup } from "@/components/day-toggle-group";
import { Label } from "@/components/label";

export function DayToggleGroupRealScreenPreview() {
  const [days, setDays] = useState<Array<"mon" | "tue" | "wed" | "thu" | "fri" | "sat">>([
    "tue",
    "fri",
  ]);

  return (
    <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-xs)] rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-page)]">
      <Label>Choose days</Label>
      <DayToggleGroup value={days} onValueChange={setDays} aria-label="Choose days" />
      <p className="text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]">
        Applies to all selected days. You can add more details later.
      </p>
    </div>
  );
}
