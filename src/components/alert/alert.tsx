"use client";

import type { ComponentProps } from "react";
import { useState } from "react";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  alertActionClassName,
  alertCloseClassName,
  alertDescriptionClassName,
  alertIconClassName,
  alertTitleClassName,
  alertVariants,
} from "./alert.styles";
import type { AlertProps } from "./alert.types";

function Alert({
  className,
  variant = "info",
  open,
  defaultOpen = true,
  dismissible = false,
  closeLabel = "Dismiss alert",
  onOpenChange,
  onDismiss,
  role,
  children,
  ...props
}: AlertProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open ?? internalOpen;
  const semanticRole =
    role ?? (variant === "error" || variant === "destructive" || variant === "warning"
      ? "alert"
      : "status");

  function dismiss() {
    if (open === undefined) {
      setInternalOpen(false);
    }
    onOpenChange?.(false);
    onDismiss?.();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      data-slot="alert"
      data-variant={variant}
      data-dismissible={dismissible || undefined}
      role={semanticRole}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
      {dismissible ? (
        <button
          type="button"
          data-slot="alert-close"
          aria-label={closeLabel}
          className={alertCloseClassName}
          onClick={dismiss}
        >
          <XIcon aria-hidden />
        </button>
      ) : null}
    </div>
  );
}

function AlertIcon({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="alert-icon"
      aria-hidden="true"
      className={cn(alertIconClassName, className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(alertTitleClassName, className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(alertDescriptionClassName, className)}
      {...props}
    />
  );
}

function AlertAction({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn(alertActionClassName, className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, AlertAction, AlertIcon };
