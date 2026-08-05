import type { ComponentProps } from "react";

import type { dayToggleGroupDefaultDays } from "./day-toggle-group.constants";

export type DayToggleValue = (typeof dayToggleGroupDefaultDays)[number]["value"];

export type DayToggleOption = {
  value: DayToggleValue;
  label: string;
};

export type DayToggleGroupProps = Omit<ComponentProps<"div">, "defaultValue"> & {
  value: DayToggleValue[];
  onValueChange: (value: DayToggleValue[]) => void;
  days?: readonly DayToggleOption[];
  disabled?: boolean;
  "aria-label"?: string;
};
