import type { InputSize } from "@/components/input/input.types";

export type DateRange = {
  from: Date | null;
  to: Date | null;
};

export type DateRangePickerProps = {
  from?: Date | null;
  to?: Date | null;
  onRangeChange?: (range: DateRange) => void;
  fromLabel?: string;
  toLabel?: string;
  locale?: string;
  size?: InputSize;
  disabled?: boolean;
  fromError?: string;
  toError?: string;
  className?: string;
};

export type DateRangePickerCalendarProps = {
  activeField: "from" | "to";
  from: Date | null;
  to: Date | null;
  viewDate: Date;
  locale: string;
  onViewDateChange: (date: Date) => void;
  onSelect: (date: Date) => void;
  onClear: () => void;
  onToday: () => void;
};
