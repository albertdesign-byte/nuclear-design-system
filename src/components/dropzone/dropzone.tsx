"use client";

import { FileIcon, ImageUpIcon, XIcon } from "lucide-react";
import { useId, useRef, type ChangeEvent, type MouseEvent } from "react";

import { FieldError } from "@/components/field-error";
import { cn } from "@/lib/utils";

import {
  dropzoneEmptyLabelClassName,
  dropzoneFileNameClassName,
  dropzoneHiddenInputClassName,
  dropzoneRemoveButtonClassName,
  dropzoneRootClassName,
  dropzoneTriggerClassName,
  dropzoneTriggerEmptyClassName,
  dropzoneTriggerFilledClassName,
  dropzoneTriggerInvalidClassName,
} from "./dropzone.styles";
import type { DropzoneProps } from "./dropzone.types";

export function Dropzone({
  label,
  file = null,
  onFileChange,
  accept,
  error,
  disabled = false,
  id,
  className,
  ...props
}: DropzoneProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  const inputRef = useRef<HTMLInputElement>(null);
  const hasFile = file !== null;
  const isInvalid = Boolean(error);

  function openFilePicker() {
    if (disabled) {
      return;
    }

    inputRef.current?.click();
  }

  function handleFileSelect(nextFile: File | null) {
    onFileChange?.(nextFile);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const nextFile = event.target.files?.[0] ?? null;
    handleFileSelect(nextFile);
    event.target.value = "";
  }

  function handleRemove(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    handleFileSelect(null);
  }

  return (
    <div
      data-slot="dropzone"
      className={cn(dropzoneRootClassName, className)}
      {...props}
    >
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        disabled={disabled}
        className={dropzoneHiddenInputClassName}
        aria-invalid={isInvalid || undefined}
        aria-describedby={errorId}
        onChange={handleInputChange}
      />

      {hasFile ? (
        <div
          role="group"
          aria-label={label}
          className={cn(
            dropzoneTriggerClassName,
            dropzoneTriggerFilledClassName,
            isInvalid && dropzoneTriggerInvalidClassName
          )}
        >
          <FileIcon aria-hidden className="size-4 shrink-0 text-[var(--color-text-muted)]" />
          <span className={dropzoneFileNameClassName}>{file.name}</span>
          <button
            type="button"
            aria-label={`Remove ${file.name}`}
            className={dropzoneRemoveButtonClassName}
            disabled={disabled}
            onClick={handleRemove}
          >
            <XIcon aria-hidden className="size-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          disabled={disabled}
          aria-describedby={errorId}
          aria-invalid={isInvalid || undefined}
          className={cn(
            dropzoneTriggerClassName,
            dropzoneTriggerEmptyClassName,
            isInvalid && dropzoneTriggerInvalidClassName
          )}
          onClick={openFilePicker}
        >
          <ImageUpIcon aria-hidden className="size-4 shrink-0 text-[var(--color-text-muted)]" />
          <span className={dropzoneEmptyLabelClassName}>{label}</span>
        </button>
      )}

      {error ? (
        <FieldError id={errorId} showIcon>
          {error}
        </FieldError>
      ) : null}
    </div>
  );
}
