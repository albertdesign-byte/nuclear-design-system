"use client";

import { useState } from "react";

import { DateRangePicker } from "@/components/date-range-picker";

export function DateRangePickerPlayground() {
  const [range, setRange] = useState<{ from: Date | null; to: Date | null }>({
    from: new Date(2026, 6, 20),
    to: null,
  });

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col gap-[var(--space-stack-md)] p-[var(--space-page)]">
      <h1 className="text-[length:var(--text-title-size)] font-semibold">Date Range Picker Playground</h1>
      <DateRangePicker from={range.from} to={range.to} onRangeChange={setRange} />
    </main>
  );
}
