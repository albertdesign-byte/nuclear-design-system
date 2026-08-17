import type { InteractionState } from "../../../.storybook/interaction-state-grid";

const focusRingClassName =
  "border-[var(--color-focus-ring)] ring-[length:var(--focus-ring-width)] ring-[var(--color-focus-ring)] ring-offset-[length:var(--focus-ring-offset)]";

export const buttonPrimaryStateClassName: Record<InteractionState, string> = {
  Default: "",
  Hover:
    "bg-[var(--color-action-primary-hover)] text-[var(--color-action-primary-text)]",
  Focus: focusRingClassName,
  Active:
    "bg-[var(--color-action-primary-active)] text-[var(--color-action-primary-text)]",
  Disabled: "",
};

export type InputVisualState =
  | "Default"
  | "Hover"
  | "Focus"
  | "Filled"
  | "Disabled"
  | "Error"
  | "ReadOnly";

export const inputVisualStateClassName: Record<InputVisualState, string> = {
  Default: "",
  Hover: "border-[var(--color-border)] bg-[var(--color-background)]",
  Focus: focusRingClassName,
  Filled: "",
  Disabled: "",
  Error:
    "border-[var(--color-error-border)] ring-[length:var(--focus-ring-width)] ring-[var(--color-error-border)]/30",
  ReadOnly:
    "cursor-default border-[var(--color-border)] bg-[var(--color-surface-muted)] focus-visible:ring-0",
};

export const inputStateClassName: Record<InteractionState, string> = {
  Default: "",
  Hover: "border-[var(--color-border)] bg-[var(--color-background)]",
  Focus: focusRingClassName,
  Active: focusRingClassName,
  Disabled: "",
};

export const selectStateClassName = inputStateClassName;

export type SelectVisualState =
  | "Default"
  | "Hover"
  | "Focus"
  | "Filled"
  | "Disabled"
  | "Error"
  | "Loading";

export const selectVisualStateClassName: Record<SelectVisualState, string> = {
  Default: "",
  Hover: "border-[var(--color-border)] bg-[var(--color-background)]",
  Focus: focusRingClassName,
  Filled: "",
  Disabled: "",
  Error:
    "border-[var(--color-error-border)] ring-[length:var(--focus-ring-width)] ring-[var(--color-error-border)]/30",
  Loading: "",
};

export const datePickerStateClassName = inputStateClassName;

export const toggleStateClassName: Record<InteractionState, string> = {
  Default: "",
  Hover: "border-[var(--color-border)]",
  Focus: focusRingClassName,
  Active:
    "border-[var(--color-action-primary)] bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)]",
  Disabled: "",
};

export type CheckboxVisualState =
  | "Default"
  | "Hover"
  | "Focus"
  | "Checked"
  | "Disabled"
  | "Error"
  | "Indeterminate";

export const checkboxStateClassName: Record<CheckboxVisualState, string> = {
  Default: "",
  Hover: "border-[var(--color-border)]",
  Focus: focusRingClassName,
  Checked:
    "border-[var(--color-action-primary)] bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] data-checked:border-[var(--color-action-primary)] data-checked:bg-[var(--color-action-primary)]",
  Disabled: "",
  Error:
    "border-[var(--color-error-border)] ring-[length:var(--focus-ring-width)] ring-[var(--color-error-border)]/30",
  Indeterminate:
    "border-[var(--color-action-primary)] bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] data-indeterminate:border-[var(--color-action-primary)] data-indeterminate:bg-[var(--color-action-primary)]",
};

export type RadioVisualState =
  | "Default"
  | "Hover"
  | "Focus"
  | "Selected"
  | "Disabled"
  | "SelectedDisabled"
  | "Error";

export const radioStateClassName: Record<RadioVisualState, string> = {
  Default: "",
  Hover: "border-[var(--color-border)]",
  Focus: focusRingClassName,
  Selected:
    "border-[var(--color-action-primary)] bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] data-checked:border-[var(--color-action-primary)] data-checked:bg-[var(--color-action-primary)]",
  Disabled: "",
  SelectedDisabled:
    "border-[var(--color-disabled-border)] bg-[var(--color-disabled-background)] text-[var(--color-disabled-text)] data-checked:border-[var(--color-disabled-border)] data-checked:bg-[var(--color-disabled-background)] data-checked:text-[var(--color-disabled-text)]",
  Error:
    "border-[var(--color-error-border)] ring-[length:var(--focus-ring-width)] ring-[var(--color-error-border)]/30",
};

export const switchStateClassName: Record<InteractionState, string> = {
  Default: "",
  Hover: "",
  Focus: focusRingClassName,
  Active: "bg-[var(--color-action-primary)]",
  Disabled: "",
};

export const menuItemStateClassName: Record<InteractionState, string> = {
  Default: "",
  Hover: "bg-[var(--color-surface-hover)] text-[var(--color-text-primary)]",
  Focus: "bg-[var(--color-surface-hover)] text-[var(--color-text-primary)]",
  Active: "bg-[var(--color-surface-active)] text-[var(--color-text-primary)]",
  Disabled: "",
};

export const textLinkStateClassName: Record<InteractionState, string> = {
  Default: "",
  Hover: "text-[var(--color-text-link-hover)] underline",
  Focus: "ring-[length:var(--focus-ring-width)] ring-[var(--color-focus-ring)]",
  Active: "text-[var(--color-text-link-hover)] underline",
  Disabled: "",
};
