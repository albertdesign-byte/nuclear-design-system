"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

import { applyDateInputMask } from "./date-input-mask";
import {
  formatDate,
  isCompleteDateInput,
  parseDateInput,
} from "./date-range-picker.utils";

export function useDateFieldText(
  value: Date | null,
  onCommit: (date: Date | null) => void
) {
  const [text, setText] = useState(() => formatDate(value));
  const [invalid, setInvalid] = useState(false);
  const lastValueRef = useRef<number | null>(value?.getTime() ?? null);

  useEffect(() => {
    const next = value?.getTime() ?? null;

    if (next !== lastValueRef.current) {
      lastValueRef.current = next;
      setText(formatDate(value));

      if (value) {
        setInvalid(false);
      }
    }
  }, [value]);

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const masked = applyDateInputMask(
      text,
      input.value,
      input.selectionStart ?? input.value.length
    );

    setText(masked.text);

    requestAnimationFrame(() => {
      input.setSelectionRange(masked.cursor, masked.cursor);
    });

    if (masked.text.trim() === "") {
      setInvalid(false);
      lastValueRef.current = null;
      onCommit(null);
      return;
    }

    if (!isCompleteDateInput(masked.text)) {
      setInvalid(false);
      return;
    }

    const parsed = parseDateInput(masked.text);

    if (parsed) {
      setInvalid(false);
      lastValueRef.current = parsed.getTime();
      onCommit(parsed);
      return;
    }

    setInvalid(true);
  }

  function handleBlur() {
    if (text.trim() === "") {
      setInvalid(false);
      setText("");
      return;
    }

    const parsed = parseDateInput(text);

    if (parsed) {
      setInvalid(false);
      setText(formatDate(parsed));
      return;
    }

    setInvalid(true);
  }

  return { text, invalid, handleTextChange, handleBlur };
}

export function shouldKeepCalendarOpenOnTriggerPress(
  nextOpen: boolean,
  details?: { reason?: string; event?: Event }
) {
  if (nextOpen || details?.reason !== "trigger-press") {
    return false;
  }

  const target = details.event?.target;

  return target instanceof HTMLElement && target.closest("input") !== null;
}
