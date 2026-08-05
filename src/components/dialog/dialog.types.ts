import type { ComponentProps } from "react";
import type { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

export interface DialogContentProps extends DialogPrimitive.Popup.Props {
  /** Show the default close button in the top-right corner. @default true */
  showCloseButton?: boolean;
}

export interface DialogFooterProps extends ComponentProps<"div"> {
  /** Append a default Close button in the footer. @default false */
  showCloseButton?: boolean;
}
