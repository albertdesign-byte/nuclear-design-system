import type { ComponentProps, ReactNode } from "react";
import type { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

export interface SideModalContentProps extends DialogPrimitive.Popup.Props {
  /** Show the default close button in the header. @default true */
  showCloseButton?: boolean;
}

export interface SideModalHeaderProps extends ComponentProps<"div"> {
  /**
   * Optional trailing slot for future header actions (for example Expand).
   * Expand is not implemented — Figma has no specified expanded state.
   */
  end?: ReactNode;
}

export type SideModalFooterProps = ComponentProps<"div">;
