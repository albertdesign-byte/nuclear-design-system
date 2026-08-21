const DAY_MS = 24 * 60 * 60 * 1000;

export function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

export function startOfWeek(date: Date, weekStartsOn = 1) {
  const next = startOfDay(date);
  const day = next.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  next.setDate(next.getDate() - diff);
  return next;
}

export function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

export function isSameDay(left: Date | null, right: Date | null) {
  if (!left || !right) {
    return false;
  }

  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

export function isDateInRange(date: Date, from: Date | null, to: Date | null) {
  if (!from || !to) {
    return false;
  }

  const value = startOfDay(date).getTime();
  return value >= startOfDay(from).getTime() && value <= startOfDay(to).getTime();
}

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

export function formatMonthYear(date: Date, locale = "en-US") {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getWeekdayLabels(locale = "en-US") {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: "narrow" });
  const monday = new Date(2024, 0, 1);

  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + index);
    return formatter.format(day).replace(".", "");
  });
}

export function getCalendarDays(viewDate: Date) {
  const monthStart = startOfMonth(viewDate);
  const gridStart = startOfWeek(monthStart, 1);
  const days: Date[] = [];

  for (let index = 0; index < 42; index += 1) {
    const day = new Date(gridStart);
    day.setDate(gridStart.getDate() + index);
    days.push(day);
  }

  return days;
}

export function isToday(date: Date) {
  return isSameDay(date, new Date());
}

export function getYearRange(anchorYear: number) {
  const start = anchorYear - 5;
  return Array.from({ length: 12 }, (_, index) => start + index);
}

export function compareDates(left: Date | null, right: Date | null) {
  if (!left || !right) {
    return 0;
  }

  return startOfDay(left).getTime() - startOfDay(right).getTime();
}

export function clampViewDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function diffInDays(from: Date, to: Date) {
  return Math.round((startOfDay(to).getTime() - startOfDay(from).getTime()) / DAY_MS);
}
