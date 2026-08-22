function isDigit(character: string) {
  return character >= "0" && character <= "9";
}

function slashCount(value: string) {
  return (value.match(/\//g) ?? []).length;
}

function sanitizeDateInput(value: string, cursor: number) {
  let text = "";
  let mappedCursor = 0;

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];

    if (character === "/" || isDigit(character)) {
      text += character;

      if (index < cursor) {
        mappedCursor += 1;
      }
    }
  }

  return { text, cursor: mappedCursor };
}

type DateSegments = {
  month: string;
  day: string;
  year: string;
  monthClosed: boolean;
  dayClosed: boolean;
};

function parseDateSegments(value: string, padClosedSingleDigits: boolean): DateSegments {
  const month: string[] = [];
  const day: string[] = [];
  const year: string[] = [];
  let monthClosed = false;
  let dayClosed = false;

  for (const character of value) {
    if (character === "/") {
      if (!monthClosed && month.length > 0) {
        monthClosed = true;
        continue;
      }

      if (monthClosed && !dayClosed && day.length > 0) {
        dayClosed = true;
      }

      continue;
    }

    if (!monthClosed && month.length < 2) {
      month.push(character);
      continue;
    }

    monthClosed = true;

    if (!dayClosed && day.length < 2) {
      day.push(character);
      continue;
    }

    dayClosed = true;

    if (year.length < 4) {
      year.push(character);
    }
  }

  let monthText = month.join("");
  let dayText = day.join("");
  const yearText = year.join("");

  if (padClosedSingleDigits || yearText.length === 4) {
    if (monthClosed && monthText.length === 1) {
      monthText = monthText.padStart(2, "0");
    }

    if (dayClosed && dayText.length === 1) {
      dayText = dayText.padStart(2, "0");
    }
  }

  return {
    month: monthText,
    day: dayText,
    year: yearText,
    monthClosed,
    dayClosed,
  };
}

function serializeDateSegments(segments: DateSegments) {
  const { month, day, year, monthClosed, dayClosed } = segments;

  if (!month && !monthClosed) {
    return "";
  }

  if (!monthClosed && !day && !year) {
    return month;
  }

  const monthAndDay = `${month}/${day}`;

  if (!dayClosed && !year) {
    return monthAndDay;
  }

  return `${monthAndDay}/${year}`;
}

function mapCursor(source: string, sourceCursor: number, formatted: string) {
  if (sourceCursor >= source.length) {
    return formatted.length;
  }

  const digitsBeforeCursor = [...source.slice(0, sourceCursor)].filter(isDigit).length;
  const afterSlash = sourceCursor > 0 && source[sourceCursor - 1] === "/";

  if (digitsBeforeCursor === 0) {
    return afterSlash ? Math.min(formatted.indexOf("/") + 1, formatted.length) : 0;
  }

  let seen = 0;

  for (let index = 0; index < formatted.length; index += 1) {
    if (!isDigit(formatted[index])) {
      continue;
    }

    seen += 1;

    if (seen === digitsBeforeCursor) {
      let nextIndex = index + 1;

      if (afterSlash && formatted[nextIndex] === "/") {
        nextIndex += 1;
      }

      return nextIndex;
    }
  }

  return formatted.length;
}

export function applyDateInputMask(
  previous: string,
  nextRaw: string,
  cursorInNext: number
): { text: string; cursor: number } {
  const sanitized = sanitizeDateInput(nextRaw, cursorInNext);
  const padClosedSingleDigits = slashCount(sanitized.text) > slashCount(previous);
  const text = serializeDateSegments(
    parseDateSegments(sanitized.text, padClosedSingleDigits)
  );

  return {
    text,
    cursor: mapCursor(sanitized.text, sanitized.cursor, text),
  };
}
