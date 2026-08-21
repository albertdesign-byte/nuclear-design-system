"use client";

import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/dropdown-menu";
import { Input } from "@/components/input";
import { TextLink } from "@/components/text-link";

export function DisabledOverviewPreview() {
  return (
    <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
      <Button disabled>Continue</Button>
      <Input disabled defaultValue="Read only" className="max-w-[12rem]" />
      <Checkbox disabled aria-label="Disabled checkbox" />
    </div>
  );
}

export function DisabledDoPreview() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
        Submit is disabled until required fields are complete.
      </p>
      <Button disabled>Submit referral</Button>
    </div>
  );
}

export function NativeDisabledButtonPreview() {
  return <Button disabled>Submit referral</Button>;
}

export function AriaDisabledLinkPreview() {
  return (
    <a
      href="/patients/123"
      aria-disabled="true"
      onClick={(event) => event.preventDefault()}
      className="font-medium text-[var(--color-disabled-text)] underline-offset-[3px] focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
    >
      View patient record
    </a>
  );
}

export function AriaDisabledWithoutGuardPreview() {
  return (
    <a
      href="#aria-disabled"
      aria-disabled="true"
      className="font-medium text-[var(--color-disabled-text)] underline-offset-[3px] focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
    >
      View patient record without an event guard
    </a>
  );
}

export function DataDisabledMenuItemPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuButton>Study actions</DropdownMenuButton>
      <DropdownMenuContent>
        <DropdownMenuItem>View study</DropdownMenuItem>
        <DropdownMenuItem disabled>Delete study</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DisabledDontPreview() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-sm)]">
      <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
        Do not use disabled styling for validation errors — use invalid states instead.
      </p>
      <Input aria-invalid defaultValue="not-an-email@" className="max-w-[14rem]" />
    </div>
  );
}

export function DisabledHideVsDisablePreview() {
  return (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-md)]">
        <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
          Disable when context exists
        </p>
        <Button disabled className="mt-[var(--space-stack-sm)]">
          Export (requires selection)
        </Button>
      </div>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] p-[var(--space-inline-md)]">
        <p className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
          Hide when unavailable
        </p>
        <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
          Admin-only actions are removed from the menu — not shown as disabled.
        </p>
      </div>
    </div>
  );
}

export function DisabledTextLinkPreview() {
  return (
    <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
      Record locked —{" "}
      <TextLink href="/patients/123" disabled>
        open chart
      </TextLink>{" "}
      is unavailable until review completes.
    </p>
  );
}
