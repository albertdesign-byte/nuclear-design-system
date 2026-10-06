"use client";

import { useState } from "react";

import { Calendar } from "@/components/calendar";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

import { CalendarPreviewFrame } from "./calendar-preview-frame";

export function CalendarRealScreenPreview() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div>
      <div className="flex w-full flex-col gap-[var(--space-stack-xs)]">
        <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
          Appointment date
        </p>
        <CalendarPreviewFrame>
          <Calendar
            value={date}
            onSelect={setDate}
            onClear={() => setDate(null)}
          />
        </CalendarPreviewFrame>
      </div>
      <DocsRealScreenExampleLink />
    </div>
  );
}
