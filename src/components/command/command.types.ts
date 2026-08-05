import type { ComponentProps, ReactNode } from "react";
import type { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

export interface CommandDialogProps
  extends Omit<DialogPrimitive.Root.Props, "children"> {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
  children: ReactNode;
}
