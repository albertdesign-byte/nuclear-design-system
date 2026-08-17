/**
 * Shared disabled-state classes for the Medmo Design System.
 *
 * Use control tokens — never opacity. Native controls rely on the `disabled`
 * attribute; menu items use `data-disabled` / `data-[disabled=true]`.
 */

/** Native controls: button, input, select trigger, checkbox, radio, switch, textarea */
export const controlDisabledClassName = [
  "disabled:cursor-not-allowed",
  "disabled:border-[var(--color-disabled-border)]",
  "disabled:bg-[var(--color-disabled-background)]",
  "disabled:text-[var(--color-disabled-text)]",
  "disabled:shadow-none",
  "disabled:hover:border-[var(--color-disabled-border)]",
  "disabled:hover:bg-[var(--color-disabled-background)]",
  "disabled:hover:text-[var(--color-disabled-text)]",
  "disabled:active:border-[var(--color-disabled-border)]",
  "disabled:active:bg-[var(--color-disabled-background)]",
  "disabled:active:text-[var(--color-disabled-text)]",
  "disabled:focus-visible:border-[var(--color-disabled-border)]",
  "disabled:focus-visible:bg-[var(--color-disabled-background)]",
  "disabled:focus-visible:text-[var(--color-disabled-text)]",
  "disabled:focus-visible:ring-0",
].join(" ");

/** Toggle controls that expose both native disabled and data-disabled */
export const toggleDisabledClassName = [
  controlDisabledClassName,
  "data-disabled:cursor-not-allowed",
  "data-disabled:border-[var(--color-disabled-border)]",
  "data-disabled:bg-[var(--color-disabled-background)]",
  "data-disabled:text-[var(--color-disabled-text)]",
  "data-disabled:shadow-none",
  "data-disabled:hover:border-[var(--color-disabled-border)]",
  "data-disabled:hover:bg-[var(--color-disabled-background)]",
  "data-disabled:hover:text-[var(--color-disabled-text)]",
  "data-disabled:focus-visible:ring-0",
].join(" ");

/** Checked / selected controls when disabled */
export const controlDisabledCheckedClassName = [
  "disabled:data-checked:border-[var(--color-disabled-border)]",
  "disabled:data-checked:bg-[var(--color-disabled-background)]",
  "disabled:data-checked:text-[var(--color-disabled-text)]",
  "disabled:data-indeterminate:border-[var(--color-disabled-border)]",
  "disabled:data-indeterminate:bg-[var(--color-disabled-background)]",
  "disabled:data-indeterminate:text-[var(--color-disabled-text)]",
  "data-disabled:data-checked:border-[var(--color-disabled-border)]",
  "data-disabled:data-checked:bg-[var(--color-disabled-background)]",
  "data-disabled:data-checked:text-[var(--color-disabled-text)]",
  "disabled:data-unchecked:bg-[var(--color-disabled-background)]",
  "data-disabled:data-unchecked:bg-[var(--color-disabled-background)]",
].join(" ");

/** Menu / list items (Base UI data-disabled) */
export const menuItemDisabledClassName = [
  "data-disabled:pointer-events-none",
  "data-disabled:cursor-not-allowed",
  "data-disabled:text-[var(--color-disabled-text)]",
  "data-disabled:hover:bg-transparent",
  "data-disabled:focus:bg-transparent",
  "data-disabled:active:bg-transparent",
  "data-disabled:*:[svg]:text-[var(--color-disabled-text)]",
].join(" ");

/** cmdk command items */
export const commandItemDisabledClassName = [
  "data-[disabled=true]:pointer-events-none",
  "data-[disabled=true]:cursor-not-allowed",
  "data-[disabled=true]:text-[var(--color-disabled-text)]",
  "data-[disabled=true]:hover:bg-transparent",
  "data-[disabled=true]:data-selected:bg-transparent",
  "data-[disabled=true]:data-selected:text-[var(--color-disabled-text)]",
  "data-[disabled=true]:*:[svg]:text-[var(--color-disabled-text)]",
].join(" ");

/** Command input */
export const commandInputDisabledClassName = [
  "disabled:cursor-not-allowed",
  "disabled:text-[var(--color-disabled-text)]",
  "disabled:placeholder:text-[var(--color-disabled-text)]",
  "disabled:hover:bg-transparent",
  "disabled:focus-visible:ring-0",
].join(" ");

/** Labels associated with disabled controls */
export const labelDisabledClassName = [
  "peer-disabled:cursor-not-allowed",
  "peer-disabled:text-[var(--color-disabled-text)]",
  "group-data-[disabled=true]:pointer-events-none",
  "group-data-[disabled=true]:cursor-not-allowed",
  "group-data-[disabled=true]:text-[var(--color-disabled-text)]",
].join(" ");

/** Text links and link-like controls */
export const textLinkDisabledClassName = [
  "aria-disabled:pointer-events-none",
  "aria-disabled:cursor-not-allowed",
  "aria-disabled:text-[var(--color-disabled-text)]",
  "aria-disabled:no-underline",
  "aria-disabled:hover:text-[var(--color-disabled-text)]",
  "aria-disabled:hover:no-underline",
  "aria-disabled:focus-visible:ring-0",
].join(" ");

/** Icon / calendar trigger buttons inside pickers */
export const pickerTriggerDisabledClassName = [
  "disabled:cursor-not-allowed",
  "disabled:text-[var(--color-disabled-text)]",
  "disabled:hover:bg-transparent",
  "disabled:hover:text-[var(--color-disabled-text)]",
  "disabled:focus-visible:ring-0",
].join(" ");

/** Read-only inputs that become non-interactive when disabled */
export const pickerInputDisabledClassName = "disabled:cursor-not-allowed";

/** Ghost-like controls: tabs, accordion triggers, nav items on surface backgrounds */
export const subtleInteractiveDisabledClassName = [
  "disabled:pointer-events-none",
  "disabled:cursor-not-allowed",
  "disabled:text-[var(--color-disabled-text)]",
  "disabled:hover:bg-transparent",
  "disabled:hover:text-[var(--color-disabled-text)]",
  "disabled:focus-visible:ring-0",
  "disabled:active:bg-transparent",
  "aria-disabled:pointer-events-none",
  "aria-disabled:cursor-not-allowed",
  "aria-disabled:text-[var(--color-disabled-text)]",
  "aria-disabled:hover:bg-transparent",
  "aria-disabled:hover:text-[var(--color-disabled-text)]",
  "aria-disabled:focus-visible:ring-0",
  "aria-disabled:active:bg-transparent",
].join(" ");

/** Nav items on primary / inverse surfaces */
export const inverseInteractiveDisabledClassName = [
  "disabled:pointer-events-none",
  "disabled:cursor-not-allowed",
  "disabled:text-[color-mix(in_oklch,var(--color-action-primary-text)_55%,var(--color-action-primary))]",
  "disabled:hover:bg-transparent",
  "disabled:focus-visible:ring-0",
  "disabled:active:bg-transparent",
].join(" ");
