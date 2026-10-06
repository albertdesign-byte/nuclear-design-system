export type CalendarProps = {
  value?: Date | null;
  onSelect?: (date: Date) => void;
  locale?: string;
  viewDate?: Date;
  defaultViewDate?: Date;
  onViewDateChange?: (date: Date) => void;
  disabled?: boolean;
  /** Range endpoints highlighted by Date Range Picker. Both also render as selected. */
  from?: Date | null;
  to?: Date | null;
  showFooter?: boolean;
  onClear?: () => void;
  onToday?: () => void;
  className?: string;
};
