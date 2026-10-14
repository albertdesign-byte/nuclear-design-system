import type { ComponentProps } from "react";
import type { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

export type DialogContentPlacement = "center" | "side";

export interface DialogContentProps extends DialogPrimitive.Popup.Props {
  /** Show the default close button in the top-right corner. @default true */
  showCloseButton?: boolean;
  /**
   * `center` is the compact card (Command, confirmations).
   * `side` is the 520px right panel used by Create patient and other forms.
   * @default "center"
   */
  placement?: DialogContentPlacement;
}

export interface DialogFooterProps extends ComponentProps<"div"> {
  /** Append a default Close button in the footer. @default false */
  showCloseButton?: boolean;
}
