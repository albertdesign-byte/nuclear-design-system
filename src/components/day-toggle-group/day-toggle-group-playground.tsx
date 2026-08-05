"use client";

import { useState } from "react";

import { DayToggleGroup, type DayToggleValue } from "@/components/day-toggle-group";
import { Label } from "@/components/label";
import { ThemeToggle } from "@/components/theme-toggle";

export function DayToggleGroupPlayground() {
  const [days, setDays] = useState<DayToggleValue[]>(["tue", "fri"]);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">Day Toggle Group Playground</h1>
        </div>
        <ThemeToggle />
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
        <aside className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(event) => setDisabled(event.target.checked)}
              className="size-4 rounded border border-border"
            />
            Disabled
          </label>
          <p className="text-sm text-muted-foreground">
            Selected: {days.length > 0 ? days.join(", ") : "none"}
          </p>
        </aside>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-sm font-semibold">Preview</h2>
          <div className="flex max-w-md flex-col gap-[var(--space-stack-xs)]">
            <Label>Choose days</Label>
            <DayToggleGroup
              value={days}
              onValueChange={setDays}
              disabled={disabled}
              aria-label="Choose days"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
