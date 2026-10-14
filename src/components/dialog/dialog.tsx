"use client";

import { createContext, useContext, type ComponentProps } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  sideModalCloseButtonClassName,
  sideModalContentClassName,
  sideModalDescriptionClassName,
  sideModalFooterClassName,
  sideModalPanelWidth,
  sideModalTitleClassName,
  sideModalViewportClassName,
} from "@/components/side-modal/side-modal.styles";
import { cn } from "@/lib/utils";

import "../side-modal/side-modal.nested-floating.css";

import {
  dialogContentClassName,
  dialogDescriptionClassName,
  dialogFooterClassName,
  dialogHeaderClassName,
  dialogOverlayClassName,
  dialogSideHeaderClassName,
  dialogTitleClassName,
  dialogViewportClassName,
} from "./dialog.styles";
import type {
  DialogContentPlacement,
  DialogContentProps,
  DialogFooterProps,
} from "./dialog.types";

const DialogPlacementContext = createContext<DialogContentPlacement>("center");

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(dialogOverlayClassName, className)}
      {...props}
    />
  );
}

function DialogViewport({
  className,
  ...props
}: DialogPrimitive.Viewport.Props) {
  return (
    <DialogPrimitive.Viewport
      data-slot="dialog-viewport"
      className={cn(dialogViewportClassName, className)}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  placement = "center",
  style,
  ...props
}: DialogContentProps) {
  const isSide = placement === "side";

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Viewport
        data-slot="dialog-viewport"
        className={isSide ? sideModalViewportClassName : dialogViewportClassName}
      >
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          data-placement={placement}
          className={cn(
            isSide ? sideModalContentClassName : dialogContentClassName,
            "group/dialog-content",
            className
          )}
          style={
            isSide
              ? {
                  width: `min(100%, ${sideModalPanelWidth})`,
                  ...style,
                }
              : style
          }
          {...props}
        >
          <DialogPlacementContext.Provider value={placement}>
            {children}
            {showCloseButton && (
              <DialogPrimitive.Close
                data-slot="dialog-close"
                render={
                  <Button
                    variant="ghost"
                    className={
                      isSide
                        ? sideModalCloseButtonClassName
                        : "absolute top-[var(--space-inline-sm)] right-[var(--space-inline-sm)]"
                    }
                    size="icon-sm"
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            )}
          </DialogPlacementContext.Provider>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Viewport>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: ComponentProps<"div">) {
  const placement = useContext(DialogPlacementContext);

  return (
    <div
      data-slot="dialog-header"
      className={cn(
        placement === "side" ? dialogSideHeaderClassName : dialogHeaderClassName,
        className
      )}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: DialogFooterProps) {
  const placement = useContext(DialogPlacementContext);

  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        placement === "side" ? sideModalFooterClassName : dialogFooterClassName,
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  const placement = useContext(DialogPlacementContext);

  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        placement === "side" ? sideModalTitleClassName : dialogTitleClassName,
        className
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  const placement = useContext(DialogPlacementContext);

  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        placement === "side"
          ? sideModalDescriptionClassName
          : dialogDescriptionClassName,
        className
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogViewport,
};
