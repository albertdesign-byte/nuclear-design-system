"use client";

import { useState } from "react";

import { DateRangePicker } from "@/components/date-range-picker";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

export function DateRangePickerRealScreenPreview() {
  const [range, setRange] = useState<{ from: Date | null; to: Date | null }>({
    from: new Date(2026, 6, 20),
    to: null,
  });

  return (
    <div>
      <DateRangePicker from={range.from} to={range.to} onRangeChange={setRange} />
      <DocsRealScreenExampleLink />
    </div>
  );
}
