"use client";

import { FileIcon, ImageUpIcon, XIcon } from "lucide-react";
import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type MouseEvent,
} from "react";

import { FieldError } from "@/components/field-error";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";

import {
  dropzoneEmptyLabelClassName,
  dropzoneFileNameClassName,
  dropzoneHiddenInputClassName,
  dropzoneRemoveButtonClassName,
  dropzoneRootClassName,
  dropzoneTriggerClassName,
  dropzoneTriggerDraggingClassName,
  dropzoneTriggerEmptyClassName,
  dropzoneTriggerFilledClassName,
  dropzoneTriggerInvalidClassName,
} from "./dropzone.styles";
import type { DropzoneProps } from "./dropzone.types";
import { getRejectedFileError } from "./dropzone.utils";

export function Dropzone({
  label,
  file = null,
  onFileChange,
  accept,
  maxSize,
  error,
  disabled = false,
  loading = false,
  dragging = false,
  id,
  className,
  ...props
}: DropzoneProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const dragDepthRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rejectionError, setRejectionError] = useState<string>();
  const hasFile = file !== null;
  const displayedError = error ?? rejectionError;
  const errorId = displayedError ? `${inputId}-error` : undefined;
  const isInvalid = Boolean(displayedError);
  const showDragging = (isDragging || dragging) && !disabled && !loading;
  const isBlocked = disabled || loading;

  function resetDragging() {
    dragDepthRef.current = 0;
    setIsDragging(false);
  }

  function openFilePicker() {
    if (isBlocked) {
      return;
    }

    inputRef.current?.click();
  }

  function applyFile(nextFile: File | null) {
    if (nextFile) {
      const rejection = getRejectedFileError(nextFile, { accept, maxSize });

      if (rejection) {
        setRejectionError(rejection);
        return;
      }
    }

    setRejectionError(undefined);
    onFileChange?.(nextFile);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const nextFile = event.target.files?.[0] ?? null;
    applyFile(nextFile);
    event.target.value = "";
  }

  function handleRemove(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    applyFile(null);
  }

  function handleDragEnter(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (isBlocked) {
      return;
    }

    dragDepthRef.current += 1;
    setIsDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    dragDepthRef.current -= 1;

    if (dragDepthRef.current <= 0) {
      resetDragging();
    }
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = isBlocked ? "none" : "copy";
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    resetDragging();

    if (isBlocked) {
      return;
    }

    const nextFile = event.dataTransfer.files[0] ?? null;

    if (nextFile) {
      applyFile(nextFile);
    }
  }

  const triggerClassName = cn(
    dropzoneTriggerClassName,
    hasFile && !loading ? dropzoneTriggerFilledClassName : dropzoneTriggerEmptyClassName,
    isInvalid && !showDragging && dropzoneTriggerInvalidClassName,
    showDragging && dropzoneTriggerDraggingClassName
  );

  return (
    <div
      {...props}
      data-slot="dropzone"
      data-dragging={showDragging ? "" : undefined}
      data-loading={loading || undefined}
      className={cn(dropzoneRootClassName, className)}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        disabled={isBlocked}
        tabIndex={-1}
        className={dropzoneHiddenInputClassName}
        aria-invalid={isInvalid || undefined}
        aria-describedby={errorId}
        onChange={handleInputChange}
      />

      {hasFile && !loading ? (
        <div
          role="group"
          aria-label={label}
          className={triggerClassName}
          onClick={openFilePicker}
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
          disabled={isBlocked}
          aria-describedby={errorId}
          aria-invalid={isInvalid || undefined}
          aria-busy={loading || undefined}
          className={triggerClassName}
          onClick={openFilePicker}
        >
          {loading ? (
            <Spinner size="sm" className="shrink-0" aria-hidden />
          ) : (
            <ImageUpIcon aria-hidden className="size-4 shrink-0 text-[var(--color-text-muted)]" />
          )}
          <span className={dropzoneEmptyLabelClassName}>
            {loading ? "Uploading…" : showDragging ? "Drop file to upload" : label}
          </span>
        </button>
      )}

      {displayedError ? (
        <FieldError id={errorId} showIcon>
          {displayedError}
        </FieldError>
      ) : null}
    </div>
  );
}
