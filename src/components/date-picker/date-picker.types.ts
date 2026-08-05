import type { InputSize } from "@/components/input/input.types";

export type DatePickerProps = {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  locale?: string;
  size?: InputSize;
  disabled?: boolean;
  className?: string;
  id?: string;
  "aria-label"?: string;
};
