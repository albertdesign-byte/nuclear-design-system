"use client";

import type { ComponentProps } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { CheckIcon, SearchIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";
import { cn } from "@/lib/utils";

import {
  commandClassName,
  commandDialogContentClassName,
  commandEmptyClassName,
  commandGroupClassName,
  commandInputClassName,
  commandInputWrapperClassName,
  commandItemClassName,
  commandListClassName,
  commandSeparatorClassName,
  commandShortcutClassName,
} from "./command.styles";
import type { CommandDialogProps } from "./command.types";

function Command({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(commandClassName, className)}
      {...props}
    />
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run…",
  children,
  className,
  showCloseButton = false,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(commandDialogContentClassName, className)}
        showCloseButton={showCloseButton}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className={cn(commandInputWrapperClassName, "group/command-input")}
      cmdk-input-wrapper=""
    >
      <SearchIcon className="size-4 shrink-0 text-[var(--color-text-muted)] group-has-[:disabled]/command-input:text-[var(--color-disabled-text)]" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(commandInputClassName, className)}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(commandListClassName, className)}
      {...props}
    />
  );
}

function CommandEmpty({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn(commandEmptyClassName, className)}
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(commandGroupClassName, className)}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn(commandSeparatorClassName, className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  children,
  ...props
}: ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(commandItemClassName, className)}
      {...props}
    >
      {children}
      <CheckIcon className="ml-auto opacity-0 group-data-[checked=true]/command-item:opacity-100 group-has-data-[slot=command-shortcut]/command-item:hidden" />
    </CommandPrimitive.Item>
  );
}

function CommandShortcut({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(commandShortcutClassName, className)}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
