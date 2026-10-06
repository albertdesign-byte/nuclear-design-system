import { startOfDay } from "@/components/calendar/calendar.utils";

export {
  addMonths,
  clampViewDate,
  formatMonthYear,
  getCalendarDays,
  getWeekdayLabels,
  getYearRange,
  isDateInRange,
  isSameDay,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "@/components/calendar/calendar.utils";

const DAY_MS = 24 * 60 * 60 * 1000;

export const DATE_INPUT_PLACEHOLDER = "MM/DD/YYYY";

export const DATE_INPUT_ERROR = "Enter a valid date as MM/DD/YYYY.";

export function formatDate(date: Date | null, _locale = "en-US") {
  if (!date) {
    return "";
  }

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = String(date.getFullYear());

  return `${month}/${day}/${year}`;
}

export function isCompleteDateInput(value: string) {
  return /^\d{2}\/\d{2}\/\d{4}$/.test(value.trim());
}

export function parseDateInput(value: string): Date | null {
  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  const match = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (!match) {
    return null;
  }

  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);

  if (year < 1000 || month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  const next = new Date(year, month - 1, day);

  if (
    next.getFullYear() !== year ||
    next.getMonth() !== month - 1 ||
    next.getDate() !== day
  ) {
    return null;
  }

  return startOfDay(next);
}

export function compareDates(left: Date | null, right: Date | null) {
  if (!left || !right) {
    return 0;
  }

  return startOfDay(left).getTime() - startOfDay(right).getTime();
}

export function diffInDays(from: Date, to: Date) {
  return Math.round((startOfDay(to).getTime() - startOfDay(from).getTime()) / DAY_MS);
}
