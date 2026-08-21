"use client";

import { useState } from "react";

import { DatePicker } from "@/components/date-picker";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";
import { Label } from "@/components/label";

export function DatePickerRealScreenPreview() {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);

  return (
    <div>
      <div className="flex w-full max-w-xs flex-col gap-[var(--space-stack-xs)]">
        <Label htmlFor="date-picker-real-screen">Date of birth</Label>
        <DatePicker
          id="date-picker-real-screen"
          value={dateOfBirth}
          onChange={setDateOfBirth}
          placeholder="MM/DD/YYYY"
        />
      </div>
      <DocsRealScreenExampleLink />
    </div>
  );
}
