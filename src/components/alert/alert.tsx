import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import {
  alertActionClassName,
  alertDescriptionClassName,
  alertTitleClassName,
  alertVariants,
} from "./alert.styles";
import type { AlertProps } from "./alert.types";

function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
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

export { Alert, AlertTitle, AlertDescription, AlertAction };
