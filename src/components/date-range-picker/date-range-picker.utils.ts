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

export function formatDate(date: Date | null, locale = "es-ES") {
  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function formatMonthYear(date: Date, locale = "es-ES") {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getWeekdayLabels(locale = "es-ES") {
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
