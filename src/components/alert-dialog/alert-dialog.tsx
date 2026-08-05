"use client";

import type { ComponentProps } from "react";
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

import {
  alertDialogContentClassName,
  alertDialogDescriptionClassName,
  alertDialogFooterClassName,
  alertDialogHeaderClassName,
  alertDialogOverlayClassName,
  alertDialogTitleClassName,
  alertDialogViewportClassName,
} from "./alert-dialog.styles";
import type { AlertDialogFooterProps, AlertDialogActionProps, AlertDialogCancelProps } from "./alert-dialog.types";

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger
      data-slot="alert-dialog-trigger"
      {...props}
    />
  );
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn(alertDialogOverlayClassName, className)}
      {...props}
    />
  );
}

function AlertDialogViewport({
  className,
  ...props
}: AlertDialogPrimitive.Viewport.Props) {
  return (
    <AlertDialogPrimitive.Viewport
      data-slot="alert-dialog-viewport"
      className={cn(alertDialogViewportClassName, className)}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  children,
  ...props
}: AlertDialogPrimitive.Popup.Props) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogViewport>
        <AlertDialogPrimitive.Popup
          data-slot="alert-dialog-content"
          className={cn(alertDialogContentClassName, className)}
          {...props}
        >
          {children}
        </AlertDialogPrimitive.Popup>
      </AlertDialogViewport>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(alertDialogHeaderClassName, className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(alertDialogFooterClassName, className)}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.Title.Props) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(alertDialogTitleClassName, className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.Description.Props) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(alertDialogDescriptionClassName, className)}
      {...props}
    />
  );
}

function AlertDialogAction({
  className,
  children,
  ...props
}: AlertDialogActionProps) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-action"
      render={<Button className={className} {...props} />}
    >
      {children}
    </AlertDialogPrimitive.Close>
  );
}

function AlertDialogCancel({
  className,
  variant = "outline",
  children,
  ...props
}: AlertDialogCancelProps) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      render={<Button variant={variant} className={className} {...props} />}
    >
      {children}
    </AlertDialogPrimitive.Close>
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogViewport,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
