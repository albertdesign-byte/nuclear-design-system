import type { ComponentProps } from "react";

export type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "error"
  /** @deprecated Use "info". */
  | "default"
  /** @deprecated Use "error". */
  | "destructive";

export type AlertProps = Omit<ComponentProps<"div">, "onChange"> & {
  /** Semantic appearance. Prefer info, success, warning, or error. */
  variant?: AlertVariant;
  /** Whether the alert is currently rendered. */
  open?: boolean;
  /** Initial visibility for an uncontrolled alert. @default true */
  defaultOpen?: boolean;
  /** Adds a keyboard-accessible close button. */
  dismissible?: boolean;
  /** Accessible label for the close button. */
  closeLabel?: string;
  /** Called whenever visibility changes. */
  onOpenChange?: (open: boolean) => void;
  /** Called after the user dismisses the alert. */
  onDismiss?: () => void;
};
