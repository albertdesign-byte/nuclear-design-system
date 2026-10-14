"use client";

import type { ComponentProps } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

import "./side-modal.nested-floating.css";

import {
  sideModalBodyClassName,
  sideModalCloseButtonClassName,
  sideModalContentClassName,
  sideModalDescriptionClassName,
  sideModalFooterClassName,
  sideModalHeaderClassName,
  sideModalHeaderCopyClassName,
  sideModalHeaderEndClassName,
  sideModalOverlayClassName,
  sideModalPanelWidth,
  sideModalTitleClassName,
  sideModalViewportClassName,
} from "./side-modal.styles";
import type {
  SideModalContentProps,
  SideModalFooterProps,
  SideModalHeaderProps,
} from "./side-modal.types";

function SideModal({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="side-modal" {...props} />;
}

function SideModalTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return (
    <DialogPrimitive.Trigger data-slot="side-modal-trigger" {...props} />
  );
}

function SideModalPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="side-modal-portal" {...props} />;
}

function SideModalClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="side-modal-close" {...props} />;
}

function SideModalOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="side-modal-overlay"
      className={cn(sideModalOverlayClassName, className)}
      {...props}
    />
  );
}

function SideModalViewport({
  className,
  ...props
}: DialogPrimitive.Viewport.Props) {
  return (
    <DialogPrimitive.Viewport
      data-slot="side-modal-viewport"
      className={cn(sideModalViewportClassName, className)}
      {...props}
    />
  );
}

function SideModalContent({
  className,
  children,
  showCloseButton = true,
  style,
  ...props
}: SideModalContentProps) {
  return (
    <SideModalPortal>
      <SideModalOverlay />
      <SideModalViewport>
        <DialogPrimitive.Popup
          data-slot="side-modal-content"
          className={cn(sideModalContentClassName, className)}
          {...props}
          style={{
            width: `min(100%, ${sideModalPanelWidth})`,
            ...style,
          }}
        >
          {children}
          {showCloseButton ? (
            <DialogPrimitive.Close
              data-slot="side-modal-close"
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className={sideModalCloseButtonClassName}
                />
              }
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          ) : null}
        </DialogPrimitive.Popup>
      </SideModalViewport>
    </SideModalPortal>
  );
}

function SideModalHeader({
  className,
  children,
  end,
  ...props
}: SideModalHeaderProps) {
  return (
    <div
      data-slot="side-modal-header"
      className={cn(sideModalHeaderClassName, className)}
      {...props}
    >
      <div className={sideModalHeaderCopyClassName}>{children}</div>
      {end ? <div className={sideModalHeaderEndClassName}>{end}</div> : null}
    </div>
  );
}

function SideModalFooter({
  className,
  ...props
}: SideModalFooterProps) {
  return (
    <div
      data-slot="side-modal-footer"
      className={cn(sideModalFooterClassName, className)}
      {...props}
    />
  );
}

function SideModalTitle({
  className,
  ...props
}: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="side-modal-title"
      className={cn(sideModalTitleClassName, className)}
      {...props}
    />
  );
}

function SideModalDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="side-modal-description"
      className={cn(sideModalDescriptionClassName, className)}
      {...props}
    />
  );
}

function SideModalBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="side-modal-body"
      className={cn(sideModalBodyClassName, className)}
      {...props}
    />
  );
}

export {
  SideModal,
  SideModalBody,
  SideModalClose,
  SideModalContent,
  SideModalDescription,
  SideModalFooter,
  SideModalHeader,
  SideModalOverlay,
  SideModalPortal,
  SideModalTitle,
  SideModalTrigger,
  SideModalViewport,
};
